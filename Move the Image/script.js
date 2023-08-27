const  imgageMoving = document.getElementById('imageMoving');
const   imgcontainer = document.querySelector('img-container');
const  moveStep = 10;



let posiX =0;
let  posiY = 0;

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            posiY -= moveStep;
            break;
            case 'ArrowDown':
                posiY += moveStep;
                break;
                case 'ArrowLeft':
                    posiX -= moveStep;
                    break;
                    case 'ArrowRight':
                        posiX += moveStep;
                        break;
                        default:
                        return;

    }
    updateImagePostion();
});

function updateImagePostion() {
    imgageMoving.style.transform = `translate(${posiX}px, ${posiY}px)`;
}