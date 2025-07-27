const products = {
  almonds: {
    name: "Almonds",
    image: "./products/DFH190_0.jpg",
    description: "Premium quality almonds sourced from Kashmir.",
    benefits: "Rich in vitamin E, improves heart health, and aids in weight management.",
    call: "tel:+917006847044",
    whatsapp: "https://wa.me/917006847044"
  },
  cashews: {
    name: "Cashews",
    image: "./products/DFHASJ1_0.jpg",
    description: "Delicious buttery cashews, packed with nutrients.",
    benefits: "Boosts brain health and immune system.",
    call: "tel:+917006847044",
    whatsapp: "https://wa.me/917006847044"
  },
  // Add more products as needed...
};

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function loadProduct() {
  const productId = getQueryParam("product");
  const product = products[productId];

  if (!product) {
    document.getElementById("product-container").innerHTML = `<p>Product not found.</p>`;
    return;
  }

  document.getElementById("product-container").innerHTML = `
    <div class="product-detail-card">
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h1>${product.name}</h1>
      <p class="product-description">${product.description}</p>
      <h3>Benefits:</h3>
      <p class="product-benefits">${product.benefits}</p>
      <div class="product-actions">
        <a class="btn-call" href="${product.call}">Call Us</a>
        <a class="btn-whatsapp" href="${product.whatsapp}" target="_blank">WhatsApp Us</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", loadProduct);



const productsData = {
  "sunflower seeds": {
    name: "Sunflower Seeds",
    baseImage: "./products/sunflower.jpg",
    description: "Sunflower seeds are nutrient-packed snacks...",
    benefits: ["Healthy Heart", "High Nutrition", "Gluten Free", "Cholesterol Free"],
    sku: "DFhSD105",
    prices: {
      "100": 68,
      "250": 160,
      "500": 300
    }
  },
  // Add all other products here
};



const weightSelect = document.getElementById("weightSelect");
const priceDisplay = document.getElementById("productPrice");

weightSelect.addEventListener("change", () => {
  const selectedWeight = weightSelect.value;
  const product = productsData[productId]; // Assume you've got productId from URL already

  if (product && product.prices[selectedWeight]) {
    priceDisplay.textContent = `₹${product.prices[selectedWeight]}.00`;
  }
});

