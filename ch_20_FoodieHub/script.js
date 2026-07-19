  const items = [
    { id: 1, name: "Paneer Butter Masala", price: 249, category: "Main Course", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500" },
    { id: 2, name: "Paneer Tikka", price: 199, category: "Starters", image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=500" },
    { id: 3, name: "Veg Biryani", price: 179, category: "Main Course", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500" },
    { id: 4, name: "Margherita Pizza", price: 249, category: "Main Course", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500" },
    { id: 5, name: "Veg Hakka Noodles", price: 169, category: "Main Course", image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500" },
    { id: 6, name: "Veg Burger", price: 149, category: "Starters", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500" },
    { id: 7, name: "Masala Dosa", price: 129, category: "Main Course", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500" },
    { id: 8, name: "Veg Fried Rice", price: 159, category: "Main Course", image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=500" },
    { id: 9, name: "Chocolate Brownie", price: 99, category: "Dessert", image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500" },
    { id: 10, name: "Caesar Salad", price: 149, category: "Salad", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=500" },
    { id: 11, name: "Veg Manchurian", price: 189, category: "Starters", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500" },
    { id: 12, name: "Pav Bhaji", price: 119, category: "Starters", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500" },
  ];

  let localCartItem = JSON.parse(localStorage.getItem("cartList")) || [];

  console.log("localCartItem", localCartItem);

  function showProduct() {
    const productList = document.getElementById("product-list");

    productList.innerHTML = "";

    items.forEach((p) => {
      productList.innerHTML += `<div class="col-md-4  mt-3">
          
  <div class="card product-card" >
    <img src="${p.image}" class="card-img-top" alt="${p.name}">
    <div class="card-body">
      <h5 class="card-title">${p.name}</h5>
      <p class="card-text"> ₹${p.price}</p>
      <button  class="btn btn-primary" onclick="addToCart(${p.id})" >add to cart</button>
    </div>
  </div>
          
          
          </div>`;
    });
  }

  showProduct();

  function addToCart(id) {
    try {
      let productItem = localCartItem.find((p) => p.id === id);

      console.log("already product", productItem);

      if (productItem) {
        productItem.qty++;
      } else {
        productItem = items.find((p) => p.id === id);

        localCartItem.push({ ...productItem, qty: 1 });
      }

      updateLocalStorageData();

      alert("item added");
    } catch (error) {
      console.log(error);
    }
  }

  function updateLocalStorageData() {
    localStorage.setItem("cartList", JSON.stringify(localCartItem));
    showCartItems();
    total();
  }

  function showCartModal() {
    const cartModal = document.getElementById("cartModal");

    const modal = new bootstrap.Modal(cartModal);

    modal.show();

    updateLocalStorageData();

    showCartItems();
  }

  function showCartItems() {
    try {
      const cartTable = document.getElementById("cartTable");

      cartTable.innerHTML = "";

      localCartItem.forEach((p) => {
        cartTable.innerHTML += `
        <tr>
        <td>${p.id}</td>
        <td>  <img  src="${p.image}" class="img-fluid" height="40px" width="40px" /> </td>
        <td>${p.name}</td>
        <td>₹${p.price * p.qty}</td>
        <td>
        
        
        <div class="d-flex gap-2 align-items-center justify-content-center" >

        <button  class="btn btn-outline-success" onclick="increase(${p.id})" >+</button>
        <h4>${p.qty}</h4>
          <button  class="btn btn-outline-danger" onclick="decrease(${p.id})" >-</button>
        </div>
        
        </td>

        <td> <button class="btn btn-danger" onclick="remove(${p.id})" >remove</button> </td>
        </tr>

        `;
      });
    } catch (error) {
      console.log(error);
    }
  }

  function increase(id) {
    try {
      const product = localCartItem.find((p) => p.id === id);

      if (product) {
        product.qty++;
      }

      updateLocalStorageData();
    } catch (error) {
      console.log(error);
    }
  }

  function decrease(id) {
    try {
      const product = localCartItem.find((p) => p.id === id);

      if (product) {
        product.qty--;
      }

      if (product.qty === 0) {
        localCartItem = localCartItem.filter((p) => p.id !== id);
      }
      updateLocalStorageData();
    } catch (error) {
      console.log(error);
    }
  }

  function remove(id) {
    try {
      localCartItem = localCartItem.filter((p) => p.id !== id);
      updateLocalStorageData();
    } catch (error) {
      console.log(error);
    }
  }

  function total() {
    const total = document.getElementById("total");

    total.innerHTML = "";

    const totalAmount = localCartItem.reduce((acc, curr) => {
      return (acc += curr.price * curr.qty);
    }, 0);

    total.innerHTML = `₹ ${totalAmount}`;

    console.log("total amount", totalAmount);
  }


  function checkOut() {

    try {

      if (localCartItem.length === 0) {
        return alert("your cart is empty please add item to checkout")
      }

      alert("your order placed successfully")

      localCartItem = [];

      updateLocalStorageData();

      const cartModal = document.getElementById("cartModal");

      const modal = new bootstrap.Modal(cartModal);

      modal.hide();

    } catch (error) {
      console.log(error);
    }
  }