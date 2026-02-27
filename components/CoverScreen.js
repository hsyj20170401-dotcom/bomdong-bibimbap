"use client";

export default function CoverScreen({ onStart }) {
  return (
    <div className="cover-screen">
      <div className="cover-badge">SNS 화제의 그 레시피</div>
      <h1 className="cover-title"><span className="accent">봄동</span><br />비빔밥</h1>
      <div className="cover-divider" />
      <p className="cover-meme-quote">&ldquo;이 맛을 어떻게 참아...&rdquo;</p>
      <p className="cover-meme-src">1박2일 전남 영광편 (2008) · 조회수 476만</p>
      <div className="cover-stats">
        <div className="cover-stat"><div className="cover-stat-num">15분</div><div className="cover-stat-label">조리시간</div></div>
        <div className="cover-stat"><div className="cover-stat-num">10개</div><div className="cover-stat-label">필요 재료</div></div>
        <div className="cover-stat"><div className="cover-stat-num">2인분</div><div className="cover-stat-label">기준</div></div>
      </div>
      <button className="cover-start-btn" onClick={onStart}>재료 체크 시작하기</button>
      <p className="cover-time">약 1분이면 끝나요</p>
    </div>
  );
}
