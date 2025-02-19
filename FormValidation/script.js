var nameError = document.querySelector(".name_error");
var EmailError = document.querySelector(".email_error");
var PhoneError = document.querySelector(".phone_error ");
var MessageError = document.querySelector(".Message_error");
var SubmiteError = document.querySelector(".submit_error");


function validateName() {
  var name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = "valid";
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone-name").value;
  if (phone.length == 0) {
    PhoneError.innerHTML = "phone is required";
    return false;
  }
  if (phone.length !== 10) {
    PhoneError.innerHTML = "phone number should be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    PhoneError.innerHTML = "only digits";
    return false;
  }
  PhoneError.innerHTML = "valid";
  return true;
}

function validateEmail() {
  var email = document.getElementById("email-name").value;

  if (email.length == 0) {
    EmailError.innerHTML = "phone is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    EmailError.innerHTML = "not valid email";
    return false;
  }
  EmailError.innerHTML = "valid";
  return true;

}

function validateMessage() {
  var message = document.getElementById("message-name").value;
  if (message.length == 0) {
    MessageError.innerHTML = "message is required";
    return false;
  }
  if (!message.match()) {
    MessageError.innerHTML = "not valid email";
    return false;
  }
  MessageError.innerHTML = "valid";
  return true;

}

function validateForm(){
 
  if(!validateName() || !validateEmail() || !validateMessage() || !validatePhone()){
    SubmiteError.computedStyleMap.display ="block";

    SubmiteError.innerHTML = 'Please fix error.. '

    return false
  }
}
