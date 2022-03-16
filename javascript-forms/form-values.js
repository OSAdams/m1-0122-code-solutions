const $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const messageData = {
    name: $contactForm.name.value,
    email: $contactForm.email.value,
    message: $contactForm.message.value
  };
  console.log('messageData: ', messageData);
  $contactForm.reset();
});
