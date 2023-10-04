// script.js

const form = document.getElementById("order-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const meal = document.getElementById("meal").value;
    const quantity = document.getElementById("quantity").value;
    const location = document.getElementById("location").value;

    const orderData = {
        name: name,
        phone: phone,
        meal: meal,
        quantity: quantity,
        location: location
    };

    // Send data to the mock API
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(orderData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert("Order submitted successfully!");
        form.reset();
    })
    .catch(error => {
        console.error("Error:", error);
        alert("There was an error submitting your order. Please try again later.");
    });
});
