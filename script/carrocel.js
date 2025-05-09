
  document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
      const item = header.parentElement;
      item.classList.toggle("active");
    });
  });

  document.querySelectorAll(".carousel-wrapper").forEach(wrapper => {
    const carousel = wrapper.querySelector(".carousel");
    const btnLeft = wrapper.querySelector(".carousel-btn.left");
    const btnRight = wrapper.querySelector(".carousel-btn.right");

    btnLeft.addEventListener("click", () => {
      carousel.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    });

    btnRight.addEventListener("click", () => {
      carousel.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    });
  });

