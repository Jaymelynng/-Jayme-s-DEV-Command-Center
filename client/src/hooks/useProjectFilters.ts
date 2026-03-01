import { useState, useMemo, useEffect } from "react";
import type { Platform, Recommendation, ProjectGroup } from "../lib/types";
import { allGroupsByPlatform, allGroups } from "../lib/data";
import { useLocalStorage } from "./useLocalStorage";

export type RecFilter = Recommendation | "All" | "Untriaged";
export type MarkedFilter = "all" | "marked" | "unmarked";

/**
 * Encapsulates all filter, search, and platform state for the dashboard.
 * Accepts an external markedSet from useDecisions hook.
 */
export function useProjectFilters(externalMarkedSet?: Set<string>) {
  const [search, setSearch] = useState("");
  const [recFilter, setRecFilter] = useState<RecFilter>("All");
  const [markedFilter, setMarkedFilter] = useState<MarkedFilter>("all");
  const [activePlatform, setActivePlatform] = useLocalStorage<Platform | "all">(
    "dev-command-center-platform",
    "all"
  );
  const [activeGroup, setActiveGroup] = useState<string>("all");

  // Reset group when platform changes
  useEffect(() => {
    setActiveGroup("all");
  }, [activePlatform]);

  // Get the groups for the active platform
  const currentGroups: ProjectGroup[] = useMemo(() => {
    if (activePlatform === "all") return allGroups;
    return allGroupsByPlatform[activePlatform] || [];
  }, [activePlatform]);

  // All projects flattened from current groups
  const currentProjects = useMemo(
    () => currentGroups.flatMap((g) => g.projects),
    [currentGroups]
  );

  // Use external marked set from Supabase if provided
  const markedSet = externalMarkedSet || new Set<string>();

  // Filtered data — returns groups with filtered projects
  const filteredData = useMemo(() => {
    const searchLower = search.toLowerCase();

    return currentGroups
      .map((group) => {
        // Filter by active group
        if (activeGroup !== "all" && group.id !== activeGroup) {
          return { group, projects: [] };
        }

        const filtered = group.projects.filter((p) => {
          // Search filter
          if (searchLower) {
            const matchesSearch =
              p.name.toLowerCase().includes(searchLower) ||
              p.url.toLowerCase().includes(searchLower) ||
              p.purpose.toLowerCase().includes(searchLower);
            if (!matchesSearch) return false;
          }

          // Recommendation filter
          if (recFilter === "Untriaged") {
            if (p.recommendation) return false;
          } else if (recFilter !== "All") {
            if (p.recommendation !== recFilter) return false;
          }

          // Marked filter
          if (markedFilter === "marked" && !markedSet.has(p.id)) return false;
          if (markedFilter === "unmarked" && markedSet.has(p.id)) return false;

          return true;
        });

        return { group, projects: filtered };
      })
      .filter((item) => item.projects.length > 0);
  }, [currentGroups, search, recFilter, markedFilter, activeGroup, markedSet]);

  // Flat list of all currently filtered projects
  const filteredProjects = useMemo(
    () => filteredData.flatMap((d) => d.projects),
    [filteredData]
  );

  // Count of total filtered
  const filteredCount = filteredProjects.length;
  const totalCount = currentProjects.length;

  return {
    // State
    search,
    setSearch,
    recFilter,
    setRecFilter,
    markedFilter,
    setMarkedFilter,
    activePlatform,
    setActivePlatform,
    activeGroup,
    setActiveGroup,
    // Marks
    markedSet,
    // Data
    currentGroups,
    currentProjects,
    filteredData,
    filteredProjects,
    filteredCount,
    totalCount,
  };
}
