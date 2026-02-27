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

export default function CompleteScreen({ ingredients, answers, onShare, onReset }) {
  const missing = ingredients.filter((_, i) => !answers[i]);
  const missingWithLink = missing.filter((m) => m.coupangLink);

  useEffect(() => {
    if (missing.length === 0) launchConfetti();
  }, [missing.length]);

  let title, sub;
  if (missing.length === 0) {
    title = "\uBE44\uBE54\uBC25 \uC900\uBE44 \uC644\uB8CC!";
    sub = "\uBAA8\uB4E0 \uC7AC\uB8CC\uAC00 \uC900\uBE44\uB410\uC5B4\uC694.\n\uC591\uD478 \uAEBC\uB0B4\uACE0 \uC435\uC435 \uBE44\uBCA0\uBA39\uC790!";
  } else if (missing.length <= 3) {
    title = "\uAC70\uC758 \uB2E4 \uB410\uC5B4!";
    sub = `${missing.length}\uAC1C\uB9CC \uB354 \uC788\uC73C\uBA74 \uC644\uC131\uC774\uC5D0\uC694.`;
  } else {
    title = "\uC7A5\uBCF4\uB7EC \uAC00\uC57C\uACA0\uB294\uB370...";
    sub = "\uBE60\uC9C4 \uC7AC\uB8CC\uAC00 \uC880 \uC788\uC5B4\uC694.";
  }

  return (
    <div className="complete-screen">
      <div className="complete-title">{title}</div>
      <div className="complete-sub" style={{ whiteSpace: "pre-line" }}>{sub}</div>

      {missing.length > 0 && (
        <div className="missing-summary">
          <div className="missing-summary-title">{"\uBD80\uC871\uD55C \uC7AC\uB8CC"} {missing.length}{"\uAC1C"}</div>
          <div className="coupang-card-list">
            {missing.map((m, i) => (
              <a key={i} href={m.coupangLink || "#"} target={m.coupangLink ? "_blank" : undefined} rel="noopener noreferrer" className={"coupang-item-card" + (m.coupangLink ? "" : " no-link")}>
                <div className="coupang-item-emoji">{m.emoji}</div>
                <div className="coupang-item-info">
                  <div className="coupang-item-name">{m.name}</div>
                  <div className="coupang-item-detail">{m.detail}</div>
                </div>
                {m.coupangLink && <div className="coupang-buy-btn">{"\uAD6C\uB9E4"}</div>}
              </a>
            ))}
          </div>
        </div>
      )}

      {missingWithLink.length > 0 && (
        <p className="coupang-notice">{"\uC774 \uD3EC\uC2A4\uD305\uC740 \uCFE0\uD321 \uD30C\uD2B8\uB108\uC2A4 \uD65C\uB3D9\uC758 \uC77C\uD658\uC73C\uB85C,"}<br />{"\uC774\uC5D0 \uB530\uB978 \uC77C\uC815\uC561\uC758 \uC218\uC218\uB8CC\uB97C \uC81C\uACF5\uBC1B\uC2B5\uB2C8\uB2E4."}</p>
      )}

      <div className="complete-actions">
        <button className="action-btn primary" onClick={onShare}>{"\uACF5\uC720\uD558\uAE30"}</button>
        <button className="action-btn outline" onClick={onReset}>{"\uB2E4\uC2DC \uD558\uAE30"}</button>
      </div>
    </div>
  );
}
