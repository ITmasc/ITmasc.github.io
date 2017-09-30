// The original script has been taken from here: https://github.com/maxogden/browser-locale
// All the rights belong to its original creator.
var langu;
  if (navigator.languages && navigator.languages.length) {
    langu = navigator.languages[0];
  } else if (navigator.userLanguage) {
    langu = navigator.userLanguage;
  } else {
    langu = navigator.language;
  }
    
document.documentElement.setAttribute('lang', langu);
