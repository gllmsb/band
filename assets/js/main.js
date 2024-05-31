
function toggleDropdown() {
  var dropdown = document.getElementById("customDropdown");
  var section = document.getElementById("tour"); 
  var image = document.getElementById("tour-image"); 

  dropdown.classList.toggle("custom-show");

  if (dropdown.classList.contains("custom-show")) {
      dropdown.style.display = "block";
      section.style.marginTop = "180px";
      image.style.marginTop = "180px";
  } else {
      dropdown.style.display = "none";
      section.style.marginTop = "0";
      image.style.marginTop = "0";
  }
}

//!SLIDES
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); 
}

//! FORM VALIDATION
const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const dialog = document.getElementById("dialog");


function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

//! DIALOG
function showDialog() {
  dialog.style.display = "block";
}


function hideDialog() {
  dialog.style.display = "none";
}

//! SUBMISSION
function handleSubmit(event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (!validateEmail(email)) {
    document.getElementById("emailError").textContent = "Please enter a valid email address";
    return;
  }

  document.getElementById("emailError").textContent = "";

  showDialog();

  
  emailInput.value = "";
}

//! EVENT LISTENERS
newsletterForm.addEventListener("submit", handleSubmit);


document.getElementById("closeDialog").addEventListener("click", hideDialog);