import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://bomdongbibimbap.com"),
  title: "봄동 비빔밥 체크리스트",
  description: "나도 강호동 봄동 비빔밥 막차 탄다!",
  openGraph: {
    title: "봄동 비빔밥 체크리스트",
    description: "나도 강호동 봄동 비빔밥 막차 탄다!",
    type: "website",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "봄동 비빔밥 체크리스트",
    description: "나도 강호동 봄동 비빔밥 막차 탄다!",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="c0f5bb30bfbc433725d6a1816dfa33c5fe6f555e" />
        <meta name="google-site-verification" content="UN72h2a-ElW3ik41MG-aquSIaDI005su-ulESwBOlBw" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&family=Gaegu:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5NYBGJL97J"
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-5NYBGJL97J');
        `}
      </Script>{children}</body>
    </html>
  );
}
