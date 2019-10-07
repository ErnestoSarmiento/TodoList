
var cont = 0;

function agregar(){
   
    var nuevoElemento = document.createElement('li');
    const nombreTarea = document.getElementById('nombreTarea'); 
    
    if(nombreTarea.value != ''){
        //var newText = document.createTextNode(nombreTarea.value);

        var newTrasck = document.createElement('input');
        newTrasck.setAttribute('type','text');
        newTrasck.setAttribute('class','campo');
        newTrasck.setAttribute('id','trasck'+cont+'');
        newTrasck.value = nombreTarea.value;
        newTrasck.readOnly=true;
        
        nuevoElemento.appendChild(newTrasck);
        nuevoElemento.setAttribute('id',cont);
        
        var buttonDelete = document.createElement('input');
        buttonDelete.setAttribute('type','button');
        newTrasck.setAttribute('class','boton');
        buttonDelete.setAttribute('onclick','eliminar('+cont+')'); 
        buttonDelete.value = 'Eliminar';
        nuevoElemento.appendChild(buttonDelete);
        
        var buttonEdit = document.createElement('input');
        buttonEdit.setAttribute('type','button');
        newTrasck.setAttribute('class','boton');
        buttonEdit.setAttribute('onclick','editar('+cont+')'); 
        buttonEdit.value = "Editar";

        nuevoElemento.appendChild(buttonEdit);

        const sidebar =  document.querySelectorAll('.content .sidebar ul');

        sidebar[0].appendChild(nuevoElemento);

        nombreTarea.value = '';
        cont++;
    }

}

function eliminar(id){
    if(id<cont&&id>=0){
        var eliminar = document.getElementById(id).remove();
    }
}

function editar(id){
    
    var buttonAceptar = document.createElement('input');
    buttonAceptar.setAttribute('type','button');
    buttonAceptar.setAttribute('class','boton');
    buttonAceptar.setAttribute('onclick','actualizar('+id+')');
    buttonAceptar.setAttribute('id','aceptar'+id+''); 
    buttonAceptar.value = "Aceptar";
    
    const elemento = document.getElementById(id);
    elemento.appendChild(buttonAceptar);

    const tarea = document.getElementById('trasck'+id);
    tarea.readOnly=false;

}

function actualizar(id){
    const trasck = document.getElementById('trasck'+id);
    trasck.readOnly=true;

    const buttonAceptar = document.getElementById('aceptar'+id).remove();
}