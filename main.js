const lightStylesheet = document.getElementById("light");
const darkStylesheet = document.getElementById("dark");

darkStylesheet.disabled = true;

const slider = document.querySelector(".slider");
let heading = document.querySelector(".switch-text");

slider.addEventListener("click", () => {
  if (darkStylesheet.disabled) {
    darkStylesheet.disabled = false;
    lightStylesheet.disabled = true;
    heading.textContent = "Dark mode";
    return;
  }
  darkStylesheet.disabled = true;
  lightStylesheet.disabled = false;
  heading.textContent = "Light mode";
});

// const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London`;
