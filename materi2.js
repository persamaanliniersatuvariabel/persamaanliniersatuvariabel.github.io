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
  var ulang = document.getElementById("ulang1");
   var jawaban;
   if (x == "3") {
     jawaban = "Jawaban anda benar, penyelesaian dari x + 16 = 19 adalah x = 3";
     document.getElementById("cek").style.color = "green";
     document.getElementById("icon1").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
     ulang.className += "tampil";
     jawaban = "Jawaban anda salah, silahkan tekan tombol ulang";
     document.getElementById("cek").style.color = "red";
     document.getElementById("icon1").innerHTML = "<img src='salah.png' width='15px'>";
   }
   document.getElementById("cek").innerHTML = jawaban;
 }

 function ulang1(){
    var x = document.getElementById("input");
    var ulang = document.getElementById("ulang1");
    
    input.value = "";
    ulang.className = ulang.className.replace("tampil", "");
    document.getElementById("icon1").innerHTML = "";
    document.getElementById("cek").innerHTML = "";
}

 function kedua() {
  var x = document.getElementById("input2").value;
  var ulang = document.getElementById("ulang2");
   var jawaban;
   if (x == "10") {
    jawaban = "Jawaban anda benar, penyelesaian dari y – 8 = 2 adalah x = 10";
    document.getElementById("ccek").style.color = "green";
     document.getElementById("icon2").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
    ulang.className += "tampil";
    jawaban = "Jawaban anda salah, silahkan tekan tombol ulang";
     document.getElementById("ccek").style.color = "red";
     document.getElementById("icon2").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("ccek").innerHTML = jawaban;
 }

 function ulang2(){
  var x = document.getElementById("input2");
  var ulang = document.getElementById("ulang2");
  
  input2.value = "";
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon2").innerHTML = "";
  document.getElementById("ccek").innerHTML = "";
}

 function ketiga() {
  var x = document.getElementById("input3").value;
  var ulang = document.getElementById("ulang3");
   var jawaban;
   if (x == "15") {
    jawaban = "Jawaban anda benar, penyelesaian dari 7 = -8 + a adalah x = 15";
    document.getElementById("cccek").style.color = "green";
     document.getElementById("icon3").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
    ulang.className += "tampil";
    jawaban = "Jawaban anda salah, silahkan tekan tombol ulang";
     document.getElementById("cccek").style.color = "red";
     document.getElementById("icon3").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("cccek").innerHTML = jawaban;
 }

 function ulang3(){
  var x = document.getElementById("input3");
  var ulang = document.getElementById("ulang3");
  
  input3.value = "";
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon3").innerHTML = "";
  document.getElementById("cccek").innerHTML = "";
}

 function keempat() {
  var x = document.getElementById("input4").value;
  var ulang = document.getElementById("ulang4");
   var jawaban;
   if (x == "2") {
    jawaban = "Jawaban anda benar, penyelesaian dari 2x + 1 = 5 adalah x = 2";
    document.getElementById("cekk").style.color = "green";
     document.getElementById("icon4").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
    ulang.className += "tampil";
    jawaban = "Jawaban anda salah, silahkan tekan tombol ulang";
     document.getElementById("cekk").style.color = "red";
     document.getElementById("icon4").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("cekk").innerHTML = jawaban;
 }

 function ulang4(){
  var x = document.getElementById("input");
  var ulang = document.getElementById("ulang4");
  
  input4.value = "";
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon4").innerHTML = "";
  document.getElementById("cekk").innerHTML = "";
}

 function kelima() {
  var x = document.getElementById("input5").value;
  var ulang = document.getElementById("ulang5");
   var jawaban;
   if (x == "21") {
    jawaban = "Jawaban anda benar, penyelesaian dari y/7=3 adalah x = 21";
    document.getElementById("cekkk").style.color = "green";
     document.getElementById("icon5").innerHTML = "<img src='benar.jpg' width='15px'>";
   }else {
    ulang.className += "tampil";
    jawaban = "Jawaban anda salah, silahkan tekan tombol ulang";
     document.getElementById("cekkk").style.color = "red";
     document.getElementById("icon5").innerHTML = "<img src='salah.png' width='15px'>";
  }
   document.getElementById("cekkk").innerHTML = jawaban;
 }

 function ulang5(){
  var x = document.getElementById("input5");
  var ulang = document.getElementById("ulang5");
  
  input5.value = "";
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon5").innerHTML = "";
  document.getElementById("cekkk").innerHTML = "";
}

 var y = document.getElementById("tujuan");
 var yy= document.querySelector('.tujuan');

 yy.addEventListener("click",function(){
 y.classList.toggle("hilang");
 })