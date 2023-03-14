let copy = document.querySelector(".copyright");
const getYear = new Date().getFullYear();
copy.innerText += ` Copyright ${getYear} by Nexter. All rights reserved`;

const header = document.getElementById("header");
const features = document.getElementById("features");
const story = document.getElementById("story");
const homes = document.getElementById("homes");
const gallery = document.getElementById("gallery");

document.querySelector(".nav-links").addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});
