import { useState, useCallback } from "react";
import { toast } from "sonner";
import type { Project } from "../lib/types";

/**
 * Manages bulk selection state for copy URLs / open all in tabs.
 */
export function useBulkSelect() {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [selectMode, setSelectMode] = useState(false);

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }, []);

  const selectAll = useCallback((ids: string[]) => {
    setSelectedIds(new Set(ids));
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const exitSelectMode = useCallback(() => {
    setSelectMode(false);
    setSelectedIds(new Set());
  }, []);

  const copyUrls = useCallback(
    (projects: Project[]) => {
      const selected = projects.filter((p) => selectedIds.has(p.id));
      if (selected.length === 0) {
        toast.error("No projects selected");
        return;
      }
      const urls = selected.map((p) => p.url).join("\n");
      navigator.clipboard.writeText(urls);
      toast.success(`Copied ${selected.length} URLs to clipboard`);
    },
    [selectedIds]
  );

  const openAll = useCallback(
    (projects: Project[]) => {
      const selected = projects.filter((p) => selectedIds.has(p.id));
      if (selected.length === 0) {
        toast.error("No projects selected");
        return;
      }
      if (selected.length > 10) {
        const proceed = window.confirm(
          `You're about to open ${selected.length} tabs. Your browser may block some. Continue?`
        );
        if (!proceed) return;
      }
      // Batch opens with small delay to avoid popup blocker
      selected.forEach((p, i) => {
        setTimeout(() => {
          window.open(p.url, "_blank");
        }, i * 100);
      });
      toast.success(`Opening ${selected.length} tabs...`);
    },
    [selectedIds]
  );

  return {
    selectedIds,
    selectMode,
    setSelectMode,
    toggleSelect,
    selectAll,
    clearSelection,
    exitSelectMode,
    copyUrls,
    openAll,
    selectedCount: selectedIds.size,
  };
}
