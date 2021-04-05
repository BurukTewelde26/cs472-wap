const count = (function(){
             let counter = 0;
             function getCounter(){
                 return counter;
             }
             return{
                 value:getCounter,
                
                 add:function(){
                     counter += 1;
                    // console.log("add:" + counter);
                 },
                 reset:function(){
                   // console.log("reset: " + counter);
                     counter = 0;
                    
                 }
             }
})();
count.add();
console.log(count.value());
count.add();
console.log(count.value());
count.reset();
console.log(count.value());