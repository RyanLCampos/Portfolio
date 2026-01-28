import { useEffect } from "react";

export function useScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
            const id = visible.target.id;
            history.replaceState(null, "", `#${id}`);

            
            window.dispatchEvent(new HashChangeEvent("hashchange"));
        }
      },
      {
        threshold: [0.3, 0.6, 0.9],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}
