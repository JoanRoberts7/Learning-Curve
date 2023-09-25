// script.js

// Function to change text color on hover
function changeTextColorOnHover(elementId, hoverColor) {
    const element = document.getElementById(elementId);

    // Change text color on mouseover (hover)
    element.addEventListener('mouseover', function () {
        element.style.color = hoverColor;
    });

    // Restore original text color on mouseout
    element.addEventListener('mouseout', function () {
        element.style.color = '';
    });
}

// Call the function to change text color on hover
changeTextColorOnHover('title', 'green');
changeTextColorOnHover('paragraph', 'purple');
