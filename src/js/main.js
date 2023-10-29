const phoneNumber = document.getElementById('phoneNumber');
const phoneNumberOp = document.getElementById('phoneNumberOp');

function rangeOnChange(){
  phoneNumberOp.innerHTML = phoneNumber.value.slice(-20);
}

window.onload = function(){
  phoneNumber.addEventListener('input', rangeOnChange);
  phoneNumberOp.innerHTML = phoneNumber.value.slice(-11);
}