
function clearScreen() {
    document.getElementById("result").value = " ";
}
function show(value) {
    document.getElementById("result").value += value;
}
function equal() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function oneNumDel()
{
    var exp = document.getElementById("result").value;
    document.getElementById("result").value = exp.substring(0, exp.length - 1);
}