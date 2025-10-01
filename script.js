// Product details (could be dynamic)
const productName = "Awesome Product";
const productPrice = 19.99;

// Modal elements
const buyBtn = document.getElementById("buyBtn");
const quantityModal = document.getElementById("quantityModal");
const quantityInput = document.getElementById("quantityInput");
const quantityConfirmBtn = document.getElementById("quantityConfirmBtn");
const quantityCancelBtn = document.getElementById("quantityCancelBtn");

const checkoutModal = document.getElementById("checkoutModal");
const checkoutSummary = document.getElementById("checkoutSummary");
const checkoutConfirmBtn = document.getElementById("checkoutConfirmBtn");
const checkoutCancelBtn = document.getElementById("checkoutCancelBtn");

// Step 1: Buy button click opens quantity selector
buyBtn.addEventListener("click", () => {
  quantityModal.classList.remove("hidden");
  quantityInput.value = 1;
});

// Step 2: Quantity confirm opens checkout
quantityConfirmBtn.addEventListener("click", () => {
  const qty = parseInt(quantityInput.value, 10) || 1;
  quantityModal.classList.add("hidden");
  checkoutSummary.textContent = `You are buying ${qty} x ${productName} for $${(qty * productPrice).toFixed(2)}`;
  checkoutModal.classList.remove("hidden");
});

// Step 2b: Cancel quantity selection
quantityCancelBtn.addEventListener("click", () => {
  quantityModal.classList.add("hidden");
});

// Step 3: Checkout confirm
checkoutConfirmBtn.addEventListener("click", () => {
  alert("Thank you for your purchase!");
  checkoutModal.classList.add("hidden");
});

// Step 3b: Cancel checkout
checkoutCancelBtn.addEventListener("click", () => {
  checkoutModal.classList.add("hidden");
});