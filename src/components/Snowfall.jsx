const flakes = Array.from({ length: 28 }, (_, index) => {
  const duration = 10 + ((index * 7) % 11);
  const delay = -((index * 5) % 20);

  return {
    left: `${(index * 37) % 100}%`,
    fontSize: `${8 + ((index * 3) % 9)}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    opacity: 0.25 + ((index * 13) % 45) / 100,
  };
});

export default function Snowfall() {
  return (
    <div className="snowfall" aria-hidden="true">
      {flakes.map((style, index) => (
        <span className="snowflake" style={style} key={index}>
          {index % 4 === 0 ? "❄︎" : "•"}
        </span>
      ))}
    </div>
  );
}
