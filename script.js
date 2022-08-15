// En este script representaremos la vista de un administrador que se encargara de agregar contenido a la plataforma multimedia //

/* Consultamos a los elementos en el html segun su ID y lo almacenamos en una constante */

const divContenidos = document.getElementById("divContenidos")
const botonLight = document.getElementById("botonLight")
const botonDark = document.getElementById("botonDark")
const formularioId = document.getElementById("formularioId")
const mostrarContenidos = document.getElementById("mostrarContenidos")
let obscurito //Generamos la variable para el modo oscuro

// Generamos un darkmode para el administrador //

/* En primer lugar vamos a colocar un condicional para consultar el localStorage con el metodo getItem, y así saber en que modo quedo seteado */

if(localStorage.getItem('obscurito')){ //consulto si existe la key en el localstorage
    obscurito = localStorage.getItem('obscurito') // Si existe mantiene el valor
}else{ // Si no, mantengo valores por defecto
    localStorage.setItem('obscurito', 'light')
}

if(obscurito == 'dark'){
    document.body.classList.add('obscurito') //Para agregar una clase de css mediante JS ejecutamos classList.add()
}

// Escuchamos los botones del modo obscuro //

botonDark.addEventListener('click',()=>{ // Genero el evento de escucha 
    document.body.classList.add('obscurito')
    localStorage.setItem('obscurito', 'dark') // Asigno el valor dark a la key obscurito
})

botonLight.addEventListener('click',()=>{
    document.body.classList.remove('obscurito') // Remuevo la clase agregada
    localStorage.setItem('obscurito', 'light')
})

//######################################################################################################################################################################################################################################################################################################################

// FORMULARIO PARA AGREGAR CONTENIDO //

formularioId.addEventListener('submit',(event)=>{ //Inicializo el evento de escucha para el formulario
    event.preventDefault() // Capturamos el evento para que no redirija a otra página
    //los id en el formulario html los vamos pasando a constantes y con el .value traemos solo su valor//
    const nombre = document.getElementById("titulo").value
    const categoria = document.getElementById("categoria").value
    const genero = document.getElementById("genero").value
    const tipo = document.getElementById("tipo").value
    const img = document.getElementById("basicUrl").value
    const contenido = new Contenido(nombre,categoria,genero,tipo,img) // Creo el nuevo contenido
    contenidos.push(contenido) //Lo guardo en el array
    formularioId.reset() // Borro el formulario para seguir cargando
}) 

//##########################################################################################################################################################################################

// Evento para escuchar al boton de mostrar contenidos, los mismos se mostraran en tabla //

mostrarContenidos.addEventListener('click',()=>{ // Escucho el evento del boton mostrarContenidos
    divContenidos.innerHTML = "" //Paso a vacio en espacio para mostrar los contenidos cada vez que se realiza un click
    contenidos.forEach((contenido, index) => {// Itero el array
        //Asigno valores a mostrarse en el html
        divContenidos.innerHTML += `
            <tr>
                <th scope="row">${index}</th>
                <td>${contenido.nombre}</td>
                <td>${contenido.categoria}</td>
                <td>${contenido.genero}</td>
                <td><img src="${contenido.img}"></td>
            </tr>

        `
    })
})
