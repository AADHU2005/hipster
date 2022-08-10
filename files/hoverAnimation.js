// deno-lint-ignore-file
const instagram = document.getElementById("social_insta");
const discord = document.getElementById("social_discord");
const youtube = document.getElementById("social_youtube");
const loco = document.getElementById("social_loco");

instagram.addEventListener("mouseover", () => {
  instagram.innerHTML =
    "<img src='../images/insta_hover.png' style='height:0.95em;'/>";
  setTimeout(() => {
    instagram.innerHTML = `<i class="fa-brands fa-instagram mini_spacing"></i>`;
  }, 50);
});

discord.addEventListener("mouseover", () => {
  discord.innerHTML =
    "<img src='../images/discord_hover.png' style='height:0.95em;'/>";
  setTimeout(() => {
    discord.innerHTML = `<i class="fa-brands fa-discord mini_spacing"></i>`;
  }, 50);
});

youtube.addEventListener("mouseover", () => {
  youtube.innerHTML =
    "<img src='../images/youtube_hover.png' style='height:0.9em;'/>";
  setTimeout(() => {
    youtube.innerHTML = `<i class="fa-brands fa-youtube mini_spacing"></i>`;
  }, 50);
});

const oldLocoLogo = loco.innerHTML;
loco.addEventListener("mouseover", () => {
  loco.innerHTML =
    "<img src='../images/loco_hover.png' style='height:0.9em;'/>";
  setTimeout(() => {
    loco.innerHTML = oldLocoLogo;
  }, 50);
});
