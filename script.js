document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu a");
    const contentSections = document.querySelectorAll(".content");
    const modeToggle = document.getElementById('companyLogo');
    let isLightMode = true;

    // Function to toggle color mode
    function toggleColorMode() {
        // Get the current values of the CSS variables
        const currentBackgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
        const currentTextColor = getComputedStyle(document.documentElement).getPropertyValue('--text-color');

        // Toggle between light and dark mode values
        const newBackgroundColor = isLightMode ? '--background-color-dark' : '--background-color-light';
        const newTextColor = isLightMode ? '--text-color-dark' : '--text-color-light';

        // Update the CSS variables with the new values
        document.documentElement.style.setProperty('--background-color', `var(${newBackgroundColor})`);
        document.documentElement.style.setProperty('--text-color', `var(${newTextColor})`);

        // Update the mode
        isLightMode = !isLightMode;
    }
    
    // Function to scroll to the top of a section, considering the header height
    function scrollToSection(section) {
        const headerHeight = document.querySelector('header').offsetHeight;
        window.scrollTo({
            top: section.offsetTop - headerHeight,
            behavior: 'smooth'
        });
    }

    // Add click event listener to the mode toggle button
    modeToggle.addEventListener('click', toggleColorMode);

    // Function to scroll to a section when a menu link is clicked
    function scrollToMenuLink(link) {
        // Get the target content section
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.querySelector(`.content.${targetId}`);

        // Hide all content sections
        contentSections.forEach((section) => {
            section.classList.remove("active");
        });

        // Show the target content section
        targetSection.classList.add("active");

        // Scroll to the top of the target content section, considering the header height
        scrollToSection(targetSection);
    }

    // Add click event listeners to menu links
    menuLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent the default link behavior

            // Remove the 'active' class from all menu links
            menuLinks.forEach((menuLink) => {
                menuLink.parentElement.classList.remove("active");
            });

            // Add 'active' class to the clicked menu link
            link.parentElement.classList.add("active");

            // Scroll to the target content section
            scrollToMenuLink(link);
        });
    });

    // Set the default active menu and content (Home)
    const defaultMenuLink = menuLinks[0];
    defaultMenuLink.parentElement.classList.add("active");

    // Get the default content section (Home)
    const defaultContentId = defaultMenuLink.getAttribute("href").substring(1);
    const defaultContentSection = document.querySelector(`.content.${defaultContentId}`);
    defaultContentSection.classList.add("active");

    // Scroll to the top of the default content section (Home) after the page loads
    window.addEventListener('load', () => {
        scrollToMenuLink(defaultMenuLink);
    });

    // Add click event listener to the company logo link
    document.querySelector(".company-logo").addEventListener('click', () => {
        // Scroll to the top of the Home content section
        scrollToMenuLink(defaultMenuLink);
    });
});

document.addEventListener('scroll', () =>{
    const header = document.querySelector('header');
    
    if (window.scrollY > 100) {
     header.classList.add('scrolled');  
    } else {
     header.classList.remove('scrolled');
    }
 });
 
 const menuBar = document.getElementById('menuBar');
 const menuContainer = document.getElementById('menuNav');
 const menuClose = document.getElementById('menuClose');
 
 menuBar.addEventListener('click', () => {
    //  menuContainer.classList.toggle('show-menu');
    menuNav.style.display = 'flex';
    menuBar.style.display = 'none';
    menuClose.style.display = 'block';
    menuClose.addEventListener('click', ()=> {
        menuClose.style.display = 'none';
        menuNav.style.display = 'none';
        menuBar.style.display = 'block';
     });
     menuNav.addEventListener('click', () => {
            menuNav.style.display = 'none';
            menuClose.style.display = 'none';
            menuBar.style.display = 'block';
     });
 });

 
 