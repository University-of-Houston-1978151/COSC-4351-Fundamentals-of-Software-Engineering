function drawTriangle(triangleSize) {

   // Your solution goes here
   for (let i = triangleSize-1; i >= 0; i--) {
      let output = "";

      for (let j = 0; j < triangleSize-i; j++) {
         output += "*";
      }
      console.log(output)
   }
   
}

drawTriangle(4)