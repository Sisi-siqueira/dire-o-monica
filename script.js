const monica=document.getElementById('monica');
const BuCima=document.getElementById('acima');
const BuBaixo=document.getElementById('abaixo');
const BuDireita=document.getElementById('direita');
const BuEsqueda=document.getElementById('esqueda');
const BuCentro=document.getElementById('centro')
BuCima.addEventListener('click',() => {
    monica.src= 'monica-cima.png';
})
BuBaixo.addEventListener('click',() => {
    monica.src= 'monica-baixo.png';
})
BuDireita.addEventListener('click',() => {
    monica.src = 'monica-direita.png' ;
})
BuEsqueda.addEventListener('click',() => {
    monica.src ='monica-esquedo.png' ;
})
BuCentro.addEventListener('click',() => {
    monica.src ='Monica-centro.png' ;
})




