// //ex1
// var keys ;
// keys=parseInt(prompt("enter the nb of keys"))
// switch (keys) {
//   case 0:
//     console.log("we sank together");
//     break;
//   case 3000: // Value of foo matches this criteria; execution starts from here
//     console.log("we did it");
//   // Forgotten break! Execution falls through
//   case keys>0&&keys<3000: // no break statement in 'case 0:' so this case will run as well
//     console.log("we need to swim a little bit more");
//     break; // Break encountered; will not continue into 'case 2:'
 
//   default:
//     console.log("default");
// }
// ex2 

// function findMinMax() {
//     let Arr = [50, 70, 20, 10, 13];
//     let minValue = Infinity;
//     let maxValue = -Infinity;

//     for (let i=0 ; i<Arr.length-1;i++) {

//         // Find minimum value
//         if (Arr[i] < minValue)
//             minValue = Arr[i] ;

//         // Find maximum value
//         if (Arr[i]  > maxValue)
//             maxValue = Arr[i] ;
//     }

//     console.log("Minimum element is:" + minValue);
//     console.log("Minimum element is:" + maxValue);
// }
// findMinMax();

//ex 3
// var n; // decleare a variable that take the nb of line 
// n=parseInt(prompt("enter nb of line"))

//     for(let i=1; i<=n ; i++){ // nb of line
//         for(let j =1 ; j<=i; j++){  // nb of column
// console.log("*")
//         }
//         console.log("\n")
//     }

// ex 4


// var array=[0,5,2,9,15,7,19,50,80]

// var max=array[0]
// for (let i=0;i<array.length; i++){
//     for(let j=0;j<array.length; j++){
//         if(array[i] > array[j]){
//             max=array[i]
//         }
//     }
// }
//  console.log("max number is "+max)
//   let newArr = [];

//     for(let i = 0; i < Array.length; i++) {
//         let temp = arr[i];
//         let x = 0;
//         for(let j = 0; j < temp.length; j++) {

//             if(temp[j] > x) {
//                 x = temp[j];
//             }
//         }

//         newArr.push(x);
//         //console.log(arr[i])
//     }
//     console.log(newArr);

//ex 5
// function sumOfSquares(num) {
//   return num * num;
// }
// var num = parseInt(prompt("Enter a number:"));
// var result=sumOfSquares(num);
// console.log(result)

//ex6 with function
// ex 3
function displayGraph(){
 var n; // decleare a variable that take the nb of line 
n=parseInt(prompt("enter nb of line"))

    for(let i=1; i<=n ; i++){ // nb of line
        for(let j =1 ; j<=i; j++){  // nb of column
console.log("*")
        }
        console.log("\n")
    }
}

displayGraph()