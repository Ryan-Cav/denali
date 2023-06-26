var timePerLetter = 200;
var timeFlicker = 500;

function typeWord(title) {
    console.log(title);
    for (var i = 0; i < title.length; i++) {
        var CHAR = title[i];
        setTimeout(appendLetter, timePerLetter * i, CHAR);
    }
    for (var i = 0; i < 999; i++) {
        setTimeout(flickerDot, timeFlicker * i);
    }
}

function appendLetter(character) {
    var element = document.getElementById('title');
    element.append(character);
}

function flickerDot() {
    var element = document.getElementById('title');

    var char = element.textContent.charAt(element.textContent.length - 1);
    if (char.toString() === '.') {
        var str = element.textContent.replace('.', '\u2000');
        element.innerText = str;
    } else if (char.toString() === '\u2000') {
        var str = element.textContent.replace('\u2000', '.');
        element.innerText = str;
    }
}

function showPop() {
    var element = document.getElementById('popup');

    element.classList.add('show')
}

function hidePop() {
    var element = document.getElementById('popup');

    element.classList.remove('show')
}