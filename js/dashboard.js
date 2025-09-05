// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxVideo = document.getElementById("lightbox-video");
const closeBtn = document.querySelector(".lightbox .close");

// Open images
document.querySelectorAll(".image-grid img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.style.display = "block";
    lightboxVideo.style.display = "none";
  });
});

// Open videos
document.querySelectorAll(".video-grid video").forEach(video => {
  video.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxVideo.src = video.querySelector("source").src;
    lightboxVideo.style.display = "block";
    lightboxImg.style.display = "none";
    lightboxVideo.play(); // auto-play
  });
});

// Close lightbox
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxVideo.pause();
});

// Optional: Close lightbox if clicking outside content
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxVideo.pause();
  }
});

// Sidebar toggle functionality
const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const dashboard = document.querySelector(".dashboard");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("closed");
  dashboard.classList.toggle("full");
});
