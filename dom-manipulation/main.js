const $clickCounter = document.querySelector('.click-number');
const $hotButton = document.querySelector('.hot-button');
$hotButton.addEventListener('click', e => {
  $clickCounter.textContent++;
  // eslint-disable-next-line
  console.log($clickCounter.textContent)
});
