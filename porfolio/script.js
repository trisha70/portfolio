// script.js

// Typing Animation (Your existing code)
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Problem Solver", "Java Web Developer", "UI/UX Designer"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Close Mobile Menu on Link Click (Improved)
const navbarLinks = document.querySelectorAll('.navbar a'); // Select all <a> inside .navbar

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active'); // Close the menu
    });
});


// Active Link Highlighting (More Robust)
const sections = document.querySelectorAll('section'); // Select all sections
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) { // Adjust offset as needed
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) { // Compare href (without #)
            link.classList.add('active');
        }
    });
});



// Project Card Animations (Intersection Observer - More Efficient)
const projectCards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Optional: Stop observing once visible
    }
  });
}, {
    threshold: 0.5 // Adjust threshold as needed (0.5 means 50% visible)
});

projectCards.forEach(card => {
  observer.observe(card);
});



// Smooth Scrolling (Optional, but recommended)
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default jump behavior

        const targetId = this.getAttribute('href').substring(1); // Get target ID
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop, // Scroll to the top of the target element
            behavior: 'smooth' // For smooth scrolling animation
        });

        // Close the mobile menu if it's open (important for mobile)
        if (window.innerWidth <= 768) { // Check if it's a mobile view
            navbar.classList.remove('active');
        }
    });
});