var y = document.getElementById("tujuan");
var yy= document.querySelector('.tujuan');

yy.addEventListener("click",function(){
y.classList.toggle("hilang");
})

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
  function cek1(){
    var jwb = document.getElementById("no1").innerText;
    var p1 = document.getElementById("p11").innerText;
    var ulang = document.getElementById("ulang1");
    var bahasbnr = document.getElementById("bahasbnr1");
    var bahasslh = document.getElementById("bahasslh1");
    //cek
    if(jwb == p1){
      document.getElementById("icon1").innerHTML = "<img src='benar.jpg' style='width:15px'>";
      bahasbnr.className += "tampil";
    } else if(jwb==""){
      alert("Jawabanmu masih kosong!");
    }else{
      ulang.className += "tampil";
      document.getElementById("icon1").innerHTML = "<img src='salah.png' style='width:15px'>";
      bahasslh.className += "tampil";
    }
  }
  function ulang1(){
    var pil1 = "<td draggable='true' ondragstart='drag(event)' id='p11' class='pilihan'>6</td>";
    var pil2 = "<td draggable='true' ondragstart='drag(event)' id='p12' class='pilihan'>7</td>";
    var pil3 = "<td draggable='true' ondragstart='drag(event)' id='p13' class='pilihan'>8</td>";
    var pil4 = "<td draggable='true' ondragstart='drag(event)' id='p14' class='pilihan'>9</td>";
    var pil5 = "<td draggable='true' ondragstart='drag(event)' id='p15' class='pilihan'>10</td>";
    var ulang = document.getElementById("ulang1");
    var bahasslh = document.getElementById("bahasslh1");
    //menghapus semua
    document.getElementById("no1").innerHTML="";
    document.getElementById("pil1").innerHTML = pil1 + pil2 + pil3 + pil4 + pil5 ;
    document.getElementById("icon1").innerHTML = "";
    ulang.className = ulang.className.replace("tampil", "");
    bahasslh.className = bahasslh.className.replace("tampil", "");
  }
  
  /*soal 2*/
  function cek2(){
    var jwb = document.getElementById("no2").innerText;
    var p10 = document.getElementById("p20").innerText;
    var ulang = document.getElementById("ulang2");
    var bahasbnr = document.getElementById("bahasbnr2");
    var bahasslh = document.getElementById("bahasslh2");
    //cek
    if(jwb == p10){
      document.getElementById("icon2").innerHTML = "<img src='benar.jpg' style='width:15px'>";
      bahasbnr.className += "tampil";
    } else if(jwb==""){
      alert("Jawabanmu masih kosong!");
    }else{
      ulang.className += "tampil";
      document.getElementById("icon2").innerHTML = "<img src='salah.png' style='width:15px'>";
      bahasslh.className += "tampil";
    }
  }
  function ulang2(){
    var pil6 = "<td draggable='true' ondragstart='drag(event)' id='p16' class='pilihan'>1</td>";
    var pil7 = "<td draggable='true' ondragstart='drag(event)' id='p17' class='pilihan'>2</td>";
    var pil8 = "<td draggable='true' ondragstart='drag(event)' id='p18' class='pilihan'>3</td>";
    var pil9 = "<td draggable='true' ondragstart='drag(event)' id='p19' class='pilihan'>4</td>";
    var pil10 = "<td draggable='true' ondragstart='drag(event)'id='p20' class='pilihan'>5</td>";
    var ulang = document.getElementById("ulang2");
    var bahasslh = document.getElementById("bahasslh2");
    //menghapus semua
    document.getElementById("no2").innerHTML="";
    document.getElementById("pil10").innerHTML = pil6 + pil7 + pil8 + pil9 + pil10 ;
    document.getElementById("icon2").innerHTML = "";
    ulang.className = ulang.className.replace("tampil", "");
    bahasslh.className = bahasslh.className.replace("tampil", "");
  }
  
  