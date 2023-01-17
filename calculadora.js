function suma() {
    let n1 = parseFloat(document.getElementById("num1").value)
    console.log(n1)
    let n2 = parseFloat(document.getElementById("num2").value)
    console.log(n2)
    let n3 = parseFloat(n1 + n2)
    console.log(n3)
    document.getElementById("r").innerHTML =+ n3;
}
function resta() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    let n3 = (n1 - n2)
    document.getElementById("r").innerHTML =+ n3;
}
function multiplicar() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    let n3 = (n1 * n2)
    document.getElementById("r").innerHTML =+ n3;
}
function dividir() {
    let n1 = parseFloat(document.getElementById("num1").value)
    let n2 = parseFloat(document.getElementById("num2").value)
    let n3 = (n1 / n2)
    document.getElementById("r").innerHTML =+ n3;
}




