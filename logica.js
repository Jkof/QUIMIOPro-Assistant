//Queda pendiente la funcion de reordenacion.

var listaPacientes=[];
/*
var http_request=new XMLHttpRequest();
//direccion donde estan los datos, devuelve datos JSON
var url="http://157.88.157.195";

//Descargamos ls datos JSON del servidor

http_request.onreadystatechange= handle_json ;
http_request.open("GET", url, true);
http_request.send(null);

function handle_json(){
	if(http_request.readyState==4) {
		if (http_request.status==200) {
			var json_data=http_request.responseText;
			var the_object=eval("("+json_data+")")
		}else{
			alert("Ocurrio un problema con la URL.")
		}
		http_request=null;
	}
}
*/

//Constructor
function Paciente(id,nombre,tratamiento,temperatura,pulso,tiempo){
	this.id=id;
	this.nombre=nombre;
	this.tratamiento=tratamiento;
	this.temperatura=temperatura;
	this.pulso=pulso;
	this.tiempo=tiempo;
}

// Variable global pacientes
var pacientes;

function retrievePacientes() {
	$.getJSON("sample.json", {format: "json"}, function(data) {
		pacientes = data;
		for (var i=0; i<data.length; i++) {
			addPaciente(data[i]);
		}
	});
