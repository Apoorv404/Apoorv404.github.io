import {
  createElement,
  useCallback,
  useEffect,
  useState,
} from "react";

export default function AnimatedTitle({
  as: Tag = "h2",
  className = "",
  children,
}) {
  const title = String(children);
  const [titleElement, setTitleElement] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useCallback((element) => setTitleElement(element), []);

  useEffect(() => {
    if (!titleElement) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(titleElement);
    return () => observer.disconnect();
  }, [titleElement]);

  return createElement(
    Tag,
    {
      ref: titleRef,
      className: `animated-title ${isVisible ? "is-visible" : ""} ${className}`.trim(),
      "aria-label": title,
    },
    Array.from(title).map((character, index) =>
      createElement(
        "span",
        {
          key: `${character}-${index}`,
          className: character === " "
            ? "animated-title-space"
            : "animated-title-letter",
          "aria-hidden": "true",
          style: { animationDelay: `${index * 35}ms` },
        },
        character === " " ? "\u00a0" : character,
      ),
    ),
  );
}
