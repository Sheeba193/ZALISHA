const menuToggle = document.getElementById("menu-toggle");
const closeToggle = document.getElementById("close-toggle");
const sidebar = document.getElementById("sidebar");

// Show Sidebar and Close Button
menuToggle.addEventListener("click", function() {
  sidebar.style.display = "flex";
  menuToggle.style.display = "none";
  closeToggle.style.display = "block";  // Show close button
});

// Hide Sidebar and Show Menu Button
closeToggle.addEventListener("click", function() {
  sidebar.style.display = "none";
  closeToggle.style.display = "none";  // Hide close button
  menuToggle.style.display = "block";  // Show menu button
});
