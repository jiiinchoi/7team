const open = document.querySelector("#open");
const modalBox = document.querySelector("#modal-box");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  modalBox.style.display = "block"; // 클릭하면 클래스리스트에 .active 스타일 추가
});

close.addEventListener("click", () => {
  modalBox.style.display = "none"; // 클릭하면 클래스리스트에서 .active 스타일 제거
});
