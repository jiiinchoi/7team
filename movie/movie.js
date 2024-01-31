const drawStar = (target) => {
  const filledStar = document.querySelector('.star span');
  const result = document.getElementById('result');

  filledStar.style.width = `${target.value * 10}%`;
  result.textContent = target.value/2;
}

drawStar(document.querySelector('.star input'));