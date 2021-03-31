 function functionName(){
var okButton = document.getElementById("ok");
okButton.onclick = okayClick;
function okayClick(){
    this.className = "highlighted";
  alert("Hello");
}
}
window.onload = functionName;