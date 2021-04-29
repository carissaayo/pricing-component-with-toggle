let toggleBtn = document.querySelector('.switch-btn');
let basicPrice = document.querySelector('#basic li p');
let professionalPrice = document.querySelector("#professional li p");
let masterPrice = document.querySelector("#master li p");

// console.log(price);
toggleBtn.addEventListener('click',(e)=>{
    toggleBtn.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
    basicPrice.textContent = 19.99;
    professionalPrice.textContent = 24.99;
    masterPrice.textContent = 39.99;
  }
  if (!e.target.classList.contains("checked")) {
    basicPrice.textContent = 199.99;
    professionalPrice.textContent = 249.99;
    masterPrice.textContent = 399.99;
  }
})