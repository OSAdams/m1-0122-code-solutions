const $openModal = document.querySelector('.open-modal');
const $closeModal = document.querySelector('.close-modal');
const $container = document.querySelectorAll('.container');

function onClick(e) {
  e.target === $openModal
    ? $container[1].className = 'container'
    : $container[1].className += ' hidden';
}

$openModal.addEventListener('click', onClick);
$closeModal.addEventListener('click', onClick);
