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
     document.getElementById("icon1").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
     document.getElementById("icon1").innerHTML = "<img src='salah.png' width='15px'>";
   }
   document.getElementById("cek").innerHTML = jawaban;
 }

 function kedua() {
  var x = document.getElementById("input2").value;
   var jawaban;
   if (x == "-6") {
    jawaban = "Jawaban Anda Benar";
    document.getElementById("icon2").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
     document.getElementById("icon2").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("ccek").innerHTML = jawaban;
 }

 function ketiga() {
  var x = document.getElementById("input3").value;
   var jawaban;
   if (x == "3") {
    jawaban = "Jawaban Anda Benar";
    document.getElementById("icon3").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
     document.getElementById("icon3").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("cccek").innerHTML = jawaban;
 }

 function keempat() {
  var x = document.getElementById("input4").value;
   var jawaban;
   if (x == "2") {
    jawaban = "Jawaban Anda Benar";
    document.getElementById("icon4").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
     document.getElementById("icon4").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("cekk").innerHTML = jawaban;
 }

 function kelima() {
  var x = document.getElementById("input5").value;
   var jawaban;
   if (x == "8") {
    jawaban = "Jawaban Anda Benar";
    document.getElementById("icon5").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
     document.getElementById("icon5").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("cekkk").innerHTML = jawaban;
 }

var y = document.getElementById("tujuan");
var yy= document.querySelector('.tujuan');

yy.addEventListener("click",function(){
y.classList.toggle("hilang");
})