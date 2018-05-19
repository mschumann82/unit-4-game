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
    $("#losses").text(losses);
    $("#wins").text(wins);

    var earth = randomNumber(); 
    console.log(earth);

    var fire = randomNumber(); 
    console.log(fire);

    var water = randomNumber(); 
    console.log(water);

    var wind = randomNumber(); 
    console.log(wind);

    function reset() {
        randomNumber();
        randomTotal();
        userScore = 0;
        var earth = randomNumber(); 
        console.log(earth);

        var fire = randomNumber(); 
        console.log(fire);

        var water = randomNumber(); 
        console.log(water);

        var wind = randomNumber(); 
        console.log(wind);


    }

    function wins() {
        wins++; 
        $("#wins").text(wins);
        reset();
    }

    function losses() {
        wins++; 
        $("#losses").text(losses);
        reset();
    }

    

        
    $("#earth").on("click", function () { 
        userScore = userScore + earth;
        console.log(earth);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            wins();
            
        }
        if (userScore > rndNumber) {
            losses();
            
        }
            
    });

    $("#fire").on("click", function () { 
        userScore = userScore + fire;
        console.log(fire);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            wins();
            
        }
        if (userScore > rndNumber) {
            losses();
            
        }
    });

    $("#water").on("click", function () { 
        userScore = userScore + water;
        console.log(water);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            wins();
            
        }
        if (userScore > rndNumber) {
            losses();
            
        }
    });

    $("#wind").on("click", function () { 
        userScore = userScore + wind;
        console.log(wind);
        console.log(userScore);
        $("#score").text(userScore);
        if (userScore === rndNumber) {
            wins();
            
        }
        if (userScore > rndNumber) {
            losses();
            
        }
    });

    





});