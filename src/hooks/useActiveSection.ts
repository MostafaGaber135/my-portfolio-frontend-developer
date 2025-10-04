import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: string[], focusLineRatio = 0.35) {
  const [activeSectionId, setActiveSectionId] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActiveSection = () => {
      const focusY = window.innerHeight * focusLineRatio;
      let bestSectionId = sectionIds[0];
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const isFocusInside = rect.top <= focusY && rect.bottom >= focusY;
        const distance = isFocusInside
          ? 0
          : Math.min(Math.abs(rect.top - focusY), Math.abs(rect.bottom - focusY));

        if (distance < bestDistance) {
          bestDistance = distance;
          bestSectionId = sectionId;
        }
      }

      if (bestSectionId !== activeSectionId) {
        setActiveSectionId(bestSectionId);
      }
    };

    let rafId = 0;
    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, focusLineRatio, activeSectionId]);

  return activeSectionId;
}
