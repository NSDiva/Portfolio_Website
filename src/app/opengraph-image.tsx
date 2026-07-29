import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const bg = site.themeColor;
  const accent = site.accent;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: bg,
          padding: "80px",
          fontFamily: "sans-serif",
          color: "#f6f6f2",
          backgroundImage: `radial-gradient(circle at 85% 15%, ${accent}22 0%, transparent 45%)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 9999,
              background: accent,
            }}
          />
          <div
            style={{
              fontSize: 26,
              letterSpacing: 4,
              color: "#9b9ba0",
              textTransform: "uppercase",
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 700, lineHeight: 1.05 }}>
            {site.name}
          </div>
          <div
            style={{
              fontSize: 44,
              fontWeight: 500,
              marginTop: 20,
              color: accent,
            }}
          >
            {site.role}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9b9ba0",
          }}
        >
          React · Next.js · TypeScript · Three.js
        </div>
      </div>
    ),
    { ...size }
  );
}
