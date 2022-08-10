const loco = document.getElementById("social_loco");

const oldLocoLogo = loco.innerHTML;
loco.addEventListener("mouseover", () => {
  loco.innerHTML =
    "<img src='../images/loco_hover.png' style='height:0.9em;'/>";
  setTimeout(() => {
    loco.innerHTML = oldLocoLogo;
  }, 50);
});
