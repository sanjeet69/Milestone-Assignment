 const loginForm = document.getElementById('loginForm');
 const  inputemail = document.getElementById('email');
 const  inputpassword = document.getElementById('password');
 const  validationMessage = document.getElementById('validationMessage');

 loginForm.addEventListener('submit', function (event) {
  event.preventDefault();


  const email = inputemail.value;
  const password =  inputpassword.value;

  if(validateEmail(email) && validatePassword(password)) {
    validationMessage.textContent = 'Valid email and password!'
    validationMessage.style.color =  'green';
  }else {
    validationMessage.textContent = 'Invalid email or password!';
    validationMessage.style.color = 'red';
  }
 });

 function validateEmail(email){
  return email.includes('@');
 }

 function validatePassword(password){
  return password.length >=8;
 }