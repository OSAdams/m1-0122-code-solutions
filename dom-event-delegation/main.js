const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', e => {
  console.log('event.target: ', e.target);
  console.log('event.target.tagName: ', e.target.tagName);
  if (e.target.tagName === 'BUTTON') {
    const closestToEventTarget = e.target.closest('.task-list-item');
    console.log('e.target.closest: ', closestToEventTarget);
    closestToEventTarget.remove();
  }
});
