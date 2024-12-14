// products array
const products = [
  {
    id: 1,
    title: "Pink Premium Long Ugly Sweater - Winter Comfort ",
    img: "../assets/products/product-1.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 2,
    title: "Pink Premium Long Ugly Sweater - Winter Comfort",
    img: "../assets/products/product-2.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 3,
    title: "Wireless-AC3100 Dual Band Gigabit Router RT-AC88U",
    img: "../assets/products/product-3.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 4,
    title: "Sonybeat Noise-Canceling BGM Headphone",
    img: "../assets/products/product-4.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 5,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assets/products/product-5.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 6,
    title: "Phillips Pro Blend 6 Powerful Blender & Meat Grinder",
    img: "../assets/products/product-6.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 7,
    title: "Pink Premium Long Ugly Sweater - Winter Comfort ",
    img: "../assets/products/product-7.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 8,
    title: "Sonybeat Noise-Canceling BGM Headphone",
    img: "../assets/products/product-8.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 9,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assets/products/product-9.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 10,
    title: "AMD Ryzen 7 5700G 8 Core 16 Thread AM4 Processor",
    img: "../assets/products/product-10.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 11,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assets/products/product-11.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 12,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assets/products/product-12.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
];
// Dynamically create product cards
const generateProductCards = () => {
  const productGrid = document.getElementById("productGrid");

  products.forEach((product) => {
    const cardHTML = `
        <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 p-4 flex flex-col h-full">
          <img
            src="${product.img}"
            alt="Product"
            class="w-full h-40 object-cover rounded-md"
          />
          <div class="mt-4 flex flex-col flex-grow">
            <p class="bg-yellow-100 text-yellow-800 text-sm inline-block px-2 py-1 rounded w-1/3">
              <i class="fa-solid fa-star text-yellow-500"></i>
              <span>${product.rating} (${product.votes})</span>
            </p>
            <p class="mt-2 text-gray-800 font-semibold text-sm">${product.title}</p>
            <div class="mt-2 flex justify-between items-center mb-2">
              <p>
                <span class="text-green-600 font-bold">${product.price}</span>
                <span class="text-gray-500 line-through ml-2">${product.discountPrice}</span>
              </p>
            </div>
            <button onclick="buyNow(${product.id})" class="mt-auto w-full py-2 bg-[#e527b2]/80 text-white rounded-md font-semibold hover:bg-[#e527b2]/100">
              Buy Now
            </button>
          </div>
        </div>
      `;
    productGrid.innerHTML += cardHTML;
  });
};

// Function to handle Buy Now button click
const buyNow = (productId) => {
  Toastify({
    text: "Product added to cart successfully!",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #e527b2, #3d1ff1)",
  }).showToast();
};

// Call the function to generate product cards
generateProductCards();
