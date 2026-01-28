import { useEffect, useRef } from "react";

export function SectionScroll() {
  const sections = useRef([]);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll("section"));

    const hash = window.location.hash.replace("#", "");
    const startIndex = sections.current.findIndex(
      (section) => section.id === hash
    );

    if (startIndex !== -1) {
      currentIndex.current = startIndex;
      sections.current[startIndex].scrollIntoView();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating.current) {
            const index = sections.current.indexOf(entry.target);
            if (index !== -1) {
              currentIndex.current = index;
              history.replaceState(null, "", `#${entry.target.id}`);
            }
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.current.forEach((section) => observer.observe(section));

    const scrollTo = (index) => {
      if (index < 0 || index >= sections.current.length) return;

      isAnimating.current = true;
      currentIndex.current = index;

      const section = sections.current[index];
      section.scrollIntoView({ behavior: "smooth" });

      history.replaceState(null, "", `#${section.id}`);

      setTimeout(() => {
        isAnimating.current = false;
      }, 900);
    };

    const handleWheel = (e) => {
      if (isAnimating.current) return;

      if (e.deltaY > 10) {
        scrollTo(currentIndex.current + 1);
      } else if (e.deltaY < -10) {
        scrollTo(currentIndex.current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return null;
}
