"use client";

export default function SharedResult({ ingredients, answers, onTryMyself }) {
  const yesCount = answers.filter(Boolean).length;
  const missing = ingredients.filter((_, i) => !answers[i]);
  const hasAll = missing.length === 0;

  const show = (id) => {
    const idx = ingredients.findIndex((ing) => ing.layer === id);
    return idx !== -1 && answers[idx];
  };

  return (
    <div className="shared-result">
      <div className="shared-header">
        <span className="shared-badge">봄동 비빔밥 체크리스트</span>
        <h1 className="shared-title">
          {hasAll ? "재료 완벽 구비! 🔥" : "누군가의 봄동 비빔밥"}
        </h1>
      </div>

      <div className="shared-card">
        <div style={{ width: 160, height: 115, margin: "0 auto 16px" }}>
          <svg viewBox="0 0 160 115" width="160" height="115">
            <defs>
              <radialGradient id="sFloor" cx="50%" cy="45%" r="50%">
                <stop offset="0%" stopColor="#f5f5f5" />
                <stop offset="100%" stopColor="#e8e8e8" />
              </radialGradient>
              <linearGradient id="sRim" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#e0e0e0" />
                <stop offset="100%" stopColor="#c8c8c8" />
              </linearGradient>
              <linearGradient id="sWall" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#d8d8d8" />
                <stop offset="100%" stopColor="#c0c0c0" />
              </linearGradient>
              <clipPath id="sClip">
                <ellipse cx="80" cy="58" rx="64" ry="34" />
              </clipPath>
            </defs>
            <ellipse cx="82" cy="102" rx="60" ry="11" fill="rgba(0,0,0,0.08)" />
            <ellipse cx="80" cy="64" rx="70" ry="42" fill="url(#sWall)" />
            <ellipse cx="80" cy="44" rx="70" ry="20" fill="url(#sRim)" />
            <ellipse cx="80" cy="58" rx="64" ry="34" fill="url(#sFloor)" />
            <g clipPath="url(#sClip)">
              {show("rice") && (
                <ellipse cx="80" cy="72" rx="54" ry="20" fill="#fff8e8" stroke="#f0e6c8" strokeWidth="0.5" />
              )}
              {show("bomdong") && (
                <g>
                  <ellipse cx="62" cy="58" rx="20" ry="12" fill="#66BB6A" opacity="0.85" />
                  <ellipse cx="98" cy="56" rx="17" ry="10" fill="#81C784" opacity="0.8" />
                  <ellipse cx="80" cy="62" rx="14" ry="8" fill="#4CAF50" opacity="0.75" />
                </g>
              )}
              {show("sauce") && (
                <ellipse cx="80" cy="60" rx="16" ry="9" fill="#E53935" opacity="0.85" />
              )}
              {show("gochugaru") && (
                <g>
                  <circle cx="56" cy="60" r="2.5" fill="#FF5722" opacity="0.7" />
                  <circle cx="66" cy="55" r="2" fill="#E64A19" opacity="0.6" />
                  <circle cx="94" cy="58" r="2.5" fill="#FF5722" opacity="0.7" />
                  <circle cx="104" cy="62" r="2" fill="#E64A19" opacity="0.6" />
                </g>
              )}
              {show("egg") && (
                <g>
                  <ellipse cx="80" cy="51" rx="14" ry="9" fill="#FFF9C4" />
                  <circle cx="80" cy="50" r="6" fill="#FFD54F" />
                </g>
              )}
              {show("oil") && (
                <ellipse cx="80" cy="60" rx="24" ry="6" fill="rgba(255,193,7,0.2)" />
              )}
              {show("anchovy") && (
                <g>
                  <circle cx="50" cy="64" r="1.2" fill="#8D6E63" opacity="0.5" />
                  <circle cx="110" cy="63" r="1.2" fill="#8D6E63" opacity="0.5" />
                </g>
              )}
              {show("maesil") && (
                <ellipse cx="80" cy="60" rx="22" ry="5" fill="rgba(139,195,74,0.15)" />
              )}
              {show("soy") && (
                <g>
                  <circle cx="72" cy="58" r="1.8" fill="#5D4037" opacity="0.3" />
                  <circle cx="88" cy="59" r="1.8" fill="#5D4037" opacity="0.3" />
                </g>
              )}
              {show("sesame") && (
                <g>
                  <circle cx="68" cy="49" r="1.2" fill="#F5F5DC" />
                  <circle cx="74" cy="47" r="1" fill="#F5F5DC" />
                  <circle cx="86" cy="48" r="1.2" fill="#F5F5DC" />
                  <circle cx="92" cy="50" r="1" fill="#F5F5DC" />
                  <circle cx="80" cy="46" r="1" fill="#F5F5DC" />
                </g>
              )}
            </g>
            <path
              d="M10,44 A70,20 0 0,0 150,44"
              fill="none"
              stroke="url(#sRim)"
              strokeWidth="4.5"
            />
          </svg>
        </div>

        <div className="shared-score">
          <span className="shared-score-num">{yesCount}</span>
          <span className="shared-score-slash">/</span>
          <span className="shared-score-total">{ingredients.length}</span>
        </div>
        <p className="shared-score-label">
          {hasAll
            ? "모든 재료 완비! 양푸 꺼내자!"
            : `${missing.length}개 재료가 부족해요`}
        </p>

        {!hasAll && (
          <div className="missing-summary">
            <div className="missing-summary-title">
              이거 좀 사갖고 와줘 🥹
            </div>
            <div className="coupang-card-list">
              {missing.map((m, i) => (
                
                  key={i}
                  href={m.coupangLink || "#"}
                  target={m.coupangLink ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`coupang-item-card${m.coupangLink ? "" : " no-link"}`}
                >
                  <div className="coupang-item-emoji">{m.emoji}</div>
                  <div className="coupang-item-info">
                    <div className="coupang-item-name">{m.name}</div>
                    <div className="coupang-item-detail">{m.detail}</div>
                  </div>
                  {m.coupangLink && <div className="coupang-buy-btn">구매</div>}
                </a>
              ))}
            </div>
          </div>
        )}

        {yesCount > 0 && (
          <div className="shared-have">
            <div className="shared-have-title">보유 재료 ✅</div>
            <div className="shared-have-list">
              {ingredients
                .filter((_, i) => answers[i])
                .map((m, i) => (
                  <span key={i} className="shared-have-item">
                    {m.emoji} {m.name}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>

      {missing.length > 0 && missing.some((m) => m.coupangLink) && (
        <p className="coupang-notice">
          이 포스팅은 쿠팡 파트너스 활동의 일환으로,<br />이에 따른 일정액의 수수료를 제공받습니다.
        </p>
      )}

      <button className="shared-try-btn" onClick={onTryMyself}>
        🥬 나도 체크해보기
      </button>

      <p className="shared-footer">봄동 비빔밥 체크리스트</p>
    </div>
  );
}
