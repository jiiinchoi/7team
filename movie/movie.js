const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
  document.querySelector(`.star-color`).style.width = `${target.value * 10}%`;
}