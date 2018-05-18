function randomNumber () { //create a function that creates a random number
    return Math.floor(Math.random() * 12) + 1; // then call it multipe times in 
    //multipe functions with click events.
  }

  function randomTotal () { 
    return Math.floor(Math.random() * 102) + 19; 
  }
  rndNumber = randomTotal();
  console.log(rndNumber);

  $(document).ready(function() {  
        
    $("#earth").on("click", function () { //for homework we could call the function
    
    var earth = randomNumber(); // in the click function with the 
    //appropriate id.
    console.log(earth);

    //$("#random-number").text(random);
    });

    $("#fire").on("click", function () { //for homework we could call the function
    
        var fire = randomNumber(); // in the click function with the 
        //appropriate id.
        console.log(fire);
    });

    $("#water").on("click", function () { //for homework we could call the function
    
        var water = randomNumber(); // in the click function with the 
        //appropriate id.
        console.log(water);
    });

    $("#wind").on("click", function () { //for homework we could call the function
    
        var wind = randomNumber(); // in the click function with the 
        //appropriate id.
        console.log(wind);
    });





});