// MODAL
const $modalbtn = document.getElementById('modalbtn');
const $modal = document.getElementById('modal');
const $modalclose = document.getElementById('close');
const $out = document.getElementById('out');

$modalbtn.addEventListener('click', () =>{
    $modal.style.display = 'block' ;
});
$modalclose.addEventListener('click', () =>{
    $modal.style.display = 'none' ;
});
$out.addEventListener('click', () =>{
    $modal.style.display = 'none' ;
});