// document.addEventListener('DOMContentLoaded', function () {
//   const animatedElements = document.querySelectorAll('.animated-element');

//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     },
//     {
//       threshold: 0.1, // спрацьовує, коли 10% елемента в полі зору
//     },
//   );

//   animatedElements.forEach(el => observer.observe(el));
// });

// //   =============================

// document.addEventListener('DOMContentLoaded', function () {
//   const elements = document.querySelectorAll('.fade-in-left');

//   const observer = new IntersectionObserver(
//     entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('visible');
//         }
//       });
//     },
//     {
//       threshold: 0.1,
//     },
//   );

//   elements.forEach(el => observer.observe(el));
// });

// // ==================================

// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.fade-in-right').forEach(el => {
//     el.classList.add('visible');
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.fade-in-left, .fade-in-right, .animated-element');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  elements.forEach(el => observer.observe(el));
});
