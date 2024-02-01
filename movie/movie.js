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



// 버튼 클릭 숫자 +1 기능

// var increaseBtn = document.getElementById("increaseBtn");
// var numberElement = document.getElementById("number");

// var number = 0;

// increaseBtn.addEventListener("click", function() {

//   if (increaseBtn.textContent === "증가") {
//     number += 1;
//   } else {
//     number -= 1;
//   }
  
//   numberElement.textContent = number;
  
//   if (increaseBtn.textContent === "증가") {
//     increaseBtn.textContent = "감소";
//   } else {
//     increaseBtn.textContent = "증가";
//   }
// });

function changeCount(elementId) {
  var likeCount = document.getElementById(elementId);
  var currentCount = parseInt(likeCount.textContent.trim());

  // 숫자 증감 로직
  if (likeCount.classList.contains("liked")) {
    currentCount -= 1;
    likeCount.classList.remove("liked"); // 이미 좋아요 상태인 경우, 좋아요 취소
  } else {
    currentCount += 1;
    likeCount.classList.add("liked"); // 좋아요 상태로 변경
  }

  likeCount.textContent = currentCount;
}

// 하트 아이콘 움직임 기능
function changeIcon(icon) {
  const likeCount = document.getElementById("like-count");

  if (icon.classList.contains("fa-solid")) {
    icon.classList.remove("fa-solid");
    icon.classList.remove("fa-beat");
    icon.classList.remove("LikeContent");
    icon.style.removeProperty("--fa-animation-duration");

    likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
  } else {
    icon.classList.add("fa-solid");
    icon.classList.add("fa-beat");
    icon.classList.add("LikeContent");
    icon.style.setProperty("--fa-animation-duration", "1s");

    likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;

    // Remove the "fa-beat" class after 3 seconds to stop the animation
    setTimeout(() => {
      icon.classList.remove("fa-beat");
    }, 2000);
  }
}