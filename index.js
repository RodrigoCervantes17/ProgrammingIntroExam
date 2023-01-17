//Mayor o menor de edad.
const boton = document.getElementById("boton")
//Event listener
boton.addEventListener("click",function(){
    const box = document.getElementById("box")
    let edad = parseFloat(box.value)
    if (edad<18) {
        alert("Usted es menor de edad.")
    } else {
        alert("Usted es mayor de edad")
    }
    
    
    
    


});
