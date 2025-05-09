function toggleLight() {
  let lightbulb = document.getElementById("lightbulb");
  let body = document.body;
  if (lightbulb.src.includes("lightbulb_off.png")) {
    lightbulb.src = "media/lightbulb_on.png";
    body.classList.add("dark-mode");
  } else {
    lightbulb.src = "media/lightbulb_off.png";
    body.classList.remove("dark-mode");
  }
}
