// ==========================
// AUTH-CHECK.JS
// ==========================

(function () {
  const user = localStorage.getItem("loggedInUser");

  if (!user) {
    alert("Silakan login terlebih dahulu!");
    window.location.href = "login.html";
  }
})();
