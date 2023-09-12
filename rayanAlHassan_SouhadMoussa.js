//ex1
var keys=0 ;
switch (keys) {
  case 0:
    console.log("we sank together");
    break;
  case 3000: // Value of foo matches this criteria; execution starts from here
    console.log("we did it");
  // Forgotten break! Execution falls through
  case keys>0&&keys<3000: // no break statement in 'case 0:' so this case will run as well
    console.log("we need to swim a little bit more");
    break; // Break encountered; will not continue into 'case 2:'
 
  default:
    console.log("default");
}