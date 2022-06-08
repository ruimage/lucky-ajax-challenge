document.querySelector('#dice-form').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const response = await fetch('/', {
    method: 'POST',
    body: JSON.stringify({
      dice: form.sides.value,
    }),
    headers: { 'Content-type': 'application/json' },
  });
  const htmlDie = await response.text();
  const diePlace = document.querySelector('#die-container');
  diePlace.remove();

  const dieContainer = document.querySelector('.container');
  dieContainer.insertAdjacentHTML('beforeend', htmlDie);
});
