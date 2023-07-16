function validateForm() {
  var firstNameInput = document.getElementById("first_name");
  var lastNameInput = document.getElementById("last_name");
  var emailInput = document.getElementById("email");
  var phoneInput = document.getElementById("phone");

  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var email = emailInput.value;
  var phone = phoneInput.value;

  var isValid = true;

  if (firstName === "") {
    firstNameInput.style.borderColor = "red";
    isValid = false;
  } else {
    firstNameInput.style.borderColor = "green";
  }

  if (lastName === "") {
    lastNameInput.style.borderColor = "red";
    isValid = false;
  } else {
    lastNameInput.style.borderColor = "green";
  }

  if (email === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
    emailInput.style.borderColor = "red";
    isValid = false;
  } else {
    emailInput.style.borderColor = "green";
  }

  // Phone number validation: allow only digits
  phoneInput.value = phone.replace(/\D/g, ""); // Remove non-digit characters from input value

  if (phone === "" || !phone.match(/^\d+$/)) {
    phoneInput.style.borderColor = "red";
    isValid = false;
  } else {
    phoneInput.style.borderColor = "green";
  }

  if (!isValid) {
  }

  var ukrainePrefixes = [
    "066",
    "067",
    "068",
    "096",
    "097",
    "098",
    "050",
    "066",
    "095",
    "099",
  ];
  var phoneNumberPrefix = phoneInput.value.substring(0, 3);
  if (ukrainePrefixes.includes(phoneNumberPrefix)) {
    phoneInput.style.borderColor = "red";
    alert("Программа не принимает граждан Украины.");
    return false;
  }

  return true;
}
