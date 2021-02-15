var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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

function benar(){
    document.getElementById('soal').innerHTML="Benar";
    document.getElementById('warna').style.color="green";
  }
  function salah(){
    document.getElementById('soal').innerHTML="Salah, karena ada variabel x yang belum diketahui nilai kebenarannya";
    document.getElementById('warna').style.color="red";
  }

  function benar1(){
    document.getElementById('soal1').innerHTML="Benar";
    document.getElementById('warna1').style.color="green";
  }
  function salah1(){
    document.getElementById('soal1').innerHTML="Salah, karena kalimat diatas bernilai benar (dapat dinyatakan nilai kebenarannya)";
    document.getElementById('warna1').style.color="red";
  }

  function benar2(){
    document.getElementById('soal2').innerHTML="Benar";
    document.getElementById('warna2').style.color="green";
  }
  function salah2(){
    document.getElementById('soal2').innerHTML="Salah, karena ada variabel k yang belum diketahui nilai kebenarannya";
    document.getElementById('warna2').style.color="red";
  }

  function benar3(){
    document.getElementById('soal3').innerHTML="Benar";
    document.getElementById('warna3').style.color="green";
  }
  function salah3(){
    document.getElementById('soal3').innerHTML="Salah, karena ada variabel y yang belum diketahui nilai kebenarannya";
    document.getElementById('warna3').style.color="red";
  }

  function benar4(){
    document.getElementById('soal4').innerHTML="Benar";
    document.getElementById('warna4').style.color="green";
  }
  function salah4(){
    document.getElementById('soal4').innerHTML="Salah, karena kalimat diatas bernilai salah (dapat dinyatakan nilai kebenarannya)";
    document.getElementById('warna4').style.color="red";
  }
