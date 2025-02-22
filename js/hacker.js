document.addEventListener('contextmenu', event => {
    event.preventDefault();
    alert('хацкєр? 😑');
  });
  
  document.addEventListener('keydown', event => {
    if (
      event.ctrlKey && (event.key === 'u' || event.key === 'U') || // Ctrl + U
      event.key === 'F12' || // F12
      (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'i')) // Ctrl + Shift + I
    ) {
      event.preventDefault();
      alert('хацкєр? 😑');
    }
  });
  