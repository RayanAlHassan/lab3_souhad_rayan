
var index =0; // to stop the looping at specific index 
var key 
namee=prompt("enter a name") // we put our condition  to test here 

while(namee !== "END"){
    namee=prompt("enter a name" + namee) // we put our condition  to test here 
    console.log(`The name is ${namee} `)
    index++;
    if(index === 2){
        break
    }
}
