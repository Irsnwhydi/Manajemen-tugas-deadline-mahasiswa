// ==========================
// TUGAS.JS (FINAL)
// ==========================

// ==========================
// TAMBAH TUGAS
// ==========================
function tambahTugas(event) {
  event.preventDefault();

  const tasks = getTasks();

  const tugas = {
    id: generateId(),
    judul: document.getElementById("judul").value,
    matkul: document.getElementById("matkul").value,
    deadline: document.getElementById("deadline").value,
    prioritas: document.getElementById("prioritas").value,
    status: "Belum",
    pinned: false,
    catatan: document.getElementById("catatan").value
  };

  tasks.push(tugas);
  saveTasks(tasks);

  // ❌ JANGAN ADA alert / redirect di sini
  // Popup diatur dari HTML (Bootstrap Modal)
}

// ==========================
// AMBIL ID DARI URL
// ==========================
function getTaskId() {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("id"));
}

// ==========================
// AMBIL TUGAS BERDASARKAN ID
// ==========================
function getTaskById(id) {
  return getTasks().find(t => t.id === id);
}

// ==========================
// UPDATE SATU TUGAS
// ==========================
function updateTask(updatedTask) {
  const tasks = getTasks().map(t =>
    t.id === updatedTask.id ? updatedTask : t
  );
  saveTasks(tasks);
}

// ==========================
// HAPUS TUGAS
// ==========================
function hapusTugas(id) {
  const tasks = getTasks().filter(t => t.id !== id);
  saveTasks(tasks);
}

// ==========================
// TOGGLE STATUS (OPSIONAL)
// ==========================
function toggleStatus(id) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  task.status = task.status === "Selesai" ? "Belum" : "Selesai";
  saveTasks(tasks);
}

// ==========================
// PIN TUGAS (OPSIONAL)
// ==========================
function pinTugas(id) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === id);
  if (!task) return;

  task.pinned = !task.pinned;
  saveTasks(tasks);
}
