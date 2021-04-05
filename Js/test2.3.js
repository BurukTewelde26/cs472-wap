var foo = 1;
function bar(){
    
    if (!foo){
     var foo = 10;
     
    }
    console.log(foo);
    
  
  

}
bar();


/*const arrayutil = (function(){
    let counter = 0;
    function multipleCount(arr,num){
             arr.filter(s => s % num == 0)
                .forEach(element => {
                    counter +=1;
                });
                return counter;
    }
    function reverseInPlace(arr){
        let j = 0;
        let temp = 0;
        for (let i = arr.length-1;i > j;i--){
            console.log("i :" + i + "=" + arr[i]  +   " , j:" + j + " = " + arr[j]);
            temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp;
            j++;
            
        }
        return arr;
    }

    return {
        multipleCount:multipleCount,
        reverseInPlace:reverseInPlace
                      
    }
 })();
    const a = arrayutil;
    console.log(a.multipleCount([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],5));
    console.log(a.reverseInPlace([1,2,3,4,5,6]));
    //console.log(arrayutil.multipleCount([1,2,3,4,5],2)()); 

/*var x = 9;
function myFunction(){
    return x * x;
}
console.log(myFunction());
x = 5;
console.log(myFunction()); */



/*x = 1;
var a = 5;
var b = 10;
var c = function(a,b,c) {
                   console.log(x);
                   console.log(a);
                   var f = function(a,b,c) {
                                 b = a;
                                 console.log(b);
                                 b = c;
                                 var x = 5;
                   }

                   f(a,b,c);
                   console.log(b);
                   var x = 10;
                }
    c(8,9,10);
    console.log(b);
    console.log(x); 
            */


