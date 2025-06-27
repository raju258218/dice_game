// usecase 1
let position=[0, 0]; 
let steps=[0, 0];        
let turn=0;              
while (position[0]<100 && position[1]<100) {

  // usecase 2
  let dice=Math.floor(Math.random()* 6)+1;
  steps[turn]++;
  console.log(" Player " +Number(turn+1) +" rolled:" +dice);

  // usecase 3
  if (position[turn]==0) {
    if (dice==1) {
      position[turn]=true;
      position[turn]=1;
      console.log("Player" +Number(turn+1)+" starts! Now at 1");
      } else {
        console.log( "Player" +Number(turn+1)+" needs 1 to start.");
        turn=1-turn;
        continue;
      }
    } else {
    let next=position[turn]+dice;
    let ladders ={3: 22, 11: 26,20: 29,35:65,45:67,78:93};

    let snakes ={17: 4,19: 7,21: 9,96:64,63:59,54:19,41:28,94:5,66:77,55:44};
     // usecase 5
    if (next > 100) {
      console.log("Need exact steps. Stay at "+position[turn]);
      turn = 1 - turn;
      continue;
    }
                                                         //ladder
    if (ladders[next]){
      console.log(" Ladder moves  from" +next+" to" +ladders[next]);
      next=ladders[next];
      position[turn]=next;
      console.log("Player"+ Number(turn + 1)+" is at"+ next);
      continue; 
    }
    if (snakes[next]) {                                 //snake
      console.log(" Snake moves behind from "+next+ "to"+ snakes[next]);
      next = snakes[next];
    }

    position[turn]=next;

    //usecase 4
    if(position[turn]<0){
      position[turn]=0;
      console.log("player"+Number(turn+1)+ "moves below 0,restart from 0");
    }
    console.log(" Player "+Number(turn + 1)+ "is at"+ position[turn]);  
    if(dice==6){
      console.log("you won another chance "+"player "+Number(turn+1));
      continue;
    }
  }
  turn=1-turn;
}