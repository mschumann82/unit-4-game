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

    var userScore = 0;
    var wins = 0;
    var losses = 0;
    
    $("#rndNum").text(rndNumber);
    $("#score").text(userScore);

    var earth = randomNumber(); 
    console.log(earth);

    var fire = randomNumber(); 
    console.log(fire);

    var water = randomNumber(); 
    console.log(water);

    var wind = randomNumber(); 
    console.log(wind);

    

        
    $("#earth").on("click", function () { 
        userScore = userScore + earth;
        console.log(earth);
        console.log(userScore);
        $("#score").text(userScore);
            
    });

    $("#fire").on("click", function () { //for homework we could call the function
        userScore = userScore + fire;
        console.log(fire);
        console.log(userScore);
        $("#score").text(userScore);
    });

    $("#water").on("click", function () { //for homework we could call the function
        userScore = userScore + water;
        console.log(water);
        console.log(userScore);
        $("#score").text(userScore);
    });

    $("#wind").on("click", function () { //for homework we could call the function
        userScore = userScore + wind;
        console.log(wind);
        console.log(userScore);
        $("#score").text(userScore);
    });





});