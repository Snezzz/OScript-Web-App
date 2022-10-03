//#region elements

$(document).ready(function() {
    addEventListeners()
});

//#endregion

//#region functions

let addEventListeners = () => {
    addEventListenerToElement( $(".firstLevelButton")[0], "click", 'getHi()') 
}

let addEventListenerToElement = (el, eventName, returnFunction) => {
    el.addEventListener(eventName, function() {
        eval(returnFunction)
    }, false);  
}

let getHi = () => {
    alert("You clicked me, good job!")
}

//#endregion
