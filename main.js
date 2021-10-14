const player1 = {
    name: 'scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['glock'],
    attack: function () {
        console.log ( player1.name + 'Fight...')
    }
};
 
const player2 = {
    name: 'subzero',
    hp: 90,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['fist'],
    attack: function () {
        console.log ( player2.name + 'Fight...')
    }
};
 
function createPlayer(playerNumber, objectName) {
    const $player = document.createElement('div');
    $player.classList.add(playerNumber);
 
    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
 
    const $character = document.createElement('div');
    $character.classList.add('character');
 
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = 'player.hp' + "%";
 
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = objectName.name;
 
    const $img = document.createElement('img');
    $img.src = objectName.img;
    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);
 
    const arenas = document.querySelector('.arenas');
    arenas.appendChild($player);
}
 
createPlayer('player1', player1);
createPlayer('player2', player2);
player1.attack();
player2.attack();
 
 
// function createplayer(personage, name,hp,img) {
//     const $arenas = document.querySelector('.arenas');
// const $player = document.createElement('div');
// const $progressbar = document.createElement('div');
// const $character = document.createElement('div');
// const $life = document.createElement('div');
// const $img = document.createElement('div');
// const $name = document.createElement('div');

 
// playerFirst.className = player;
// progressbar.className = 'progressbar';
// character.className = 'character';
// life.className = 'life';
// life.style.width = 100 + '%';
// name.className = 'name';
// name.textContent = namePlayer.name;
// img.src = namePlayer.img;
 
// arena.appendChild(playerFirst)
// playerFirst.appendChild(progressbar);
// playerFirst.appendChild(character);
// progressbar.appendChild(life);
// progressbar.appendChild(name);
// character.appendChild(img)
// }