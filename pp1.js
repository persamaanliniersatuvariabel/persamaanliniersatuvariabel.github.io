var y = document.getElementById("tujuan");
 var yy= document.querySelector('.tujuan');

 yy.addEventListener("click",function(){
 y.classList.toggle("hilang");
 })

$(document).ready(function(){
  $(".tampil2").hide();
        $(".lanjut").click(function(){
              $(".tampil2").show(500);
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