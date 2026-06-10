import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #0A1628 0%, #0E1B30 50%, #06101E 100%)",
          color: "#FFFFFF",
          position: "relative",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        }}
      >
        {/* Gold vertical stripe — signature accent */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 100,
            width: 6,
            height: 430,
            background: "#F5B53A",
          }}
        />

        {/* Small gold horizontal accent in the top-right (mirrors site hero) */}
        <div
          style={{
            position: "absolute",
            right: 80,
            top: 80,
            width: 70,
            height: 5,
            background: "#F5B53A",
          }}
        />

        {/* Main content block */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 140,
            marginRight: 80,
            height: "100%",
          }}
        >
          <h1
            style={{
              fontSize: 130,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.0,
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            Michael A.
          </h1>
          <h1
            style={{
              fontSize: 130,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.0,
              margin: 0,
              color: "#FFFFFF",
            }}
          >
            West III
          </h1>
          <p
            style={{
              fontSize: 50,
              color: "#A8B0BD",
              fontWeight: 500,
              margin: 0,
              marginTop: 36,
              letterSpacing: "-0.01em",
            }}
          >
            Marketing. Psychology.
          </p>
        </div>

        {/* Bottom-right URL */}
        <p
          style={{
            position: "absolute",
            right: 80,
            bottom: 60,
            fontSize: 24,
            color: "#F5B53A",
            letterSpacing: "0.22em",
            fontWeight: 600,
            margin: 0,
          }}
        >
          WESTMICHAEL.COM
        </p>
      </div>
    ),
    size
  );
}
