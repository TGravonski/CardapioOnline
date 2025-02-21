// REFERÊNCIA QUE QUEREMOS MODIFICAR COM "DOM"
const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const cartItemsContainer = getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementByI("cart-count")
const addressInput = document.getElementById("address")
const addressWarn = document.getElementById("address-warn")

cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})

cartModal.addEventListener("click", function(event){
    console.log(event);
})