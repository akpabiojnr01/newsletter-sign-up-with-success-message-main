function submitButton() {
  // parameters
  const body = document.body;
  const email = document.getElementById('email').value;
  if (email === '') {
    document.getElementById('email').style.border = '1px solid red'
    document.getElementById('email').style.color = 'red'
    document.getElementById('error-message').style.display = 'flex'
  } else {
    body.innerHTML = `
  <div id="successBody">
    <img class="picture" src="assets/images/icon-success.svg">
    <h1>Thanks for subscribing!</h1>
    <p>A confirmation email has been sent to <b>${email}</b>. Please open it and click the button inside to confirm your subscription</p>
    <button id="btn" onclick="returnForm()">Dismiss message</button>
  </div>
`
  }
}
function returnForm() {
  document.body.innerHTML = `
  <div class="container" id="container">
  <div class="padding">
    <div class="sign-up-form">
      <div class="title">
        <h1 class="bold">Stay updated!</h1>
      </div>
      <div class="paragraph">
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>
      <div class="list">
        <ul>
          <li><img src="assets/images/icon-list.svg">Product discovery and building what matters</li>
          <li><img src="assets/images/icon-list.svg">Measuring to ensure updates are a success</li>
          <li><img src="assets/images/icon-list.svg">And much more!</li>
        </ul>
      </div> 
      <div class="form">
        <div class="label-2">
          <label for="Email" id="label">Email address</label>
          <p id="error-message">Valid email required</p>
        </div>  
        <input type="email" name="email" id="email" placeholder="email@company.com">
        <button type="submit" id="btn" onclick="submitButton()">Subscribe to monthly newsletter</button>
      </div>  
    </div>
    <div class="image">
      <img src="assets/images/illustration-sign-up-desktop.svg" id="image" alt="Some Image">
      <img src="assets/images/illustration-sign-up-mobile.svg" class="image-2" alt="Some Image">
    </div>
  </div>
</div>  
  `
}

