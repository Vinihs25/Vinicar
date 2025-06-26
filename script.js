

//carrosel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Scroll reveal

window.revelar = ScrollReveal({reset:true});

revelar.reveal('.home',{ 
    duration: 2000,
    distance: '90px',
    origin: 'bottom'

});

revelar.reveal('.top', {
    duration: 2200,
    distance: '150px',
    origin: 'left'

});


revelar.reveal('.review', {
    duration: 2000,
    distance: '120px',
    origin: 'right'

});

revelar.reveal('.about', {
    duration: 2000,
    distance: '120px',
    origin: 'bottom'

});


//menu hamburg

const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });



