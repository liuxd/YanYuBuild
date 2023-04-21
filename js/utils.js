function createDiv(className) {
    let div = document.createElement('div');
    div.className = className;
    div.draggable = true;
    div.ondrop = drop;
    div.ondragover = allowDrop;

    return div;
}

const allowDrop = function (ev) {
    ev.preventDefault();
}

const drag = function (ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

const drop = function (ev) {
    ev.preventDefault();
    let id = ev.dataTransfer.getData("text");
    let elem = document.getElementById(id);
    elem.style.cssText = 'border: none;margin: 0';
    ev.target.appendChild(elem);
}