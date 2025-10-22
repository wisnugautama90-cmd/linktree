const body = document.body;
const links = document.querySelectorAll(".link-card");
const defaultBg = "linear-gradient(to bottom right, #d5e6fb, #c1d8f0)";

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    const bg = link.getAttribute("data-bg");
    body.style.background = bg;
  });
  link.addEventListener("mouseleave", () => {
    body.style.background = defaultBg;
  });
});
