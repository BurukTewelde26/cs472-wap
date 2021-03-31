"use strict";
window.onload = function () {
   
    const diplayButton = document.getElementById("clickDisplay")
    displayButton.onclick = displayClock
}

    
 
    function displayClock(){
        let curDate  = new Date();
        let year = curDate.getFullYear();
       let month = curDate.getMonth();
       let day = curDate.getDate();
        let hrs = curDate.getHours();
        let min = curDate.getMinutes();
        let sec = curDate.getSeconds();
       
        document.getElementById('realTime').innerHTML = year + "-" + month +
         "-"
        + day + "   " + hrs + ":" + min + ":" + sec;
      let t =   setTimeout('displayClock()',500);
       }