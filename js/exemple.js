// let player = []
// let simon = []
// let start = false;
// let turnPlayer = false;

// const $buttons = document.querySelectorAll(".boxbtn")
// const $btnstart = document.getElementById('btnstart1');

// [...$buttons].map(ele => {
//     ele.onclick = () => {
//         if(turnPlayer){
//             console.log(ele.className[ele.className.length -1])
//             player.push(Number(ele.className[ele.className.length -1]))
//             switch(verification()){
//                 case 0: //GAME OVER
//                     console.log("GAME OVER")
//                     break;
//                 case 1: //JOEUUR JOUE ENCORE
//                     console.log("JOEU ENCORE BOUFFON")
//                     break;
//                 case 2: // TOUR SIMON
//                     turnPlayer = false;
//                     player = []
//                     simonTurn();
//                     break;
//             }
//         }
//     }
// });

// const verification = () => {
//     if(simon[player.length -1] === player[player.length -1]){
//         return simon.length === player.length ? 2 : 1;
//     } else {
//         return 0;
//     }
// }

// const simonTurn = () => {
//     simon.push(Math.floor(Math.random() * Math.floor(4)));
//     turnPlayer = true;
// }

// const startGame = () => {
//     simonTurn();
// }

// $btnstart.onclick = () => startGame();