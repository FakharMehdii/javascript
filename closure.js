function myFunc() {
    let day = 1;
  
    function incrementDay() {
      if (day === 7) {
        day = 1;
      } else {
        day++;
      }
  
      console.log(day);
    }
  
    return incrementDay;
  }
  
  const myVar = myFunc();
  myVar();

  