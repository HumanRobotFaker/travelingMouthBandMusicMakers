const body = document.querySelector("body")
const popUp = document.querySelector("#popup")
const popUpInducers = document.querySelectorAll(".popup-inducer")


body.addEventListener("click", handleBodyClick)

for(let inducer of popUpInducers){
    inducer.addEventListener("click", openPopUp)
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