"use client";

export default function CoverScreen({ onStart }) {
  return (
    <div className="cover-screen">
      <div className="cover-badge">두쫀쿠 다음은 봄동 비빔밥</div>

      <h1 className="cover-title">
        <span className="accent">봄동</span>
        <br />
        비빔밥 탑승 체크
      </h1>

      <div className="cover-divider" />

      <p className="cover-meme-quote">&ldquo;우리집 지금 재료 당장 확인해봐야지...&rdquo;</p>

      <div className="cover-stats">
        <div className="cover-stat">
          <div className="cover-stat-num">15분</div>
          <div className="cover-stat-label">조리시간</div>
        </div>
        <div className="cover-stat">
          <div className="cover-stat-num">10개</div>
          <div className="cover-stat-label">필요 재료</div>
        </div>
        <div className="cover-stat">
          <div className="cover-stat-num">2인분</div>
          <div className="cover-stat-label">기준</div>
        </div>
      </div>

      <button className="cover-start-btn" onClick={onStart}>
        재료 체크 시작하기
      </button>
      <p className="cover-time">약 1분이면 끝나요</p>
    </div>
  );
}
