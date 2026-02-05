// ==========================
// STATISTIK.JS (FINAL)
// ==========================

document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById("chartTugas");
  if (!ctx) return;

  const tasks = getTasks();

  const selesai = tasks.filter(t => t.status === "Selesai").length;
  const belum = tasks.length - selesai;

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Selesai", "Belum Selesai"],
      datasets: [{
        data: [selesai, belum],
        backgroundColor: [
          "#198754", // 🟢 Hijau - Selesai
          "#ffc107"  // 🟡 Kuning - Belum selesai
        ],
        borderColor: "#ffffff",
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            usePointStyle: true,
            padding: 20
          }
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `${context.label}: ${context.raw} tugas`;
            }
          }
        }
      },
      animation: {
        animateScale: true,
        animateRotate: true
      }
    }
  });
});
