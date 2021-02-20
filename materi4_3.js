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
 
 /*drag and drop*/
 function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

/*soal 1*/
function ceka(){
  var jawab = document.getElementById("no1").innerText;
  var p1 = document.getElementById("p11").innerText;
  var ulang = document.getElementById("ulanga");
  var bahasbnr = document.getElementById("bahasbnra");
  var bahasslh = document.getElementById("bahasslha");
  //cek
  if(jawab==p1){
    document.getElementById("icona").innerHTML = "<img src='benar.jpg' style='width:15px'>";
    bahasbnr.className += "tampil";
  } else if(jawab==""){
    alert("Jawabanmu masih kosong!");
  } else{
    ulang.className += "tampil";
    document.getElementById("icona").innerHTML = "<img src='salah.png' style='width:15px'>";
    bahasslh.className += "tampil";
  }
}
function ulanga(){
  var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p11' class='pilihan'>{1, 2, 3, 4, 5}</td>";
  var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p12' class='pilihan'>{1, 2, 3, 4}</td>";
  var ulang = document.getElementById("ulanga");
  var bahasslh = document.getElementById("bahasslha");
  //menghapus semua
  document.getElementById("no1").innerHTML="";
  document.getElementById("pil1").innerHTML = pil1 + pil2 ;
  document.getElementById("icona").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

/*soal 2*/
function cekb(){
  var jawab = document.getElementById("no2").innerText;
  var p2 = document.getElementById("p14").innerText;
  var ulang = document.getElementById("ulangb");
  var bahasbnr = document.getElementById("bahasbnrb");
  var bahasslh = document.getElementById("bahasslhb");
  //cek
  if(jawab==p2){
    document.getElementById("iconb").innerHTML = "<img src='benar.jpg' style='width:15px'>";
    bahasbnr.className += "tampil";
  } else if(jawab==""){
    alert("Jawabanmu masih kosong!");
  } else{
    ulang.className += "tampil";
    document.getElementById("iconb").innerHTML = "<img src='salah.png' style='width:15px'>";
    bahasslh.className += "tampil";
  }
}
function ulangb(){
  var pil3 = "<td draggable='true' ondragstart='drag(event)' id='p13' class='pilihan'>{1, 2, 3,}</td>";
  var pil4 = "<td draggable='true' ondragstart='drag(event)' id='p14' class='pilihan'>{1, 2, 3, 4, 5}</td>";
  var ulang = document.getElementById("ulangb");
  var bahasslh = document.getElementById("bahasslhb");
  //menghapus semua
  document.getElementById("no2").innerHTML="";
  document.getElementById("pil4").innerHTML = pil3 + pil4 ;
  document.getElementById("iconb").innerHTML = "";
  ulang.className = ulang.className.replace("tampil", "");
  bahasslh.className = bahasslh.className.replace("tampil", "");
}

function info() {
    var popup = document.getElementById("infovar");
    popup.classList.toggle("show");
  }
  //memunculkan variabel
  let variabel = document.getElementById('var1');

  function info1() {
    var popup1 = document.getElementById("infoth");
    popup1.classList.toggle("show1");
  }
  //memunculkan tandahubung
  let tandahubung = document.getElementById('ang1');

  function info2() {
    var popup2 = document.getElementById("infokon");
    popup2.classList.toggle("show2");
  }
  //memunculkan konstanta
  let konstanta = document.getElementById('ang2');
  
 //cek jawaban
function cek1(){
    var var1 = document.getElementById("var1");
    var ang1 = document.getElementById("ang1");
    var ang2 = document.getElementById("ang2");
    var ulang = document.getElementById("ulang1");
    var bahasbnr = document.getElementById("bahasbnr1");
    var bahasslh = document.getElementById("bahasslh1");
  
    //mengecek apakah variabel yang dimasukkan angka
    var numbers = /^[-+]?[0-9]+$/;
    if (var1.value.match(numbers)){
      var x = 0;
      document.getElementById("ket").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
      document.getElementById("ket").style.color = "red";
    }
  
    //mengecek apakah variabel yang dimasukkan huruf kapital
    var capital = /^[A-Z]/;
    if (var1.value.match(capital)){
      var y = 0;
      document.getElementById("ket").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
      document.getElementById("ket").style.color = "red";
    }
  
    //cek
    if(x!=0 && y!==0 && ang1.value==">" && ang2.value=="-5"){
      document.getElementById("icon1").innerHTML = "<img src='benar.jpg' width='15px'>";
      bahasbnr.className += "tampil";
      document.getElementById('ket').innerHTML = var1.value;
    } else{
      ulang.className += "tampil";
      document.getElementById("icon1").innerHTML = "<img src='salah.png' width='15px'>";
      bahasslh.className += "tampil";
    }
  
    if(var1.value=="" || ang1.value=="" || ang2.value==""){
      alert("Ups! Jawabanmu masih belum lengkap");
    }
  
    //boxmerah
    if(x==0 || y==0 || var1.value==""){
        var1.className += " boxmerah";
      }
    if(ang1.value!=">"){
      ang1.className += " boxmerah";
    }
    if(ang2.value!="-5"){
      ang2.className += " boxmerah";
    }
  }
  
  //ulang
  function ulang1(){
    var var1 = document.getElementById("var1");
    var ang1 = document.getElementById("ang1");
    var ang2 = document.getElementById("ang2");
    var ulang = document.getElementById("ulang1");
    var bahasslh = document.getElementById("bahasslh1");
  
    var1.value = "";
    ang1.value = "";
    ang2.value = "";
    var1.className = var1.className.replace("boxmerah","");
    ang1.className = ang1.className.replace("boxmerah","");
    ang2.className = ang1.className.replace("boxmerah","");
    ulang.className = ulang.className.replace("tampil", "");
    document.getElementById("icon1").innerHTML = "";
    bahasslh.className = bahasslh.className.replace("tampil", "");
  }
  
//   soal2
// latihan

 //cek jawaban
function cek2(){
    var var2 = document.getElementById("var2");
    var ang3 = document.getElementById("ang3");
    var ang4 = document.getElementById("ang4");
    var ulang = document.getElementById("ulang2");
    var bahasbnr = document.getElementById("bahasbnr2");
    var bahasslh = document.getElementById("bahasslh2");
  
    //mengecek apakah variabel yang dimasukkan angka
    var numbers = /^[-+]?[0-9]+$/;
    if (var2.value.match(numbers)){
      var x = 0;
      document.getElementById("ket1").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
      document.getElementById("ket1").style.color = "red";
    }
  
    //mengecek apakah variabel yang dimasukkan huruf kapital
    var capital = /^[A-Z]/;
    if (var2.value.match(capital)){
      var y = 0;
      document.getElementById("ket1").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
      document.getElementById("ket1").style.color = "red";
    }
  
    //cek
    if(x!=0 && y!==0 && ang3.value==">" && ang4.value=="-3"){
      document.getElementById("icon2").innerHTML = "<img src='benar.jpg' width='15px'>";
      bahasbnr.className += "tampil";
      document.getElementById('ket1').innerHTML = var2.value;
    } else{
      ulang.className += "tampil";
      document.getElementById("icon2").innerHTML = "<img src='salah.png' width='15px'>";
      bahasslh.className += "tampil";
    }
  
    if(var2.value=="" || ang3.value=="" || ang4.value==""){
      alert("Ups! Jawabanmu masih belum lengkap");
    }
  
    //boxmerah
    if(x==0 || y==0 || var2.value==""){
        var2.className += " boxmerah";
      }
    if(ang3.value!=">"){
      ang3.className += " boxmerah";
    }
    if(ang4.value!="-3"){
      ang4.className += " boxmerah";
    }
  }
  
  //ulang
  function ulang2(){
    var var2 = document.getElementById("var2");
    var ang3 = document.getElementById("ang3");
    var ang4 = document.getElementById("ang4");
    var ulang = document.getElementById("ulang2");
    var bahasslh = document.getElementById("bahasslh2");
  
    var2.value = "";
    ang3.value = "";
    ang4.value = "";
    var2.className = var2.className.replace("boxmerah","");
    ang3.className = ang3.className.replace("boxmerah","");
    ang4.className = ang4.className.replace("boxmerah","");
    ulang.className = ulang.className.replace("tampil", "");
    document.getElementById("icon2").innerHTML = "";
    bahasslh.className = bahasslh.className.replace("tampil", "");
  }
  
  //   soal3
// latihan

 //cek jawaban
function cek3(){
  var var3 = document.getElementById("var3");
  var ang5 = document.getElementById("ang5");
  var ang6 = document.getElementById("ang6");
  var ulang = document.getElementById("ulang3");
  var bahasbnr = document.getElementById("bahasbnr3");
  var bahasslh = document.getElementById("bahasslh3");

  //mengecek apakah variabel yang dimasukkan angka
  var numbers = /^[-+]?[0-9]+$/;
  if (var3.value.match(numbers)){
    var x = 0;
    document.getElementById("ket2").innerHTML = "Variabel di isi dengan huruf. Bukan dengan angka.";
    document.getElementById("ket2").style.color = "red";
  }

  //mengecek apakah variabel yang dimasukkan huruf kapital
  var capital = /^[A-Z]/;
  if (var3.value.match(capital)){
    var y = 0;
    document.getElementById("ket2").innerHTML = "Variabel di isi dengan huruf kecil. Bukan huruf kapital.";
    document.getElementById("ket2").style.color = "red";
  }

  //cek
  if(x!=0 && y!==0 && ang5.value==">" && ang6.value=="-2"){
    document.getElementById("icon3").innerHTML = "<img src='benar.jpg' width='15px'>";
    bahasbnr.className += "tampil";
    document.getElementById('ket2').innerHTML = var3.value;
  } else{
    ulang.className += "tampil";
    document.getElementById("icon3").innerHTML = "<img src='salah.png' width='15px'>";
    bahasslh.className += "tampil";
  }

  if(var3.value=="" || ang5.value=="" || ang6.value==""){
    alert("Ups! Jawabanmu masih belum lengkap");
  }

  //boxmerah
  if(x==0 || y==0 || var3.value==""){
      var3.className += " boxmerah";
    }
  if(ang5.value!=">"){
    ang5.className += " boxmerah";
  }
  if(ang6.value!="-2"){
    ang6.className += " boxmerah";
  }
}

//ulang
function ulang3(){
  var var3 = document.getElementById("var3");
  var ang5 = document.getElementById("ang5");
  var ang6 = document.getElementById("ang6");
  var ulang = document.getElementById("ulang3");
  var bahasslh = document.getElementById("bahasslh3");

  var3.value = "";
  ang5.value = "";
  ang6.value = "";
  var3.className = var3.className.replace("boxmerah","");
  ang5.className = ang5.className.replace("boxmerah","");
  ang6.className = ang6.className.replace("boxmerah","");
  ulang.className = ulang.className.replace("tampil", "");
  document.getElementById("icon3").innerHTML = "";
  bahasslh.className = bahasslh.className.replace("tampil", "");
}
