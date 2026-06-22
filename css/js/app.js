const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || message === ""){
        alert("Please fill all fields");
        return;
    }

    alert("Form Submitted Successfully!");

    form.reset();
});