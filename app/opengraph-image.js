import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "봄동 비빔밥 체크리스트";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const gaeguFont = await fetch(
    new URL("https://fonts.gstatic.com/s/gaegu/v17/TuGSUVB6Up9NU57nifw74sdtBk0x.woff2")
  ).then((res) => res.arrayBuffer());

  const notoFont = await fetch(
    new URL("https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3VYcOA-vvnIzzuoyeLTq8H4hGPNuCAAJ-lk1KN6qgPz3v0Mk-aw.0.woff2")
  ).then((res) => res.arrayBuffer());

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
          fontFamily: "Noto Sans KR",
        }}
      >
        <div
          style={{
            display: "flex",
            background: "#FFF0ED",
            color: "#D4442A",
            padding: "8px 24px",
            borderRadius: 30,
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 32,
          }}
        >
          두쥐쿠 다음은 봄동 비빔밥
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Gaegu",
            fontSize: 80,
            fontWeight: 700,
            color: "#D4442A",
            marginBottom: 0,
            lineHeight: 1.1,
          }}
        >
          봄동 비빔밥
        </div>

        <div
          style={{
            display: "flex",
            fontFamily: "Gaegu",
            fontSize: 72,
            fontWeight: 700,
            color: "#1A1A1A",
            marginBottom: 24,
            lineHeight: 1.1,
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
            marginBottom: 24,
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontFamily: "Gaegu",
            fontSize: 32,
            color: "#666666",
            marginBottom: 32,
          }}
        >
          “우리집 지금 재료 당장 확인해봐야지...”
        </div>

        <div style={{ display: "flex", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1A1A1A", display: "flex" }}>15분</div>
            <div style={{ fontSize: 16, color: "#999999", display: "flex" }}>조리시간</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1A1A1A", display: "flex" }}>10개</div>
            <div style={{ fontSize: 16, color: "#999999", display: "flex" }}>필요 재료</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div style={{ fontSize: 36, fontWeight: 900, color: "#1A1A1A", display: "flex" }}>2인분</div>
            <div style={{ fontSize: 16, color: "#999999", display: "flex" }}>기준</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Gaegu", data: gaeguFont, style: "normal", weight: 700 },
        { name: "Noto Sans KR", data: notoFont, style: "normal", weight: 700 },
      ],
    }
  );
}
