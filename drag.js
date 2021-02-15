function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}


function cek(){
	var jwb1 = document.getElementById("opr1").innerText;
	var jwb2 = document.getElementById("ang1").innerText;
	var jwb3 = document.getElementById("opr2").innerText;
	var jwb4 = document.getElementById("ang2").innerText;
	var jwb5 = document.getElementById("opr3").innerText;
	var jwb6 = document.getElementById("ang3").innerText;
	var jwb7 = document.getElementById("opr4").innerText;
	var jwb8 = document.getElementById("ang4").innerText;

	if(jwb1 == ":" && jwb2 == "4" && jwb3 == ":" && jwb4 == "4"){
		document.getElementById("hasil").innerHTML = "a = 5";
		document.getElementById("opr1").style.color = "green";
		document.getElementById("ang1").style.color = "green";
		document.getElementById("opr2").style.color = "green";
		document.getElementById("ang2").style.color = "green";
	} else{
		document.getElementById("hasil").innerHTML = "Jawaban kamu kurang tepat, Coba lagi!";
		document.getElementById("opr1").style.color = "red";
		document.getElementById("ang1").style.color = "red";
		document.getElementById("opr2").style.color = "red";
		document.getElementById("ang2").style.color = "red";
	}

	if(jwb5 == "x" && jwb6 == "2" && jwb7 == "x" && jwb8 == "2"){
		document.getElementById("hasil1").innerHTML = "x = 10";
		document.getElementById("opr3").style.color = "green";
		document.getElementById("ang3").style.color = "green";
		document.getElementById("opr4").style.color = "green";
		document.getElementById("ang4").style.color = "green";
	} else{
		document.getElementById("hasil1").innerHTML = "Jawaban kamu kurang tepat, Coba lagi!";
		document.getElementById("opr3").style.color = "red";
		document.getElementById("ang3").style.color = "red";
		document.getElementById("opr4").style.color = "red";
		document.getElementById("ang4").style.color = "red";
	}
}
function cobalagi(){
	var ao1 = "<p id='o1' draggable='true' ondragstart='drag(event)' ><b>:</b></p>";
	var ao2 = "<p id='a1' draggable='true' ondragstart='drag(event)' ><b>:</b></p>";
	var ao3 = "<p id='o2' draggable='true' ondragstart='drag(event)' ><b>x</b></p>";
	var ao4 = "<p id='a2' draggable='true' ondragstart='drag(event)' ><b>x</b></p>";
	var ao5 = "<p id='o3' draggable='true' ondragstart='drag(event)' ><b>2</b></p>";
	var ao6 = "<p id='a3' draggable='true' ondragstart='drag(event)' ><b>2</b></p>";
	var ao7 = "<p id='o4' draggable='true' ondragstart='drag(event)' ><b>4</b></p>";
	var ao8 = "<p id='a4' draggable='true' ondragstart='drag(event)' ><b>4</b></p>";

	document.getElementById("opr1").innerHTML = "";
	document.getElementById("ang1").innerHTML = "";
	document.getElementById("opr2").innerHTML = "";
	document.getElementById("ang2").innerHTML = "";
	document.getElementById("opr3").innerHTML = "";
	document.getElementById("ang3").innerHTML = "";
	document.getElementById("opr4").innerHTML = "";
	document.getElementById("ang4").innerHTML = "";
	document.getElementById("opr1").style.color = "black";
	document.getElementById("ang1").style.color = "black";
	document.getElementById("opr2").style.color = "black";
	document.getElementById("ang2").style.color = "black";
	document.getElementById("opr3").style.color = "black";
	document.getElementById("ang3").style.color = "black";
	document.getElementById("opr4").style.color = "black";
	document.getElementById("ang4").style.color = "black";
	document.getElementById("hasil").innerHTML ="";
	document.getElementById("hasil1").innerHTML ="";

	document.getElementById("k1").innerHTML = ao1;
	document.getElementById("k2").innerHTML = ao2;
	document.getElementById("k3").innerHTML = ao3;
	document.getElementById("k4").innerHTML = ao4;
	document.getElementById("k5").innerHTML = ao5;
	document.getElementById("k6").innerHTML = ao6;
	document.getElementById("k7").innerHTML = ao7;
	document.getElementById("k8").innerHTML = ao8;
}