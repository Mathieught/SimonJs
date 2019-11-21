let on = false; //btn on
let simon; //ordre jeu simon
let simonOrder = [];
let playerScore = []; // ordre du joueur
let roundCount = 0; // count lvl
let playerCount = 0; // count lvl
// let turn = 1;// savoir a qui est le tour
let match; // check bonne reponse ou non
let simonTurn = true; // savoir quand le joueur ou simon joue
let interval;// interval fonction flash lumiere
let noise; // sounds
let lose; // win or lose


//SELECTEUR
const $scorebx1 = document.getElementById('scorebx1') //select count turn box
const $scorebx2 = document.getElementById('scorebx2') //select count turn box

const $btnb = document.getElementById('btnblue');
const $btng = document.getElementById('btngreen');
const $btnr = document.getElementById('btnred');
const $btny = document.getElementById('btnyellow');


const $btnstart = document.getElementById('btnstart1'); //select play button
const $btnreset = document.getElementById('btnstart2');//select reset button
const $btnSimon = document.getElementById('btnStatusSimon');//select reset button
const $btnPlayer = document.getElementById('btnStatusPlayer');//select reset button

const $btntest = document.getElementById('btnblue');



//EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT
// onclick start btn
$btnstart.addEventListener('click', () => {
    on = true;
    clearInterval(interval);
    if(on === true && simonTurn === true){
        play();
    }
});

//RESETTTT
$btnreset.addEventListener('click', () => {
    $btnreset.classList.add('btnactivecolor');
    resetGame();
});



// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION 
// FUNCTION PLAY JOUER JOUER PLAY JOUER PLAY JOUER JOUER JOUER JOUER JOUER PLAY

function play() {
    $btnstart.classList.add('btnactivecolor');
    roundCount = 1;

    $scorebx1.innerHTML = roundCount;
    $scorebx2.innerHTML = playerCount;
    console.log(on); 
        if(simonTurn === true){
        addColor();
        interval = setInterval(autorun, 1500);
    }
    if(playerCount >= roundCount){
        clearInterval();
        simonTurn = false;
        if(simonOrder === false){
            clearInterval(interval);
            console.log(interval);
        }
        console.log('marche', simonTurn)
    };
};
function addColor(){
    $btnSimon.classList.add('btnstatuscolor');
    $btnPlayer.classList.remove('btnstatuscolor');
};
function autorun(){
    if(on === true && simonTurn === true){
        x = roundCount;
        playerCount++; 
        console.log(playerCount);
    for (i = 0; i < x; i++) {
        simon = [];
        simon.push(Math.floor((Math.random() * 4)));
        // simonOrder.push(simon);
        console.log(simon);
        console.log(simonOrder);
        flash();
    }
}
};

function flash(){
    if(simon== 0){
            $btnb.classList.add('activated');
        setTimeout(function (){
            $btnb.classList.remove('activated');
        },1000);
    }
    if(simon== 1){
            $btng.classList.add('activated');
        setTimeout(function (){
            $btng.classList.remove('activated');
        },1000);
    }
    if(simon== 2){
            $btnr.classList.add('activated');
        setTimeout(function (){
            $btnr.classList.remove('activated');
        },1000);
    }
    if(simon == 3){
            $btny.classList.add('activated');
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





