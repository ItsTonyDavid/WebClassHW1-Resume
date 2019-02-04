//inputText busca el id newItem
let inputText = document.querySelector('#newitem');
//idItem es el value; inicializa en 4 porque ya hay 5 (4+0) por default.
var idItem = 4;
//espera a encontrar un 'enter' para agregarlo a la lista
inputText.addEventListener('keyup',function(e){
	let newTask = document.getElementById("newitem").value;
	if (e.keyCode === 13) {
		//nuevo 'id' como value
		idItem += 1;
		//Creamos un li
		var addToList = document.createElement("li");
		//Creamos un checkbox
		var addCheckBox = document.createElement("input");
		//le metemos los atributos al input del checkbox
		addCheckBox.setAttribute("type", "checkbox");
		addCheckBox.setAttribute("name", "todo");
		addCheckBox.setAttribute("value", idItem);
		addCheckBox.setAttribute("onclick", "checkFunc(value)");
		//Metemos el checkbox al li
		addToList.appendChild(addCheckBox);
		//creamos un span
		var addSpan = document.createElement("span");
		addSpan.setAttribute("value",idItem);
		//creamos la frase que viene del input
		var newOne = document.createTextNode(newTask);
		//metemos la frase al span
		addSpan.appendChild(newOne);
		//metemos el span al li
		addToList.appendChild(addSpan);
		//metemos el li al lu
		document.getElementById("keyList").appendChild(addToList);
  }
});

//recive el value para editar el span y un bool para saber si rayar o quitar
function markTask(value, bool){
	//recibe todas las etiquetas span
	var taskToDelete = document.getElementsByTagName("span");
	if(bool == true){
		//mete la clase done para marcar
		taskToDelete[value].classList.add("done");
	}
	else{
		//elimina la clase done para desenmarcar
		taskToDelete[value].classList.remove("done");
	}
}

//funcion que recive como parametro el value del checkbox
function checkFunc(value){
	//busca todo lo que tenga tag como input
	var checkbox = document.getElementsByTagName("input");
	//arreglo de todos los tags, el index es el value
	checkbox[value].addEventListener( 'change', function() {
		//si este checkbox (el del value mandado) esta palomeao'
	    if(this.checked) {
	    	markTask(value, true);
	    } else { //si no esta palomeao'
	        markTask(value, false);
	    }
	});
}

//var checkbox = document.querySelector("input[type=checkbox]");
