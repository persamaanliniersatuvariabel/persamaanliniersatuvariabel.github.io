var x = document.getElementById("indikator");
  var xx= document.querySelector('.indikator');

  xx.addEventListener("click",function(){
  x.classList.toggle("hilang");
  })

  var x1 = document.getElementById("ktt");
  var xx1= document.querySelector('.ktt');

  xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
  })

  var x2 = document.getElementById("kv");
  var xx2= document.querySelector('.kv');

  xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
})

/*kumpulan 1*/
function him1(){
  var himpunan1 = document.getElementById("bahas1");
  var himpunan = document.getElementById("himpunan2");
  var bhim = document.getElementById("bhim1");
  bhim.className += " hilang";
  document.getElementById("icon1").innerHTML = "<img src='benar.jpg' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
  himpunan1.className = himpunan1.className.replace("hilang","");
}
function bhim1(){
  var himpunan1 = document.getElementById("bahas1");
  var himpunan = document.getElementById("himpunan2");
  var him = document.getElementById("him1");
  him.className += " hilang";
  document.getElementById("icon1").innerHTML = "<img src='salah.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
  himpunan1.className = himpunan1.className.replace("hilang","");
}

/*kumpulan 2*/
function him2(){
  var himpunan2 = document.getElementById("bahas2");
  var himpunan = document.getElementById("himpunan3");
  var bhim = document.getElementById("bhim2");
  bhim.className += " hilang";
  document.getElementById("icon2").innerHTML = "<img src='salah.png' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
  himpunan2.className = himpunan2.className.replace("hilang","");
}
function bhim2(){
  var himpunan2 = document.getElementById("bahas2");
  var himpunan = document.getElementById("himpunan3");
  var him = document.getElementById("him2");
  him.className += " hilang";
  document.getElementById("icon2").innerHTML = "<img src='benar.jpg' width='15px'>";
  himpunan.className = himpunan.className.replace("hilang","");
  himpunan2.className = himpunan2.className.replace("hilang","");
}

/*kumpulan 3*/
function him3(){
  var himpunan3 = document.getElementById("bahas3");
  var bhim = document.getElementById("bhim3");
  bhim.className += " hilang";
  document.getElementById("icon3").innerHTML = "<img src='benar.jpg' width='15px'>";
  himpunan3.className = himpunan3.className.replace("hilang","");
}
function bhim3(){
  var himpunan3 = document.getElementById("bahas3");
  var him = document.getElementById("him3");
  him.className += " hilang";
  document.getElementById("icon3").innerHTML = "<img src='salah.png' width='15px'>";
  himpunan3.className = himpunan3.className.replace("hilang","");
}

//petunjuk
function ubah1_1(){
  var nama = document.getElementById("h11");
  nama.className += "tebalbiru";
}
function ubah1_2(){
  var syarat = document.getElementById("h12");
  syarat.className += "tebalbiru";
}
function ubah1_3(){
  var syarat1 = document.getElementById("h13");
  syarat1.className += "tebalbiru";
}
//cek jawaban
function cek1(){
  var var1 = document.getElementById("var1");
  var ang1 = document.getElementById("ang1");
  var ang2 = document.getElementById("ang2");
  var ulang = document.getElementById("ulang1");
  var bahasbnr = document.getElementById("bahasbnr1");
  var bahasslh = document.getElementById("bahasslh1");


  //cek
  if(var1.value=="n" && ang1.value=="7" && ang2.value=="15"){
    document.getElementById("icon1").innerHTML = "<img src='benar.jpg' width='15px'>";
    bahasbnr.className += "tampil";
    document.getElementById('lanjut1').className = document.getElementById('lanjut1').className.replace('hilang','');
  } else{
    ulang.className += " tampil";
    document.getElementById("icon1").innerHTML = "<img src='salah.png' width='15px'>";
    bahasslh.className += "tampil";
  }

  if(var1.value=="" || ang1.value=="" || ang2.value==""){
    alert("Ups! Jawabanmu masih belum lengkap");
  }

  //boxmerah
  if(var1.value!="n"){
    var1.className += " boxmerah";
  }
  if(ang1.value!="7"){
    ang1.className += " boxmerah";
  }
  if(ang2.value!="15"){
    ang2.className += " boxmerah";
  }
}

//ulang
function ulang1(){
  var nama = document.getElementById("h11");
  var syarat = document.getElementById("h12");
  var syarat1 = document.getElementById("h13");
  var var1 = document.getElementById("var1");
  var ang1 = document.getElementById("ang1");
  var ang2 = document.getElementById("ang2");
  var ulang = document.getElementById("ulang1");
  var bahasslh = document.getElementById("bahasslh1");

  nama.className = nama.className.replace("tebalbiru","");
  syarat.className = syarat.className.replace("tebalbiru","");
  syarat1.className = syarat1.className.replace("tebalbiru","");
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

//no2
//petunjuk
function ubah2_1(){
  var nama = document.getElementById("h21");
  nama.className += "tebalbiru";
}
function ubah2_2(){
  var syarat = document.getElementById("h22");
  syarat.className += "tebalbiru";
}
function ubah2_3(){
  var syarat1 = document.getElementById("h23");
  syarat1.className += "tebalbiru";
}
//cek jawaban
function cek2(){
  var var01 = document.getElementById("var01");
  var ang01 = document.getElementById("ang01");
  var ang02 = document.getElementById("ang02");
  var ulang = document.getElementById("ulang2");
  var bahasbnr = document.getElementById("bahasbnr2");
  var bahasslh = document.getElementById("bahasslh2");


  //cek
  if(var01.value=="y" && ang01.value=="7" && ang02.value=="3"){
    document.getElementById("icon2").innerHTML = "<img src='benar.jpg' width='15px'>";
    bahasbnr.className += "tampil";
  } else{
    ulang.className += " tampil";
    document.getElementById("icon2").innerHTML = "<img src='salah.png' width='15px'>";
    bahasslh.className += "tampil";
  }

  if(var01.value=="" || ang01.value=="" || ang02.value==""){
    alert("Ups! Jawabanmu masih belum lengkap");
  }

  //boxmerah
  if(var01.value!="y"){
    var01.className += " boxmerah";
  }
  if(ang01.value!="7"){
    ang01.className += " boxmerah";
  }
  if(ang02.value!="3"){
    ang02.className += " boxmerah";
  }
}

//ulang
function ulang2(){
  var nama = document.getElementById("h21");
  var syarat = document.getElementById("h22");
  var syarat1 = document.getElementById("h23");
  var var1 = document.getElementById("var01");
  var ang1 = document.getElementById("ang01");
  var ang2 = document.getElementById("ang02");
  var ulang = document.getElementById("ulang2");
  var bahasslh = document.getElementById("bahasslh2");

  nama.className = nama.className.replace("tebalbiru","");
  syarat.className = syarat.className.replace("tebalbiru","");
  syarat1.className = syarat1.className.replace("tebalbiru","");
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

