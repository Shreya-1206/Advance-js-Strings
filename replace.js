const milesStr = "The marathon stretched for 26.2 miles, challenging runners to push their limits and reach the finish line triumphantly. The speedometer displayed 65 miles per hour as the car cruised down the open highway, covering vast distances with ease";

function milesToKilo(str) {
   let changesUnit = str.replace(/\d+(?=\s*miles)/g, (miles) => miles * 1609)
   .replace(/miles/g, 'kms');
  

   return changesUnit;
}

console.log(milesToKilo(milesStr));