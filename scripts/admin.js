function displayData() {
    let data;
    if(localStorage.getItem('data') == null) {
        data = [];
    }else {
        data = JSON.parse(localStorage.getItem('data'))
    }

    let output = document.querySelector('#adminTable')
    output.innerHTML = '';
    data.forEach((item) => { 
        output.innerHTML += `
        <tr>
        <td>${item.id}</td>
        <td>${item.products}</td>
        <td>${item.description}</td>
        <td>${item.price}</td>
        <td><button type="button"data-bs-toggle="modal" data-bs-target="#edit">edit</button></td>
        <td><button type="button" onclick="delbtn()">Delete</button></td>
        </tr>

        <div class="modal fade" id="edit" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit table</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
      
              <div class="modal-body">
                <!-- .input fields. -->
                <input class="inputModal" type="number" id="id" placeholder="id">
                <input class="inputModal" type="text" id="products" placeholder="products">
                <input class="inputModal" type="text" id="description" placeholder="description">
                <input class="inputModal" type="number" id="price" placeholder="price">
              </div>
      
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" id="edit" onclick="editItem()">Edit</button>
              </div>
            </div>
          </div>
        </div>
        `
    });
}

document.onload = displayData();

function addItem() {
    let id = document.querySelector('#id').value;
    let products = document.querySelector('#products').value;
    let description = document.querySelector('#description').value;
    let price = document.querySelector('#price').value;

    let data;
    if(localStorage.getItem('data') == null) {
        data = [];
    }else {
        data = JSON.parse(localStorage.getItem('data'))
    }

    data.push({
        id: id,
        products: products,
        description: description,
        price: price
    })

    localStorage.setItem('data', JSON.stringify(data));
    displayData();

    id = document.querySelector('#id').value = '';
    products = document.querySelector('#products').value = '';
    description = document.querySelector('#description').value = '';
    price = document.querySelector('#price').value = '';
}


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

