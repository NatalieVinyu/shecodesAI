function displayPoem(response) {
  console.log("poem generated")
  new Typewriter("#poem", {
    strings: response.data.answer,
    autostart: true,
    delay: 1,
    cursor: "",
  });
}

function generateInput(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-poem");
  let apiKey = "04ot834cf4e3311e139ab83543b14df3";
  let context = "You are a romantic poem expert, make the poem short at least basic 5 lines and separate each line with <br />. Sign th e poem with 'SheCodes AI' inside a <strong> element at the end of the poem";
  let prompt = `Generate a beautiful poem about ${searchInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Poem...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let form = document.querySelector("#form");
form.addEventListener("submit", generateInput)