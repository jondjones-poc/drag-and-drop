const boxes = document.querySelectorAll('.empty')
const active = document.querySelector('.active');
console.log(active)
const dragStart = (event) => {
    event.target.className += ' hold';
    setTimeout(() => event.target.className = 'invisible');
}
const dragEnd = (event) => {
    event.target.className = 'active';
}
const dragEnter = (event) => {
    event.preventDefault();
    event.target.className += ' hovered';
}
const dragOver = (event) => {
    event.preventDefault();
}
const dragLeave = (event) => {
    event.target.className = 'empty';
}
const dragDrop = (event) => {
    event.target.className = 'empty';
    event.target.append(active)
}

active.addEventListener('dragstart', (e) => dragStart(e));
active.addEventListener('dragend', (e) => dragEnd(e));

boxes.forEach((box) => {
    box.addEventListener('dragenter', (e) => dragEnter(e));
    box.addEventListener('dragover', (e) =>dragOver(e));
    box.addEventListener('dragleave', (e) =>dragLeave(e));
    box.addEventListener('drop', (e) =>dragDrop(e));
})
