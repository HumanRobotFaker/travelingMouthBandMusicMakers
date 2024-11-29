const hoverables = document.querySelectorAll ('.hoverable');
const IDpopUp = document.querySelector ('#IDcard');

const IDimages = {

    hector: "images/ID-Hector.png",
    uriah: "images/ID-Uriah.png",
    al: "images/ID-Luna.png",
    xiander: "images/ID-Xiander.png",

}


for (const hoverable of hoverables) {

    hoverable.addEventListener ('mouseenter', handleIDenter);
    hoverable.addEventListener ('mouseleave', handleIDleave);
}


function handleIDenter (event) {

        const imgPath = IDimages[event.target.id];
        IDpopUp.classList.remove('hidden');
        const img = document.createElement ('img');
        img.src = imgPath;
        img.classList.add ('IDimage');
        IDpopUp.appendChild(img);
}
   
function handleIDleave (event) {

    while (IDpopUp.lastElementChild) {
        IDpopUp.removeChild(IDpopUp.lastElementChild);
      }
    IDpopUp.classList.add('hidden');


}
   