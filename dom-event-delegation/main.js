const $taskList = document.querySelector('.task-list');

$taskList.addEventListener('click', e => {
  console.log('event.target: ', e.target);
  console.log('event.target.tagName: ', e.target.tagName);
});
