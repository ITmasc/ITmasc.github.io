var langu;

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    langu = navigator.languages[0];
  } else if (navigator.userLanguage) {
    // IE only
    langu = navigator.userLanguage;
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    langu = navigator.language;
  }
    
document.documentElement.setAttribute('lang', langu);
