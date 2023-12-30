function dice() {
    let roll=  Math.floor(Math.random()*6+1);
      console.log(`The dice after rolling says ${roll}`);
  
  }
  dice();
  setTimeout(dice,5000)