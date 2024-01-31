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
