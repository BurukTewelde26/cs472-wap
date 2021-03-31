
window.onload = function () {
    const chkbox = document.getElementById("chk")
    chkbox.onclick = chkboxClicked

    const htmlv = document.getElementById("link1")
    htmlv.onclick = validatorClick

    const clearButton = document.getElementById("cancellation")
    clearButton.onclick = clearClick

  
}

    function clearClick(){
        alert("Clear Button clicked");
    }
 
    function chkboxClicked(){
        if(chkbox.checked == true){
            alert("Check Box Checked");
        }else{
            alert("Check Box unchecked");
        }
    }
    function validatorClick(){
        alert("Validator Clicked")
    }
