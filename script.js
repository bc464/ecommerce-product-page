const btnNavEl = document.querySelector(".btn-mobile-nav");
const navbarEl = document.querySelector(".nav-bar");

btnNavEl.addEventListener("click", function(){
	navbarEl.classList.toggle("nav-open");
	
});

// MODAL CODE
let modal = document.getElementById("myModal");
let img = document.getElementById('myImg');
let modalImg = document.getElementById("img01");
let cart = document.querySelector(".cart-icon");
let cost = document.querySelector(".cost-modal");
let emptyCartText = document.querySelector(".cart-empty-text");
let productInfo = document.querySelector(".product-info");
let checkoutBtn = document.querySelector(".btn-checkout");
let cartNotification = document.querySelector(".cart__notification");


img.onclick = function(){
	modal.style.display = "block";
	modalImg.src = this.src;}

let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
	modal.style.display = "none";
}
// SLIDE CODE

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("thumbnail-modal");

	if(n > slides.length) {
		slideIndex = 1;
	}
	if(n < 1) {
		slideIndex = slides.length
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	for(i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" focus", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " focus";

}

// ***CART BREAKDOWN***
function cartShow() {
	const modalCart = document.getElementById("myModal-cart");
	cart.addEventListener("click", function(){

		if(quantityCount <= 0) {
			emptyCartText.style.display = "block";
			productInfo.style.display = "none";
			checkoutBtn.style.display = "none";
			
		} else {
			productInfo.style.display = "flex";
			checkoutBtn.style.display = "block";
			emptyCartText.style.display = "none"
		}

		modalCart.classList.toggle("myModal-cart")
	})

	const cartBtn = document.querySelector(".btn-cart");
	cartBtn.addEventListener("click", function (){
		if(quantityCount <= 0) {
			emptyCartText.style.display = "block";
			productInfo.style.display = "none";
			checkoutBtn.style.display = "none";
		} else {
			productInfo.style.display = "flex";
			checkoutBtn.style.display = "block";
			emptyCartText.style.display = "none"
		}
		modalCart.classList.toggle("myModal-cart")
	})
}
// cartShow();
let quantityCount = 0;
let minusIcon = document.querySelector(".minus-icon");
let plusIcon = document.querySelector(".plus-icon");
let quantity = document.querySelector(".quantity");
let quantityModal = document.querySelector(".quantity-modal")
function quantityCalc(){
	

	minusIcon.addEventListener("click", function(){
		if(quantityCount > 0){
		quantityCount--;
		cartMsg();
		}
	quantity.textContent = quantityCount;
	quantityModal.textContent = quantityCount;
	costCalc();
	})
	plusIcon.addEventListener("click", function() {
		quantityCount++;
		cartMsg();
		quantity.textContent = quantityCount;
		quantityModal.textContent = quantityCount;
		costCalc();
	})
}
function cartMsg() {
	if(quantityCount <= 0) {
		cartNotification.style.display = "none";
		cartNotification.textContent = quantityCount;
	}
	else {
		cartNotification.style.display = "flex";
		cartNotification.textContent = quantityCount;
	};
}

quantityCalc();
cartShow();
function costCalc() {
	let price = 125.00;
	let totalCost = price * quantityCount;
	cost.textContent = `$${totalCost}`;
	
}
// costCalc();
let deleteCartBtn = document.querySelector(".delete-icon")
function deleteCart() {
	deleteCartBtn.addEventListener("click", function(){
		emptyCartText.style.display = "block";
		productInfo.style.display = "none";
		checkoutBtn.style.display = "none";
		quantityCount = 0;
		quantity.textContent = quantityCount;
		cartMsg();
	})
}
deleteCart();