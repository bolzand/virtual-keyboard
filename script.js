function load() {
    let wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.body.appendChild(wrapper);

    let textarea = document.createElement('textarea');
    wrapper.appendChild(textarea);

    let keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    wrapper.appendChild(keyboard);

    fillKeys(keyboard);
}

function fillKeys(keyboard) {
    list.forEach(function (row) {
        let rowElement = document.createElement('div');
        rowElement.classList.add('row');
        keyboard.appendChild(rowElement);
        row.forEach(function (key) {    
            let keyElement = document.createElement('span');
            keyElement.className += key[0];
            keyElement.className += ' ' + key[1];
            rowElement.appendChild(keyElement);

            let offElement = document.createElement('span');
            keyElement.appendChild(offElement);
            let onElement = document.createElement('span');
            keyElement.appendChild(onElement)

            let language = localStorage.getItem('language');
            if (language == 'true') {
                offElement.classList.add('off');
                onElement.classList.add('on');    
            } else {
                offElement.classList.add('on');
                onElement.classList.add('off');    
            }

            let downElement = document.createElement('span');
            downElement.classList.add('down');
            offElement.appendChild(downElement);
            downElement.innerHTML = key[2];

            let upElement = document.createElement('span');
            upElement.classList.add('up');
            offElement.appendChild(upElement);
            upElement.innerHTML = key[3];

            let downEngElement = document.createElement('span');
            downEngElement.classList.add('down');
            onElement.appendChild(downEngElement);
            downEngElement.innerHTML = key[4];

            let upEngElement = document.createElement('span');
            upEngElement.classList.add('up');
            onElement.appendChild(upEngElement);
            upEngElement.innerHTML = key[5];


        })
    });
}


