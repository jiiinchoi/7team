// 버튼 요소와 숫자 요소를 가져옵니다.
var increaseBtn = document.getElementById("increaseBtn");
var numberElement = document.getElementById("number");

// 숫자 변수를 초기화합니다.
var number = 0;

// 버튼 클릭 시 이벤트 리스너를 추가합니다.
increaseBtn.addEventListener("click", function() {
  // 버튼이 증가/감소 상태인지 확인합니다.
  if (increaseBtn.textContent === "증가") {
    // 숫자를 1 증가시킵니다.
    number += 1;
  } else {
    // 숫자를 1 감소시킵니다.
    number -= 1;
  }
  
  // 변경된 숫자를 화면에 출력합니다.
  numberElement.textContent = number;
  
  // 버튼 텍스트를 변경합니다.
  if (increaseBtn.textContent === "증가") {
    increaseBtn.textContent = "감소";
  } else {
    increaseBtn.textContent = "증가";
  }
});

// function changeIcon(icon) {
//   if (icon.classList.contains("fa-solid")) {
//     icon.classList.remove("fa-solid");
//     icon.classList.remove("fa-beat");
//     icon.classList.remove("LikeContent");
//     icon.style.removeProperty("--fa-animation-duration");
//   } else {
//     icon.classList.add("fa-solid");
//     icon.classList.add("fa-beat");
//     icon.classList.add("LikeContent");
//     icon.style.setProperty("--fa-animation-duration", "1s");
//   }
// }

// function changeIcon(icon) {
//   const likeCount = document.getElementById("like-count");

//   if (icon.classList.contains("fa-solid")) {
//     icon.classList.remove("fa-solid");
//     icon.classList.remove("fa-beat");
//     icon.classList.remove("LikeContent");
//     icon.style.removeProperty("--fa-animation-duration");

//     likeCount.innerHTML = parseInt(likeCount.innerHTML) - 1;
//   } else {
//     icon.classList.add("fa-solid");
//     icon.classList.add("fa-beat");
//     icon.classList.add("LikeContent");
//     icon.style.setProperty("--fa-animation-duration", "1s");

//     likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
//   }
// }

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