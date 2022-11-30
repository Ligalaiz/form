window.addEventListener('load', (e) => {
  const form = document.getElementById('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    form.reset();
  };

  form.addEventListener('submit', handleSubmit);
});
