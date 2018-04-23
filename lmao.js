var tabella = document.getElementById("myTable");
var i = 0;
var tr;
var prod;
var qua;
var imp;
var ct = 0;
var riceve;
var totale = 0;

function add(){
	ct++;
	var cancella = document.createElement("BUTTON");
	var txt = document.createTextNode("Cancella");
	cancella.setAttribute("Id", ct);
	cancella.setAttribute("onclick", "cancellaRiga(this.id)");
	cancella.appendChild(txt);


	prod = document.getElementById("prod");
	qua = document.getElementById("qua");
	imp = document.getElementById("imp");

	tr = document.createElement("TR");
	tr.setAttribute("Id", "x" + ct);
	document.getElementById("myTable").appendChild(tr);

	let td = document.createElement("TD");
	td.innerHTML = prod.value;
	tr.appendChild(td);

	let td1 = document.createElement("TD");
	td1.innerHTML = qua.value;
	tr.appendChild(td1);

	let td2 = document.createElement("TD");
	td2.innerHTML = imp.value;
	tr.appendChild(td2);

	let td3 = document.createElement("TD");
	td3.appendChild(cancella);
	tr.appendChild(td3);
	var valore = imp.value;
	var quantita = qua.value
	if(valore == ""){
		valore = 0;
	}
	if(quantita == ""){
		quantita = 0;
	}

	totale += parseInt(valore) * parseInt(quantita);

	document.getElementById("totale").innerHTML= "" + totale;
}



function cancellaRiga(riceve){
	var questaELaRigaDaCancellare = document.getElementById("x" + riceve);
//	console.log("Test, questo e il tasto = " + questoEIlTastoCancella +" e questa e la riga da cancellare = " + questaELaRigaDaCancellare);
	questaELaRigaDaCancellare.remove();
	totale = totale - (parseInt(questaELaRigaDaCancellare.children[1].value) * parseInt(questaELaRigaDaCancellare.children[2].value));
	document.getElementById("totale").innerHTML= "" + totale;

}
