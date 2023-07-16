document.addEventListener('DOMContentLoaded', function () {
  
    // Hidden inputs init
    let date = new Date();
    let TimeZone = date.getTimezoneOffset() / 60;
    TimeZone = (Math.sign(TimeZone) == -1) ? TimeZone.toString().replace('-', '') : '-'+ TimeZone;
    document.querySelectorAll('[name="timezone"]').forEach(function(item) {
      item.value = TimeZone;
    });
    
    let lang = (navigator.language || navigator.userLanguage);
    console.log(lang);
    document.querySelectorAll('[name="lang"]').forEach(function(item) {
      item.value = lang;
    });
    
    })
    