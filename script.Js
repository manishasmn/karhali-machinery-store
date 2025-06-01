// Cart functionality
let cartCount = 0;

// Load cart count from localStorage when page loads
window.onload = function() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cartCount = cart.length;
  document.getElementById("cart-count").textContent = `🛒 Cart (${cartCount})`;
};

function addToCart(productName) {
  cartCount++;
  alert(`${productName} added to cart!`);
  document.getElementById("cart-count").textContent = `🛒 Cart (${cartCount})`;

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  let price = 0;
  if (productName === "Product 1") price = 1500;
  else if (productName === "Product 2") price = 2300;

  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Search functionality
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('searchInput');
  const productCards = document.querySelectorAll('.product-card');

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const searchValue = searchInput.value.toLowerCase();

      productCards.forEach(card => {
        const productName = card.textContent.toLowerCase();
        if (productName.includes(searchValue)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  }
});
const productContainer = document.getElementById('product-container');

// Handle Add to Cart
function addToCart(productName, productPrice) {
  const cartCountElement = document.getElementById('cart-count');
  let cartCount = parseInt(cartCountElement.innerText);
  cartCount += 1;
  cartCountElement.innerText = cartCount;
  alert(`Added ${productName} to your cart!`);
}

// Handle Filter & Search
document.getElementById('searchInput').addEventListener('input', renderProducts);
document.getElementById('categoryFilter').addEventListener('change', renderProducts);
document.getElementById('sortFilter').addEventListener('change', renderProducts);

function renderProducts() {
  const searchValue = document.getElementById('searchInput').value.toLowerCase();
  const categoryValue = document.getElementById('categoryFilter').value;
  const sortValue = document.getElementById('sortFilter').value;

  const filtered = products.filter(product => {
    const nameMatch = product.name.toLowerCase().includes(searchValue);
    const categoryMatch = categoryValue === "all" || product.category === categoryValue;
    return nameMatch && categoryMatch;
  });

  if (sortValue === "lowToHigh") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortValue === "highToLow") {
    filtered.sort((a, b) => b.price - a.price);
  }

  productContainer.innerHTML = "";
  
  filtered.forEach(product => {
    let imgSrc = "";
    if (product.name === "Lathe Machine") {
      imgSrc = "image1.jpg";
    } else if (product.name === "Welding Torch") {
      imgSrc = "image2.jpg";
    }

    const div = document.createElement("div");
    div.className = "product-card";
    div.innerHTML = `
      ${imgSrc ? `<img src="${imgSrc}" alt="${product.name}" style="width:100%; max-height:200px; object-fit:contain; margin-bottom: 10px; border-radius: 8px;" />` : ""}
      <h2>${product.name}</h2>
      <p>Category: ${product.category}</p>
      <p>Rs. ${product.price}</p>
      <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
    `;
    productContainer.appendChild(div);
  });
}

// Initialize the products display
renderProducts();
const products = [
  {
    name: "Lathe Machine",
    category: "Machine",
    price: 50000,
  },
  {
    name: "Welding Torch",
    category: "Tools",
    price: 3000,
  },
  // Aur bhi products add kar sakte hain
];
