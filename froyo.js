// Prompt to enter flavors
const userInputString = prompt('List the flavors you would like to order):');

    // Array of flavors
    const stringArray = userInputString.split(',');

    // Number of flavors
    const flavorCount = {};

// Display favor count
function displayFlavorCount(flavorArray) {

    // Occurrences of each allowed flavor
    flavorArray.forEach(flavor => {
       if(!flavorCount[flavor]){
        //if this object FlavorCount has no flavor property set it to 0 => {Vanilla: 0} you can either access this by ObjName[keyName] || ObjName.keyName
        flavorCount[flavor] = 0; 
       } 
        flavorCount[flavor] = flavorCount[flavor] += 1;
        
     
      // {Vanilla: 3}
      //outside condition do something
      // if the first condition isnt met then we basically set the flavor to 1; 
    });
    console.log (flavorCount)

    // Display the flavor count in the console
    console.table(flavorCount);
  }
  displayFlavorCount(stringArray)