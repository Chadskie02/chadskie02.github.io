const names = ["Hello I'm Chad"]; // Add your names here
const nameContainer = document.getElementById("name-container");

function startTypingEffect() {
    let currentIndex = 0;

    function typeNextName() {
        nameContainer.textContent = names[currentIndex];
        currentIndex = (currentIndex + 1) % names.length;
    }

    setInterval(typeNextName, 1000); // Change the interval as needed (in milliseconds)
}

startTypingEffect();