var asientos = new Array(32);
console.log(asientos);
var celdas = document.getElementsByTagName('td');
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect);
}
var  celdaActual ;
function redirect(event){
    var asiento=(event.target.textContent);
    document.getElementById("mostrar").innerHTML=asiento;

    celdaActual  = event.target;

    var num = parseInt (asiento);
    var obj =     asientos[num-1]; 

    if (obj !== undefined ) {
        document.getElementById("nombre").value = obj.nombre;
        document.getElementById("apellido").value = obj.apellido;
        document.getElementById("dni").value = obj.dni;
    }

}
// function mostrar(){
//     var nombre= document.getElementById("nombre").value;
//     var apellido= document.getElementById("apellido").value;
//     var dni= document.getElementById("dni").value;
//     var mostrar= document.getElementById("mostrar");
//     mostrar.innerHTML=nombre;
// }
function reservar(){
    var asiento= parseInt( document.getElementById("mostrar").textContent );
    if (asientos.length == 0)
        return;
    var name= document.getElementById("nombre");
    var last_name= document.getElementById("apellido");
    var dni= document.getElementById("dni");

    var obj = {
        nombre: name.value,
        apellido:last_name.value,
        dni: dni.value
    };
    asientos[asiento-1] = obj; 
    var str="";
    str= "el pasajero   : "+ " "+ obj.nombre   +" "+"   " + obj.apellido +" "+ " tiene una reserva en el asiento nro: " + asiento;
    document.getElementById("demo").innerHTML=str; 

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("dni").value = "";

    celdaActual.style.backgroundColor = '#F8ED50';
}

var mostrarLista="";
function listar(){
    for(var i=0;i<asientos.length;i++){
        var dato= asientos[i];
        if(dato!=undefined){
            var salida = "<div>" + 
        "<p>" +  "el pasajero   : "+ dato.nombre +" "+  dato.apellido +  "</p>"  +   "<p>" +"con DNI: "+  dato.dni +  "</p>" 
          "</div>";
        mostrarLista += salida;
        }
    }
document.getElementById("lista").innerHTML=mostrarLista; 
}

function buscar(){
            var dniNuevo=document.getElementById("dni2").value;
    for(var i=0;i<asientos.length;i++){

        if(asientos[i]!=undefined && dniNuevo==asientos[i].dni){
            document.getElementById("dni").value=asientos[i].dni;
            document.getElementById("nombre").value=asientos[i].nombre;
            document.getElementById("apellido").value=asientos[i].apellido;
           
       
        }
    }
document.getElementById("busca").innerHTML=mostrarLista; 
        }


// function cancelar(){

// }