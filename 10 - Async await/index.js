// Fetch API
// REST API

// com .then
/* fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then((response) => {
    return response.json()
  })
  .then((data) => console.log(data) )
  .catch((err) => console.log(err))
 */

  // async wait


  // Exercício :  criar input de texto e botão, chamar a função com o valor do input

/*   const getPokemon = async (query) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
      const data = await response.json()

      const pokemonName = data.name
      const pokemonImage = data.sprites.front_default

      //dom manipulation
      const titleElement = document.createElement("h1")
      const imageElement = document.createElement("img")

      titleElement.innerText = pokemonName

      imageElement.setAttribute('src', pokemonImage)
      imageElement.setAttribute('width', 200)

      document.body.appendChild(titleElement)
      document.body.appendChild(imageElement)


      console.log(data)
    } catch (error) {
      console.log(error)
    }

  }

  getPokemon('mew') */

  const getPokemon = async(query) => {
    try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    const pokemonName = data.name;
    const pokemonImage = data.sprites.front_default;

    const titleElement = document.getElementById('pokemonName');
    const imageElement = document.getElementById('pokemonImg');
    titleElement.innerText = pokemonName;
    imageElement.setAttribute('src', pokemonImage);
    imageElement.setAttribute('width', 200);
    console.log('await', data);
    } catch(err) {
    console.log(err);
    }
    }

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    searchBtn.addEventListener('click', function() {
    getPokemon(searchInput.value);
    })