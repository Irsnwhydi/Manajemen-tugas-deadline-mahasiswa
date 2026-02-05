// ==========================
// KALENDER.JS (UPDATED)
// ==========================

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");
  const tasks = getTasks();

  const events = tasks.map(task => ({
    title: task.judul,
    start: task.deadline,
    allDay: true,
    url: `detail_tugas.html?id=${task.id}`,

    // WARNA SESUAI STATUS
    backgroundColor: task.status === "Selesai" ? "#198754" : "#ffc107",
    borderColor: task.status === "Selesai" ? "#198754" : "#ffc107",
    textColor: task.status === "Selesai" ? "#ffffff" : "#000000"
  }));

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    height: "auto",
    locale: "id",

    headerToolbar: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,listWeek"
    },

    events: events,

    eventClick: function (info) {
      info.jsEvent.preventDefault();
      window.location.href = info.event.url;
    }
  });

  calendar.render();
});
