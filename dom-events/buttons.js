function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const $clickButton = document.querySelector('.click-button');

$clickButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const $hoverButton = document.querySelector('.hover-button');

$hoverButton.addEventListener('mouseover', handleMouseover);
