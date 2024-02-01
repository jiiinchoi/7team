const mainFlex = document.querySelector(".mainFlex");
// console.log(mainFlex);

const arrows = document.querySelectorAll(".arrow");
// console.log(arrows)

arrows.forEach( arrow => {
  arrow.addEventListener("click", (e) => {
    // console.log(e)
    const box = arrow.parentNode
    if (e.target.id === "right") {
      box.style.transform = "translateX(-90vw)";
      box.style.transition = "0.5s ease-in-out"
      e.target.id = "left"
      arrow.innerHTML = "&lang;"
    }
    else if (e.target.id === "left") {
      box.style.transform = "translateX(0vw)";
      box.style.transition = "0.5s ease-in-out"
      arrow.innerHTML = "&rang;"
      e.target.id = "right"
    }
  })
})

// 이미지 링크 연결
const images = document.querySelectorAll('.FlexImage');

images[].addEventListener('click', () => {
  window.location.href = 'https://link-to-black-widow';
});

images[1].addEventListener('click', () => {
  window.location.href = 'https://link-to-ironman';
});