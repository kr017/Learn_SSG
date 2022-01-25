const vibes = [
  "You are awesome!",
  "Fuzzy Friday!",
  "Happy Sunday!",
  "Throwback Thursday!",
];

var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

var el = document.querySelector("#vibe").append(vibe);
