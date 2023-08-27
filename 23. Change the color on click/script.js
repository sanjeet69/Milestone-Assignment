const  changeColorButton = document.getElementById('changeColorButton');

const color  = [
    '#FF5733', '#33FF7A', '#33D6FF', '#FF3365', '#CC33FF',
    '#FFA533', '#33FFD6', '#FF33A1', '#338DFF', '#FF33AA'
];

changeColorButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * color.length);
    const randomcolor = color[randomIndex];
    document.body.style.backgroundColor = randomcolor;
});