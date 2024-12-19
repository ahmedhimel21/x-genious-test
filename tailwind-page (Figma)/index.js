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

const generateProductCards = () => {
  const productGrid = document.getElementById("productGrid");
  products.forEach((product) => {
    const cardHTML = `
          <div class="border border-gray-200 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
            <img class="w-full h-48 object-cover rounded-t-lg" src="${product.img}" alt="${product.title}" />
            <div class="py-4">
              <p
                class="flex items-center bg-yellow-50 text-yellow-600 text-sm px-2 py-1 rounded-full w-fit mb-2"
              >
                <i class="fa-solid fa-star text-yellow-500 mr-1"></i>
                <span>${product.rating} (${product.votes})</span>
              </p>
              <p class="text-lg font-semibold text-gray-800 truncate">${product.title}</p>
              <p class="mt-2">
                <span class="text-green-600 font-bold">${product.price}</span>
                <span class="line-through text-gray-500 font-medium ml-2">
                  ${product.discountPrice}
                </span>
              </p>
              <button 
                type="button" 
                class="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                onclick="buyNow(${product.id})"
              >
                Buy Now
              </button>
            </div>
          </div>
        `;
    productGrid.innerHTML += cardHTML;
  });
};

const buyNow = (productId) => {
  Toastify({
    text: "Product added to cart successfully!",
    duration: 3000,
    close: true,
    gravity: "bottom",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
};

generateProductCards();
