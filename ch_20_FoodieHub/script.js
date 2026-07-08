const items = [
  {
    id: 1,
    name: "Paneer Butter Masala",
    price: 249,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500"
  },
  {
    id: 2,
    name: "Paneer Tikka",
    price: 199,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500"
  },
  {
    id: 3,
    name: "Veg Biryani",
    price: 179,
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500"
  },
  {
    id: 4,
    name: "Margherita Pizza",
    price: 249,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
  },
  {
    id: 5,
    name: "Veg Hakka Noodles",
    price: 169,
    image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500"
  },
  {
    id: 6,
    name: "Veg Burger",
    price: 149,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
  },
  {
    id: 7,
    name: "Masala Dosa",
    price: 129,
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500"
  },
  {
    id: 8,
    name: "Veg Fried Rice",
    price: 159,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500"
  },
  {
    id: 9,
    name: "Chocolate Brownie",
    price: 99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
  },
  {
    id: 10,
    name: "Caesar Salad",
    price: 149,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500"
  },
  {
    id: 11,
    name: "Veg Manchurian",
    price: 189,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500"
  },
  {
    id: 12,
    name: "Pav Bhaji",
    price: 119,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500"
  },
 
];

function showDish() {
    const dishlist = document.getElementById("dish-list");
    dishlist.innerHTML = "";

    items.forEach((p) => {
        dishlist.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card dish-card shadow rounded-4" >
                    <img src="${p.image}" class="card-img-top" alt="${p.name}">
                    <div class="card-body">
                        <h5>${p.name}</h5>
                        <p>₹${p.price}</p>
                        <button class="btn btn-success">Order Now</button>
                    </div>
                </div>
            </div>
        `;
    });
}

showDish();

