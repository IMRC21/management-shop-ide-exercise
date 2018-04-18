var tabella = document.getElementById("myTable");
var i = 0;
var tr;
var prod;
var qua;
var imp;
var ct = 0;
var riceve;


function add(){
	ct++;
	var cancella = document.createElement("BUTTON");
	var txt = document.createTextNode("Cancella");
	cancella.setAttribute("class", ct);
	cancella.setAttribute("onclick", "cancellaRiga(this.className)");
	cancella.appendChild(txt);


	prod = document.getElementById("prod");
	qua = document.getElementById("qua");
	imp = document.getElementById("imp");

	tr = document.createElement("TR");
	tr.setAttribute("class", ct);
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

}

function cancellaRiga(riceve){
	console.log(riceve);
	document.getElementsByClassName("" + riceve).remove();
}
