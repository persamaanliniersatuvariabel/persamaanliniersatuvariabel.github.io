var y = document.getElementById("tujuan1");
var yy= document.querySelector('.tujuan1');

yy.addEventListener("click",function(){
y.classList.toggle("hilang");
})

$(document).ready(function(){
      $(".contoh2").hide();
      $(".contoh3").hide();
            $(".no1").click(function(){
                  $(".contoh2").hide(0);
                  $(".contoh3").hide(0);
                  $(".contoh1").show(200);
            });
            $(".no2").click(function(){
                  $(".contoh2").show(200);
                  $(".contoh1").hide(0);
                  $(".contoh3").hide(0);
            });
            $(".no3").click(function(){
                  $(".contoh3").show(200);
                  $(".contoh2").hide(0);
                  $(".contoh1").hide(0);
            });
  });

$(document).ready(function(){
    $(".tampil").hide();
    $(".lanjut2").hide();
          $(".lanjut").click(function(){
                $(".tampil").show(500);
                $(".lanjut").hide();
                $(".lanjut2").show(500);
          });
    $(".tampil2").hide();
        $(".lanjut2").click(function(){
            $(".tampil2").show(500);
                $(".lanjut2").hide();
        });
  });
  
  $(document).ready(function(){
    $(".tampill").hide();
    $(".lanjuttt").hide();
          $(".lanjutt").click(function(){
                $(".tampill").show(500);
                $(".lanjutt").hide();
                $(".lanjuttt").show(500);
          });
    $(".tampilll").hide();
          $(".lanjuttt").click(function(){
            $(".tampilll").show(500);
            $(".lanjuttt").hide();
      });
});

$(document).ready(function(){
    $(".tampil01").hide();
    $(".lanjut02").hide();
    $(".lanjut03").hide();
          $(".lanjut01").click(function(){
                $(".tampil01").show(500);
                $(".lanjut01").hide();
                $(".lanjut02").show(500);
          });
    $(".tampil02").hide();
        $(".lanjut02").click(function(){
            $(".tampil02").show(500);
                $(".lanjut02").hide();
                $(".lanjut03").show(500);
        });
    $(".tampil03").hide();
        $(".lanjut03").click(function(){
            $(".tampil03").show(500);
                $(".lanjut03").hide();
        });
  });