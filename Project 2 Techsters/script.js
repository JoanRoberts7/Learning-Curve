// script.js

// Event listener for form submission
document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const formData = new FormData(event.target);

    // Convert form data to a plain object
    const orderData = {};
    formData.forEach((value, key) => {
        orderData[key] = value;
    });

    // Send the order data to the mock API (replace this with your actual API)
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(orderData),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        console.log('Order placed successfully:', data);
        alert('Order placed successfully!'); // You can customize this alert message
    })
    .catch(error => {
        console.error('Error placing order:', error);
        alert('Error placing order. Please try again later.'); // You can customize this error message
    });
});
