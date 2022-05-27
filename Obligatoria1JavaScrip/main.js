

abrirFormulario = document.querySelector(`#abrirFormulario`),
    formulario = document.querySelector(`#formularioTarjeta`),
    nombreEmpr = document.querySelector(`#empresa`),
    numeroEmpl = document.querySelector(`#numero`),
    nombreEmpl = document.querySelector(`#nombre`);
    var imgclick=0;
const SelectElemento = document.querySelector(`.selectCargo`);


// boton para abrir el formulario 

abrirFormulario.addEventListener(`click`, () => {

    abrirFormulario.classList.toggle(`active`);
    formulario.classList.toggle(`active`);
});

// rellenarmcargo 
SelectElemento.addEventListener(`change`, (e) => {

    let seleccion = document.getElementById(`cargo`);
    cargo.innerHTML = e.target.value;

});



//numero de empleado

formulario.inputNumero.addEventListener(`keyup`, (e) => {

    let valorNum = e.target.value;
    formulario.inputNumero.value = valorNum;
    numeroEmpl.textContent = valorNum;

});

//rellenar Nombre empleado

formulario.inputNombre.addEventListener(`keyup`, (e) => {

    let valorNom = e.target.value;

    formulario.inputNombre.value = valorNom.replace(/[0-9]/g, '');

    nombreEmpl.textContent = valorNom;

});

//rellenar nombre de empresa

formulario.inputEmpresa.addEventListener(`keyup`, (e) => {

    let valorEmp = e.target.value;

    formulario.inputEmpresa.value = valorEmp.replace(/[0-9]/g, '');

    nombreEmpr.textContent = valorEmp;
});





//cambiar imagen de logo

function CambiarLogo() {

    let img = document.getElementById('imagen-logo');
   
    imgclick=imgclick+1;

    if (imgclick % 2 !=0) {

       img.setAttribute("src","img/Logotipo 500x500 px (1).png");
    }else{
        img.setAttribute("src","img/Logotipo 500x500 px.png");
    }
}
// cambiar color

function cambiarColor() {
    let color = document.getElementById(`inputColor`).value;
    document.getElementById(`fondo`).style.backgroundColor = color;
};

//subir foto de perfil

function previsualiza(nb){

    let reader= new FileReader();

    reader.readAsDataURL(document.getElementById('fileUpload').files[0]);
    reader.onload= function (e){

        document.getElementById('imagen-perfil').src= e.target.result;
    }


};
 
    
//boton reinicio


document.getElementById('btn').onclick = function() {
    document.getElementById('nombre').innerHTML = "";
    document.getElementById('empresa').innerHTML = "";
    document.getElementById('numero').innerHTML = "";
    document.getElementById('cargo').innerHTML = "";
    document.getElementById('imagen-logo').innerHTML = "";
    document.getElementById('fondo').innerHTML = "";
    document.getElementById('imagen-perfil').innerHTML = "";
 };

