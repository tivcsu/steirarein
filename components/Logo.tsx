export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 14,
      }}
    >
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <rect x="0" y="0" width="64" height="64" rx="12" fill="#0a9472" />
        <path d="M12 38 L32 18 L52 38 V46 H12z" fill="#fff" opacity="0.95" />
      </svg>
      <div
        style={{
          fontWeight: 700,
          color: "#1a1a1a",
          fontSize: size * 0.5,
          letterSpacing: "-0.02em",
        }}
      >
        Steirarein
      </div>
    </div>
  );
}
