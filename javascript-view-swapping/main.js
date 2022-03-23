const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
// eslint-disable-next-line
const $views = document.querySelectorAll('.views');

$tabContainer.addEventListener('click', event => {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      event.target === $tabs[i]
        ? $tabs[i].className += ' active'
        : $tabs[i].className = 'tab';
    }
  }
});
