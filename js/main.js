console.log("JS connected!");

var waldo = document.querySelector('#waldo');
var button = document.querySelector('button');

var self = this;

//increase by 10 pixels
function moveBy10() {
  howManyPixels += 10;
  waldo.style.top = howManyPixels + 'px';
  waldo.style.left = howManyPixels + 'px';
}

function showWaldo() {
  waldo.style.opacity=1
}

function hideWaldo() {
  waldo.style.opacity=0;
}

function moveAtRandom() {
  howManyPixelsTop = (Math.random() * 200);
  howManyPixelsLeft = (Math.random() * 800);
  console.log(this);
  hideWaldo()
  waldo.style.left= howManyPixelsLeft + 'px';
  waldo.style.top = howManyPixelsTop + 'px'
}

function startGame() {
  setTimeout(function() {
    waldo.addEventListener('click', function(){
      moveAtRandom();
    })

    waldo.addEventListener('mouseenter', function(){
      console.log("I'm working");
      showWaldo();
    })
    button.style.display = 'none';
  }, 1000)
}

button.addEventListener('click', startGame);
