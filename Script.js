// Slider functionality for Popular Items
const sliderTrack = document.querySelector(".slider-track");
const sliderItems = document.querySelectorAll(".slider-item");
const prevButton = document.querySelectorAll(".slider-btn")[0];
const nextButton = document.querySelectorAll(".slider-btn")[1];

let currentSlide = 0;
const totalSlides = sliderItems.length;

// Adjust slider to move by width of an item
function updateSlider() {
    const slideWidth = sliderItems[0].getBoundingClientRect().width; // Get item width dynamically
    sliderTrack.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
}

// Next Button Event
nextButton.addEventListener("click", () => {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0; // Loop to the start
    }
    updateSlider();
});

// Previous Button Event
prevButton.addEventListener("click", () => {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1; // Loop to the end
    }
    updateSlider();
});

// Resize Event Listener to ensure slider works on window resize
window.addEventListener("resize", updateSlider);

// Initialize slider position
updateSlider();

// Form Validation
const form = document.querySelector("form");
const nameInput = document.querySelector('input[placeholder="Your Name"]');
const emailInput = document.querySelector('input[placeholder="Your Email"]');
const messageInput = document.querySelector('textarea');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        isValid = false;
    }

    if (!emailInput.value.includes("@") || emailInput.value.trim() === "") {
        alert("Please enter a valid email.");
        isValid = false;
    }

    if (messageInput.value.trim() === "") {
        alert("Please enter your message.");
        isValid = false;
    }

    if (isValid) {
        alert("Form submitted successfully!");
        form.reset();
    }
});

// Search Button Functionality
const searchInput = document.querySelector('input[placeholder="Search food you love"]');
const searchButton = document.querySelector(".btn-search");

searchButton.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query === "") {
        alert("Please enter something to search.");
    } else {
        alert(`Searching for "${query}"...`);
        // Implement backend search logic here
    }
});

// Modal for Request a Dish
const requestButton = document.querySelector(".request-dish-btn");
const modal = document.getElementById("requestModal");
const closeModal = document.querySelector(".close-btn");

// Open Modal
requestButton.addEventListener("click", () => {
    modal.style.display = "flex";
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal when clicking outside
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
