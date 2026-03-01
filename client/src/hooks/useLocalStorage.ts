import { useState, useCallback, useEffect } from "react";

/**
 * Generic localStorage hook with JSON serialization.
 * Handles migration from old "site-cleanup-marked" key to new namespaced keys.
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T | ((prev: T) => T)) => {
      setStoredValue((prev) => {
        const newValue = value instanceof Function ? value(prev) : value;
        try {
          window.localStorage.setItem(key, JSON.stringify(newValue));
        } catch {
          // localStorage full or unavailable
        }
        return newValue;
      });
    },
    [key]
  );

  return [storedValue, setValue];
}

/**
 * Migrates old numeric Manus marked IDs to new string format.
 * Runs once on first load — converts [1, 2, 3] to ["manus-1", "manus-2", "manus-3"].
 */
export function migrateMarkedIds(): void {
  const OLD_KEY = "site-cleanup-marked";
  const NEW_KEY = "dev-command-center-marked";

  try {
    const oldData = window.localStorage.getItem(OLD_KEY);
    const newData = window.localStorage.getItem(NEW_KEY);

    // Only migrate if old key exists and new key doesn't
    if (oldData && !newData) {
      const oldIds: number[] = JSON.parse(oldData);
      const newIds = oldIds.map((id) => `manus-${id}`);
      window.localStorage.setItem(NEW_KEY, JSON.stringify(newIds));
      window.localStorage.removeItem(OLD_KEY);
    }
  } catch {
    // Silently ignore migration errors
  }
}
