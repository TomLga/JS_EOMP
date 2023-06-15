
  // Product Page:
  
  function addItemsToProductsContainer() {
    let productsContainer = document.getElementById("productsContainer");
    clearProductsContainer(); // Clear existing cards
  
    let products = JSON.parse(localStorage.getItem('products')) || [];
  
    for (let i = 0; i < products.length; i++) {
      let product = products[i];
  
      let card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "28rem";
  
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      // For each product to display on the cards (not working)
      let jungle = document.getElementById("productsContainer");
      jungle.innerHTML += `
        <td class="card-body">${product.id}</td>
        <td>${product.name}</td>
        <td class="card-text">${product.description}</td>
        <td class="card-text">${product.price}</td>
        <td><button>ADD</button></td>
        <td><button>Delete</button></td>
      `;
  
      card.appendChild(cardBody);
      productsContainer.appendChild(card);
    }
  }
  
  function clearProductsContainer() {
    let productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
  }
  
  // Common functions:
  
  function saveProduct(product) {
    let products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  function addProduct(event) {
    event.preventDefault();
  
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;
    let price = document.getElementById("price").value;
  
    let product = {
      id: id,
      name: name,
      description: description,
      price: price
    };
  
    saveProduct(product);
    clearForm();
    location.reload();
  }
  
  function clearForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
  }
  