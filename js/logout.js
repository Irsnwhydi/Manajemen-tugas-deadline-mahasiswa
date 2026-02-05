// ==========================
// LOGOUT.JS (UPDATED)
// ==========================

let logoutModal;

document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("logoutModal");
  if (modalEl) {
    logoutModal = new bootstrap.Modal(modalEl);
  }
});

function logout() {
  if (logoutModal) {
    logoutModal.show();
  } else {
    // fallback kalau modal belum ada
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
  }
}

function confirmLogout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "login.html";
}
