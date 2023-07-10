function validateForm() {
  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;

  if (firstName === "" || lastName === "" || email === "" || phone === "") {
    alert("Пожалуйста, заполните все поля формы.");
    return false;
  }

  // Проверка правильного формата номера телефона (10 цифр)
  var phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Пожалуйста, введите правильный номер телефона (10 цифр).");
    return false;
  }
  // Проверка префикса номера телефона на принадлежность к гео-региону Украины
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
  var phoneNumberPrefix = phone.substring(0, 3);
  if (ukrainePrefixes.includes(phoneNumberPrefix)) {
    alert("Пожалуйста, введите номер телефона не из Украины.");
    return false;
  }

  // Проверка правильного формата почты
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Пожалуйста, введите правильный адрес электронной почты.");
    return false;
  }

  return true;
}
