$(document).ready(function () {
  var counter = 0;
  var wins = 0;
  var losses = 0;
  var randomNumber;
  var crystalUno ;
  var crystalDue ;
  var crystalTre ;
  var crystalQuattro;

  function resetGame() {
    // onclick(crystalUno)
    counter = 0;
    randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
    crystalUno = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(crystalUno)
    crystalDue = Math.floor(Math.random() * (12 - 1) + 1);
    console.log("crystalDue value is" + crystalDue);

    crystalTre = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(crystalTre)
    crystalQuattro = Math.floor(Math.random() * (12 - 1) + 1);
    $("#uno").attr("dataCrystalvalue", crystalUno)
    $("#due").attr("dataCrystalvalue", crystalDue)
    $("#tre").attr("dataCrystalvalue", crystalTre)
    // $("#tre").attr("dataCrystalvalue", crystalTre)
    $("#quattro").attr("dataCrystalvalue", crystalQuattro)
  
    $("#number-to-guess").text(randomNumber);
  
  }
  // resetGame();

    
  

  // resetGame();


  $(".crystal-image").on("click", function () {
    var Crystalvalue = ($(this).attr("dataCrystalvalue"));

    // counter +=(parseInt(Crystalvalue))
    Crystalvalue = parseInt(Crystalvalue);
    counter += Crystalvalue;
    console.log (Crystalvalue);
    $("#counter").text(counter);
    
    counter++;
    counter += Crystalvalue;
    counter += (parseInt(Crystalvalue));
    console.log("click");

    alert("New score: " + counter);
    if (counter === randomNumber) {
      alert("e tu E")
      console.log("YOU WIN!")
      wins ++;
      $("#losses").text(losses);
      resetGame();
    }
    else if (counter >= randomNumber) {
      losses++;
      alert("YOU LOSE!");
      resetGame();
    }
    $("#counter").text(counter);
    $("#wins").text(wins);
    $("#losses").text(losses);

    });
    resetGame();
});