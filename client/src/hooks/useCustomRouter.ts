import { useState, useEffect, useCallback } from "react";

export function useCustomRouter() {
  const [currentPath, setCurrentPath] = useState(() => {
    const hash = window.location.hash.slice(1) || "/";
    return hash;
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || "/";
      setCurrentPath(hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
  }, []);

  return { currentPath, navigate };
}
