//admin table
function addItemsToTable() {
  let tableBody = document.getElementById("adminTableBody");
  clearTable(); // Clear existing table rows
  let products = JSON.parse(localStorage.getItem('products')) || [];

  //creating rows inside the admin page 
  for (let i = 0; i < products.length; i++) {
    let newRow = tableBody.insertRow(-1);
    let block1 = newRow.insertCell(0);
    let block2 = newRow.insertCell(1);
    let block3 = newRow.insertCell(2);
    let block4 = newRow.insertCell(3);
    let block5 = newRow.insertCell(4); //edit btn
    let block6 = newRow.insertCell(5); //del btn
    
    block1.innerHTML = products[i].id;
    block2.innerHTML = products[i].name;
    block3.innerHTML = products[i].description;
    block4.innerHTML = products[i].price;
    
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
    card.style.width = "28rem";

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let shop =[{
      id: id.value,
      name:name.value,
      description:description.value,
      // img: img.value,
      price: price.vaule,
    }
    ]
   
    //for each product to display on the cards not working 
    let jungle = document.getElementById("productsContainer");
shop.forEach((itemss) => {
  jungle.innerHTML += `>
       <td class= "card-body">${itemss.id}</td>
       <td>${itemss.name}</td>
      <td class="card-text">${itemss.description}</td>
      // <td><img src="${itemss.img}"></td>
       <td class="card-text">${itemss.price}></td>
      <td><button>ADD</button></td>
      <td><button>Delete</button></td>
    `;
});
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

// let addNewItems=[
//     {
//         id:id,
//         img:"",
//         name:name,
//         description:description,
//         price:price,
//     },
// ]

// let sweet = document.querySelector("#productsContainer");
// addNewItems.forEach((thingg) => {
//   sweet.innerHTML += `
// <tr>
//     <td>${thingg.name}</td>
//     <td>${thingg.price}</td>
//     <td><img src="${thingg.img}"></td>
//     <td><button>ADD</button></td>
//     <td><button>Delete</button></td>
// </tr>`
// })





















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

