document.addEventListener('DOMContentLoaded', (event) => {
  // PSEUDO-код:
  // 1 - перехватить событие отправки формы
  // 2 - предотвратить действие по умолчанию для этого события
  // 3 - отправить AJAX-сообщение на сервер
  // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика

});

document.querySelector('#dice-form').addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const form = evt.target;
  const htmlDie = await fetch('/rolls', {
    method: 'POST',
    body: {
      dice: form.number.value,
    },
  });
  const diePlace = document.querySelector('#die-container');
  diePlace.remove();

  const dieContainer = document.querySelector('#die-container');
});
