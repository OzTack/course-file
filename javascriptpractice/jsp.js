function    checkDriverAge() {
var age = prompt("enter your age!");
if (Number(age) === 18) {
  alert('Congratulations on your first year of driving. Enjoy the ride!');
} else if (Number(age) < 18) {
  alert('Sorry, you are too young to drive this car. Powering off');
} else {
  alert("Powering On. Enjoy the ride!");
}
}
checkDriverAge ();
