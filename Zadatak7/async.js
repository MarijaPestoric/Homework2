/* CHALLENGE 1 */

function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  // testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
  
  function delayedGreet() {
    setTimeout(()=>{
      console.log("welcome")
    },3000)
  }
  // Uncomment the following line to check your work!
  //delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  
  function helloGoodbye() {
    console.log('hello');
    setTimeout(()=>{
      console.log('goodbye')
    },3000)
  }
  // Uncomment the following line to check your work!
  //helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
  
  function brokenRecord() {
    setInterval(()=>{
      console.log('hi again')
    },1000)
  }
  // Uncomment the following line to check your work!
  //brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
  
  function limitedRepeat() {
    const interval = setInterval(()=>{
      console.log('hi for now');
    },1000);
    setTimeout(()=>{
      clearInterval(interval);
    },5000)
  }
  // Uncomment the following line to check your work!
  //limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
  
  function everyXsecsForYsecs(func, interval, duration) {
    const intervalId = setInterval(func, 2000);
    setTimeout(()=>{
      clearInterval(intervalId)}, 20000);
  }
  // Uncomment the following lines to check your work!
  // function theEnd() {
  //   console.log('This is the end!');
  // }
  //  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  

  