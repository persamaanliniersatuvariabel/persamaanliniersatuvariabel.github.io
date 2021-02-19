var y = document.getElementById("tujuan");
  var yy= document.querySelector('.tujuan');

  yy.addEventListener("click",function(){
  y.classList.toggle("hilang");
  })

$(document).ready(function(){
  $(".tampil").hide();
        $(".lanjut").click(function(){
              $(".tampil").show(500);
              $(".lanjut").hide();
        });
});

$(document).ready(function(){
  $(".tampil1").hide();
        $(".lanjut1").click(function(){
              $(".tampil1").show(500);
              $(".lanjut1").hide();
        });
});

$(document).ready(function(){
  $(".contoh2").hide();
        $(".no1").click(function(){
              $(".contoh2").hide(0);
              $(".contoh1").show(200);
        });
        $(".no2").click(function(){
              $(".contoh2").show(200);
              $(".contoh1").hide(0);
        });
});

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
    document.getElementById('soal').innerHTML="Salah, coba lagi!";
    document.getElementById('warna').style.color="red";
  }

  function benar1(){
    document.getElementById('soal1').innerHTML="Benar";
    document.getElementById('warna1').style.color="green";
  }
  function salah1(){
    document.getElementById('soal1').innerHTML="Salah, coba lagi!";
    document.getElementById('warna1').style.color="red";
  }

  function benar2(){
    document.getElementById('soal2').innerHTML="Benar";
    document.getElementById('warna2').style.color="green";
  }
  function salah2(){
    document.getElementById('soal2').innerHTML="Salah, coba lagi!";
    document.getElementById('warna2').style.color="red";
  }
  
  function pertama() {
  var x = document.getElementById("input").value;
   var jawaban;
   if (x == "10") {
     jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
   }
   document.getElementById("cek").innerHTML = jawaban;
 }

 function kedua() {
  var x = document.getElementById("input2").value;
   var jawaban;
   if (x == "5") {
    jawaban = "Jawaban Anda Benar";
   }else {
     jawaban = "Jawaban Anda Salah, Coba lagi!";
  }
   document.getElementById("ccek").innerHTML = jawaban;
 }