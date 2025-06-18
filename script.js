//criamos um objeto chamado "options" com as configurações para o efeito de digitação
const options = {
    //frases que serão exibidas
    strings: [
        "Estoque"

    ],

    typeSpeed: 60, //velocidade de digitação ( em milisegundos por carectere)
    backSpeed: 40, //velocidade em apagar o texto
    loop: true, //faz com que  as frases se repitam indefinidamente
    backDelay: 1500,//Tempo de espera ( em milisegundos) antes de começar a pagar uma frase
    smartBackspace: true//otimiza o apagamento: apaga apenas aos caracteres diferentes da próxima frase
};
//cria uma nova instância do Typed.js
//"#Typed" é o seletor do elemento HTML onde o texto será digitado
//"options" é o objeto com as configurações acima
new Typed("#typed", options);



//carrosel


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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