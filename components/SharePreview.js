"use client";

import { useState, useRef } from "react";
import { generateResultCode } from "../data/utils";
import html2canvas from "html2canvas";

export default function SharePreview({ ingredients, answers, onBack }) {
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const cardRef = useRef(null);

  const missing = ingredients.filter((_, i) => !answers[i]);
  const hasAll = missing.length === 0;
  const yesCount = answers.filter(Boolean).length;

  const show = (id) => {
    const idx = ingredients.findIndex((ing) => ing.layer === id);
    return idx !== -1 && answers[idx];
  };

  const resultCode = generateResultCode(answers);

  const getShareUrl = () => {
    const base = typeof window !== "undefined" ? window.location.origin + window.location.pathname : "";
    return base + "?r=" + resultCode;
  };

  const handleShare = async () => {
    const shareUrl = getShareUrl();
    const text = hasAll
      ? "봄동 비빔밥 재료 10/10 완성! 오늘 양푼째 비벼먹는다"
      : "봄동 비빔밥 " + yesCount + "/10... 이거 좀 사갖고 와줘";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: "봄동 비빔밥 체크리스트",
          text: text,
          url: shareUrl,
        });
      } catch (e) {
        if (e.name !== "AbortError") {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    const shareUrl = getShareUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(function() { setCopied(false); }, 2000);
    } catch (e) {
      var ta = document.createElement("textarea");
      ta.value = shareUrl;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(function() { setCopied(false); }, 2000);
    }
  };

  const handleSaveImage = async () => {
    if (!cardRef.current) return;
    setSaving(true);
    try {
      var canvas = await html2canvas(cardRef.current, {
        backgroundColor: "#ffffff",
        scale: 2,
        useCORS: true,
        logging: false,
      });
      var link = document.createElement("a");
      link.download = "봄동비빔밥_결과.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      alert("이미지 저장에 실패했습니다. 다시 시도해주세요.");
    }
    setSaving(false);
  };

  return (
    <div className="share-preview">
      <div className="share-card" ref={cardRef}>
        <div style={{ width: 140, height: 100, margin: "0 auto 12px" }}>
          <svg viewBox="0 0 140 100" width="140" height="100">
            <defs>
              <radialGradient id="mFloor" cx="50%" cy="45%" r="50%"><stop offset="0%" stopColor="#f5f5f5" /><stop offset="100%" stopColor="#e8e8e8" /></radialGradient>
              <linearGradient id="mRim" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#e0e0e0" /><stop offset="100%" stopColor="#c8c8c8" /></linearGradient>
              <linearGradient id="mWall" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#d8d8d8" /><stop offset="100%" stopColor="#c0c0c0" /></linearGradient>
              <clipPath id="mClip"><ellipse cx="70" cy="50" rx="56" ry="30" /></clipPath>
            </defs>
            <ellipse cx="72" cy="88" rx="54" ry="10" fill="rgba(0,0,0,0.08)" />
            <ellipse cx="70" cy="55" rx="62" ry="38" fill="url(#mWall)" />
            <ellipse cx="70" cy="38" rx="62" ry="18" fill="url(#mRim)" />
            <ellipse cx="70" cy="50" rx="56" ry="30" fill="url(#mFloor)" />
            <g clipPath="url(#mClip)">
              {show("rice") && <ellipse cx="70" cy="62" rx="48" ry="18" fill="#fff8e8" stroke="#f0e6c8" strokeWidth="0.5" />}
              {show("bomdong") && <g><ellipse cx="55" cy="50" rx="18" ry="10" fill="#66BB6A" opacity="0.85" /><ellipse cx="85" cy="48" rx="15" ry="9" fill="#81C784" opacity="0.8" /><ellipse cx="70" cy="54" rx="12" ry="7" fill="#4CAF50" opacity="0.75" /></g>}
              {show("sauce") && <ellipse cx="70" cy="52" rx="14" ry="8" fill="#E53935" opacity="0.85" />}
              {show("gochugaru") && <g><circle cx="50" cy="52" r="2" fill="#FF5722" opacity="0.7" /><circle cx="58" cy="48" r="1.5" fill="#E64A19" opacity="0.6" /><circle cx="82" cy="50" r="2" fill="#FF5722" opacity="0.7" /><circle cx="90" cy="53" r="1.5" fill="#E64A19" opacity="0.6" /></g>}
              {show("egg") && <g><ellipse cx="70" cy="44" rx="12" ry="8" fill="#FFF9C4" /><circle cx="70" cy="43" r="5" fill="#FFD54F" /></g>}
              {show("oil") && <ellipse cx="70" cy="52" rx="20" ry="5" fill="rgba(255,193,7,0.2)" />}
              {show("anchovy") && <g><circle cx="45" cy="55" r="1" fill="#8D6E63" opacity="0.5" /><circle cx="95" cy="54" r="1" fill="#8D6E63" opacity="0.5" /></g>}
              {show("maesil") && <ellipse cx="70" cy="52" rx="18" ry="4" fill="rgba(139,195,74,0.15)" />}
              {show("soy") && <g><circle cx="62" cy="50" r="1.5" fill="#5D4037" opacity="0.3" /><circle cx="78" cy="51" r="1.5" fill="#5D4037" opacity="0.3" /></g>}
              {show("sesame") && <g><circle cx="60" cy="42" r="1" fill="#F5F5DC" /><circle cx="65" cy="40" r="0.8" fill="#F5F5DC" /><circle cx="75" cy="41" r="1" fill="#F5F5DC" /><circle cx="80" cy="43" r="0.8" fill="#F5F5DC" /><circle cx="70" cy="39" r="0.8" fill="#F5F5DC" /></g>}
            </g>
            <path d="M8,38 A62,18 0 0,0 132,38" fill="none" stroke="url(#mRim)" strokeWidth="4" />
          </svg>
        </div>
        <h3>{hasAll ? "봄동 비빔밥 완성!" : "봄동 비빔밥 미완성..."}</h3>
        <p className="share-score">{yesCount}/{ingredients.length}개 재료 보유</p>
        <p>{hasAll ? "오늘 양푼째 비벼먹는다" : "이거 좀 사갖고 와줘"}</p>
        {!hasAll && (
          <div className="share-missing-list">
            <div className="label">사갖고 올 것</div>
            {missing.map((m, i) => (<div key={i}>{m.emoji} {m.name} ({m.detail})</div>))}
          </div>
        )}
      </div>
      <div className="complete-actions">
        <button className="action-btn primary" onClick={handleShare}>공유하기</button>
        <button className="action-btn secondary" onClick={handleCopyLink}>{copied ? "✅ 복사 완료!" : "🔗 링크 복사"}</button>
        <button className="action-btn secondary" onClick={handleSaveImage} disabled={saving}>{saving ? "저장 중..." : "📷 이미지 저장"}</button>
      </div>
      <button className="back-link" onClick={onBack}>← 돌아가기</button>
    </div>
  );
}
