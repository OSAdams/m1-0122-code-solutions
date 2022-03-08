const $clickButton = document.querySelector('.click-button');
const $hoverButton = document.querySelector('.hover-button');
const $doubleClickButton = document.querySelector('.double-click-button');

$clickButton.addEventListener('click', handleClick);
$hoverButton.addEventListener('mouseover', handleMouseover);
$doubleClickButton.addEventListener('dblclick', handleDoubleClick);

function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}
