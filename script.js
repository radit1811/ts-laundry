const navLinks = document.querySelectorAll("nav ul li a");
const checkbox = document.getElementById("click");
const sections = document.querySelectorAll("section");
const btn = document.querySelector("button");
const post = document.querySelector(".post");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");

// Pull to refresh
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    document.getElementById("loading").style.display = "none";

    setTimeout(function () {
      location.reload();
    }, 1000);
  }
});

// NAVBAR BUTTON ACTIVE
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
  link.addEventListener("click", () => {
    checkbox.checked = false;
  });
});

// SCROLL DETECTION UNTUK NAVBAR
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    if (
      link.getAttribute("href").startsWith("http") ||
      link.getAttribute("href").includes("html")
    ) {
      return;
    }

    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// FUNCTION UNTUK SLIDE GAMBAR
let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}

// BUTTON RATING
btn.onclick = (e) => {
  e.preventDefault();
  widget.style.display = "none";
  post.style.display = "block";

  editBtn.onclick = () => {
    widget.style.display = "block";
    post.style.display = "none";
    return false;
  };
};
