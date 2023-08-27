const heading = document.getElementById('heading');
const toggleButton = document.getElementById('toggleButton');

let theHeadingChanged = false;


toggleButton. addEventListener('click', () => {
    theHeadingChanged = !theHeadingChanged;
    changeHeadingText();
});

function changeHeadingText(){
    if(theHeadingChanged){
        heading.textContent = "Welcome to the PW Skiils";
    }else {
        heading.textContent = "The Most Affortable learning platform"
    }
}