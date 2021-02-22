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
  var himpunan1 = document.getElementById("bahas1");
  var bhim = document.getElementById("salah");
  bhim.className += " hilang";
  document.getElementById("icon1").innerHTML = "<img src='benar.jpg' width='15px'>";
  himpunan1.className = himpunan1.className.replace("hilang","");
}
function salah(){
  var himpunan2 = document.getElementById("bahas2");
  var him = document.getElementById("benar");
  him.className += " hilang";
  document.getElementById("icon1").innerHTML = "<img src='salah.png' width='15px'>";
  himpunan2.className = himpunan2.className.replace("hilang","");
}

function benar1(){
  var himpunan3 = document.getElementById("bahas3");
  var bhim1 = document.getElementById("salah1");
  bhim1.className += " hilang";
  document.getElementById("icon2").innerHTML = "<img src='benar.jpg' width='15px'>";
  himpunan3.className = himpunan3.className.replace("hilang","");
}
function salah1(){
  var himpunan4 = document.getElementById("bahas4");
  var him1 = document.getElementById("benar1");
  him1.className += " hilang";
  document.getElementById("icon2").innerHTML = "<img src='salah.png' width='15px'>";
  himpunan4.className = himpunan4.className.replace("hilang","");
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
   if (x == "-3") {
    jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
  }
   document.getElementById("ccek").innerHTML = jawaban;
 }

 function ketiga() {
  var x = document.getElementById("input3").value;
   var jawaban;
   if (x == "8") {
    jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
  }
   document.getElementById("cccek").innerHTML = jawaban;
 }

var y = document.getElementById("tujuan");
var yy= document.querySelector('.tujuan');

yy.addEventListener("click",function(){
y.classList.toggle("hilang");
})