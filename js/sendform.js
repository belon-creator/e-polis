// function sendEmail(templateParams) {
//   fetch('https://api.emailjs.com/api/v1.0/email/send', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//       service_id: 'service_10lknas',
//       template_id: 'template_pjyr1yb',
//       user_id: 'Sr9sC0pAHmC3PA7yg',
//       template_params: templateParams,
//     }),
//   })
//     .then(response => response.json())
//     .then(data => console.log('SUCCESS!', data))
//     .catch(error => console.error('Помилка:', error));
// }

// // Ініціалізація EmailJS
// (function () {
//   emailjs.init('Sr9sC0pAHmC3PA7yg'); // Замініть на ваш Public Key
// })();

// console.log('object');

// // Отримуємо потрібні елементи
// const bannerButtons = document.querySelectorAll('.banner-btn');
// const overlay = document.querySelector('.overlay');
// const formContainer = document.querySelector('.form-container');
// const closeFormButton = document.querySelector('.close-form');
// const selectedProduct = document.getElementById('selected-product');
// const form = document.getElementById('insurance-form');
// const nameInput = document.getElementById('name');
// const phoneInput = document.getElementById('phone');
// const commentInput = document.getElementById('comment');
// const submitButton = document.querySelector('.submit-btn');

// // Відкриття форми та визначення продукту
// bannerButtons.forEach(button => {
//   button.addEventListener('click', function (event) {
//     event.preventDefault(); // Забороняємо перехід за посиланням

//     const productName = this.querySelector('.banner-btn-txt').innerText;
//     selectedProduct.innerText = `Оформлення: ${productName}`;

//     // Відображення форми
//     overlay.style.display = 'block';
//     formContainer.style.display = 'block';
//   });
// });

// // Закриття форми
// function closeForm() {
//   overlay.style.display = 'none';
//   formContainer.style.display = 'none';
//   form.reset(); // Очищуємо поля
//   submitButton.disabled = true; // Робимо кнопку неактивною
// }

// overlay.addEventListener('click', closeForm);
// closeFormButton.addEventListener('click', closeForm);

// // Функція для активації кнопки
// function toggleSubmitButton() {
//   submitButton.disabled = !(nameInput.value.trim() && phoneInput.value.trim());
// }

// // Відстеження змін у полях
// nameInput.addEventListener('input', toggleSubmitButton);
// phoneInput.addEventListener('input', toggleSubmitButton);

// // Обробка форми та відправка на EmailJS
// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const templateParams = {
//     user_name: nameInput.value,
//     user_phone: phoneInput.value,
//     user_comment: commentInput.value,
//     selected_product: selectedProduct.innerText.replace('Оформлення: ', ''),
//   };

//   emailjs
//     .send('service_10lknas', 'template_pjyr1yb', templateParams)
//     .then(response => {
//       alert('Ваш запит відправлено!');
//       closeForm();
//     })
//     .catch(error => {
//       console.error('Помилка:', error);
//       alert('Помилка при відправці.');
//     });
// });

// Функція для відправки листа через EmailJS
function sendEmail(templateParams) {
  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: 'service_10lknas',
      template_id: 'template_pjyr1yb',
      user_id: 'Sr9sC0pAHmC3PA7yg',
      template_params: templateParams,
    }),
  })
    .then(response => response.json())
    .then(data => console.log('SUCCESS!', data))
    .catch(error => console.error('Помилка:', error));
}

// Ініціалізація EmailJS
(function () {
  emailjs.init('Sr9sC0pAHmC3PA7yg'); // Замініть на ваш Public Key
})();

// Отримуємо потрібні елементи
const bannerButtons = document.querySelectorAll('.banner-btn');
const overlay = document.querySelector('.overlay');
const formContainer = document.querySelector('.form-container');
const closeFormButton = document.querySelector('.close-form');
const selectedProduct = document.getElementById('selected-product');
const form = document.getElementById('insurance-form');
const nameInput = document.getElementById('name');
const phoneInput = document.getElementById('phone');
const commentInput = document.getElementById('comment');
const submitButton = document.querySelector('.submit-btn');

// Відкриття форми та визначення продукту
bannerButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    event.preventDefault(); // Забороняємо перехід за посиланням

    const productName = this.querySelector('.banner-btn-txt').innerText;
    selectedProduct.innerText = `Оформлення: ${productName}`;

    
    overlay.style.display = 'block';
    formContainer.style.display = 'block';
  });
});


function closeForm() {
  overlay.style.display = 'none';
  formContainer.style.display = 'none';
  form.reset(); 
  submitButton.disabled = true; 
}

overlay.addEventListener('click', closeForm);
closeFormButton.addEventListener('click', closeForm);


function toggleSubmitButton() {
  submitButton.disabled = !(nameInput.value.trim() && phoneInput.value.trim());
}

// Відстеження змін у полях
nameInput.addEventListener('input', toggleSubmitButton);
phoneInput.addEventListener('input', toggleSubmitButton);

// Заборона видалення префіксу +380
phoneInput.addEventListener('input', function () {
  if (!this.value.startsWith('+380')) {
    this.value = '+380' + this.value.slice(4); // Додаємо префікс назад, якщо користувач його видалив
  }
});

// Валідація номера телефону
function validatePhoneNumber(phone) {
  const phonePattern = /^\+380\d{9}$/;
  return phonePattern.test(phone);
}

// Обробка форми та відправка на EmailJS
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const user_name = nameInput.value;
  const user_phone = phoneInput.value;
  const user_comment = commentInput.value;
  const selected_product = selectedProduct.innerText.replace(
    'Оформлення: ',
    '',
  );

  // Перевірка на валідність номера телефону
  if (!validatePhoneNumber(user_phone)) {
    alert('Введіть номер у форматі +380XXXXXXXXX');
    return; // Зупинити відправку форми, якщо номер невірний
  }

  const templateParams = {
    user_name,
    user_phone,
    user_comment,
    selected_product,
  };

  // Відправка через EmailJS
  emailjs
    .send('service_10lknas', 'template_pjyr1yb', templateParams)
    .then(response => {
      alert('Ваш запит відправлено!');
      closeForm(); // Закриваємо форму після успішної відправки
    })
    .catch(error => {
      console.error('Помилка:', error);
      alert('Помилка при відправці.');
    });
});
