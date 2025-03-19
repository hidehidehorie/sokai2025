window.sokai = window.sokai || {};
window.sokai.main = {
  scrollSnap: () => {
    const options = {
      root: null,
      rootMargin: "0px 0px",
      threshold: [0.3, 0.9],
    };

    const topSection = document.getElementById("js-topSection");
    const topSectionWrapper = document.getElementById("js-topSectionWrapper");
    const scrollHeight = topSectionWrapper.getBoundingClientRect().height;
    const viewportHeight = document.documentElement.clientHeight;
    const topSectionObserver = new IntersectionObserver(([entry]) => {
      const scrollY = window.scrollY;

      if (
        entry.intersectionRatio < 0.9 &&
        scrollY < (viewportHeight * 30) / 100
      ) {
        window.scrollTo({
          top: scrollHeight,
          behavior: "smooth",
        });
      } else if (
        entry.intersectionRatio > 0.3 &&
        scrollY > (viewportHeight * 50) / 100
      ) {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, options);

    topSectionObserver.observe(topSection);
  },
};

document.addEventListener("DOMContentLoaded", () => {
  window.sokai.main.scrollSnap();
});
