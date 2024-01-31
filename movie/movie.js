// 별점 선택관련 
const drawStar = (target) => {
  const filledStar = document.querySelector('.star span');
  const result = document.getElementById('result');

  const value = (target.value / 2).toFixed(1);
  filledStar.style.width = `${target.value * 10}%`;
  result.textContent = value;
}

drawStar(document.querySelector('.star input'));


// 텍스트카운터 관련 
const textarea = document.querySelector("#mycomment");
const charCount = document.querySelector("#my-char-count");

charCount.textContent = "(0/500) 남은 텍스트: 500";

textarea.addEventListener("input", () => {
  const textLength = textarea.value.trim().length;
  const remainingCharacters = 500 - textLength;

  if (textarea.value !== null && textarea.value !== "") {
    charCount.textContent = `(${textLength}/500) 남은 텍스트: ${remainingCharacters}`;
  } else {
    charCount.textContent = "(0/500) 남은 텍스트: 500";
  }
});

// 플레이스홀더 관련 
const isMobile = window.matchMedia("(max-width: 500px)").matches;
const placeholderText = isMobile ? "평점은 최대 500자까지 등록 가능합니다" : "평점은 최대 500자까지 등록 가능합니다. 영화와 상관 없는 내용은 제재를 받을 수 있습니다.";
textarea.setAttribute("placeholder", placeholderText);