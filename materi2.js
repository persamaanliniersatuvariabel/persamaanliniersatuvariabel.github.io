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


function pertama() {
  var x = document.getElementById("input").value;
   var jawaban;
   if (x == "3") {
     jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
   }
   document.getElementById("cek").innerHTML = jawaban;
 }

 function kedua() {
  var x = document.getElementById("input2").value;
   var jawaban;
   if (x == "10") {
    jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
  }
   document.getElementById("ccek").innerHTML = jawaban;
 }

 function ketiga() {
  var x = document.getElementById("input3").value;
   var jawaban;
   if (x == "15") {
    jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
  }
   document.getElementById("cccek").innerHTML = jawaban;
 }