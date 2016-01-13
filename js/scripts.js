$(document).ready(function() {
  var reptile = prompt("Would you like to learn about snakes, turtles, or lizards?").toLowerCase();

  if (reptile === "snakes") {
    $('#snakes').show();
  } else if (reptile === "turtles") {
    $('#turtles').show();
  } else if (reptile === "lizards") {
    $('#lizards').show();
  } else {
    alert("You did not enter a correct reptile option. Try again.");
    window.location.reload();
  }
});
