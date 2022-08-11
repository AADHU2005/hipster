// deno-lint-ignore-file
const image = document.getElementById("main_logo");
let backgroundAudios = ["monster"];
let hipsterImages = [
  "hipster",
  "hipster2",
  "hipster3",
  "hipster4",
  "hipster5",
  "hipster6",
];
let audioPlaying = false;

image.addEventListener("mouseover", async () => {
  let audio = new Audio(`audio/${await getRandom(backgroundAudios)}.mp3`);
  audio.addEventListener("ended", () => {
    audioPlaying = false;
    console.log("Audio ended...");
  });
  image.src = "images/" + ((await getRandom(hipsterImages)) + ".jpg");
  if (audioPlaying == true) return;
  await audio.play().then(() => {
    console.log("Audio playing...");
    audioPlaying = true;
  });
});

async function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
