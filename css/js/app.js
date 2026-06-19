const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const contactBtn = document.getElementById("contactBtn");

contactBtn.addEventListener("click", () => {
    alert("Thank you for contacting us!");
});