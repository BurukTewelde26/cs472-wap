

window.onload=function() {
    
    var bigger = document.getElementById("deco");
    bigger.onclick = function changeSize() {
        setInterval(() => {
        // document.getElementById("txt1").style.fontSize="4em"; 
        let textArea=document.getElementById("txt1");
        var fontSize= window.getComputedStyle(textArea,null).fontSize;
        console.log(fontSize);
        
            var resized=parseInt(fontSize)+ 2;
        
           textArea.style.fontSize=resized+"px";
        },500)
    }

        let bling=document.getElementById("bling");
        bling.onchange=modify;

        let btnIgpay = document.getElementById('btnIgpay');
        btnIgpay.onclick = this.onBtnIgpayClick;
    
        let btnMalkovitch = document.getElementById('btnMalkovitch');
        btnMalkovitch.onclick = this.onBtnMalkovitchClick;
        function modify(){
            
            let modified=document.getElementById("txt1");
            if(this.checked){
            modified.style.fontWeight="bold"
            modified.style.color="green"
            modified.style.textDecoration="underline"
            }else{
                modified.style="normal"
            }
        }

        function onBtnIgpayClick() {
            let textArea = document.getElementById("text1");
            let results = textArea.value
                                .split(" ")
                                .map(word => transformWord(word))
                                .join(" ");
            
            textArea.value = results;
        }
        

        function onBtnMalkovitchClick() {
            let textArea = document.getElementById("text1");
            let results = textArea.value
                                .split(" ")
                                .map(word => transformMalkovitch(word))
                                .join(" ");
            
            textArea.value = results;
        }
        
        function transformMalkovitch(word) {
            return word.length >= 5 ? "Malkovitch" : word;
        }

        function transformWord(word) {
            let vowels = "aeoui";
            let result = word, firstLetter = word.charAt(0);
            if (vowels.indexOf(firstLetter) == -1) {
                result = result.substring(1, word.length) + firstLetter;
            }
            return result + '-ay';
        }

        function transformMalkovitch(word) {
            return word.length >= 5 ? "Malkovitch" : word;
        }
       
}