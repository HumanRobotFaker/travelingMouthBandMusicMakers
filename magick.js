console.log ("mark is quite an adept human being");

const buttonMagick = document.querySelector ('#prototypeButton');
const explosionPicture = document.querySelector ('#prototypeExplosion');

buttonMagick.addEventListener ('click', textSwap);

function textSwap (event) {
if (explosionPicture.classList.contains('hidden')) {
    explosionPicture.classList.remove('hidden');
}
else {
    explosionPicture.classList.add('hidden');

}
}

