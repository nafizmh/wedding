const mobilebtn = document.querySelector(".mob_btn");
const nav_header = document.querySelector(".mob_header");
const menu_link = document.querySelector(".remove");
const menu_link1 = document.querySelector(".remove1");
const menu_link2 = document.querySelector(".remove2");
const menu_link3 = document.querySelector(".remove3");
const menu_link4 = document.querySelector(".remove4");
const menu_link5 = document.querySelector(".remove5");
const menu_link6 = document.querySelector(".remove6");
const menu_link7 = document.querySelector(".remove7");

const show_hide = () => {
  nav_header.classList.toggle("active");
};
mobilebtn.addEventListener("click", () => show_hide());

const remove = () => {
  nav_header.classList.remove("active");
};
menu_link.addEventListener("click", () => remove());

const remove1 = () => {
  nav_header.classList.remove("active");
};
menu_link1.addEventListener("click", () => remove());

const remove2 = () => {
  nav_header.classList.remove("active");
};
menu_link2.addEventListener("click", () => remove());

const remove3 = () => {
  nav_header.classList.remove("active");
};
menu_link3.addEventListener("click", () => remove());

const remove4 = () => {
  nav_header.classList.remove("active");
};
menu_link4.addEventListener("click", () => remove());

const remove5 = () => {
  nav_header.classList.remove("active");
};
menu_link5.addEventListener("click", () => remove());

const remove6 = () => {
  nav_header.classList.remove("active");
};
menu_link6.addEventListener("click", () => remove());

const remove7 = () => {
  nav_header.classList.remove("active");
};
menu_link7.addEventListener("click", () => remove());
