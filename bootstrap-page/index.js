// products array
const products = [
  {
    id: 1,
    title: "Pink Premium Long Ugly Sweater - Winter Comfort ",
    img: "../assect/products/product-1.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 2,
    title: "Pink Premium Long Ugly Sweater - Winter Comfort",
    img: "../assect/products/product-2.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 3,
    title: "Wireless-AC3100 Dual Band Gigabit Router RT-AC88U",
    img: "../assect/products/product-3.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 4,
    title: "Sonybeat Noise-Canceling BGM Headphone",
    img: "../assect/products/product-4.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 5,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assect/products/product-5.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 6,
    title: "Phillips Pro Blend 6 Powerful Blender & Meat Grinder",
    img: "../assect/products/product-6.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 7,
    title: "Pink Premium Long Ugly Sweater - Winter Comfort ",
    img: "../assect/products/product-7.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 8,
    title: "Sonybeat Noise-Canceling BGM Headphone",
    img: "../assect/products/product-8.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 9,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assect/products/product-9.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 10,
    title: "AMD Ryzen 7 5700G 8 Core 16 Thread AM4 Processor",
    img: "../assect/products/product-10.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 11,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assect/products/product-11.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
  {
    id: 12,
    title: "SMUG. Premium T-shirt Fabric soft and comfortable",
    img: "../assect/products/product-12.png",
    price: "$223.99",
    discountPrice: "$267.60",
    rating: 4.5,
    votes: 95,
  },
];

// dynamically create products card
const generateProductCards = () => {
  const productGrid = document.getElementById("productGrid");
  console.log(productGrid);
  products.forEach((product) => {
    const cardHTML = `
       <div class="col">
            <div class="product-card">
              <img
                src=${product?.img}
                class="card-img-top"
                alt="Product 1"
              />
              <div class="mt-3" style="padding: 15px;">
                <p
                  style="
                    background-color: #fff5df;
                    height: 26px;
                    width: 87px;
                    padding: 0 5px;
                  "
                >
                  <i class="fa-solid fa-star" style="color: goldenrod"></i>
                  <span>${product?.rating} ${product?.votes}</span>
                </p>
                <p>${product?.title}</p>
               <div class="d-flex justify-content-between align-items-center">
                <p>
                  <span class="text-success fw-bold">${product?.price}</span>
                  <span
                    class="text-decoration-line-through fw-bold"
                    style="color: #667085;"
                    >${product?.discountPrice}</span
                  >
                </p>
                </div>
                <button type="button" class="btn btn-outline-success mt-2 w-100" onclick="buyNow(${product.id})">Buy Now</button>
              </div>
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
    gravity: "bottom",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();
};

// call generate products card fn
generateProductCards();
