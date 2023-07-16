document.addEventListener("DOMContentLoaded", function () {
  //Hidden input[s] init
  let lang = navigator.language || navigator.userLanguage;
  console.log(lang);
  document.querySelectorAll('[name="lang"]').forEach(function (item) {
    item.value = lang;
  });

  // intlTelInput init
  const inputs = document.querySelectorAll("._phone");
  inputs.forEach((input) => {
    window.intlTelInput(input, {
      dropdownContainer: document.body,
      initialCountry: "auto",
      nationalMode: 1,
      autoPlaceholder: "aggressive",
      allowDropdown: 1,
      formatOnDisplay: 1,
      separateDialCode: 1,
      geoIpLookup: function (callback) {
        fetch(
          "https://api.ipgeolocation.io/ipgeo?apiKey=0c92588331bf449e9f3d3a3d6469e1d4",
          {
            cache: "reload",
          }
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error("Failed: " + response.status);
          })
          .then((ipjson) => {
            console.log("GEOIPLOOKUP SUCCESS");
            countryInputs = document.querySelectorAll('[name="country"]');
            countryInputs.forEach((input) => {
              input.value = ipjson.country_code2;
            });
            callback(ipjson.country_code2);
          })
          .catch((e) => {
            console.log("GEOIPLOOKUP ERROR");
            countryInputs = document.querySelectorAll('[name="country"]');
            countryInputs.forEach((input) => {
              input.value = "AM";
            });
            callback("AM");
          });
      },
      utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.min.js",
    });
  });

  //Event listeners

  document.querySelectorAll("._form").forEach((form) => {
    form.addEventListener("submit", FormSend);
  });

  document.querySelectorAll("._req").forEach((form) => {
    form.addEventListener("focus", inputRemoveError);
  });

  // /**
  //  * @param {Event} e - Form 'submit' event
  //  */
  // async function FormSend(e) {
  //   e.preventDefault();

  //   let leadForm = this;
  //   let error = FormValidate(leadForm);
  //   let formData = new FormData(leadForm);
  //   let phoneInput = document.querySelector("#" + leadForm.id + " ._phone");
  //   let sbmtBtn = document.querySelector("#" + leadForm.id + " ._btn");
  //   let iti = window.intlTelInputGlobals.getInstance(phoneInput);
  //   sbmtBtn.disabled = true;
  //   let fullPhone = iti.getNumber();
  //   let countryData = iti.getSelectedCountryData();
  //   let dialCode = countryData.dialCode;
  //   formData.append("fullPhone", fullPhone);
  //   formData.append("code", dialCode);
  //   let pixel = formData.get("p");

  //   let dataLog = await fetch("log.php", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   if (dataLog.ok) {
  //     console.log("Log is working");
  //   } else {
  //     console.log("Can't make request");
  //   }

  //   if (error === 0) {
  //     let response = await fetch("mail.php", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       console.log(response);
  //       leadForm.reset();
  //       window.location.href = `thanks.php?p=${pixel}`;
  //     } else {
  //       sbmtBtn.disabled = false;
  //       alert("Произошла ошибка, повторите попытку позже.");
  //     }
  //   } else {
  //     sbmtBtn.disabled = false;
  //     return;
  //   }
  // }

  // /**
  //  * @param {Object} form - Form that triggered 'submit' event
  //  */
  // function FormValidate(form) {
  //   let error = 0;
  //   let formReq = form.querySelectorAll("._req");

  //   for (let index = 0; index < formReq.length; index++) {
  //     const input = formReq[index];
  //     formRemoveError(input);

  //     if (input.classList.contains("_name")) {
  //       if (nameTest(input)) {
  //         formAddError(input);
  //         error++;
  //       }
  //     } else if (input.classList.contains("_email")) {
  //       if (emailTest(input)) {
  //         formAddError(input);
  //         error++;
  //       }
  //     } else if (input.classList.contains("_phone")) {
  //       if (phoneTest(input)) {
  //         formAddError(input);
  //         error++;
  //       }
  //     }
  //   }
  //   return error;
  // }

  // HELPERS

  function formAddError(input) {
    // input.parentElement.classList.add('_error');
    input.classList.add("error");
  }

  function formRemoveError(input) {
    // input.parentElement.classList.remove('_error');
    input.classList.remove("error");
  }

  function inputRemoveError(e) {
    let input = this;
    // input.parentElement.classList.remove('_error');
    input.classList.remove("error");
  }

  function nameTest(input) {
    return !/^([a-zA-Z]{2,}(?: [a-zA-Z]+){0,2}|[а-яА-яё]{2,}(?: [а-яА-яё]+){0,2})$/.test(
      input.value.trim()
    ); // EN + IT + RU language
    //return !/^([a-zA-ZáéíÑñóúü]{2,}(?: {1,2}[a-zA-ZáéíÑñóúü]+){0,2})$/.test(input.value.trim()); //ES language
    //return !/^([a-zA-ZÄäÖöÜüẞß]{2,}(?: {1,2}[a-zA-ZÄäÖöÜüẞß]+){0,2})$/.test(input.value.trim()); //DE language
  }

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(
      input.value.trim()
    );
  }

  function phoneTest(input) {
    return !window.intlTelInputGlobals.getInstance(input).isValidNumber();
  }
});
