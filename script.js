function toggleMenu() {
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Fullscreen Image
function openImage(src) {
  document.getElementById("popup").style.display = "flex";
  document.getElementById("popup-img").src = src;
}

function closeImage() {
  document.getElementById("popup").style.display = "none";
}