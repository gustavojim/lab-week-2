
// Reto 1 - hacer un fetch a la pokeapi y mostrar el nombre del pokemon en  un console.log

const getData = async () => {
const promise = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
const data = await promise.json();
console.log(data.name);
}

const caja = document.querySelector('#caja');
caja.addEventListener('keyup', () => {
console.log(caja.value)


let cien = data.slice(0,150);
console.log(cien);

})

getData()

const getDataA = async () => {
    const arr = [];
    for (let i = 1; i < 151; i++) {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' +i);
        const data = await response.json();
        arr.push(data)
    }
    console.log(arr);
    // return arr
}

getDataA ()

// const inicio =  async () => {
//    const pokemonsTot = await getDataA();
//      for (let i = 0; i <= pokemonsTot.length; i++)
//      const element = pokemons[i];
//      html += `
//      {element.name}
//     <a class="panel-block is active">
//     }
//     <img src="${element.sprites.fron_default}">
//   </figure>
//    list.innerHTML = html
//  })`

// inicio()
