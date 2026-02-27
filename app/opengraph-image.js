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
          background: "linear-gradient(135deg, #FFF5F3 0%, #FFFFFF 50%, #FFF0ED 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, marginBottom: 16, display: "flex" }}>
          🥬🍚🍳🌶️🫗
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#1A1A1A",
            marginBottom: 12,
            display: "flex",
          }}
        >
          봄동 비빔밥 체크리스트
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#666666",
            marginBottom: 32,
            display: "flex",
          }}
        >
          나도 강호동 봄동 비빔밥 막차 탄다!
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#D4442A",
            color: "white",
            padding: "16px 48px",
            borderRadius: 16,
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          지금 체크하기
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 18,
            color: "#BBBBBB",
            display: "flex",
          }}
        >
          bomdongbibimbap.com
        </div>
      </div>
    ),
    { ...size }
  );
}