let list = [
    [
        ['key', 'Backquote', 'ё', 'Ё', '`', '~'],
        ['key', 'Digit1', '1', '!', '1', '!'],
        ['key', 'Digit2', '2', '"', '2', '@'],
        ['key', 'Digit3', '3', '№', '3', '#'],
        ['key', 'Digit4', '4', ';', '4', '$'],
        ['key', 'Digit5', '5', '%', '5', '%'],
        ['key', 'Digit6', '6', ':', '6', '^'],
        ['key', 'Digit7', '7', '?', '7', '&'],
        ['key', 'Digit8', '8', '*', '8', '*'],
        ['key', 'Digit9', '9', '(', '9', '('],
        ['key', 'Digit0', '0', ')', '0', ')'],
        ['key', 'Minus', '-', '_', '-', '_'],
        ['key', 'Equal', '=', '+', '=', '+'],
        ['key backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace']
    ],
    [
        ['key tab', 'Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
        ['key', 'KeyQ', 'й', 'Й', 'q', 'Q'],
        ['key', 'KeyW', 'ц', 'Ц', 'w', 'W'],
        ['key', 'KeyE', 'у', 'У', 'e', 'E'],
        ['key', 'KeyR', 'к', 'К', 'r', 'R'],
        ['key', 'KeyT', 'е', 'Е', 't', 'T'],
        ['key', 'KeyY', 'н', 'Н', 'y', 'Y'],
        ['key', 'KeyU', 'г', 'Г', 'u', 'U'],
        ['key', 'KeyI', 'ш', 'Ш', 'i', 'I'],
        ['key', 'KeyO', 'щ', 'Щ', 'o', 'O'],
        ['key', 'KeyP', 'з', 'З', 'p', 'P'],
        ['key', 'BracketLeft', 'х', 'Х', '[', '{'],
        ['key', 'BracketRight', 'ъ', 'Ъ', ']', '}'],
        ['key', 'Backslash', '\\', '/', '\\', '|'],
        ['key del', 'Delete', 'DEL', 'DEL', 'DEL', 'DEL']
    ],
    [
        ['key capslock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
        ['key', 'KeyA', 'ф', 'Ф', 'a', 'A'],
        ['key', 'KeyS', 'ы', 'Ы', 's', 'S'],
        ['key', 'KeyD', 'в', 'В', 'd', 'D'],
        ['key', 'KeyF', 'а', 'А', 'f', 'F'],
        ['key', 'KeyG', 'п', 'П', 'g', 'G'],
        ['key', 'KeyH', 'р', 'Р', 'h', 'H'],
        ['key', 'KeyJ', 'о', 'О', 'j', 'J'],
        ['key', 'KeyK', 'л', 'Л', 'k', 'K'],
        ['key', 'KeyL', 'д', 'Д', 'l', 'L'],
        ['key', 'Semicolon', 'ж', 'Ж', ';', ':'],
        ['key', 'Quote', 'э', 'Э', "'", '"'],
        ['key enter', 'Enter', 'ENTER', 'ENTER', 'ENTER', 'ENTER']
    ],
    [
        ['key shift', 'ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
        ['key', 'KeyZ', 'я', 'Я', 'z', 'Z'],
        ['key', 'KeyX', 'ч', 'Ч', 'x', 'X'],
        ['key', 'KeyC', 'с', 'С', 'c', 'C'],
        ['key', 'KeyV', 'м', 'М', 'v', 'V'],
        ['key', 'KeyB', 'и', 'И', 'b', 'B'],
        ['key', 'KeyN', 'т', 'Т', 'n', 'N'],
        ['key', 'KeyM', 'ь', 'Ь', 'm', 'M'],
        ['key', 'Comma', 'б', 'Б', '.', '<'],
        ['key', 'Period', 'ю', 'Ю', ',', '>'],
        ['key', 'Slash', '.', ',', '/', '?'],
        ['key arrow', 'ArrowUp', '▲', '▲', '▲', '▲'],
        ['key shift-right', 'ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift']
    ],
    [
        ['key ctrl', 'ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
        ['key win', 'MetaLeft', 'Win', 'Win', 'Win', 'Win'],
        ['key alt', 'AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['key space', 'Space', ' ', ' ', ' ', ' '],
        ['key alt', 'AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
        ['key arrow', 'ArrowLeft', '◄', '◄', '◄', '◄'],
        ['key arrow', 'ArrowDown', '▼', '▼', '▼', '▼'],
        ['key arrow', 'ArrowRight', '►', '►', '►', '►'],
        ['key ctrl', 'ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl']
    ]
];

let clickableKeys = [
    "Backquote",
    "Digit",
    "Minus",
    "Equal",
    "Key",
    "BracketLeft",
    "BracketRight",
    "Backslash",
    "Semicolon",
    "Quote",
    "Comma",
    "Pediod",
    "Slash"
]

load();

document.addEventListener('keydown', function(event) {
    let clickedElement = document.querySelector('.' + event.code);
    if (clickedElement) {
        clickedElement.classList.add('clicked');
        setTimeout(function() {
            clickedElement.classList.remove('clicked');
        }, 200);    
    }

    if (event.code == 'CapsLock') {
        let upElements = document.querySelectorAll(".up");
        let downElements = document.querySelectorAll(".down");
        for (let i = 0, element; element = upElements[i]; i++) {
            element.classList.remove('up');
            element.classList.add('down');
        }
        for (let i = 0, element; element = downElements[i]; i++) {
            element.classList.remove('down');
            element.classList.add('up');
        }
    }

    if (event.code == 'ShiftLeft' && event.altKey) {
        let onElements = document.querySelectorAll(".on");
        let offElements = document.querySelectorAll(".off");
        for (let i = 0, element; element = onElements[i]; i++) {
            element.classList.remove('on');
            element.classList.add('off');
        }
        for (let i = 0, element; element = offElements[i]; i++) {
            element.classList.remove('off');
            element.classList.add('on');
        }

        let language = localStorage.getItem('language');
        let boolLanguage = (language == 'true');
        localStorage.setItem('language', !boolLanguage);
    }
    
});

document.querySelector('.keyboard').addEventListener('click', function(event) {
    console.log(event);
    let targetElement = event.target;
    let textareaElement = document.querySelector('textarea');
    let parentKey = targetElement.parentElement.parentElement;

    let isClickedKey = clickableKeys.some(function(key) {
        return parentKey.className.includes(key);
    });

    if (isClickedKey) {
        textareaElement.value += targetElement.innerHTML;
    }

    if (parentKey.className.includes('Backspace')) {
        textareaElement.value = textareaElement.value.slice(0, -1);
    }

    if (parentKey.className.includes('Space')) {
        textareaElement.value += ' ';
    }
});