const $container = document.querySelector('.container');
const $circle = document.querySelector('.circle');

$circle.addEventListener('click', e => {
  if ($circle.className === 'circle off') {
    $circle.className = 'circle';
    $container.style.background = 'rgb(248 233 215)';
  } else {
    $circle.className += ' off';
    $container.style.background = 'rgb(40 40 40)';
  }
});
