let on = false; //btn on
let simon = []; //ordre jeu simon
let player = []; // ordre du joueur
let roundCount = 0; // count lvl
let turn;// savoir a qui est le tour
let match; // check bonne reponse ou non
let simonTurn; // savoir quand le joueur ou simon joue
let runinterval;// interval fonction flash lumiere
let noise; // sounds
let win; // win or lose


//SELECTEUR
const $scorebx1 = document.getElementById('scorebx1') //select count turn box
const $case = document.querySelectorAll('.boxbtn'); //Select color btn
const $btnstart = document.getElementById('btnstart1'); //select play button
const $btnreset = document.getElementById('btnstart2');//select reset button

const $btntest = document.getElementById('btnblue');



//EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT EVENT
// onclick start btn
$btnstart.addEventListener('click', () => {
    on = true;
    play();
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
        }
        console.log(on);
        $btnreset.classList.remove('btnactivecolor');
        $btnstart.classList.remove('btnactivecolor');
    }, 500);
    
});



// FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION FUNCTION 
// FUNCTION PLAY JOUER JOUER PLAY JOUER PLAY JOUER JOUER JOUER JOUER JOUER PLAY
function play() {
    $btnstart.classList.add('btnactivecolor');
    turn = 1 ;
    $scorebx1.innerHTML = 1;
    console.log(on);
    // simon = [];
    for (i = 0; i < 1; i++) {
        simon.push(Math.floor((Math.random() * 4)));
        console.log(simon);
    }
    simon.map(ele => {
        flash(ele);
    })
    runinterval = setInterval(flash, 1000);
    simonTurn = true;
    
}

function flash(i){
    $case[i].classList.add('activated');
    setTimeout(function (){
        $case[i].classList.remove('activated');
    },1000);
}

// function autoPlay(){
//     if (simonTurn === turn){
//         simonTurn = false;
//     }
//     if (simonTurn === true){

//     }
// }


function resetflash() {
    $btnblue.classList.remove('activated');
    $btnred.classList.remove('activated');
    $btngreen.classList.remove('activated');
    $btnyellow.classList.remove('activated');
}










