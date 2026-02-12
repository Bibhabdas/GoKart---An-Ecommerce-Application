let product = [];
function fetchData() {
    fetch("https://dummyjson.com/products").then((res) => {
        return res.json();
    }).then((val) => {
        console.log(val.products);
        product = val.products;
        localStorage.setItem("allproducts", JSON.stringify(product))
        displayProduct(product)
    })
}

fetchData();

function displayProduct(prod) {
    let output = "";
    prod.map((val) => {
        output += `
        <main>
            <div id="image">
                <img src="${val.thumbnail}"/>
            </div>
            <div id="content">
                <h3>${val.title}</h3>
               <div class="row-top">
                    <span class="rating">Rating: ${val.rating}</span>
                    <span class="price">₹ ${Math.round(val.price)*80}</span>
                </div>

                <div class="row-bottom">
                    <span class="stock"><b>In Stock:</b> ${val.stock}</span>
                    <button id="btndtl2" onclick="details(${val.id})">Details</button>
                </div>
            </div>
        </main>`
    })
    document.getElementById("productContainer").innerHTML = output;
}

document.getElementById("searchbar").addEventListener("input", function searchIteam(event) {
    let searchTerm = event.target.value.toLowerCase();
    let filteredProduct = product.filter((v) => {
        return (
            v.title.toLowerCase().includes(searchTerm) ||
            v.category.toLowerCase().includes(searchTerm)
        );
    });
    displayProduct(filteredProduct);
})

function details(productId){
  console.log(productId);
  localStorage.setItem("productId",productId);
  window.location.href = "../Details/viewDetails.html";
}