document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("mobile-menu-button");
  const menu = document.getElementById("mobile-menu");

  // Function to toggle menu visibility
  function toggleMenu() {
    menu.classList.toggle("hidden");
  }

  // Attach event listener to the button
  if (button) {
    button.addEventListener("click", toggleMenu);
  }

  // Optional: Close menu when a link is clicked
  const navLinks = menu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (!menu.classList.contains("hidden")) {
        toggleMenu();
      }
    });
  });
});

tailwind.config = {
  theme: {
    extend: {
      colors: {
        "hub-primary": "#059669",
        "hub-secondary": "#FBBF24",
        "hub-background": "#F9FAFB",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
};
