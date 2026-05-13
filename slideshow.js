let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls (if you add prev/next buttons later)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls (triggered by .work-drop buttons)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("works-content");
  let dots = document.getElementsByClassName("work-drop");
  
  // Wrap around the index
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove "active" class from all navigation buttons
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "flex";
  // Add "active" class to the corresponding button
  dots[slideIndex - 1].className += " active";
}