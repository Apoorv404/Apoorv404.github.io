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

export default function Snowfall() {
  return (
    <div className="particle-background" aria-hidden="true">
      {particles.map((style, index) => (
        <span className="background-particle" style={style} key={index} />
      ))}
    </div>
  );
}
