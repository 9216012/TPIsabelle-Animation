const shape = document.getElementById('shape');
const message = document.getElementById('message');

let isRectangle = true;
let position = 0;
let moveRight = true;
let rotating = false; // Variable pour suivre si le cercle est en rotation

shape.addEventListener('click', () => {
    if (isRectangle) {
        position += 500;
        shape.style.transform = `translateX(${position}px)`;
        shape.style.borderRadius = '50%'; // Transforme en cercle
        shape.style.backgroundColor = 'pink'; // Couleur du cercle
        isRectangle = false;
    } else {
        // Arrêter la rotation lorsque le cercle est cliqué
        shape.classList.remove('rotate');
        rotating = false;
    }
});

shape.addEventListener('dblclick', () => {
    if (!isRectangle) {
        moveRight = !moveRight;
        if (rotating) {
            shape.classList.remove('rotate'); // Arrête la rotation si déjà en cours
            rotating = false;
        } else {
            shape.classList.add('rotate'); // Démarre la rotation
            rotating = true;
        }
        moveCircle();
    }
});

shape.addEventListener('mouseover', () => {
    if (!isRectangle) {
        shape.style.backgroundColor = 'green'; // Couleur lors du survol
        message.style.display = 'block'; // Afficher le message
        message.textContent = 'Bienvenue Isabelle Sodokin vous êtes dans le cercle';
    }
});

shape.addEventListener('mouseout', () => {
    if (!isRectangle) {
        shape.style.backgroundColor = 'pink'; // Couleur initiale du cercle
        message.textContent = 'Vous êtes hors du cercle';
    }
});

function moveCircle() {
    const moveAmount = 10;
    let moveInterval = setInterval(() => {
        if (moveRight) {
            position += moveAmount;
            shape.style.transform = `translateX(${position}px)`;
        } else {
            position -= moveAmount;
            shape.style.transform = `translateX(${position}px)`;
        }

        if (position > window.innerWidth - 400) {
            moveRight = false;
        } else if (position < 0) {
            moveRight = true;
        }
    }, 20);
}
