// P- create a function for Rock, Paper, Scissors
// R- return player 1 wins, player 2 wins or draw
// E- (rock, scissors)=> player 1 wins
// P- 

const rps = (p1, p2) => {
    if(p1 ==='rock'&& p2==='scissors'||p1==='scissors'&&p2==='paper'||p1==='paper'&&p2==='rock'){
        console.log('Player 1 won!')
    }else if(p1==='scissors'&& p2==='rock'||p1==='paper'&&p2==='scissors'||p1==='rock' && p2==='paper'){
        console.log('Player 2 won!')
    }else console.log('Draw!') 
};

rps('paper','rock') //Player One Wins
rps('paper', 'scissors')//Player Two Wins
rps('scissors','scissors')//Draw
rps('paper', 'paper')