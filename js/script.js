let on = false; //btn on
let simon = []; //ordre jeu simon
let player = []; // ordre du joueur
let roundCount = 0; // count lvl
let turn;// savoir a qui est le tour
let match; // check bonne reponse ou non
let simonTurn; // savoir quand le joueur ou simon joue
let interval;// interval fonction flash lumiere
let noise; // sounds
let win; // win or lose


//SELECTEUR
const $scorebx1 = document.getElementById('scorebx1') //select count turn box

const $btnb = document.getElementById('btnblue');
const $btng = document.getElementById('btngreen');
const $btnr = document.getElementById('btnred');
const $btny = document.getElementById('btnyellow');


const $btnstart = document.getElementById('btnstart1'); //select play button
const $btnreset = document.getElementById('btnstart2');//select reset button

const $btntest = document.getElementById('btnblue');



//EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT
// onclick start btn
$btnstart.addEventListener('click', () => {
    on = true;
    clearInterval(interval);
    if( on === true){
        play();
    }
    
});

$btnreset.addEventListener('click', () => {
    $btnreset.classList.add('btnactivecolor');
    setTimeout(function() {
        $scorebx1.innerHTML = "--" ;
        roundCount = 0 ;
        on = false;
        if(on === false){
            console.clear();
            simon = [];
            clearInterval();
        }
        console.log(on);
        $btnreset.classList.remove('btnactivecolor');
        $btnstart.classList.remove('btnactivecolor');
    }, 600);
    
});



// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION 
// FUNCTION PLAY JOUER JOUER PLAY JOUER PLAY JOUER JOUER JOUER JOUER JOUER PLAY

function play() {
    $btnstart.classList.add('btnactivecolor');
    turn = 1 ;
    $scorebx1.innerHTML = 1;
    console.log(on); 
        interval = setInterval(autorun, 1500);
        console.log(interval);
}

function autorun(){
    if(on === true){
    for (i = 0; i < 1; i++) {
        simon = [];
        simon.push(Math.floor((Math.random() * 4)));
        console.log(simon);
        flash();
    }
}
}

function flash(){
    if(simon == 0){
            $btnb.classList.add('activated');
        setTimeout(function (){
            $btnb.classList.remove('activated');
        },1000);
    }
    if(simon == 1){
            $btng.classList.add('activated');
        setTimeout(function (){
            $btng.classList.remove('activated');
        },1000);
    }
    if(simon == 2){
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
}











