(() => {
  const navbar = document.querySelector(".nav-bar");
  const hexagonElement = document.getElementById("second-section");
  const menuButton = document.querySelector(".menu-button");
  const forBeyondTechnologyMessage = document.querySelector(
    ".for-beyond-technology-message"
  );

  document.addEventListener("scroll", (e) => {
    const target = e.target.scrollingElement || e.target;
    if (target.scrollTop > 0) {
      hexagonElement.classList.add("second-section-anime");
      menuButton.classList.add("menu-button-fixed");
      navbar.classList.add("nav-bar-fixed");
      forBeyondTechnologyMessage.classList.add(
        "for-beyond-technology-message-fixed"
      );
    } else {
      hexagonElement.classList.remove("second-section-anime");
      menuButton.classList.remove("menu-button-fixed");
      navbar.classList.remove("nav-bar-fixed");
      forBeyondTechnologyMessage.classList.remove(
        "for-beyond-technology-message-fixed"
      );
    }
  });
})();
