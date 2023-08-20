const googlesearch = document.querySelector('#search-form');
const input = googlesearch.querySelector('.search-input');
const search_btn = googlesearch.querySelector('button');
console.log(googlesearch)
function Search (event){
    event.preventDefault();
    const value = input.value;
    window.location.replace(`https://www.google.com/search?q=${value}&safe=active&ssui=on`);
}

googlesearch.addEventListener('submit', Search)
search_btn.addEventListener('click', Search)
