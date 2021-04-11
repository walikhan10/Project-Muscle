const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const searchIcon = document.querySelector('.icon');
const container = document.querySelector('.container');
let searchQuery = '';
const APP_ID = 'f1cf6ce0';
const APP_key = 'e40345273a7eed9cf09730927d58da4e';
const baseURL = `https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}`;


searchIcon.addEventListener('click',(e)=>{
    e.preventDefault();
    searchQuery = document.querySelector('input').value;
    fetchAPI();
    console.log('test icon',e);
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchAPI();
});

async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}`;
    const response = await fetch(baseURL);
    const data = await response.json()
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    container.classList.remove('initial');
    let generatedHTML = '';
    results.map(result => {
        generatedHTML +=
            `
        <div class="item">
            <img src="${result.recipe.image}" alt="img">
            <div class="flex-container">
                <h1 class="title">${result.recipe.label}</h1>
                <a class="view-button" href="${result.recipe.url}" target="blank">View Recipe</a>
            </div>
            <p class="item-data">Calories : ${parseInt(result.recipe.calories)}</p>           
            <p class="item-data">Diet label  : ${result.recipe.dietLabels.length > 0 ? result.recipe.dietLabels.length : 'No Data Found :('}</p>           
            <p class="item-data">Health Label : ${result.recipe.healthLabels}</p>           

        
        </div>
        `
    })
    searchResultDiv.innerHTML = generatedHTML;
}
