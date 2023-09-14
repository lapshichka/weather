const link = document.querySelector("#style");
const dark = "/style/dark-mode.css";
const light = "/style/style.css";

const slider = document.querySelector(".slider");
let heading = document.querySelector(".switch-text");

slider.addEventListener("click", () => {
  link.href = link.href.includes(light)
    ? window.location.origin + dark
    : window.location.origin + light;
});

// const apiKey = "bd08b02831e4494fb7a144059231209";

// //http://api.weatherapi.com/v1/current.json?key=bd08b02831e4494fb7a144059231209&q=London

// const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`;
