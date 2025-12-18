// main.js
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("sauce-grid");
  if (!grid || !Array.isArray(SAUCES)) return;

  SAUCES.forEach((sauce) => {
    const link = document.createElement("a");
    link.href = sauce.recipePage;
    link.className = "sauce-logo-card";

    const inner = document.createElement("div");
    inner.className = "sauce-logo-inner";

    const img = document.createElement("img");
    img.src = sauce.logo;
    img.alt = `${sauce.name} sauce logo`;

    const name = document.createElement("span");
    name.className = "sauce-name";
    name.textContent = sauce.name;

    inner.appendChild(img);
    inner.appendChild(name);
    link.appendChild(inner);
    grid.appendChild(link);
  });
});
