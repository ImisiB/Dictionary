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
      console.log(data)
    }
    getAPI();
})