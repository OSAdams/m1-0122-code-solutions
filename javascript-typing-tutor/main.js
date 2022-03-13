const $text = document.querySelectorAll('.letter');

document.addEventListener('keydown', keydownTracker);

let textCounter = 0;
function keydownTracker(event) {
  if ($text[textCounter]) {
    $text[textCounter].style.borderBottom = 'thick solid #020202';
  }
  if (event.key === $text[textCounter].textContent) {
    $text[textCounter].style.color = 'green';
    textCounter++;
    if ($text[textCounter]) {
      $text[textCounter].style.borderBottom = 'thick solid #020202';
    }
    $text[textCounter - 1].style.borderBottom = 'none';
  } else {
    $text[textCounter].style.color = 'red';
    $text[textCounter].style.borderBottom = 'thick solid red';
  }

  if ($text[$text.length - 1].style.color === 'green') {
    // eslint-disable-next-line no-console
    console.log('Congrats');
  }
}
