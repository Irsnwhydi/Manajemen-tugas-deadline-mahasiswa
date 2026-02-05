// ==========================
// AUTH.JS (UPDATED)
// ==========================

// ==========================
// UTIL USER STORAGE
// ==========================
function getUsers() {
  return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ==========================
// REGISTER
// ==========================
function registerUser(event) {
  event.preventDefault();

  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  let users = getUsers();

  const userExists = users.some(u => u.username === username);
  if (userExists) {
    showRegisterPopup(
      "error",
      "Registrasi Gagal",
      "Username sudah digunakan. Silakan pilih yang lain."
    );
    return;
  }

  users.push({ nama, nim, username, password });
  saveUsers(users);

  showRegisterPopup(
    "success",
    "Registrasi Berhasil",
    "Akun berhasil dibuat. Mengalihkan ke halaman login..."
  );

  setTimeout(() => {
    window.location.href = "login.html";
  }, 1500);
}

// ==========================
// LOGIN
// ==========================
function loginUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const users = getUsers();
  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    showLoginPopup(
      "error",
      "Login Gagal",
      "Username atau password salah."
    );
    return;
  }

  localStorage.setItem("loggedInUser", JSON.stringify(user));

  showLoginPopup(
    "success",
    "Login Berhasil",
    "Selamat datang! Mengalihkan ke dashboard..."
  );

  setTimeout(() => {
    window.location.href = "dashboard.html";
  }, 1500);
}
