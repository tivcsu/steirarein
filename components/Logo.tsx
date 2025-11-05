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
        {/* Background */}
        <rect x="0" y="0" width="64" height="64" rx="12" fill="#0a9472" />

        {/* Sponge shape - rounded rectangle with organic feel */}
        <rect
          x="14"
          y="16"
          width="36"
          height="32"
          rx="6"
          fill="#fff"
          opacity="0.95"
        />

        {/* Sponge holes - scattered circles to create porous texture */}
        <circle cx="22" cy="24" r="2.5" fill="#0a9472" opacity="0.3" />
        <circle cx="32" cy="22" r="2" fill="#0a9472" opacity="0.3" />
        <circle cx="42" cy="26" r="2.5" fill="#0a9472" opacity="0.3" />
        <circle cx="26" cy="32" r="2" fill="#0a9472" opacity="0.3" />
        <circle cx="38" cy="34" r="2.5" fill="#0a9472" opacity="0.3" />
        <circle cx="28" cy="40" r="2" fill="#0a9472" opacity="0.3" />
        <circle cx="40" cy="42" r="2" fill="#0a9472" opacity="0.3" />
        <circle cx="20" cy="38" r="2.5" fill="#0a9472" opacity="0.3" />

        {/* Bubbles for cleaning effect */}
        <circle cx="48" cy="20" r="3" fill="#fff" opacity="0.6" />
        <circle cx="52" cy="28" r="2" fill="#fff" opacity="0.5" />
        <circle cx="50" cy="36" r="2.5" fill="#fff" opacity="0.6" />
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
