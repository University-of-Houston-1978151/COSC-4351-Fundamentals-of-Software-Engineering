function calculate(){

   const enteredNum = prompt(); // Code will be tested with other values as well
   
   /* Your solution goes here */
   let input = enteredNum;

   while (input < 60) {
      input *= 3;
      console.log(input);
   }
   
}
