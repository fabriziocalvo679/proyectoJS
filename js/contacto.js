
const inputNombre = document.querySelector("#nombre")
const inputTelefono = document.querySelector("#telefono")
const inputMail = document.querySelector("#mail")
const inputConsulta= document.querySelector("#consulta")
const btnSubmit = document.querySelector("#enviar")
let datosDeInput = ""






inputNombre.addEventListener ("keypress", (event) => {
    if (event.key == "Enter") {
        event.preventDefault()
        inputTelefono.focus()
    }
    
    } )
    inputTelefono.addEventListener ("keypress", (event) => {
        if (event.key == "Enter") {
            event.preventDefault()
            inputMail.focus()
        }
        
        } )
    inputMail.addEventListener ("keypress", (event) => {
            if (event.key == "Enter") {
                event.preventDefault()
            inputConsulta.focus()
            }
            
            } )
    
    
    btnSubmit.addEventListener("mousemove", ()=> {
        btnSubmit.title = "Complete sus datos antes de enviar el formulario"
    })
    
    
    document.addEventListener("submit", (event)=> {
        event.preventDefault()
        Swal.fire({
            title: "Su Consulta se ha enviado correctamente",
            icon: 'success',
            confirmButtonText: "Okey",
            timer:4000,
        }).then((result)=> {
            result.isConfirmed ?
            location.reload() :
            nombre.focus()
        })
    
    })
    
