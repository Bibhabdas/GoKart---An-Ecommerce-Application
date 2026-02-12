document.addEventListener("DOMContentLoaded", () => {
    let productDetails = document.getElementById("productDetails");
    let allProducts = JSON.parse(localStorage.getItem("allproducts"));
    // console.log(allProducts);
    let productId = localStorage.getItem("productId");
    // console.log(productId);
    
    if (allProducts && productId) {
        // console.log("We Can Show Details");
        let selectedProduct = allProducts.find((v) => {
            return v.id == productId
        })
        // console.log(selectedProduct);

        if (selectedProduct) {
            let reviewsHtml = selectedProduct.reviews.map(rev => `
                <div class="review-item">
                    <div class="stars">${'💖'.repeat(rev.rating)}${'🖤'.repeat(5 - rev.rating)}</div>
                    <p>${rev.comment}</p>
                    <p class="review-meta">By <b>${rev.reviewerName}</b> on ${new Date(rev.date).toLocaleDateString()}</p>
                </div>
            `).join('');

            productDetails.innerHTML = `
            <div class="details-container">
                <div class="product-image">
                    <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title}" />
                </div>
                
                <div class="product-info">
                    <h1>${selectedProduct.title}</h1>
                    <p><b>Brand:</b> ${selectedProduct.brand || 'Product'}</p>
                    <p><b>Category:</b> ${selectedProduct.category}</p>
                    <p><b>Description:</b> ${selectedProduct.description}</p>
                    
                    <h2 class="price-text">Price: ₹ ${Math.round(selectedProduct.price * 80)}</h2>
                    
                    <div class="action-buttons">
                        <button class="btn-blue" id="addToCart">Add to Cart</button>
                        <button class="btn-red" onclick="window.location.href='../Home/Home.html'">Back to Home</button>
                    </div>
                </div>
            </div>

            <div class="reviews-section">
                <hr>
                <h2>Customer reviews</h2>
                ${reviewsHtml}
            </div>
            `;
            document.getElementById("addToCart").addEventListener("click",()=>{
                addToCart(selectedProduct);
            });
        } else {
            productDetails.innerHTML = `<p>Product Not Available</p>`
        }
    }
    else {
        productDetails.innerHTML = `<p>Product Not Found</p>`
    }
})

function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("Product Added successfully.")
}