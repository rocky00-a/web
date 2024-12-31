// Function for the "Yes" button
function respondYes() {
    alert("Yay! I love you too ❤️");
}

// Function for the "No" button
function respondNo() {
    alert("Oh no! 😢 Please, don't say that...");
}

// Move the "No" button when the mouse hovers over it
function moveNoButton(event) {
    const noButton = document.querySelector('.no');
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Get the button's current position
    const buttonRect = noButton.getBoundingClientRect();
    const buttonX = buttonRect.left + buttonRect.width / 2;
    const buttonY = buttonRect.top + buttonRect.height / 2;

    // Calculate the distance between mouse and button
    const distanceX = mouseX - buttonX;
    const distanceY = mouseY - buttonY;

    // Move the button away from the cursor
    noButton.style.transform = `translate(${distanceX * 0.1}px, ${distanceY * 0.1}px)`;
}
