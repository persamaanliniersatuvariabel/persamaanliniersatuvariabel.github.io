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
        string += "<ol class='question_no'>";

        for (var x = 0; x < 8; x++) {

            var setdata = coba[x];

            var soal = data[setdata]["question" + setdata ]["question"];
            var a = data[setdata]["question" + setdata]["choiceA"];
            var b = data[setdata]["questionl" + setdata]["choiceB"];
            var c = data[setdata]["question" + setdata]["choiceC"];
            var d = data[setdata]["question" + setdata]["choiceD"];
            var bnr = data[setdata]["question" + setdata]["correct"];

        
            answer.push(bnr);


            string+= "<li>";
            string+= "<p>" + question + "<br>";
            string+= "<p>";
            string+= "<form name=soall" + setdata + "><input id='radiobutton' type='radio' name=soal" + setdata + " value=a > <label for='radiobutton'>" + choiceA + "</label>";
            string+= "<br>";
            string+= "<input id='radiobutton1' type='radio' name=soal" + setdata + " value=b  > <label for='radiobutton1'>" + choiceB + "</label>";
            string+= "<br>";
            string+= "<input id='radiobutton2' type='radio' name=soal" + setdata + " value=c  > <label for='radiobutton2'>" + choiceC + "</label>";
            string+= "<br>";
            string+= "<input  id='radiobutton3' type='radio' name=soal" + setdata + " value=d  > <label for='radiobutton3'>" + choiceD + "</label></form>";
            string+= "<br>";
            string+= "</p>";
            
        }

        string+= "</ol>";
        document.getElementById("randomsoal").innerHTML = string;
        
    }
}
data.open('GET', 'quiz.json', true);
data.send();

function myFunction() {

    var ttl_salah = 0;
    var ttl_benar = 0;

    for (var x = 0; x < 9; x++) {
        if (coba[x] == 0) {
            var jwb = document.question0;
        } else if (coba[x] == 1) {
            var jwb = document.question1;
        } else if (coba[x] == 2) {
            var jwb = document.question2;
        } else if (coba[x] == 3) {
            var jwb = document.question3;
        } else if (coba[x] == 4) {
            var jwb = document.question4;
        } else if (coba[x] == 5) {
            var jwb = document.question5;
        } else if (coba[x] == 6) {
          var jwb = document.question6;
        } else if (coba[x] == 7) {
          var jwb = document.question7;
        } else if (coba[x] == 8) {
            var jwb = document.question8;
      }


        if (coba[x] == 0) {
            var jwb = jwb.question0.value;
        } else if (coba[x] == 1) {
            var jwb = jwb.question1.value;
        } else if (coba[x] == 2) {
            var jwb = jwb.question2.value;
        } else if (coba[x] == 3) {
            var jwb = jwb.question3.value;
        } else if (coba[x] == 4) {
            var jwb = jwb.question4.value;
        } else if (coba[x] == 5) {
            var jwb = jwb.question5.value;
        } else if (coba[x] == 6) {
             var jwb = jwb.question6.value;
        } else if (coba[x] == 7) {
            var jwb = jwb.question7.value;
        } else if (coba[x] == 8) {
            var jwb = jwb.question8.value;
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