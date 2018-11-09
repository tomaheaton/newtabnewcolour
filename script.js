function randomRgba() {
    return '#' + Math.random().toString(16).slice(2, 8);
}

function init() {
    var color = randomRgba();
    
    updatePageColour(color);
    updateText(color);
}

function updatePageColour(color) {
    document.body.style.background = color;
}

function updateText(color) {
    document.querySelector('[data-hex-value]').innerHTML = color;
}

init();