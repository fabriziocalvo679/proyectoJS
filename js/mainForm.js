
///presionar tecla enter funcion 
inputNombre.addEventListener ("keypress", (event) => {
if (event.key == "Enter") {
    event.preventDefault()
    inputTelefono.focus()
}

} )
inputTelefono.addEventListener ("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        inputDireccion.focus()
    }
    
    } )
inputDireccion.addEventListener ("keypress", (event) => {
        if (event.key == "Enter") {
            event.preventDefault()
        btnSubmit.focus()
        }
        
        } )


btnSubmit.addEventListener("mousemove", ()=> {
    btnSubmit.title = "Complete sus datos para recibir el pedido"
})


document.addEventListener("submit", (event)=> {
    event.preventDefault()
    Swal.fire({
        title: "Su pedido se ha enviado correctamente",
        icon: 'success',
        confirmButtonText: "Okey",
        timer:4000,
    }).then((result)=> {
        result.isConfirmed ?
        location.reload() :
        nombre.focus()
    })

})

btnVaciar.addEventListener("click", (event)=> {
    Swal.fire({
        title: "¿Esta seguro que desea Cancelar su pedido?",
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: "Si",
        cancelButtonText: "No!",
    }).then((result)=> {
        result.isConfirmed ?
        location.reload() : nombre.focus()
    })
})




