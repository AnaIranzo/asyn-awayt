let random = Math.floor(Math.random() * 1154)

let principal = document.querySelector("main")
let seccion = document.querySelector("section")

function pintarPokemon(data) {
    let tarjeta = document.createElement("div");
    seccion.appendChild(tarjeta)
    tarjeta.innerHTML = `<h3>${data.name}</h3>
    <img src="${data.sprites.front_default}" alt="pokemon">`
    return tarjeta
}
    

function pintarCombatientes(data) {
    
    let tarjeta1 = document.createElement("div");
    document.querySelector('#pokevsdog').appendChild(tarjeta1)
    tarjeta1.innerHTML = `<img src="${data[1]}" alt="pokemon">`

    let tarjeta2 = document.createElement("div");
    document.querySelector('#pokevsdog').appendChild(tarjeta2)
    tarjeta2.innerHTML = `<img src="${data[0].message}" alt="perrito">`
        
    
    return tarjeta1 + tarjeta2
}

/* function getPokemon(random) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${random}`)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
        });
};
 */

// https://pokeapi.co/api/v2/pokemon/{id or name}/

async function getPokemon() {

    let random = Math.floor(Math.random() * 150)
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    let pokemon = await response.json()
    return pokemon;

}

getPokemon()
    .then(data => {
        pintarPokemon(data)
    })
    .catch(error => alert("Busca otro pokemon" + error));


//sprites.front_default -> imagen
//name

async function getFigthers() {
    const combatientes = []

    let response = await fetch("https://dog.ceo/api/breeds/image/random");
    let perrito = await response.json()


    let random = Math.floor(Math.random() * 1154)
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}/`);
    let pokemon = await res.json()
    let imgPokemon = pokemon.sprites.front_default;
    
    combatientes.push(perrito, imgPokemon);
    return combatientes;
    ;
}

getFigthers()
    .then(combatientes => {
        pintarCombatientes(combatientes)
        console.log(combatientes)
    })
    .catch(error => console.log("Not found" + error));


//------ RICK Y MORTY
async function getPerson() {
    let random = Math.floor(Math.random() * 826)
    let response = await fetch(`https://rickandmortyapi.com/api/character/${random}`);
    let personaje = await response.json()
    
    let url = personaje.episode[0]
    let episodio = await fetch(`${url}`)
    let dataEpisodio = await episodio.json()

    let newDiv = document.createElement('div');
    newDiv.innerHTML = `<h3>Primer episodio: ${dataEpisodio.name}</h3><p>Fecha: ${dataEpisodio.air_date}</p>`
    
    document.querySelector('#rym').appendChild(newDiv);


    //air_date
    return personaje;
}

getPerson()
    .then(personaje => {
        console.log(personaje);
        pintarPersonaje(personaje)
    })
    .catch(error => console.log("Not found" + error));

function pintarPersonaje(personaje) {
        let tarjeta = document.createElement("div");
        document.querySelector('#rym').appendChild(tarjeta)
        tarjeta.innerHTML = `<h3>${personaje.name}</h3>
        <img src="${personaje.image}" alt="personaje">
        <p>Número de episodios: ${personaje.episode.length}</p>`
        return tarjeta
}
/*Su imágen correspondiente
Nombre del personaje
Número de episodios en los que aparece
Nombre del primer episodio + fecha en el que aparece el personaje (otro fetch)*/