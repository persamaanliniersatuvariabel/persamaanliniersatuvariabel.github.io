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

  function benar2(){
    var himpunan5 = document.getElementById("bahas5");
    var bhim2 = document.getElementById("salah2");
    bhim2.className += " hilang";
    document.getElementById("icon3").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan5.className = himpunan5.className.replace("hilang","");
  }
  function salah2(){
    var himpunan6 = document.getElementById("bahas6");
    var him2 = document.getElementById("benar2");
    him2.className += " hilang";
    document.getElementById("icon3").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan6.className = himpunan6.className.replace("hilang","");
  }

  function benar3(){
    var himpunan7 = document.getElementById("bahas7");
    var bhim3 = document.getElementById("salah3");
    bhim3.className += " hilang";
    document.getElementById("icon4").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan7.className = himpunan7.className.replace("hilang","");
  }
  function salah3(){
    var himpunan8 = document.getElementById("bahas8");
    var him3 = document.getElementById("benar3");
    him3.className += " hilang";
    document.getElementById("icon4").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan8.className = himpunan8.className.replace("hilang","");
  }

  function benar4(){
    var himpunan9 = document.getElementById("bahas9");
    var bhim4 = document.getElementById("salah4");
    bhim4.className += " hilang";
    document.getElementById("icon5").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan9.className = himpunan9.className.replace("hilang","");
  }
  function salah4(){
    var himpunan10 = document.getElementById("bahas10");
    var him4 = document.getElementById("benar4");
    him4.className += " hilang";
    document.getElementById("icon5").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan10.className = himpunan10.className.replace("hilang","");
  }

  function benar5(){
    var himpunan11 = document.getElementById("bahas11");
    var bhim5 = document.getElementById("salah5");
    bhim5.className += " hilang";
    document.getElementById("icon6").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan11.className = himpunan11.className.replace("hilang","");
  }
  function salah5(){
    var himpunan12 = document.getElementById("bahas12");
    var him5 = document.getElementById("benar5");
    him5.className += " hilang";
    document.getElementById("icon6").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan12.className = himpunan12.className.replace("hilang","");
  }

  function benar6(){
    var himpunan13 = document.getElementById("bahas13");
    var bhim6 = document.getElementById("salah6");
    bhim6.className += " hilang";
    document.getElementById("icon7").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan13.className = himpunan13.className.replace("hilang","");
  }
  function salah6(){
    var himpunan14 = document.getElementById("bahas14");
    var him6 = document.getElementById("benar6");
    him6.className += " hilang";
    document.getElementById("icon7").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan14.className = himpunan14.className.replace("hilang","");
  }

  function benar7(){
    var himpunan15 = document.getElementById("bahas15");
    var bhim7 = document.getElementById("salah7");
    bhim7.className += " hilang";
    document.getElementById("icon8").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan15.className = himpunan15.className.replace("hilang","");
  }
  function salah7(){
    var himpunan16 = document.getElementById("bahas16");
    var him7 = document.getElementById("benar7");
    him7.className += " hilang";
    document.getElementById("icon8").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan16.className = himpunan16.className.replace("hilang","");
  }

  function benar8(){
    var himpunan17 = document.getElementById("bahas17");
    var bhim8 = document.getElementById("salah8");
    bhim8.className += " hilang";
    document.getElementById("icon9").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan17.className = himpunan17.className.replace("hilang","");
  }
  function salah8(){
    var himpunan18 = document.getElementById("bahas18");
    var him8 = document.getElementById("benar8");
    him8.className += " hilang";
    document.getElementById("icon9").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan18.className = himpunan18.className.replace("hilang","");
  }

  function benar9(){
    var himpunan19 = document.getElementById("bahas19");
    var bhim9 = document.getElementById("salah9");
    bhim9.className += " hilang";
    document.getElementById("icon10").innerHTML = "<img src='benar.jpg' width='15px'>";
    himpunan19.className = himpunan19.className.replace("hilang","");
  }
  function salah9(){
    var himpunan20 = document.getElementById("bahas20");
    var him9 = document.getElementById("benar9");
    him9.className += " hilang";
    document.getElementById("icon10").innerHTML = "<img src='salah.png' width='15px'>";
    himpunan20.className = himpunan20.className.replace("hilang","");
  }

  var y = document.getElementById("tujuan");
  var yy= document.querySelector('.tujuan');

  yy.addEventListener("click",function(){
  y.classList.toggle("hilang");
  })