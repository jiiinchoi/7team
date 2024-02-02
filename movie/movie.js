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

// 감상평 등록 기능
const mycomment = document.querySelector("#mycomment")
const button = document.querySelector(".commentbutton")
const commentArea = document.querySelector(".comment_content")
const commentRegister = document.querySelector(".comment_content_one")
const starNumber = document.querySelector("#result")

button.addEventListener("click", () => {
  let Div = document.createElement("div")
  Div.classList.add("comment_content_one")
  Div.innerHTML = `<div class="comment_top">
  <div class="comment_star">
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star"></i>
    <i class="fas fa-star-half"></i>
  </div>
  <div>Myname</div>
</div>
<div class="comment_main">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta, itaque voluptate molestias amet nihil dolore reiciendis inventore eius iure!
</div>
<div class="comment_bottom">
  <i class="fa-regular fa-heart"></i> 0
  <i class="fas fa-comment"></i> 0
</div>`
  DivStar = Div.querySelector(".comment_star")
  if (starNumber.innerHTML !== null) {
    switch(starNumber.innerHTML) {
      case "0.0" : DivStar.innerHTML = ``
        break;
      case "0.5" : DivStar.innerHTML = `<i class="fas fa-star-half"></i>`
        break;
      case "1.0" : DivStar.innerHTML = `<i class="fas fa-star"></i>`
        break;
      case "1.5" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star-half"></i>`
        break;
      case "2.0" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>`
        break;
      case "2.5" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half"></i>`
        break;
      case "3.0" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>`
        break;
      case "3.5" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half"></i>`
        break;
      case "4.0" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>`
        break;
      case "4.5" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star-half"></i>`
        break;
      case "5.0" : DivStar.innerHTML = `<i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>`
        break;
    }
  }

  let DivMain = Div.querySelector(".comment_main")
  DivMain.textContent = mycomment.value
  commentArea.appendChild(Div)
  mycomment.value=""

  let commentNumber = document.querySelector(".comment_title_number")
  let commentNumberInt = Number(commentNumber.innerHTML)
  commentNumberInt += 1
  commentNumber.innerHTML = commentNumberInt
  console.log(commentNumber)
  console.log(commentNumberInt)
})
