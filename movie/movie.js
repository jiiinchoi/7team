const drawStar = (target) => {
  const filledStar = document.querySelector('.star span');
  const result = document.getElementById('result');

  const value = (target.value / 2).toFixed(1);
  filledStar.style.width = `${target.value * 10}%`;
  result.textContent = value;
}

drawStar(document.querySelector('.star input'));