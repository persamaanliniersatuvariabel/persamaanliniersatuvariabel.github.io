//membuat objek ajak
let data = new XMLHttpRequest(); //menangani request dari json 
data.onreadystatechange = function () { //Menentukan Fungsi Handler untuk Event
    var string = " ";
    coba  = [];
    answer = [];


    if (data.readyState == 4 && data.status == 200) { 
        let data = JSON.parse(this.responseText); //parse mengambil data dari json

        for (var x = 0; x < 100; x++) { //untuk merandom soal
            // acak angka dengan batas length.data dan minimum 0
            var xx = Math.floor(Math.random() * data.length) + 0;

            coba.push(xx);
        }
        coba = Array.from(new Set(coba));

        console.log(coba);
        string += "<ol class='soal_no'>";

        for (var x = 0; x < 8; x++) {

            var setdata = coba[x];

            var soal = data[setdata]["soal" + setdata ]["soal"];
            var a = data[setdata]["soal" + setdata]["a"];
            var b = data[setdata]["soal" + setdata]["b"];
            var c = data[setdata]["soal" + setdata]["c"];
            var d = data[setdata]["soal" + setdata]["d"];
            var bnr = data[setdata]["soal" + setdata]["benar"];

        
            answer.push(bnr);


            string+= "<li>";
            string+= "<p>" + soal + "<br>";
            string+= "<p>";
            string+= "<form name=soall" + setdata + "><input id='radiobutton' type='radio' name=soal" + setdata + " value=a > <label for='radiobutton'>" + a + "</label>";
            string+= "<br>";
            string+= "<input id='radiobutton1' type='radio' name=soal" + setdata + " value=b  > <label for='radiobutton1'>" + b + "</label>";
            string+= "<br>";
            string+= "<input id='radiobutton2' type='radio' name=soal" + setdata + " value=c  > <label for='radiobutton2'>" + c + "</label>";
            string+= "<br>";
            string+= "<input  id='radiobutton3' type='radio' name=soal" + setdata + " value=d  > <label for='radiobutton3'>" + d + "</label></form>";
            string+= "<br>";
            string+= "</p>";
            
        }

        string+= "</ol>";
        document.getElementById("randomsoal").innerHTML = string;
        
    }
}
data.open('GET', 'data.json', true);
data.send();

function myFunction() {

    var ttl_salah = 0;
    var ttl_benar = 0;

    for (var x = 0; x < 8; x++) {
        if (coba[x] == 0) {
            var jwb = document.soall0;
        } else if (coba[x] == 1) {
            var jwb = document.soall1;
        } else if (coba[x] == 2) {
            var jwb = document.soall2;
        } else if (coba[x] == 3) {
            var jwb = document.soall3;
        } else if (coba[x] == 4) {
            var jwb = document.soall4;
        } else if (coba[x] == 5) {
            var jwb = document.soall5;
        } else if (coba[x] == 6) {
          var jwb = document.soall6;
        } else if (coba[x] == 7) {
          var jwb = document.soall7;
      }


        if (coba[x] == 0) {
            var jwb = jwb.soal0.value;
        } else if (coba[x] == 1) {
            var jwb = jwb.soal1.value;
        } else if (coba[x] == 2) {
            var jwb = jwb.soal2.value;
        } else if (coba[x] == 3) {
            var jwb = jwb.soal3.value;
        } else if (coba[x] == 4) {
            var jwb = jwb.soal4.value;
        } else if (coba[x] == 5) {
            var jwb = jwb.soal5.value;
        } else if (coba[x] == 6) {
             var jwb = jwb.soal6.value;
        } else if (coba[x] == 7) {
            var jwb = jwb.soal7.value;
        }

        if (jwb == answer[x]) {
            ttl_benar += 1;
        } else {
            ttl_salah += 1;
        }

    }
    var hasil = "Selamat anda berhasil menjawab sebanyak = " + ttl_benar + " dari 8 soal";
    document.getElementById("hasil").innerHTML =  hasil;


}