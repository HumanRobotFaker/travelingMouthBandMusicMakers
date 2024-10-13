const body = document.querySelector("body")
const popUp = document.querySelector("#popup")
const popUpInducers = document.querySelectorAll(".popup-inducer")
const swappingTexts = document.querySelectorAll(".text-swap")


body.addEventListener("click", handleBodyClick)

for(let inducer of popUpInducers){
    inducer.addEventListener("click", openPopUp)
}

for(let text of swappingTexts){
    text.addEventListener("click", swapText)
}


function handleBodyClick(e) {
    const clickWasPopup =
        e.target.classList.contains("popup") ||
        e.target.classList.contains("popup-inducer")
    
    if(!clickWasPopup){
        closePopUp()
    }
}

function openPopUp(e) {
    const popUpId = e.target.attributes["popup-id"].nodeValue
    const newContent = createPopUpElement(popUpData[popUpId])
    popUp.replaceChildren(newContent)
    showElement(popUp)
}

function closePopUp() {
    popUp.replaceChildren()
    hideElement(popUp)
}

function createPopUpElement(elementData) {
    const newThing = document.createElement(elementData.tag)
    
    let attributes = Object.keys(elementData.attributes)
    for(let attribute of attributes){
        newThing.setAttribute(attribute, elementData.attributes[attribute])
    }

    newThing.classList.add("popup")
    for(let className of elementData.classNames){
        newThing.classList.add(className)
    }
    return newThing
}

function showElement(element) {
    element.classList.remove("hidden")
    element.classList.add("showing")
}

function hideElement(element) {
    element.classList.remove("showing")
    element.classList.add("hidden")
}

function swapText(event) {
    const outerSpan = event.currentTarget
    const textData = textSwapData[outerSpan.id]

    let index = textData.index
    index = index + 1
    textData.index = index

    const newText = textData.texts[index % textData.texts.length]

    outerSpan.replaceChildren(newText)
}


const definitionElements = document.querySelectorAll('.definition');

function showPopup(e) {
  const popup = document.querySelector('.popup');
  popup.innerHTML = e.target.getAttribute('data-definition');
  popup.style.display = 'block';
  popup.style.top = `${e.pageY + 10}px`;
  popup.style.left = `${e.pageX + 10}px`;
}

function hidePopup() {
  const popup = document.querySelector('.popup');
  popup.style.display = 'none';
}

definitionElements.forEach(element => {
  element.addEventListener('mouseover', showPopup);
  element.addEventListener('mouseout', hidePopup);
});



//throwaway for example thing







