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

var task = firebase.database().ref("history");

// task.orderByChild("waktu").on("child_added", function (data) {
task.on("child_added", function (data) {

    var taskvalue = data.val();
   
        tmp.innerHTML += `<tr>
                <td>${taskvalue.user}</td>
                <td><span style="text-decoration: none;">${taskvalue.nama_halaman}</span>
                <span style="float: right;">${taskvalue.waktu}</span>
                <span style="float: right; margin-right: 15px;">${taskvalue.hari}</span></td>
            </tr>`;

});

function searchTable() {
    var input;
    var saring;
    var status; 

    input = document.getElementById("input");
    saring = input.value.toUpperCase();
    var tbody = document.getElementsByTagName("tbody")[0];
    var tr = tbody.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(saring) > -1) {
                status = true;
            }
        }
        if (status) {
            tr[i].style.display = "";
            status = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

// function myFunction() {
//     var input, filter, tr, td, i;
//     input = document.getElementById("mySearch");
//     filter = input.value.toUpperCase();
//     tr = document.getElementById("myMenu");
//     td = tr.getElementsByTagName("td");
//     for (i = 0; i < li.length; i++) {
//         var td = tr[i].getElementsByTagName("td");
//       if (td[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
//         td[i].style.display = "";
//       } else {
//         td[i].style.display = "none";
//       }
//     }
//   }