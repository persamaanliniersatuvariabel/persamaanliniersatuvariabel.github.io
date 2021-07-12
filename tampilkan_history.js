

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


user = localStorage.getItem("user");
console.log(user)

tmp = document.querySelector('.bg_history');
// tmpl = document.querySelector('.userr');

var task = firebase.database().ref("history");

// task.orderByChild("waktu").on("child_added", function (data) {
task.on("child_added", function (data) {

    var taskvalue = data.val();
   
    if (user == taskvalue.user) {
        tmp.innerHTML += `<div style="border-bottom: 1px solid grey; line-height: 25px;">
        <a href="${taskvalue.url}" target="_blank" style="text-decoration: none; color: black;">
                <span>${taskvalue.nama_halaman}</span>
                <span style="float: right; margin-right: 10px;">${taskvalue.waktu}</span>
                <span style="float: right; margin-right: 15px;">${taskvalue.hari}</span>
        </a>
    </div>`;
    }
    // tmpl.innerHTML +=`<span>${taskvalue.user}</span>`;
});

function goBack() {
  window.history.back()
}