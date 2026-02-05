// ==========================
// UTILS.JS
// ==========================

// Ambil user login
function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

// Ambil semua tugas
function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

// Simpan tugas
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Generate ID unik
function generateId() {
  return Date.now();
}

// Format tanggal ke lokal
function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}
