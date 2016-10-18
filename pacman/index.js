var world = [
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
  [2,0,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
  [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var position = {
  x: 1,
  y: 1
};

function displayWorld(){
  var output = '';

  for(var idx = 0; idx < world.length; idx++){
    output += '<div class="row">';
    for(var jdx = 0; jdx < world[idx].length; jdx++){
      if(world[idx][jdx] == 2){
        output += '<div class="brick"></div>';
      }
      if(world[idx][jdx] == 1){
        output += '<div class="coin"></div>';
      }
      if(world[idx][jdx] == 0){
        output += '<div class="empty"></div>';
      }
    }
    output += '</div>';
  }
  document.getElementById('world').innerHTML = output;
}

function displayPacman(){
  document.getElementById('pacman').style.top = position.y*20 + 'px';
  document.getElementById('pacman').style.left = position.x*20 + 'px';
}

function displayScore(){
  document.getElementById('score').innerHTML = score;
}

document.onkeydown = function(e){
  // move right
  if(e.keyCode == 39 && world[position.y][position.x+1] !=2){
    document.getElementById('pacman').style.transform = 'rotate(0deg)';
    position.x++;
  }
  // move down
  if(e.keyCode == 40 && world[position.y+1][position.x] !=2){
    document.getElementById('pacman').style.transform = 'rotate(90deg)';
    position.y++;
  }
  // move left
  if(e.keyCode == 37 && world[position.y][position.x-1] !=2){
    document.getElementById('pacman').style.transform = 'rotate(180deg)';
    position.x--;
  }
  // move up
  if(e.keyCode == 38 && world[position.y-1][position.x] !=2){
    document.getElementById('pacman').style.transform = 'rotate(270deg)';
    position.y--;
  }

  if(world[position.x][position.y] == 1){
    score += 10;
    world[position.x][position.y] = 0;
  }

  displayWorld();
  displayScore();
  displayPacman();
}

displayWorld();
displayPacman();
displayScore();