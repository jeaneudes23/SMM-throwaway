
const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        document.querySelector(".nav-container").style.backgroundColor =
          entry.isIntersecting ? "transparent" : "black";
      });
    },
    { rootMargin: "50px" }
  );
  observer.observe(document.querySelector("#top"));