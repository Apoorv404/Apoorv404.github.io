const particles = Array.from({ length: 100 }, (_, index) => {
  const duration = 18 + ((index * 13) % 28);
  const delay = -((index * 17) % duration);

  return {
    top: `${(index * 37) % 100}%`,
    width: `${2 + ((index * 3) % 4)}px`,
    height: `${2 + ((index * 3) % 4)}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    opacity: 0.35 + ((index * 13) % 55) / 100,
  };
});

const shootingStars = [
  { top: "16%", left: "8%", duration: "31s", delay: "3s", fromLeft: true },
  { top: "38%", left: "91%", duration: "37s", delay: "14s" },
  { top: "67%", left: "58%", duration: "43s", delay: "25s" },
];

export default function Background() {
  return (
    <div className="particle-background" aria-hidden="true">
      {particles.map((style, index) => (
        <span className="background-particle" style={style} key={index} />
      ))}
      {shootingStars.map((star, index) => (
        <span
          className={`shooting-star${star.fromLeft ? " shooting-star--from-left" : ""}`}
          key={index}
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
