let on = false; //btn on
let simon; //ordre jeu simon
let simonOrder = [];
let playerScore = []; // ordre du joueur
let roundCount = 0; // count lvl
let playerCount = 0; // count lvl
// let turn = 1;// savoir a qui est le tour
let simonTurn = true; // savoir quand le joueur ou simon joue
let PlayerTurn = false;
let interval;// interval fonction flash lumiere
let noise; // sounds
let lose; // win or lose

//SELECTEUR
const audio1 = new Audio('../sounds/do.wav');
const audio2 = new Audio('../sounds/re.wav');
const audio3 = new Audio('../sounds/mi.wav');
const audio4 = new Audio('../sounds/fa.wav');

const $scorebx1 = document.getElementById('scorebx1') //select count turn box
const $scorebx2 = document.getElementById('scorebx2') //select count turn box

const $btnb = document.getElementById('btnblue');
const $btng = document.getElementById('btngreen');
const $btnr = document.getElementById('btnred');
const $btny = document.getElementById('btnyellow');

let $0 = document.getElementsByClassName('.0');
let $1 = document.getElementsByClassName('.1');
let $2 = document.getElementsByClassName('.2');
let $3 = document.getElementsByClassName('.3');


const $btnstart = document.getElementById('btnstart1'); //select play button
const $btnreset = document.getElementById('btnstart2');//select reset button
const $btnSimon = document.getElementById('btnStatusSimon');//select reset button
const $btnPlayer = document.getElementById('btnStatusPlayer');//select reset button

const $btntest = document.getElementById('btnblue');



//EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT
// onclick start btn
$btnstart.addEventListener('click', () => {
    on = true;
    roundCount = 1;
    clearTimeout(interval);
    $scorebx1.innerHTML = roundCount;
    $scorebx2.innerHTML = playerCount;
    if(on === true && simonTurn === true){
        playGame();
    }
});

//RESETTTT
$btnreset.addEventListener('click', () => {
    $btnreset.classList.add('btnactivecolor');
    resetGame();
});

// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION 
// FUNCTION PLAY JOUER JOUER PLAY JOUER PLAY JOUER JOUER JOUER JOUER JOUER PLAY

function playGame() {
    $btnstart.classList.add('btnactivecolor');
    console.log(on); 
        if(simonTurn === true){
        addColor();
        interval = setTimeout(autorun, 1500);
    };
};
function addColor(){
    $btnSimon.classList.add('btnstatuscolor');
    $btnPlayer.classList.remove('btnstatuscolor');
};
function changeTurn(){
    if(playerCount >= roundCount){
        simonTurn = false;
        if(simonTurn = false){
            PlayerTurn = true ;
            clearTimeout(interval);
            match();
        };
        if(simonTurn == true && PlayerTurn == false){
            roundCount++;
            playGame();
        }
        console.log(PlayerTurn);
        console.log('marche', simonTurn)
        Player();
    };
}
function autorun(){
    on = true;
    changeTurn();
    if(on === true && simonTurn === true){
        x = roundCount;
        playerCount++;
        $scorebx1.innerHTML = roundCount;
        $scorebx2.innerHTML = playerCount;
        console.log(playerCount);
        for (i = 0; i < x; i++) {
        simon = [];
        simon.push(Math.floor((Math.random() * 4)));
        console.log('marche', simonTurn)
        simonOrder.push(simon);
        console.log(simon);
        console.log(simonOrder);
        flash();
    }
}
};
function Player(){
    if(on === true && simonTurn === false && PlayerTurn === false){
        $btnb.addEventListener('click', () => {
            $0 = 0;
            if($0 === 0){
                playerScore.push($0);
                console.log(playerScore);
                $btnb.classList.add('activated');
                audio1.play();
                setTimeout(function (){
                    $btnb.classList.remove('activated');
                },1000);
            };
        });
        $btng.addEventListener('click', () => {
            $1 = 1;
            if($1 === 1){
                playerScore.push($1);
                console.log(playerScore);
                $btng.classList.add('activated');
                audio2.play();
                setTimeout(function (){
                    $btng.classList.remove('activated');
                },1000);
            };
        });
        $btnr.addEventListener('click', () => {
            $2 = 2;
            if($2 === 2){
                playerScore.push($2);
                console.log(playerScore);
                $btnr.classList.add('activated');
                audio3.play();
                setTimeout(function (){
                    $btnr.classList.remove('activated');
                },1000);
            };
        });
        $btny.addEventListener('click', () => {
            $3 = 3;
            if($3 === 3){
                playerScore.push($3);
                console.log(playerScore);
                $btny.classList.add('activated');
                audio4.play();
                setTimeout(function (){
                    $btny.classList.remove('activated');
                },1000);
            }
        });
    };
    
}
function match(){
    if(playerScore = simonOrder ){
        PlayerTurn = false;
        simonTurn = true;
        if(simonTurn = true){
            playGame();
        }
        console.log(PlayerTurn);
        console.log(simonTurn);
    };
};
function flash(){
    if(simon == 0){
            $btnb.classList.add('activated');
            audio1.play();
        setTimeout(function (){
            $btnb.classList.remove('activated');
        },1000);
    }
    if(simon == 1){
            $btng.classList.add('activated');
            audio2.play();
        setTimeout(function (){
            $btng.classList.remove('activated');
        },1000);
    }
    if(simon == 2){
            $btnr.classList.add('activated');
            audio3.play();
        setTimeout(function (){
            $btnr.classList.remove('activated');
        },1000);
    }
    if(simon == 3){
            $btny.classList.add('activated');
            audio4.play();
        setTimeout(function (){
            $btny.classList.remove('activated');
        },1000);
    }
};

function resetGame(){
    setTimeout(function() {
        $scorebx1.innerHTML = "--";
        $scorebx2.innerHTML = "--";
        roundCount = 0 ;
        playerCount = 0;
        on = false;
        if(on === false){
            console.clear();
            playerScore = [];
            simon = [];
            simonOrder = [];
            simonTurn = true;
            if(simonTurn === true){
                $btnSimon.classList.remove('btnstatuscolor');
            }
            clearInterval();
        }
        console.log(on);
        $btnreset.classList.remove('btnactivecolor');
        $btnstart.classList.remove('btnactivecolor');
    }, 500);
};





