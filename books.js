const navigation = document.getElementById("navigation");
const userInfo = localStorage.getItem("username");

if (userInfo) {
    navigation.innerHTML = `<a href="kursova.html">Home</a>
        <a href="books.html">Books</a>
        <a href="authors.html">Authors</a>
<a href="kursova.html">Logout</a>`
} else {
    navigation.innerHTML = `<a href="kursova.html">Home</a>
<a href="login.html">Login</a>
<a href="register.html">Register</a>
<a href="books.html">Books</a>`
}

fetch('book.json')
.then(res => res.json())
.then(productData => {
    const productContent = document.getElementById('product-content');

    productData.forEach(product => {
        const productSection = document.createElement('section');
        productSection.innerHTML = `<h2>${product.product_name}</h2>
        <div class="product-details">
            <img src="${product.image_url}" alt="${product.product_name}">
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        </div>`;

        productContent.appendChild(productSection);
    });
})
.catch(err => console.log(err))