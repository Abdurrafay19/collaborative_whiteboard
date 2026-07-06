export function BackgroundGrid() {
  return (
    <div 
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
        backgroundColor: "#f8fafc", /* Slate 50 background color */
        backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)", /* Solid Slate 200 dots */
        backgroundSize: "24px 24px",
      }}
      aria-hidden="true"
    />
  );
}