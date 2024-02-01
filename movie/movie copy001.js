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
  <div class="comment_username">Myname</div>
</div>
<div class="comment_main">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta, itaque voluptate molestias amet nihil dolore reiciendis inventore eius iure!
</div>
<div class="comment_bottom">
  <i class="fas fa-heart"></i><p class="heart_number">0</p>
  <i class="fas fa-comment"></i><p class="comment_number">0</p>
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
