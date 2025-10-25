// fetch('https://api.dictionaryapi.dev/api/v2/entries/en/hello')
//   .then(response => {
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(data => {
    
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });

// fetch(`https://freedictionaryapi.com/api/v1/entries/en/book`)
//   .then(r => r.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

const userWord = document.querySelector('.js-input')

document.querySelector('.js-button')
  .addEventListener('click', () => {
    const link = `https://freedictionaryapi.com/api/v1/entries/en/${userWord.value}`
    const getAPI = async() => {
      const response = await fetch(link)
      const data = await response.json()
      const definition = data.entries[0].senses[0].definition
      const definition2 = data.entries[0].senses[1].definition
      const definition3 = data.entries[0].senses[2].definition
      const example = data.entries[0].senses[0].examples
      const example1 = data.entries[0].senses[1].examples
      const example2 = data.entries[0].senses[2].examples
      document.querySelector('.definition').innerHTML = `Definition 1: ${definition}`
      document.querySelector('.definition2').innerHTML = `Definition 2: ${definition2}`
      document.querySelector('.definition3').innerHTML = `Definition 3: ${definition3}`
      if(example == '') {
        document.querySelector('.example').innerHTML = ``
      } else if(example1 == '') {
        document.querySelector('.example2').innerHTML = ``
      } else if(example2 == '') {
        document.querySelector('.example3').innerHTML = ``
      } else {
        document.querySelector('.example').innerHTML = `Example 1: ${example}`
        document.querySelector('.example2').innerHTML = `Example 2: ${example1}`
        document.querySelector('.example3').innerHTML = `Example 3: ${example2}`
      }
    }
    getAPI();
})

document.body.onkeydown = (event) => {
  if (event.key === "Enter") {
    const link = `https://freedictionaryapi.com/api/v1/entries/en/${userWord.value}`
    const getAPI = async() => {
      const response = await fetch(link)
      const data = await response.json()
      const definition = data.entries[0].senses[0].definition
      const definition2 = data.entries[0].senses[1].definition
      const definition3 = data.entries[0].senses[2].definition
      const example = data.entries[0].senses[0].examples
      const example1 = data.entries[0].senses[1].examples
      const example2 = data.entries[0].senses[2].examples
      document.querySelector('.definition').innerHTML = `Definition 1: ${definition}`
      document.querySelector('.definition2').innerHTML = `Definition 2: ${definition2}`
      document.querySelector('.definition3').innerHTML = `Definition 3: ${definition3}`
      if(example == '') {
        document.querySelector('.example').innerHTML = ``
      } else if(example1 == '') {
        document.querySelector('.example2').innerHTML = ``
      } else if(example2 == '') {
        document.querySelector('.example3').innerHTML = ``
      } else {
        document.querySelector('.example').innerHTML = `Example 1: ${example}`
        document.querySelector('.example2').innerHTML = `Example 2: ${example1}`
        document.querySelector('.example3').innerHTML = `Example 3: ${example2}`
      }
    }
    getAPI()
  }
};
