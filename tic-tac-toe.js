var playerOneName = prompt('What is your Name Player 1?');
var playerTwoName = prompt('What is your Name Player 2?');
var playerTurn = 1;
document.getElementById('player_one_name').innerHTML = playerOneName;
document.getElementById('player_two_name').innerHTML = playerTwoName;

var boxes = document.getElementsByClassName('tic-tac-toe-box');
console.log(boxes);

function clearBoard(){
  for(var i = 0; i < boxes.length; i++){
    var box = boxes[i];
    box.classList.remove('ticked');
    box.innerHTML = "";
  }
}

for(var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  box.addEventListener('click', function(){
    if   (this.classList.contains('ticked')){
      alert('you cannot click a class more than once');
    } else {
      if ( playerTurn == 1 ){
        this.innerHTML = "X";
        playerTurn = 0;
        this.classList.add('ticked');
      } else {
        this.innerHTML = "O";
        playerTurn = 1;
        this.classList.add('ticked');
      }
    }
    if (document.getElementById('box1').classList.contains('ticked')){ var b1 = document.getElementById('box1').innerHTML;}
    if (document.getElementById('box2').classList.contains('ticked')){ var b2 = document.getElementById('box2').innerHTML;}
    if (document.getElementById('box3').classList.contains('ticked')){ var b3 = document.getElementById('box3').innerHTML;}
    if (document.getElementById('box4').classList.contains('ticked')){ var b4 = document.getElementById('box4').innerHTML;}
    if (document.getElementById('box5').classList.contains('ticked')){ var b5 = document.getElementById('box5').innerHTML;}
    if (document.getElementById('box6').classList.contains('ticked')){ var b6 = document.getElementById('box6').innerHTML;}
    if (document.getElementById('box7').classList.contains('ticked')){ var b7 = document.getElementById('box7').innerHTML;}
    if (document.getElementById('box8').classList.contains('ticked')){ var b8 = document.getElementById('box8').innerHTML;}
    if (document.getElementById('box9').classList.contains('ticked')){ var b9 = document.getElementById('box9').innerHTML;}
    if (
      (b1 != null && b1 == b2 && b2 == b3) ||
      (b4 != null && b4 == b5 && b5 == b6) ||
      (b7 != null && b7 == b8 && b8 == b9) ||
      (b1 != null && b1 == b5 && b5 == b9) ||
      (b3 != null && b3 == b5 && b5 == b7) ||
      (b1 != null && b1 == b4 && b4 == b7) ||
      (b2 != null && b2 == b5 && b5 == b8) ||
      (b3 != null && b3 == b6 && b6 == b9)){
        if ( playerTurn == 0){
          alert('X is the WINNER, this time');
          clearBoard();
        } else if (playerTurn == 1){
          alert('O is the WINNER, this time...');
          clearBoard();
        }
      } 
    else if (document.getElementsByClassName('ticked').length == 9) {
      alert('That is a cats, try and play again and see what you can do');
      clearBoard();
    }
  });
}





// function display_input(square){
//   if ( playerTurn == 1 ){
//     debugger;
//     document.getElementById(square).innerHTML = "X";
//     playerTurn = 0;
//   } else {
//     document.getElementById(square).innerHTML = "O";  
//     playerTurn = 1;
//   }   
// }

// this.innerHTML = 'X';