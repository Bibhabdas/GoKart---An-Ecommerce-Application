document.addEventListener("DOMContentLoaded", () => {
    displayCart();
})

function displayCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent = document.getElementById("cartContent");
    let totalPriceElement = document.getElementById("totalPrice");

    let totalBill = 0;
    cartContent.innerHTML = ""; // Clear existing content

    if (cart.length === 0) {
        cartContent.innerHTML = `<div class="empty-msg">Your cart is Empty. Start Shopping.....</div>`;
        totalPriceElement.innerHTML = "Total Price: ₹ 0.00";
        return;
    }

    cart.forEach((product, i) => {
        // Calculating price (using 80 as a conversion factor as per your previous logic)
        let convertedPrice = (product.price * 80).toFixed(2);
        totalBill += parseFloat(convertedPrice);

        let newProd = document.createElement("div");
        newProd.setAttribute("class", "cart-card");
        
        newProd.innerHTML = `
            <div class="card-left">
                <img src="${product.thumbnail}" alt="${product.title}">
            </div>
            <div class="card-center">
                <h3>${product.title}</h3>
                <p><span>Availability:</span> ${product.availabilityStatus || 'In Stock'}</p>
                <p><span>Category:</span> ${product.category}</p>
                <p><span>Return Policy:</span> ${product.returnPolicy || '7 days return policy'}</p>
                <p><span>Shipping Information:</span> ${product.shippingInformation || 'Ships in 1 week'}</p>
                <p><span>Stock:</span> ${product.stock}</p>
                <p><span>Warranty Information:</span> ${product.warrantyInformation || '1 year warranty'}</p>
                <p class="card-price">Price: ₹ ${convertedPrice}</p>
            </div>
            <div class="card-right">
                <button class="remove-btn" onclick="removeFromCart(${i})">Remove</button>
            </div>
        `;
        cartContent.append(newProd);
    });

    totalPriceElement.innerHTML = `Total Price: ₹ ${totalBill.toFixed(2)}`;
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}