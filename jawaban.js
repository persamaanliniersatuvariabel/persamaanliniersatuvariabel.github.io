// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDQhkrFFaD8E7rPtIPojOEhgBEZIVhC7nc",
    authDomain: "sitiaisyah29-908bf.firebaseapp.com",
    databaseURL: "https://sitiaisyah29-908bf-default-rtdb.firebaseio.com",
    projectId: "sitiaisyah29-908bf",
    storageBucket: "sitiaisyah29-908bf.appspot.com",
    messagingSenderId: "116183119026",
    appId: "1:116183119026:web:fc997b43ef6f0028ed85ab",
    measurementId: "G-Y0FYEEWYP7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  let kmplanId = [];


  let kuisnya = document.getElementById('kuis');
  
  
  let tmp = document.querySelector('.disini');
  tmp.innerHTML = "";
  kelasnya = document.getElementById('kelas');
  // sekolah = document.getElementById('sekolah');
  let kelasfix = '';
  // let sekolahfix = '';
  
  let cek11 = 0;
  kuisfix = kuisnya.value;
  
  
  function readlah() {
      kuisfix = kuisnya.value;
      console.log(kuisfix);
      var task = firebase.database().ref(kuisfix);
  
      tmp.innerHTML = "";
      if (kelasnya.value == "1") {
          kelasfix = "IX A";
      } else if (kelasnya.value == "2") {
          kelasfix = "IX B";
      } else if (kelasnya.value == "3") {
          kelasfix = "IX C";
      } else if (kelasnya.value == "4") {
          kelasfix = "IX D";
      } else if (kelasnya.value == "5") {
          kelasfix = "IX E";
      } else if (kelasnya.value == "6") {
          kelasfix = "IX F";
      } 
  
      // if (sekolah.value == "1") {
      //     sekolahfix = "SMPN";
      // } else if (sekolah.value == "2") {
      //     sekolahfix = "SMP Negeri";
      // }
  
  
      let jwbfixx = [];
  
      let jwb1 = ["d", "d", "d", "b", "a", "a", "c", "a", "a", "b"];
      if (kuisfix == "kuis1/") {
          let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
          for (let i = 0; i < jwb1.length; i++) {
              hhh += `<td class="table-info"> ${jwb1[i]}</td>`;
          }
          hhh += `</tr>`;
          tmp.innerHTML += hhh;
          jwbfixx = jwb1;
      }
  
      let jwb2 = ["b", "c", "c", "b", "a", "a", "a", "b", "b", "b"];
      if (kuisfix == "kuis2/") {
          let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
          for (let i = 0; i < jwb2.length; i++) {
              hhh += `<td class="table-info"> ${jwb2[i]}</td>`;
          }
          hhh += `</tr>`;
          tmp.innerHTML += hhh;
          jwbfixx = jwb2;
      }
  
      let evaluasi = ["b", "d", "c", "a", "c", "b", "a", "d", "b", "c", "b", "a", "b", "a", "d", "a", "d", "c", "b", "a"];
      if (kuisfix == "evaluasi/") {
          let hhh = `<tr><td class="table-info  tulis" colspan="2">Kunci Jawaban </td>`;
          for (let i = 0; i < evaluasi.length; i++) {
              hhh += `<td class="table-info"> ${evaluasi[i]}</td>`;
          }
          hhh += `</tr>`;
          tmp.innerHTML += hhh;
          jwbfixx = evaluasi;
      }
  
      if (kelasfix != '') {
          task.orderByChild("nama").on("child_added", function (data) {
              // task.on("child_added", function (data) {
              var taskvalue = data.val();
  
              if (kelasfix == taskvalue.kelas) {
                  let mm = '';
                  mm = `<tr><td >${taskvalue.nama}</td><td >${taskvalue.nilai}</td>`;
                  // console.log(taskvalue.jawabsiswa[0]);
  
  
                  for (let i = 0; i < jwbfixx.length; i++) {
                      if (taskvalue.jawabsiswa[i] == jwbfixx[i]) {
                          mm += `<td class="benar">${taskvalue.jawabsiswa[i]}</td>`;
                      } else {
                          mm += `<td class="salah">${taskvalue.jawabsiswa[i]}</td>`;
                      }
                  }
                  mm += `</tr>`;
                  tmp.innerHTML += mm;
              }
  
          });
  
      } else {
          alert('Tentukan filter pencarian');
      }
  
  }
  
  window.onload = function () {
      kelasnya = document.getElementById('kelas');
      // sekolah = document.getElementById('sekolah');
      kuis = document.getElementById('kuis');
      kelasnya.value = value = "0";
      // sekolah.value = value = "0";
      // kuis.value = value = "kuis1/";
  }
  
  // download data
  
  let download = document.querySelector('.download');
  download.addEventListener('click', function () {
      var data_type = 'data:application/vnd.ms-excel';
      var table_div = document.getElementById('table_wrapper');
      var table_html = table_div.outerHTML.replace(/ /g, '%20');
  
      var a = document.createElement('a');
      a.href = data_type + ', ' + table_html;
      a.download = 'exported_table_' + Math.floor((Math.random() * 9999999) + 1000000) + '.xls';
      a.click();
  })