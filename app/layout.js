import "./globals.css";
import KakaoScript from "../components/KakaoScript";

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
        <KakaoScript />
      </body>
    </html>
  );
}
