var scores, roundScore, activePlayer, dice, gamePlaying;
//before we start it will be looking diz way
startNew();
var scores, roundScore, activePlayer, dice, gamePlaying;


//it use for the dice to bring random number the M in Math is capital letter
//we only want it to happen when we hit the btn roll so we take it away here 
//dice = Math.floor(Math.random() * 6) + 1;
//console.log({dice})
//document.querySelector('#current--' + activePlayer).textContent = dice;

//what i want to do hide the dice before play
//i took everything down




//now i want the roll dice btn to work for the dice when we click it first thing 
document.querySelector('.btn.btn--roll').addEventListener('click', function() {
    //meaning if game is playing all diz should happen if we dont have winner
    console.log({gamePlaying})
    if(gamePlaying) {
      //1 when i click the btn it should always bring random number
      var dice = Math.floor(Math.random() * 6) + 1;
      //2 so the dice will show again ,i want the dice to display the number showned in current 
      //make a variable for dice 
      var diceDom = document.querySelector('.dice');
      diceDom.style.display = 'block';
      diceDom.src = 'dice-' + dice + '.png';
      //the dicedom represent all the dice we cant be writting one by one var is inside becuase we are using it here alone
  
       
       
  
       //4 i want when ever am rolling the dice it should always add in the current except i roll 1 and the next player will play
       if (dice > 1) {
          
        roundScore += dice;
        document.querySelector('#current--' + activePlayer).textContent = roundScore;  
       }
        //next player it mean if it zero active player should be one or if active player is one active player should be zero
       //because i will be using the code twice i used dont repeat code and made varaibles for it up
       //nextplayer
       else {
          nextPlayer();
          
       }
    }
   
    
   
    

    });
    //we want to  use the hold btn,we use it to hold our score and put it in universal score
    //documenty.querySelector('.btn.btn--hold').addEventListener('click', function()
    document.querySelector('.btn.btn--hold').addEventListener('click', function() {
        //if we hold our scores let all diz happen
        if(gamePlaying) {
             //add current score to player global score 
        scores[activePlayer] += roundScore;
        document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
        //the game rules is the  first player to reach 100 point is to win
       if (scores[activePlayer] >= 30) {
        document.querySelector('#name--' + activePlayer).textContent = 'winner!';
        //when any player wins i want to hide the dice and remove the active
        //hide dice
        document.querySelector('.dice').style.display = 'none';
        //now i want to remove the active player
        //first when any body change from player 1 or 2 too winner  i created a class for it to add color wen we have winner
        document.querySelector('.player--' + activePlayer).classList.add('winner');
        //and remove the active sign 
        document.querySelector('.player--' + activePlayer).classList.remove('player--active');
        gamePlaying = false;
       
        }
        else {
     nextPlayer(); }
        }
       
    })
       //we have the new game btn so when we clcik it the game will start all over again
    document.querySelector('.btn.btn--new').addEventListener('click', function() {
        
        //we want the game to start all over again
        startNew();
       
    })
    function startNew() {
        scores = [0,0];
        roundScore = 0;
        activePlayer = 0;
        gamePlaying = true;
        document.querySelector('.dice').style.display = 'none';
        //3 i want to put all the scores to zero with the current score also i can do it in html also but i want to do it here
        document.getElementById('score--0').textContent = '0';
        document.getElementById('current--0').textContent = '0';
        document.getElementById('score--1').textContent = '0';
        document.getElementById('current--1').textContent = '0';
    //when we click new game the name will change from winner to player 1 or 2 
    document.getElementById('name--0').textContent = 'Player 1';
    document.getElementById('name--1').textContent = 'Player 2';
    //we are going to remove the wiiner class we created so the collor and style will go back to main player own
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    //i dont want anybody to be active player
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    //so i want player zero to always be the first player 
    document.querySelector('.player--0').classList.add('player--active');
    }
    function nextPlayer() {
        //now i want anytime i  click the hold button it will put our score in universal score and it will move to next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        //the rules of the game immediately you roll 1 your current score goes to zero straight
        document.getElementById('current--0').textContent ='0';
        document.getElementById('current--1').textContent ='0';
        //i want to put the active sign on each player playing 
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active')
       //i want the dice to be invicible when ever a player plays 1
       document.querySelector('.dice').style.display = 'none';
       }

        //so i had to put all of them down all what will happen before the game start and after we click new game 
