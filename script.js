// ===== Tangled Proposal Login =====

const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorText = document.getElementById("error");

// Press Enter to login
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkLogin();
  }
});

function checkLogin() {
  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Correct credentials
  if (username === "mokshap7091" && password === "chitteluka14344") {
    errorText.style.color = "#b8ffb8";
    errorText.innerHTML = "✨ Welcome Monika... opening our story 💜";

    // Small cinematic delay
    setTimeout(() => {
      window.location.href = "love.html";
    }, 1800);
  } else {
    errorText.style.color = "#ffb3b3";
    errorText.innerHTML =
      "Oyyy 🤏🐀 Login Id or Password Sarigga Type Cheyi...";

    // Shake animation
    const card = document.querySelector(".login-card");

    card.animate(
      [
        { transform: "translateX(0px)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(-8px)" },
        { transform: "translateX(8px)" },
        { transform: "translateX(0px)" },
      ],
      {
        duration: 400,
      },
    );

    // Clear password only
    passwordInput.value = "";
    passwordInput.focus();
  }
}

// Optional: glowing cursor effect
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".mouse-glow");

  if (glow) {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
  }
});
