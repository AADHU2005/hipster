// deno-lint-ignore-file
const image = document.getElementById("main_logo");
let hipsterImages = [
  "hipster",
  "hipster2",
  "hipster3",
  "hipster4",
  "hipster5",
  "hipster6",
  "hipster7",
  "hipster8",
  "hipster9",
];

image.addEventListener("mouseover", async () => {
  image.src = "images/" + ((await getRandom(hipsterImages)) + ".jpg");
});

async function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}
