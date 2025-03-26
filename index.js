function displayPoem(response) {
  console.log(response.data.answer)

  new Typewriter("#poem", {
    strings: response.data.answer,
    autostart: true,
    delay: 20
  })
}

function generateInput(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-poem")

  let apiKey = "04ot834cf4e3311e139ab83543b14df3"
  let context = "Make the poem short and simple"
  let prompt = "Generate a beautiful poem about love"
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = `${searchInput}.value}`;

  console.log("Generating Poem...")
  axios.get(apiUrl).then(displayPoem)
}

let form =document.querySelector("#form");
form.addEventListener("submit", generateInput)