// diaporama manuel
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//  Diaporama automatique
let slideIndexAuto = 0;
      showSlideAuto();
      function currentSlideAuto(n) {
        showSlideAuto((slideIndexAuto = n));
      }
    //   function plusSlideAuto(n) {
    //     showSlideAuto((slideIndexAuto += n));
    //   }

      function showSlideAuto() {
        let j;
        let slideAuto = document.getElementsByClassName("mySlideAuto");
        for (j = 0; j < slideAuto.length; j++) {
          slideAuto[j].style.display = "none";
        }
        slideIndexAuto++;
        if (slideIndexAuto > slideAuto.length) {
          slideIndexAuto = 1;
        }
        slideAuto[slideIndexAuto - 1].style.display = "block";
        setTimeout(showSlideAuto, 2000); // Change image every 2 seconds
      }