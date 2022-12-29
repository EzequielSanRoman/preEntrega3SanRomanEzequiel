const formLogin = document.querySelector("#login")
const inputUser = document.querySelector("#input-user")
const inputPass = document.querySelector("#input-pass")
const loginIncorrecto = document.querySelector("#logint")
const loginCorrecto = document.querySelector("#logout")
const loginValidado = document.querySelector(".container-logout")

const contenedorForm = document.querySelector(".container-login")

const logout = document.querySelector("logout")

const datosUsuario = {
    user: "ezesr1995",
    password: "coder1234"
}

const subirAlLs = (clave, valor) => { 
    localStorage.setItem( clave, JSON.stringify(valor))
}

const obtenerDelLs = (clave) => {
    return JSON.parse(localStorage.getItem(clave))
}

formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password){
        subirAlLs("login", true)
        contenedorForm.style.display = "none"
        logout.style.display ="block"
       
        
    } else {
        loginIncorrecto.style.display = "block"
        inputPass.style.border = "1px solid red"
        inputUser.style.border = "1px solid red"
        
        
    }
}
// Validación acceso a cuentas bancarias
formLogin.onsubmit = ( event ) => {
    event.preventDefault()
    if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password){
        subirAlLs("login", true)
        loginValidado.style.display = "flex"
        contenedorForm.style.display = "none"
    }
}
//validar token del localstorage para que perdure el login
function validarLogin ( clave ) {
    if (clave !== true) {
        contenedorForm.style.display = "flex"
    } else {
        contenedorForm.style.display = "none"
        logout.style.flex = "block"
        
    }
}
validarLogin(obtenerDelLs("login"))

//modo Oscuro

const botonModos = document.querySelector("#claro-oscuro")
const body = document.querySelector(".modo-claro")

//cambio de clase del elemento para modo oscuro

//texContetn =
// te permite reasignar el valor 
botonModos.onclick = () => {
    body.classList.toggle("modo-oscuro")
    if (body.className === "modo-claro modo-oscuro"){
        botonModos.textContent = "Modo Claro"
    } else {
        botonModos.textContent = "Modo Oscuro"
    }
}