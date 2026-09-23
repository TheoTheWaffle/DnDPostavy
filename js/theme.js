const themeSelect = document.querySelector("#theme-select");
const savedTheme = localStorage.getItem("dnd-theme") || "ember";

document.body.dataset.theme = savedTheme;
if (themeSelect) {
  themeSelect.value = savedTheme;
  themeSelect.addEventListener("change", () => {
    document.body.dataset.theme = themeSelect.value;
    localStorage.setItem("dnd-theme", themeSelect.value);
  });
}