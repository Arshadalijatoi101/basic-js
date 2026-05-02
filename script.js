// =====================================
// JavaScript Basics & DOM Manipulation
// =====================================

// Boolean variable to track menu state
let menuVisible = false;

// Selecting HTML elements using DOM methods
const menuBtn = document.getElementById("menuBtn");   // Button element
const menu = document.getElementById("menu");         // Navigation menu
const message = document.querySelector("#message");   // Paragraph text
const changeTextBtn = document.querySelector("#changeTextBtn"); // Button

// =====================================
// Toggle Menu Function (Desktop + Mobile)
// =====================================
menuBtn.addEventListener("click", function () {

    // Check if menu is currently hidden
    if (menuVisible === false) {
        menu.style.display = "block"; // Show menu
        menuVisible = true;
    } 
    // If menu is visible, hide it
    else {
        menu.style.display = "none";  // Hide menu
        menuVisible = false;
    }
});
