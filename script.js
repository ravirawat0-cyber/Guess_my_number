// 'use strict';
// console.log(document.querySelector('.message').textContent)
// document.querySelector('.message').textContent='🥳 correct Number'
// console.log(document.querySelector('.message').textContent)

// document.querySelector('.number').textContent='60'
// document.querySelector('.score').textContent='20'


// document.querySelector('.guess').value=56
// console.log(document.querySelector('.guess').value)

let secretNumber=Math.trunc(Math.random()*20)+1



let score = 20;
let Highscore=0;

const displayMessage= function(message)
{
  document.querySelector('.message').textContent=message;
}


document.querySelector('.check').addEventListener('click',function()
{
    const guess=Number (document.querySelector('.guess').value)

    if(!guess)
    {
        // document.querySelector('.message').textContent='🤕 No number';
        displayMessage('🤕 No number');
    }

    // when player wins

    else if(guess ===secretNumber)
    {
       displayMessage('🥳 Correct Number!')
     
         document.querySelector('.number').textContent=secretNumber
        document.querySelector('body').style.backgroundColor='#60b347';
         document.querySelector('.number').style.width='30rem';

         if(score> Highscore)
         {
             Highscore=score;
             document.querySelector('.highscore').textContent=Highscore;
         }
    }
    else if (guess !== secretNumber)
    {
        if(score> 1)
        {
         displayMessage(guess >secretNumber ?'⚡To High' :'⚡To Low')
        score--;   
        document.querySelector('.score').textContent=score
        }
          else{
   
           displayMessage('You lost the game')
            document.querySelector('.score').textContent=0;
           
        }

    }

// orrr this method


    // when guess is to high
    // else if (guess > secretNumber)
    // {
    //    if(score> 1)
    //     {
    //      document.querySelector('.message').textContent='⚡To High'
    //     score--;   
    //     document.querySelector('.score').textContent=score
    //     }
    //       else{
   
    //         document.querySelector('.message').textContent='You lost the game'
    //         document.querySelector('.score').textContent=0;
           
    //     }
    // }

    // // when guess is to low

    // else if (guess < secretNumber)
    // {  
    //     if(score> 1)
    //     {
    //      document.querySelector('.message').textContent='⚡To Low'
    //      score--;   
    //      document.querySelector('.score').textContent=score
    // }
    // else{
    //     document.querySelector('.message').textContent='You lost the game'
    //     document.querySelector('.score').textContent=0;
    // }
       
    // }
    
});


document.querySelector('.again').addEventListener('click',function(){
    
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;

    displayMessage('Starting guessing...');

    document.querySelector('.score').textContent= score;

    document.querySelector('.number').textContent='?';

    document.querySelector('.guess').value='';
   
    document.querySelector('.number').style.width='15rem';

    document.querySelector('body').style.backgroundColor='#222'



})