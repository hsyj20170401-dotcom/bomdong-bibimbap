import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "봄동 비빔밥 체크리스트",
  description: "우리집 봄동 비빔밥, 재료 다 있나? 카드 넘기면서 체크하고 양푼째 비벼먹자!",
  metadataBase: new URL("https://bomdongbibimbap.com"),
  openGraph: {
    title: "봄동 비빔밥 체크리스트",
    description: "재료 체크하고 양푼째 비벼먹자!",
    type: "website",
    locale: "ko_KR",
    siteName: "봄동 비빔밥 체크리스트",
  },
  twitter: {
    card: "summary_large_image",
    title: "봄동 비빔밥 체크리스트",
    description: "재료 체크하고 양푼째 비벼먹자!",
  },
};

export const viewport = "width=device-width, initial-scale=1, maximum-scale=1";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Gaegu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.4/kakao.min.js"
          integrity="sha384-DKYJZ8NLiK8MN4/C5P2ezmFnkrysYIcFM3HfJqYQi6TvSa+l2G0RnqBd9gAIuNi"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          onLoad="Kakao.init('8e4f47f75dc7d124f6a7d310e562dc94')"
        />
      </body>
    </html>
  );
}
