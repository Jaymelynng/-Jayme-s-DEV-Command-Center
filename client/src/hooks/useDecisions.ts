import { useState, useEffect, useCallback } from "react";
import { supabase, type ProjectDecision } from "../lib/supabase";

/**
 * Manages project decisions (keep/delete/combine) persisted in Supabase.
 * Falls back to localStorage if Supabase is unreachable.
 */
export function useDecisions() {
  const [decisions, setDecisions] = useState<Map<string, ProjectDecision>>(new Map());
  const [loading, setLoading] = useState(true);

  // Load all decisions on mount
  useEffect(() => {
    async function load() {
      try {
        const { data, error } = await supabase
          .from("project_decisions")
          .select("*");

        if (error) throw error;

        const map = new Map<string, ProjectDecision>();
        (data || []).forEach((d: ProjectDecision) => map.set(d.id, d));

        // Migrate any old localStorage marks into Supabase
        const oldMarked = localStorage.getItem("dev-command-center-marked");
        if (oldMarked) {
          try {
            const oldIds: string[] = JSON.parse(oldMarked);
            const toMigrate = oldIds.filter((id) => !map.has(id));
            if (toMigrate.length > 0) {
              const rows = toMigrate.map((id) => ({ id, decision: "delete" as const }));
              await supabase.from("project_decisions").upsert(rows);
              rows.forEach((r) => map.set(r.id, { ...r, combine_with: null, notes: null, updated_at: new Date().toISOString() }));
            }
            localStorage.removeItem("dev-command-center-marked");
          } catch { /* ignore migration errors */ }
        }

        setDecisions(map);
      } catch (err) {
        console.error("Failed to load decisions from Supabase:", err);
        // Fallback: load from localStorage
        const stored = localStorage.getItem("dev-command-center-decisions");
        if (stored) {
          try {
            const arr: ProjectDecision[] = JSON.parse(stored);
            const map = new Map<string, ProjectDecision>();
            arr.forEach((d) => map.set(d.id, d));
            setDecisions(map);
          } catch { /* ignore */ }
        }
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Save to localStorage as backup whenever decisions change
  useEffect(() => {
    if (!loading) {
      const arr = Array.from(decisions.values());
      localStorage.setItem("dev-command-center-decisions", JSON.stringify(arr));
    }
  }, [decisions, loading]);

  const setDecision = useCallback(async (id: string, decision: "keep" | "delete" | "combine", combineWith?: string, notes?: string) => {
    const row: ProjectDecision = {
      id,
      decision,
      combine_with: combineWith || null,
      notes: notes || null,
      updated_at: new Date().toISOString(),
    };

    // Optimistic update
    setDecisions((prev) => {
      const next = new Map(prev);
      next.set(id, row);
      return next;
    });

    // Persist to Supabase
    const { error } = await supabase
      .from("project_decisions")
      .upsert(row);

    if (error) {
      console.error("Failed to save decision:", error);
    }
  }, []);

  const removeDecision = useCallback(async (id: string) => {
    // Optimistic update
    setDecisions((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });

    const { error } = await supabase
      .from("project_decisions")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Failed to remove decision:", error);
    }
  }, []);

  const toggleMark = useCallback(async (id: string) => {
    if (decisions.has(id)) {
      await removeDecision(id);
    } else {
      await setDecision(id, "delete");
    }
  }, [decisions, removeDecision, setDecision]);

  const getDecision = useCallback((id: string): ProjectDecision | undefined => {
    return decisions.get(id);
  }, [decisions]);

  const isMarked = useCallback((id: string): boolean => {
    return decisions.has(id);
  }, [decisions]);

  const markedIds = new Set(decisions.keys());

  const stats = {
    keep: Array.from(decisions.values()).filter((d) => d.decision === "keep").length,
    delete: Array.from(decisions.values()).filter((d) => d.decision === "delete").length,
    combine: Array.from(decisions.values()).filter((d) => d.decision === "combine").length,
    total: decisions.size,
  };

  return {
    decisions,
    loading,
    setDecision,
    removeDecision,
    toggleMark,
    getDecision,
    isMarked,
    markedIds,
    stats,
  };
}
