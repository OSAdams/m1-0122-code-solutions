const $text = document.querySelectorAll('.letter');
const $complete = document.querySelector('.complete');
const $playAgain = document.querySelector('.play-again');
const $accuracy = document.querySelector('.accuracy');

document.addEventListener('keydown', keydownTracker);
$playAgain.addEventListener('click', reset);

let textCounter = 0;
let accuracy = 0;

function keydownTracker(event) {
  accuracy++;
  if ($text[textCounter]) {
    $text[textCounter].style.borderBottom = 'thick solid #020202';
  }
  if (event.key === $text[textCounter].textContent) {
    $text[textCounter].style.color = 'limegreen';
    textCounter++;
    if ($text[textCounter]) {
      $text[textCounter].style.borderBottom = 'thick solid #020202';
    }
    $text[textCounter - 1].style.borderBottom = 'none';
  } else {
    $text[textCounter].style.color = 'red';
    $text[textCounter].style.borderBottom = 'thick solid red';
  }
  if ($text[$text.length - 1].style.color === 'limegreen') {
    $accuracy.textContent += 'Your accuracy is: ' + Math.floor(textCounter / accuracy * 100) + '%';
    $complete.className = 'complete';
  }
}

function reset(event) {
  $complete.className += ' hidden';
  for (let i = 0; i < $text.length; i++) {
    $text[i].style.color = '#020202';
  }
  textCounter = 0;
  accuracy = 0;
  $accuracy.textContent = '';
  $text[textCounter].style.borderBottom = 'thick solid #020202';
}
