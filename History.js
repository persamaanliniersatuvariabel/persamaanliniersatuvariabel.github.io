user = localStorage.getItem("user");
console.log(user)

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

  let url = window.location.href;
  let harinya = hari();
  let waktunya = waktu();
  let nama = document.querySelector('title').innerHTML;

  console.log(nama)


// menyimpan ke dalam databasenya
  
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

function createTask(waktunya, hari,url, nama, user) {
    counter += 1;
    var task = {
        waktu: waktunya,
        hari: hari,
        url: url,
        nama_halaman:nama,
        user:user
    }

let database = firebase.database().ref("history/" + counter);
database.set(task);

}

createTask(waktunya, harinya, url, nama, user)