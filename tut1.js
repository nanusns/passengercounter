// document.querySelector("#count_no").innerText = "7";
let count = 0;
let increment = document.querySelector("#btn");
let save = document.querySelector("#save_btn");
let prev = document.querySelector("#prev");
increment.addEventListener("click", () => {
  count++;
  document.querySelector("#count_no").innerText = count;
});

save.addEventListener("click", () => {
  prev.innerHTML += count + " - ";
  count = 0;
  document.querySelector("#count_no").innerText = 0;
});
