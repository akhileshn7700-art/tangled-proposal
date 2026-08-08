const noBtn = document.getElementById("noBtn");

// Move NO button away
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

function moveNoButton() {
  const x = Math.floor(Math.random() * 250) - 125;
  const y = Math.floor(Math.random() * 120) - 60;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

function sayYes() {
  window.location.href = "forever.html";
}

// Floating hearts
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 16 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 350);
