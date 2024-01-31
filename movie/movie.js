const drawStar = (target) => {
  const filledStar = document.querySelector('.star span');
  const result = document.getElementById('result');

  const value = (target.value / 2).toFixed(1);
  filledStar.style.width = `${target.value * 10}%`;
  result.textContent = value;
}

drawStar(document.querySelector('.star input'));

window.addEventListener('resize', function() {
  if (window.innerWidth <= 500) {
    document.querySelector("#mycomment_tb input[type='text']").setAttribute("placeholder", "평점은 최대 500자까지 등록 가능합니다.");
  } else {
    document.querySelector("#mycomment_tb input[type='text']").setAttribute("placeholder", "평점은 최대 500자까지 등록 가능합니다. 영화와 상관 없는 내용은 제재를 받을 수 있습니다");
  }
});


// const input = document.querySelector("#mycomment_tb input[type='text']");
// const charCount = document.createElement("span");

// input.addEventListener("input", () => {
//   const textLength = input.value.length;
//   const remainingCharacters = 500 - textLength;
//   charCount.textContent = `(${textLength}/500) 남은 텍스트: ${remainingCharacters}`;

//   charCount.style.position = "absolute";
//   charCount.style.bottom = "-10px";
//   charCount.style.left = "5px";

//   input.parentNode.appendChild(charCount);
// });



// const input = document.querySelector("#mycomment_tb input[type='text']");
// const charCount = document.querySelector("#my-char-count");

// input.addEventListener("input", () => {
//   const textLength = input.value.length;
//   const remainingCharacters = 500 - textLength;
//   charCount.textContent = `(${textLength}/500) 남은 텍스트: ${remainingCharacters}`;
// });



// const textarea = document.querySelector("#mycomment");
// const charCount = document.querySelector("#my-char-count");

// textarea.addEventListener("input", () => {
//   const textLength = textarea.value.replace(/\s/g, "").length;
//   const remainingCharacters = 500 - textLength;
//   charCount.textContent = `(${textLength}/500) 남은 텍스트: ${remainingCharacters}`;
// });

// const textLength = textarea.value.length;

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