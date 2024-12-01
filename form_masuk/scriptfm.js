// Seleksi elemen DOM
const mainForm = document.getElementById("main-form");
const loginSection = document.getElementById("login-section");
const signinSection = document.getElementById("signin-section");
const loginButton = document.getElementById("login-button");
const signinButton = document.getElementById("signin-button");
const backToMain = document.getElementById("back-to-main");
const backToMain2 = document.getElementById("back-to-main-2");

// Tampilkan hanya form masuk pada awal
window.onload = () => {
  mainForm.style.display = "flex";
  loginSection.style.display = "none";
  signinSection.style.display = "none";
};

// Tombol Login
loginButton.addEventListener("click", () => {
  mainForm.style.display = "none";
  loginSection.style.display = "flex";
});

// Tombol Masuk di Form Login
loginSection.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah submit form default

  const username = loginSection.querySelector("#username").value.trim();
  const password = loginSection.querySelector("#password").value.trim();

  if (!username || !password) {
    alert("Harap isi semua data!");
    return;
  }

  // Redirect ke homepage
  window.location.href = "../homepage/homepage.html";
});

// Tombol Kembali di Form Login
backToMain.addEventListener("click", () => {
  loginSection.style.display = "none";
  mainForm.style.display = "flex";
});

// Tombol Sign In
signinButton.addEventListener("click", () => {
  mainForm.style.display = "none";
  signinSection.style.display = "flex";
});

// Tombol Daftar di Form Sign In
signinSection.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault(); // Mencegah submit form default

  const username = signinSection.querySelector("#username").value.trim();
  const email = signinSection.querySelector("#email").value.trim();
  const password = signinSection.querySelector("#password").value.trim();

  if (!username || !email || !password) {
    alert("Harap isi semua data!");
    return;
  }

  // Redirect ke homepage
  window.location.href = "../homepage/homepage.html";
});

// Tombol Kembali di Form Sign In
backToMain2.addEventListener("click", () => {
  signinSection.style.display = "none";
  mainForm.style.display = "flex";
});
