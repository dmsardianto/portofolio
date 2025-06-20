function toggleDetail(id) {
  const detail = document.getElementById(id);
  if (detail.style.display === "block") {
    detail.style.display = "none";
  } else {
    detail.style.display = "block";
  }
}

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});