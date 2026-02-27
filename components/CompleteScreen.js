"use client";
import { useEffect } from "react";

function launchConfetti() {
  const container = document.createElement("div");
  container.className = "confetti-container";
  document.body.appendChild(container);
  const colors = ["#D4442A", "#FFD54F", "#66BB6A", "#E53935", "#FF8A65", "#42A5F5"];
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "%";
    c.style.top = Math.random() * 40 + "%";
    c.style.background = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDelay = Math.random() * 0.8 + "s";
    c.style.animationDuration = 1 + Math.random() + "s";
    container.appendChild(c);
  }
  setTimeout(() => container.remove(), 3000);
}

export default function CompleteScreen({ ingredients, answers, onShare, onRecipe, onReset }) {
  const missing = ingredients.filter((_, i) => !answers[i]);
  useEffect(() => { if (missing.length === 0) launchConfetti(); }, [missing.length]);

  let title, sub;
  if (missing.length === 0) { title = "비빔밥 준비 완료!"; sub = "모든 재료가 준비됐어요.\n양푼 꺼내고 쓱쓱 비벼먹자!"; }
  else if (missing.length <= 3) { title = "거의 다 됐어!"; sub = missing.length + "개만 더 있으면 완성이에요."; }
  else { title = "장보러 가야겠는데..."; sub = "빠진 재료가 좀 있어요."; }

  return (
    <div className="complete-screen">
      <div className="complete-title">{title}</div>
      <div className="complete-sub" style={{ whiteSpace: "pre-line" }}>{sub}</div>
      {missing.length > 0 && (
        <div className="missing-summary">
          <div className="missing-summary-title">장봐야 할 재료</div>
          <div className="missing-chips">
            {missing.map((m, i) =>
              m.coupangLink ? (
                <a key={i} href={m.coupangLink} target="_blank" rel="noopener noreferrer" className="missing-chip">{m.emoji} {m.name}</a>
              ) : (
                <span key={i} className="missing-chip">{m.emoji} {m.name}</span>
              )
            )}
          </div>
        </div>
      )}
      {missing.length > 0 && missing.some((m) => m.coupangLink) && (<p className="coupang-notice">이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다.</p>)}

      <div className="complete-actions">
        <button className="action-btn primary" onClick={onShare}>공유하기</button>
        <button className="action-btn secondary" onClick={onRecipe}>만드는 법 보기</button>
        <button className="action-btn outline" onClick={onReset}>다시 하기</button>
      </div>
    </div>
  );
}
