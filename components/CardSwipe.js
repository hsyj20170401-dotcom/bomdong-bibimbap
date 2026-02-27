"use client";
import { useState, useCallback } from "react";

export default function CardSwipe({ ingredients, currentIndex, onAnswer }) {
  const [exitingIndex, setExitingIndex] = useState(-1);
  const handleAnswer = useCallback((hasIt) => {
    setExitingIndex(currentIndex);
    setTimeout(() => { onAnswer(hasIt); setExitingIndex(-1); }, 300);
  }, [currentIndex, onAnswer]);

  return (
    <div className="card-section">
      <div className="card-header">
        <h2>재료 확인</h2>
        <span className="card-counter">{Math.min(currentIndex + 1, ingredients.length)} / {ingredients.length}</span>
      </div>
      <div className="card-viewport">
        {ingredients.map((ing, i) => {
          let cn = "ingredient-card";
          if (i === currentIndex && exitingIndex !== i) cn += " active";
          else if (i === exitingIndex) cn += " exit-left";
          return (
            <div key={i} className={cn}>
              <div className="card-category">{ing.category}</div>
              <div className="card-number">{i + 1} / {ingredients.length}</div>
              <div className="card-image-placeholder">{ing.emoji}</div>
              <div className="card-name">{ing.name}</div>
              <div className="card-detail">{ing.detail}</div>
              {ing.tip && <div className="card-tip">{ing.tip}</div>}
            </div>
          );
        })}
      </div>
      <div className="card-buttons">
        <button className="btn btn-no" onClick={() => handleAnswer(false)}>없어 ✕</button>
        <button className="btn btn-yes" onClick={() => handleAnswer(true)}>있어 ✓</button>
      </div>
    </div>
  );
}
