// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const contentBox = document.querySelector(".content-box");

    // Function to load content dynamically
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentBox.innerHTML = data;
                applyAnimations(); // Apply animations after loading new content
            })
            .catch(error => {
                console.error("Error loading content:", error);
                contentBox.innerHTML = "<p>Error loading content. Please try again later.</p>";
            });
    }

    // Apply animations to the content
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");
    const contentBox = document.querySelector(".content-box");

    // Function to load content dynamically
    function loadContent(page) {
        fetch(page)
            .then(response => response.text())
            .then(data => {
                contentBox.innerHTML = data;
                applyAnimations(); // Apply animations after loading new content
            })
            .catch(error => {
                console.error("Error loading content:", error);
                contentBox.innerHTML = "<p>Error loading content. Please try again later.</p>";
            });
    }

    // Apply animations to the content
    function applyAnimations() {
        const content = contentBox.querySelector(".content");
        if (content) {
            content.querySelector("h2").classList.add("slideInFromLeft");
            content.querySelectorAll("p, li").forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
                element.classList.add("fadeInUp");
            });
        }
    }
    
    // Add event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("href");

            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add 'active' class to the clicked tab
            this.classList.add("active");

            // Load the corresponding content
            loadContent(page);
        });
    });

    // Load the default content (Home) when the page is first loaded
    loadContent("home.html");
});


// Profile Picture and Sidebar Toggle
document.addEventListener('DOMContentLoaded', function () {
    const profilePic = document.querySelector('.profile-pic');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar visibility when profile pic is clicked
    profilePic.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        triggerInteractiveVisualization(); // For visualization effect (e.g. balloons, fireworks, etc.)
    });
});

// Certificate Category Filter
document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('categorySelect');
    const certItems = document.querySelectorAll('.cert-item');

    // Filter certificate items based on selected category
    categorySelect.addEventListener('change', function () {
        const selectedCategory = this.value;

        certItems.forEach(item => {
            if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        adjustCertItemSize(); // Adjust sizes based on filter
    });

    // Function to adjust certificate item sizes based on available space
    function adjustCertItemSize() {
        const containerHeight = document.querySelector('.certifications').offsetHeight;
        const certItems = document.querySelectorAll('.cert-item');

        // Adjust certificate item height based on grid rows
        let itemHeight = Math.floor(containerHeight / Math.ceil(certItems.length / 3)) - 20;

        certItems.forEach(item => {
            item.style.height = itemHeight + 'px';
        });
    }

    // Initial adjustment on load
    adjustCertItemSize();

    // Re-adjust on window resize
    window.addEventListener('resize', adjustCertItemSize);
});


// Brighten full screen when profile pic is clicked (Spotlight effect)
document.addEventListener('DOMContentLoaded', function () {
    const profilePic = document.querySelector('.profile-pic');

    profilePic.addEventListener('click', function () {
        profilePic.classList.toggle('rotate');
    });
});

    function applyAnimations() {
        const content = contentBox.querySelector(".content");
        if (content) {
            content.querySelector("h2").classList.add("slideInFromLeft");
            content.querySelectorAll("p, li").forEach((element, index) => {
                element.style.animationDelay = `${index * 0.2}s`;
                element.classList.add("fadeInUp");
            });
        }
    }
    
    
    

    // Add event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();
            const page = this.getAttribute("href");

            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add 'active' class to the clicked tab
            this.classList.add("active");

            // Load the corresponding content
            loadContent(page);
        });
    });

    // Load the default content (Home) when the page is first loaded
    loadContent("home.html");
});

document.addEventListener('DOMContentLoaded', function () {
    const profilePic = document.querySelector('.profile-pic');
    const sidebar = document.querySelector('.sidebar');

    // Toggle sidebar visibility when profile pic is clicked
    profilePic.addEventListener('click', function () {
        sidebar.classList.toggle('active');
        triggerInteractiveVisualization();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const categorySelect = document.getElementById('categorySelect');
    const certItems = document.querySelectorAll('.cert-item');

    categorySelect.addEventListener('change', function () {
        const selectedCategory = this.value;

        certItems.forEach(item => {
            if (selectedCategory === 'all' || item.getAttribute('data-category') === selectedCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        adjustCertItemSize();
    });

    // Function to adjust certificate item sizes based on the available space
    function adjustCertItemSize() {
        const containerHeight = document.querySelector('.certifications').offsetHeight;
        const certItems = document.querySelectorAll('.cert-item');

        let itemHeight = Math.floor(containerHeight / Math.ceil(certItems.length / 3)) - 20; // Adjust based on grid rows

        certItems.forEach(item => {
            item.style.height = itemHeight + 'px';
        });
    }

    // Initial adjustment on load
    adjustCertItemSize();

    // Re-adjust on window resize
    window.addEventListener('resize', adjustCertItemSize);
});
