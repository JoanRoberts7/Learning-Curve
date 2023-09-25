// script.js

// Function to change text color
function changeTextColor(elementId, color) {
    const element = document.getElementById(elementId);
    element.style.color = color;
}

// Change text colors when the page loads
window.onload = function () {
    document.title = 'My First Project at Women Techsters';
    changeTextColor('title', 'red');
    changeTextColor('title', 'green');
    changeTextColor('paragraph', 'purple');
};

