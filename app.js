const openMenu =  document.querySelector(".hamburger-icon");
const closeMenu = document.querySelector(".hamburger-icon-close");
const mobileMenu = document.querySelector(".mobile-menu-links");

openMenu.addEventListener("click", () => {
    // Open Menu Default Actions
        openMenu.style.display = "none";
        closeMenu.style.display = "block";
        mobileMenu.style.display = "flex";

    // Close Menu Event
    closeMenu.addEventListener("click", () => {
            openMenu.style.display = "block";
            closeMenu.style.display = "none";
            mobileMenu.style.display = "none";
    });
})