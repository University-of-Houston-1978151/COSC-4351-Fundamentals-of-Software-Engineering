function displayElements(){

   const userArray = prompt(); // Code will be tested with other array values as well
   
   /* Your solution goes here */
   let array = userArray.split(' ');
   array.pop();
   array.pop();
   array.push(3)
   array.push(9);

   console.log(array)
}
