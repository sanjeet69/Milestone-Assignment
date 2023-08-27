const textToHighlight = document.getElementById('textToHighlight');
const highlightButton = document.getElementById('highlightButton');
let isHighlighted = false;

highlightButton.addEventListener('click', () => {
  if (isHighlighted) {
    textToHighlight.classList.remove('highlighted');
    highlightButton.textContent = 'Highlight Text';
  } else {
    textToHighlight.classList.add('highlighted');
    highlightButton.textContent = 'Unhighlight Text';
  }
  isHighlighted = !isHighlighted;
});
