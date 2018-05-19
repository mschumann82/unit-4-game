function randomNumber () { //create a function that creates a random number
    return Math.floor(Math.random() * 12) + 1; // then call it multipe times in 
    //multipe functions with click events.
  }

  function randomTotal () { 
    return Math.floor(Math.random() * 102) + 19; 
  }
  rndNumber = randomTotal();
  console.log(rndNumber);

  var earth = randomNumber(); 
    console.log(earth);

    var fire = randomNumber(); 
    console.log(fire);

    var water = randomNumber(); 
    console.log(water);

    var wind = randomNumber(); 
    console.log(wind);

     

  $(document).ready(function() {  

    var userScore = 0;
    var wins = 0;
    var losses = 0;
    
    $("#rndNum").text(rndNumber);
    $("#score").text(userScore);
    $("#losses").text(losses);
    $("#wins").text(wins);

    

    function reset() {
        rndNumber = randomTotal();
        userScore = 0;
        $("#rndNum").text(rndNumber);
        $("#score").text(userScore);
        earth = randomNumber(); 
        console.log(earth);

        fire = randomNumber(); 
        console.log(fire);

        water = randomNumber(); 
        console.log(water);

        wind = randomNumber(); 
        console.log(wind);
        


    }

    function winner() {
        wins++; 
        $("#wins").text(wins);
        reset();
    }

    function loser() {
        losses++; 
        $("#losses").text(losses);
        reset();
    }

    

        
    $("#earth").on("click", function () { 
        userScore = userScore + earth;
        console.log(earth);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            winner();
            
        }
        if (userScore > rndNumber) {
            loser();
            
        }
            
    });

    $("#fire").on("click", function () { 
        userScore = userScore + fire;
        console.log(fire);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            winner();
            
        }
        if (userScore > rndNumber) {
            loser();
            
        }
    });

    $("#water").on("click", function () { 
        userScore = userScore + water;
        console.log(water);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            winner();
            
        }
        if (userScore > rndNumber) {
            loser();
            
        }
    });

    $("#wind").on("click", function () { 
        userScore = userScore + wind;
        console.log(wind);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            winner();
            
        }
        if (userScore > rndNumber) {
            loser();
            
        }
    });

    





});