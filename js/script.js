
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbarRight = document.getElementById('navbarRight');

hamburger.addEventListener('click', () => {
    navbarRight.classList.toggle('active');
});
// Search and Cart Container scroll effect
window.addEventListener('scroll', () => {
    const searchCartContainer = document.querySelector('.search-cart-container');
    if (window.scrollY > 50) { // Adjust the scroll threshold as needed
        searchCartContainer.classList.add('scrolled');
    } else {
        searchCartContainer.classList.remove('scrolled');
    }
});
// Update Cart Count (Example)
const cartCount = document.querySelector('.cart-count');
let count = 0;
// Simulate adding items to the cart
document.querySelectorAll('.add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        count++;
        cartCount.textContent = count;
    });
});
// Function to fetch location and check if it's within Tamil Nadu, Madurai
const locationText = document.getElementById('location-text');

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;
            fetchLocationName(latitude, longitude);
        },
        (error) => {
            locationText.textContent = "Location access denied or not supported.";
        }
    );
} else {
    locationText.textContent = "Geolocation is not supported by your browser.";
}

// Function to fetch location name using OpenCage Geocoder API
function fetchLocationName(latitude, longitude) {
    const apiKey = "7fb9889c268442bba3758a22fbd19b39"; // Replace with your OpenCage API key
    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            if (data.results && data.results.length > 0) {
                const address = data.results[0].formatted;
                const state = data.results[0].components.state;
                const city = data.results[0].components.city;

                // Check if the location is within Tamil Nadu, Madurai
                if (state === "Tamil Nadu" && city === "Madurai") {
                    locationText.textContent = `You are in Madurai, Tamil Nadu.`;
                } else {
                    locationText.textContent = `You are outside Madurai, Tamil Nadu.`;
                }
            } else {
                locationText.textContent = "Location not found.";
            }
        })
        .catch((error) => {
            locationText.textContent = "Error fetching location details.";
        });
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

elements.forEach(element => {
    observer.observe(element);
});

// Add to Cart Interactive
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
        // You can add more functionality here, like updating the cart count
    });
});
// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show'); // Show the button
    } else {
        backToTopButton.classList.remove('show'); // Hide the button
    }
});

// Scroll to top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll
    });
});
