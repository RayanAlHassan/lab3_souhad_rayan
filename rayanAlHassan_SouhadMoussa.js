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


    let Arr = [50, 70, 20, 10, 13];
    let minValue = Infinity;
    let maxValue = -Infinity;

    for (let i=0 ; i<Arr.length-1;i++) {

        // Find minimum value
        if (Arr[i] < minValue)
            minValue = Arr[i] ;

        // Find maximum value
        if (Arr[i]  > maxValue)
            maxValue = Arr[i] ;
    }

    console.log("Minimum element is:" + minValue);
    console.log("Minimum element is:" + maxValue);

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

//ex 4

// var arr =  [50, 70, 20, 80, 13];
// var max=arr[0] ;
// for(let i=0; i<arr.length; i++){
//  for(let j=0; j<arr.length; j++){
//   if(max[i] > max[j]){
//     max=arr[i]
//   }
//  }


// }
//  console.log(max)

