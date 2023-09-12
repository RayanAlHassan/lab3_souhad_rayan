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

