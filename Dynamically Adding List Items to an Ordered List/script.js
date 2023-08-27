const  newItemInput = document.getElementById('newItemInput');
const  addItemButton = document.getElementById('addItemButton');
const  orderedList = document.getElementById('orderedList');


addItemButton.addEventListener('click', () => {
    const newItemtext = newItemInput.value.trim();
    
    if(newItemtext !== '')  {
        const newItem = document.createElement('li');
        newItem.textContent =newItemtext;
        newItem.style.color = 'gray'
        orderedList.appendChild(newItem);
        newItemInput.value = ''; 
    }
})