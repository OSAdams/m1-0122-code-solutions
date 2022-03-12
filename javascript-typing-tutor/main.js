const $text = document.querySelectorAll('.letter');

document.addEventListener('keydown', keydownTracker);

let textCounter = 0;
function keydownTracker(event) {
  if (event.key === $text[textCounter].textContent) {
    $text[textCounter].style.color = 'green';
    textCounter++;
  } else {
    $text[textCounter].style.color = 'red';
  }
}
