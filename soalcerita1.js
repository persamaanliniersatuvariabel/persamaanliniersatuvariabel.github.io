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

$(document).ready(function(){
    $(".tampil").hide();
    $(".lanjut2").hide();
    $(".lanjut3").hide();
          $(".lanjut").click(function(){
                $(".tampil").show(500);
                $(".lanjut").hide();
                $(".lanjut2").show(500);
          });
    $(".tampil2").hide();
        $(".lanjut2").click(function(){
            $(".tampil2").show(500);
                $(".lanjut2").hide();
                $(".lanjut3").show(500);
        });

    $(".tampil3").hide();
        $(".lanjut3").click(function(){
            $(".tampil3").show(500);
                $(".lanjut3").hide();
        });
  });

  $(document).ready(function(){
      $(".tampil01").hide();
      $(".lanjut02").hide();
            $(".lanjut01").click(function(){
                  $(".tampil01").show(500);
                  $(".lanjut01").hide();
                  $(".lanjut02").show(500);
            });
      $(".tampil02").hide();
          $(".lanjut02").click(function(){
              $(".tampil02").show(500);
                  $(".lanjut02").hide();
          });
    });