export const validationForInput = (arrInput) => {
  arrInput = document.getElementsByTagName('input');
  for (let i = 0 ; i < arrInput.length; i++) {
    if (arrInput[i].type === 'text') {
      if (arrInput[i].length > 0 || arrInput[i].value === ' ' || arrInput[i].charCodeAt === 32) {
        return true;
      } else {
        return false;
      }
    } 
  }
};
export const validation = (input) => {
  if (input.length > 0) {
    return true;
  } else {
    return false;
  }
};

export const isValidEmail = (mail) => { 
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(mail); 
};

