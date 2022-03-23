const $tabContainer = document.querySelector('.tab-container');
const $tabs = document.querySelectorAll('.tab');
// eslint-disable-next-line
const $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', swapView);

function swapView(event) {
  if (event.target.matches('.tab')) {
    for (let i = 0; i < $tabs.length; i++) {
      event.target === $tabs[i]
        ? $tabs[i].className += ' active'
        : $tabs[i].className = 'tab';
    }
    const eTargetDataView = event.target.getAttribute('data-view');
    for (let i = 0; i < $views.length; i++) {
      $views[i].getAttribute('data-view') === eTargetDataView
        ? $views[i].className = 'view'
        : $views[i].className = 'view hidden';
    }
  }
}
