const form = document.querySelector('.confirm-form')
const showOrders = document.querySelector('.show_orders')
const result = document.querySelector('.result')
const cleanOrders = document.querySelector('.clean_orders')

function createForm() {
    return `
    <label for="goods"></label>
    <select class="select" name="goods" id="goods" required>
        <option value="">--Please choose good--</option>
        <option value="cat">Cat</option>
        <option value="dog">Dog</option>
        <option value="goose">Goose</option>
    </select>
    <select class="select" name="color" id="color" required>
        <option value="">--Please choose color--</option>
        <option value="Red">Red</option>
        <option value="Orange">Orange</option>
        <option value="Blue">Blue</option>
    </select>
    <input type="number" name="quantity" id="quantity" value="1">
    <button type="submit">Order</button> `
}

form.innerHTML = createForm()

let orders = JSON.parse(localStorage.getItem('orders')) || [];


cleanOrders.addEventListener('click', function () {
    localStorage.clear()
    orders = []
})

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const numOfOrder = Math.round(1 + Math.random() * (1000 + 1 - 1))
    const currentDate = new Date().toLocaleString()
    const formData = new FormData(form)
    const objOrder = {
        goods: `${formData.get('goods')}`,
        quantity: `${formData.get('quantity')}`,
        color: `${formData.get('color')}`,
        date: `${currentDate}`,
        number: `${numOfOrder}`
    }
    orders.push(objOrder)
    localStorage.setItem('orders', JSON.stringify(orders))
})
showOrders.addEventListener('click', function () {
    result.innerHTML = createOrdersListMarkup(orders)
})

function createOrdersListMarkup(orders) {
    return orders.map((order) => `
    <div>
        <div id="${orders.indexOf(order)}">
           Order №${order.number} : ${order.date}
        </div> 
        <div class="orderDetails${orders.indexOf(order)} display_none"> 
             Your order: ${order.goods}, quantity:${order.quantity}, color:${order.color}.
            <button class="buttonDelete" id="${orders.indexOf(order)}" type="button"  ">
                delete
            </button>
        </div> 
    </div> `).join("");

}

result.addEventListener('click', function (e) {
    const orderDetails = document.querySelector(`.orderDetails${e.target.id}`)
    if (e.target.nodeName === 'BUTTON') {
        orders.splice(e.target.id, 1)
        localStorage.setItem('orders', JSON.stringify(orders))
        result.innerHTML =  orders.length>0? createOrdersListMarkup(orders):''
    }
    if (e.currentTarget.nodeName === 'DIV') {
        orderDetails.classList.remove('display_none')
    }
})


