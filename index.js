
var numberofbuttons = document.querySelectorAll('.drum').length;

// detecting mouse clicks
for (var i = 0; i< numberofbuttons; i++){
document.querySelectorAll('.drum')[i].addEventListener('click', function (){
  var buttonname = this.innerHTML;
  buttonAnimation(buttonname);
  switch(buttonname){
    case('w'):
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();

    break;
    case('a'):
    var tom2  = new Audio('sounds/tom-2.mp3');
    tom2.play();
    break;
    case('s'):
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
    break;
    case('d'):
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
    break;
    case('j'):
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
    break;
    case('k'):
    var crash = new Audio('sounds/crash.mp3');
    crash.play();
    break;
    case('l'):
    var kick = new Audio('sounds/kick-bass.mp3');
    kick.play();
    break;


    default:
    console.log(buttonname);
  }


});

}

// detecting keyboard pressed
document.addEventListener('keypress', function(event){
    var keypress = event.key;
    buttonAnimation(keypress.toLowerCase());
    switch(keypress){
      case('w'):
      case('W'):
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
      case('a'):
      case('A'):
      var tom2  = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
      case('s'):
      case('S'):
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
      case('d'):
      case('D'):
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
      case('j'):
      case('J'):
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
      case('k'):
      case('K'):
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
      case('L'):
      case('l'):
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;


      default:
      console.log(keypress);
    }

})

// adding animation
function buttonAnimation(buttonkey){
  var activeButton = document.querySelector('.'+buttonkey);
  activeButton.classList.add("pressed");

  // to return back state after 100 ms
  setTimeout(
    function (){
      activeButton.classList.remove('pressed');
    }, 100);
}
