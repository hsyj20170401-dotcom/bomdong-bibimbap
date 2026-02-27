"use client";

import { useState, useCallback, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ingredients from "../data/ingredients";
import CoverScreen from "../components/CoverScreen";
import BowlSection from "../components/BowlSection";
import CardSwipe from "../components/CardSwipe";
import CompleteScreen from "../components/CompleteScreen";
import SharePreview from "../components/SharePreview";
import SharedResult from "../components/SharedResult";

const SCREEN = {
  COVER: "cover",
  MAIN: "main",
  COMPLETE: "complete",
  SHARE: "share",
  SHARED_RESULT: "shared_result",
};

function getStatusMessage(answeredCount, total, yesCount) {
  const pct = Math.round((answeredCount / total) * 100);
  if (pct >= 100) {
    return yesCount === total ? "쓱쓱 비빌 시간!" : "";
  } else if (pct >= 80) {
    return "양푼 꺼내놔!";
  } else if (pct >= 50) {
    return "반 왔다! 거의 다 됐어!";
  } else if (pct >= 20) {
    return "좋아, 계속 가보자!";
  }
  return "";
}

function parseResultCode(code) {
  if (!code || code.length < ingredients.length) return null;
  return code.split("").slice(0, ingredients.length).map((c) => c === "1");
}

export function generateResultCode(answers) {
  return answers.map((a) => (a ? "1" : "0")).join("");
}

function Home() {
  const searchParams = useSearchParams();
  const resultCode = searchParams.get("r");
  const sharedAnswers = parseResultCode(resultCode);

  const [screen, setScreen] = useState(
    sharedAnswers ? SCREEN.SHARED_RESULT : SCREEN.COVER
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [visibleLayers, setVisibleLayers] = useState(new Set());

  const yesCount = answers.filter(Boolean).length;
  const statusMessage = getStatusMessage(
    answers.length,
    ingredients.length,
    yesCount
  );

  const handleStart = useCallback(() => {
    setScreen(SCREEN.MAIN);
  }, []);

  const handleTryMyself = useCallback(() => {
    window.history.replaceState({}, "", window.location.pathname);
    setScreen(SCREEN.COVER);
  }, []);

  const handleAnswer = useCallback(
    (hasIt) => {
      const newAnswers = [...answers, hasIt];
      setAnswers(newAnswers);
      if (hasIt) {
        const ing = ingredients[currentIndex];
        setVisibleLayers((prev) => {
          const next = new Set(prev);
          next.add(ing.layer);
          return next;
        });
      }
      const nextIndex = currentIndex + 1;
      if (nextIndex < ingredients.length) {
        setCurrentIndex(nextIndex);
      } else {
        setTimeout(() => setScreen(SCREEN.COMPLETE), 400);
      }
    },
    [currentIndex, answers]
  );

  const handleShare = useCallback(() => {
    setScreen(SCREEN.SHARE);
  }, []);

  const handleBackFromShare = useCallback(() => {
    setScreen(SCREEN.COMPLETE);
  }, []);

  const handleRecipe = useCallback(() => {
    alert("조리법 화면은 다음 버전에서 구현 예정!");
  }, []);

  const handleReset = useCallback(() => {
    setCurrentIndex(0);
    setAnswers([]);
    setVisibleLayers(new Set());
    setScreen(SCREEN.MAIN);
  }, []);

  return (
    <div className="app-container">
      {screen === SCREEN.SHARED_RESULT && sharedAnswers && (
        <SharedResult
          ingredients={ingredients}
          answers={sharedAnswers}
          onTryMyself={handleTryMyself}
        />
      )}

      {screen === SCREEN.COVER && <CoverScreen onStart={handleStart} />}

      {screen === SCREEN.MAIN && (
        <>
          <div className="hero">
            <h1>봄동 비빔밥 체크리스트</h1>
            <p className="hero-sub">재료 체크하고 양푼째 비벼먹자</p>
          </div>
          <BowlSection
            visibleLayers={visibleLayers}
            yesCount={yesCount}
            total={ingredients.length}
            statusMessage={statusMessage}
          />
          <CardSwipe
            ingredients={ingredients}
            currentIndex={currentIndex}
            onAnswer={handleAnswer}
          />
        </>
      )}

      {screen === SCREEN.COMPLETE && (
        <>
          <div className="hero">
            <h1>봄동 비빔밥 체크리스트</h1>
            <p className="hero-sub">재료 체크 완료!</p>
          </div>
          <BowlSection
            visibleLayers={visibleLayers}
            yesCount={yesCount}
            total={ingredients.length}
            statusMessage={yesCount === ingredients.length ? "쓱쓱 비빌 시간!" : ""}
          />
          <CompleteScreen
            ingredients={ingredients}
            answers={answers}
            onShare={handleShare}
            onReset={handleReset}
          />
        </>
      )}

      {screen === SCREEN.SHARE && (
        <SharePreview
          ingredients={ingredients}
          answers={answers}
          onBack={handleBackFromShare}
        />
      )}
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div className="app-container" />}>
      <Home />
    </Suspense>
  );
}
