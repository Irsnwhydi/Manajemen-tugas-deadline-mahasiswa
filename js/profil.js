// ==========================
// PROFIL.JS (FINAL)
// ==========================

document.addEventListener("DOMContentLoaded", function () {
  const user = getLoggedInUser();
  if (!user) return;

  // Isi form
  document.getElementById("nama").value = user.nama;
  document.getElementById("nim").value = user.nim;
  document.getElementById("username").value = user.username;

  // Tampilkan
  document.getElementById("namaTampil").innerText = user.nama;
  document.getElementById("nimTampil").innerText = user.nim;

  // FOTO PROFIL
  const fotoEl = document.getElementById("fotoProfil");
  const fotoTersimpan = localStorage.getItem("fotoProfil");

  fotoEl.src = fotoTersimpan
    ? fotoTersimpan
    : `https://api.dicebear.com/7.x/identicon/svg?seed=${user.username}`;
});

// ==========================
// SIMPAN PROFIL
// ==========================
function simpanProfil(event) {
  event.preventDefault();

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = getLoggedInUser();
  if (!user) return;

  const nama = document.getElementById("nama").value;
  const nim = document.getElementById("nim").value;
  const usernameBaru = document.getElementById("username").value;
  const passwordBaru = document.getElementById("password").value;

  // Update data
  user.nama = nama;
  user.nim = nim;
  user.username = usernameBaru;

  if (passwordBaru.trim() !== "") {
    user.password = passwordBaru;
  }

  users = users.map(u =>
    u.username === getLoggedInUser().username ? user : u
  );

  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("loggedInUser", JSON.stringify(user));

  // Update tampilan
  document.getElementById("namaTampil").innerText = nama;
  document.getElementById("nimTampil").innerText = nim;
}
