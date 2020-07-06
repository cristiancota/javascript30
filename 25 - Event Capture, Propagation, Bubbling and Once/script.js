const divs = document.querySelectorAll('div');

function logText(e){
  console.log(this.classList.value);
  e.stopPropagation(); // this will prevent bubbling
}

divs.forEach(div => div.addEventListener('click', logText)); // will print: three, two, one
// divs.forEach(div => div.addEventListener('click', logText, {capture: true})); // reverses the order of the bubbling one, two, three
// divs.forEach(div => div.addEventListener('click', logText, {once: true})); // once will detach the event from the element 
