// No-1
function max(a,b){
    if(a > b){
        return a;
    }else {
    return a
    }
}

/* --------------------------- */
/* No -2 */

function maxOfThree(a,b,c){
    let larger = b;
    if(a > b){
        larger = a;
    }
    if(larger < c){
        larger = c;
    }
    return larger;
 
}
/* Quest -3 */
function isVowel(v){
    if(v.length != 1){
        return false;
    }
    if(v === "a" || v === "e" || v === "i" || v === "o" || v === "u" ){
        return true;
    }else{
        return false;
    }
}
/* Quest-4 */
function sum(array){
    sum=0;
	for(let i=0; i<array.length; i++){
	sum=sum+array[i];
	}
	return sum;
}
/* Quest-4 */
function multiply(array){
    multi=1;
	for(let i=0; i<array.length; i++){
	multi=multi * array[i];
	}
	return multi;
}
/* Quest -5 */
function reverse(str){
    let reversed = "";    
    for (let i = str.length - 1; i >= 0; i--){        
      reversed += str[i];
    }    
    return reversed;
  }
 /* Question-6 */
  function findLongestWord(wordArray) {
    let longest = 0;
    let word = null;
    for (let i = 0; i < wordArray.length; i++) {
        if (longest < wordArray[i].length) {
            longest = wordArray[i].length;
            word = wordArray[i];
        }
    }
    return word.length;
}
/* Quest-7 */
function filterLongestWords(array){
    var str = array.split(" ");
    let word = "";
    for (let i = 0; i < str.length; i++) {
        if(str[i].length> 0){
           word=word+str[i]+" ";
       }
    }
    return word;
 }

/* Question-8 */

function computeSumOfSquares(array){
    let arr2 = array.map(function(x,y){
        return  x * x
    })
    
    return arr2.reduce(function(x,y){
        return x + y
    })

  
}


/* Question - 9 */
function printOddNumbersOnly(array){
console.log("Print Odd Numbers Only:")
for(let i = 0; i <array.length;i++){
    if(array[i] % 2 !== 0){
        console.log(array[i])
    }
}
}

/* Question - 10 */
function computeSumOfSquaresOfEvensOnly(array){

    let sum = 0;
    for (let i = 0; i < array.length; i++){

        if (array[i] % 2 === 0){
        sum  = sum +  (array[i] * array[i])
        }
    }
    return sum;
}

/* Question - 11 */
function sum1(array){
    return array.reduce(function(x,y){
        return x + y
    })
}
/* Question-11 */
function multiply1(array){
    return array.reduce((accm,value) => accm * value)

}

/* Question - 12 */
function findSecondBiggest(array){
    let secondBig = array[0];
    let firstBig = Number.MIN_VALUE

    for (let i = 0; i < array.length; i++){

        if(array[i] > firstBig){
            firstBig = array[i]
        }else if(array[i] > secondBig){
            secondBig = array[i];
        }
    }
    return secondBig;
}


  /* Question -13 */
function printFibo(a,b,n){
   console.log("Print Fibo Series :" + "\r\n" + a + "\r\n" + b)

   
    for(let i = 0; i < n-2;i++){
        
         c = a + b
         a = b
         b = c
        console.log(c) 
    }
  
}


console.log("Maximum = " + max(100,50));
console.log("Maximum Of Three Numbers = " + maxOfThree(100,550,60))
console.log(isVowel("i"))

console.log("Sum Of Array = " + sum([1,2,3,4,5]))
console.log("Multiplcation of Array =" + multiply([1,2,3,4,6]))

console.log("reverse of WAPCourse = " + reverse("WAPCourse"))
console.log("Length of Longest Word = " + findLongestWord(["Life","is","better","now"]))
console.log("Longest Word = " + filterLongestWords("life is good sometimes"))
 console.log("Sum of the sqares = " + computeSumOfSquares([1,2,3,4])) 
 printOddNumbersOnly([1,4,5,6,7,8])
console.log("Sum of Even Num Squares = " + computeSumOfSquaresOfEvensOnly([1,2,3,4]))

console.log("Second Biggest = " + findSecondBiggest([50,70,30,69,31]))
console.log("(Question-11)- Sum = "   + sum1([1,2,3,4]));
console.log("(Question-11)- Multiply = "   + multiply1([1,2,3,4]));
 printFibo(0,1,5);