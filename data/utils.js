// 답변 배열 → 결과 코드 생성 (예: [true,true,false,...] → "1110101010")
export function generateResultCode(answers) {
  return answers.map((a) => (a ? "1" : "0")).join("");
}
