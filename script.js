document.addEventListener('DOMContentLoaded', function () {
  const emailForm = document.getElementById('emailForm');
  const resultDiv = document.getElementById('successMessage');
  const submittedEmailParagraph = document.getElementById('smallText');
  const submittedMessageParagraph = document.getElementById('bigText');
  const container = document.getElementById('container')

  emailForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  
  submittedEmailParagraph = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`

  submittedMessageParagraph = "Thanks for subscribing!";

  resultDiv.style.display = 'block';
  })
})