// Отримуємо всі елементи акордеону
const accordionItems = document.querySelectorAll(".accordion-item");

// Додаємо обробник подій до кожного заголовка акордеону
accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");

  header.addEventListener("click", () => {
    // Закриваємо всі вмістові блоки
    accordionItems.forEach((i) => {
      const itemContent = i.querySelector(".accordion-content");
      if (itemContent !== content) {
        itemContent.style.display = "none";
      }
    });

    // Перевіряємо стан видимості вмісту і змінюємо його стан
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
