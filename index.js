
var scores, activePlayer, roundScore, gamePLaying;

init();

function roll() {
    if(gamePLaying){
        var dice = Math.floor(Math.random()*6) + 1;
        var diceDom = document.getElementById('dice');
        diceDom.style.display="block";
        diceDom.src= "css/images/dice-" + dice + ".png";
        roundScore+=dice;
        if(dice == 1){
            roundScore=0;
            document.getElementById('play-area-' + activePlayer).classList.remove('active');
            document.getElementById('round-score-' + activePlayer).textContent="Round Score: " + roundScore;
            switchPlayer();
        }
        document.getElementById('play-area-' + activePlayer).classList.add('active');
        document.getElementById('round-score-' + activePlayer).textContent="Round Score: " + roundScore;
    }
    else{
        init();
    }
}

function switchPlayer() {
    if(activePlayer == 1)
    activePlayer = 2;
    else
    activePlayer = 1;
}
function hold() {
    scores[activePlayer-1] += roundScore;
    if(scores[activePlayer-1] >= 50){
        document.getElementById('name-' + activePlayer).innerHTML="WINNER"
        document.getElementById('play-area-' + activePlayer).classList.add('winner');
    }
    document.getElementById('play-area-' + activePlayer).classList.remove('active');
    document.getElementById('score-' + activePlayer).textContent="Total  " + scores[activePlayer-1];
    roundScore=0;
    document.getElementById('round-score-' + activePlayer).textContent="Round Score: " + roundScore;
    switchPlayer();
    document.getElementById('play-area-' + activePlayer).classList.add('active');
}

function init() {
    scores= [0,0];
    activePlayer=1;
    roundScore=0;
    gamePLaying=true;
    document.getElementById('score-1').textContent="Total  0";
    document.getElementById('score-2').textContent="Total  0";
    document.getElementById('round-score-1').textContent="Round Score: 0";
    document.getElementById('round-score-2').textContent="Round Score: 0";
    document.getElementById('dice').style.display='none';
    document.getElementById('play-area-1').classList.remove('active');
    document.getElementById('play-area-1').classList.remove('winner');
    document.getElementById('play-area-2').classList.remove('active');
    document.getElementById('play-area-2').classList.remove('winner');
}