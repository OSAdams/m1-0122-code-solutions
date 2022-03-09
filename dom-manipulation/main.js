const $clickCounter = document.querySelector('.click-number');
const $hotButton = document.querySelector('.hot-button');

const hButton = 'hot-button ';
$hotButton.addEventListener('click', e => {
  $clickCounter.textContent++;
  $clickCounter.textContent < 4
    ? $hotButton.className = hButton + ' cold'
    : $clickCounter.textContent < 7
      ? $hotButton.className = hButton + ' cool'
      : $clickCounter.textContent < 10
        ? $hotButton.className = hButton + ' tepid'
        : $clickCounter.textContent < 13
          ? $hotButton.className = hButton + ' warm'
          : $clickCounter.textContent < 16
            ? $hotButton.className = hButton + ' hot'
            : $hotButton.className = hButton + ' nuclear';
});
