import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "봄동 비빔밥 체크리스트";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#FFF0ED",
            color: "#D4442A",
            padding: "8px 24px",
            borderRadius: 30,
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          두쥐쿠 다음은 봄동 비빔밥
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            color: "#D4442A",
            marginBottom: 4,
          }}
        >
          봄동 비빔밥
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 900,
            color: "#1A1A1A",
            marginBottom: 28,
          }}
        >
          유행 탑승 사전점검
        </div>

        <div
          style={{
            width: 60,
            height: 5,
            background: "#D4442A",
            borderRadius: 3,
            marginBottom: 28,
            display: "flex",
          }}
        />

        <div style={{ display: "flex", gap: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1A1A1A", display: "flex" }}>15분</div>
            <div style={{ fontSize: 18, color: "#999999", display: "flex" }}>조리시간</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1A1A1A", display: "flex" }}>10개</div>
            <div style={{ fontSize: 18, color: "#999999", display: "flex" }}>필요 재료</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1A1A1A", display: "flex" }}>2인분</div>
            <div style={{ fontSize: 18, color: "#999999", display: "flex" }}>기준</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
