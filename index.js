
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  menuIcon.addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const bulb = document.getElementById("bulb");

    // Function to toggle bulb image
    function toggleBulb() {
        if (bulb.src.includes("bulb-off.png")) {
            bulb.src = "bulb-on.png";
        } else {
            bulb.src = "bulb-off.png";
        }
    }

    // Event listener to toggle bulb on click
    bulb.addEventListener("click", toggleBulb);

    // Optional: Automatically toggle bulb at a set interval (e.g., every 1 second)
    setInterval(toggleBulb, 1000);
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });
  
    const elements = document.querySelectorAll('.fade-in-text');
    elements.forEach(element => {
      observer.observe(element);
    });
  });

