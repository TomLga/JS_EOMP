function addItemsToTable() {
  let tableBody = document.getElementById("adminTableBody");
  clearTable(); // Clear existing table rows
  let products = JSON.parse(localStorage.getItem('products')) || [];

  for (let i = 0; i < products.length; i++) {
    let row = tableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);

    cell1.innerHTML = products[i].id;
    cell2.innerHTML = products[i].name;
    cell3.innerHTML = products[i].description;
    cell4.innerHTML = products[i].price;

    // Add Edit and Delete buttons if needed
    // ...
  }
}

function clearTable() {
  let tableBody = document.getElementById("adminTableBody");
  tableBody.innerHTML = "";
}

function addItemsToProductsContainer() {
  let productsContainer = document.getElementById("productsContainer");
  clearProductsContainer(); // Clear existing cards
  let products = JSON.parse(localStorage.getItem('products')) || [];

  for (let i = 0; i < products.length; i++) {
    let product = products[i];

    let card = document.createElement("div");
    card.classList.add("card");
    card.style.width = "18rem";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    cardBody.innerHTML =
      "<h5 class='card-title'>" + product.name + "</h5>" +
      "<p class='card-text'><strong>ID:</strong> " + product.id + "</p>" +
      "<p class='card-text'><strong>Description:</strong> " + product.description + "</p>" +
      "<p class='card-text'><strong>Price:</strong> $" + product.price + "</p>";

    card.appendChild(cardBody);
    productsContainer.appendChild(card);
  }
}

function clearProductsContainer() {
  let productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";
}

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

window.onload = function() {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  addItemsToTable();
  addItemsToProductsContainer();
};


// to edit the product list 
// function editItem(index) {
//     let data;
//     if(localStorage.getItem('data') == null) {
//         data = [];
//     }else {
//         data = JSON.parse(localStorage.getItem('data'))
//     }
    
//     document.querySelector('#id').value = data[index].id;
//     document.querySelector('#products').value = data[index].products;
//     document.querySelector('#description').value = data[index].description;
//     document.querySelector('#price').value = data[index].price;

//     document.querySelector('#edit').onclick = function() {
//         data[index].id = document.querySelector('#id').value;
//         data[index].products = document.querySelector('#products').value;
//         data[index].description = document.querySelector('#description').value;
//         data[index].price = document.querySelector('#price').value;

//         localStorage.setItem('data', JSON.stringify(data));
//         displayData();

//         id = document.querySelector('#id').value = '';
//         products = document.querySelector('#products').value = '';
//         description = document.querySelector('#description').value = '';
//         price = document.querySelector('#price').value = '';
//     }
// }

