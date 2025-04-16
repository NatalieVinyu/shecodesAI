function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateInput(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-quote");
  let apiKey = "04ot834cf4e3311e139ab83543b14df3";
  let context = "Be wise and polite and generate a quote from famous people. After the dash highlight the name with <strong> </strong> element and so not include a dash.";
  let prompt = `Generate a beautiful quote about ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#quote");
  poemElement.classList.remove("hidden");

  console.log("Generating Quote...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayQuote);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generateInput)