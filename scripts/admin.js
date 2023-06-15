//admin table
let tableBody = document.getElementById("adminTableBody");
let productDisplayed = JSON.parse(localStorage.getItem('data'));

let idInput = document.querySelector("#id")
let imgInput = document.querySelector("#imageofProduct")
let titleInput = document.querySelector("#name")
let descriptionInput = document.querySelector("#description")
let priceInput = document.querySelector("#price")
let btn = document.querySelector('#submit')

function showProducts(){
  tableBody.innerHTML = ''
  productDisplayed.forEach((data) => {
    console.log(data.Image);
    tableBody.innerHTML +=
    `
    <tr>
      <td>${data.id}</td>
      <td><img scr="${data.Image}" alt="${data.Title}"></td>
      <td>${data.Title}</td>
      <td>${data.Description}</td>
      <td>${data.price}</td>
      <td><button class="crud-btn">✍️</button></td>
      <td><button class="crud-btn">🗑️</button></td>
    </tr>
    `
  })
}

showProducts()

btn.addEventListener('click', ()=>{
  

  let newProduct = {
    id: idInput.value,
    Image:imgInput.value,
    Title: titleInput.value,
    Description: descriptionInput.value,
    price: priceInput.value
  }

  productDisplayed.push(newProduct)
  localStorage.setItem('data', JSON.stringify(productDisplayed))
  showProducts()
  console.log(productDisplayed);
})

console.log(productDisplayed);


