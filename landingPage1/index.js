let hero = document.querySelector('.hero');
function changeHero(e){
    let imgLink = e.target.src.slice(21);
    hero.style.backgroundImage=`url(${imgLink})`;
}