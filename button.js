var x1 = document.getElementById("kd");
  var xx1= document.querySelector('.kd');

  xx1.addEventListener("click",function(){
  x1.classList.toggle("hilang");
  })

  var x2 = document.getElementById("pk");
  var xx2= document.querySelector('.pk');

  xx2.addEventListener("click",function(){
  x2.classList.toggle("hilang");
})

let petunjuknya = document.querySelectorAll('.petunjuk');
let isinya = document.querySelectorAll('.isinya');
for (let i = 0; i < petunjuknya.length; i++) {
    petunjuknya[i].addEventListener('click', function () {
        if (isinya[i].className.indexOf('hilang') == -1) {
            isinya[i].className += ' hilang';
        } else {
            isinya[i].className = isinya[i].className.replace('hilang', '');
        }
    })
}
