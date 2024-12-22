const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// Відкриття/закриття меню при кліку на кнопку
menuToggle.addEventListener("click", (event) => {
  menu.classList.toggle("open");
  menuToggle.classList.toggle("open");
  event.stopPropagation(); // Зупиняє подію, щоб клік по кнопці не спрацював на документі
});

// Закриття меню при кліку поза ним
document.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove("open");
    menuToggle.classList.remove("open");
  }
});
