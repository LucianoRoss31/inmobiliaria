function registro(){
    user = document.getElementById("user").value
    correo = document.getElementById("correo").value
    contra = document.getElementById("contra").value
    direccion = document.getElementById("direccion").value

    if (user == "" || correo == "" || contra == "" || direccion == ""){
        alert("Por favor asegurese de completar todos los campos")
    }
    else{
        alert("¡Su cuenta fue creada con exito! Muchas gracias por unirse a Inmobiliaria Horizonte :)")
    }
}

document.getElementById("submit").addEventListener("click",registro)