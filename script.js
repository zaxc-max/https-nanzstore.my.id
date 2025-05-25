const text = "Welcome to Website Nanz Store";
const typedText = document.getElementById("typed-text");
const layer = document.getElementById("product-layer");
const typingLayer = document.getElementById("typing-layer");

let index = 0;
function typeWriter() {
  if (index < text.length) {
    typedText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    // Layer pertama ngeblur
    typingLayer.classList.add("fade-out");

    // Setelah blur selesai, munculkan produk
    setTimeout(() => {
      typingLayer.style.display = "none";
      layer.classList.add("show");

      // Trigger animasi set-set-set ke tiap produk card
      const cards = document.querySelectorAll(".card");
      cards.forEach((card, i) => {
        card.style.animation = "fadeInUp 0.6s forwards";
        card.style.animationDelay = `${i * 0.2}s`;
      });
    }, 1000);
  }
}
typeWriter();
function showPayment(product, price) {
  document.getElementById("payment-title").innerText = "Bayar " + product;
  document.getElementById("payment-price").innerText = "Harga: " + price;
  document.getElementById("payment-layer").style.display = "flex";
}

function closePayment() {
  document.getElementById("payment-layer").style.display = "none";
}
  