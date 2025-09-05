const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const dashboard = document.querySelector(".dashboard");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  dashboard.classList.toggle("full");
});
