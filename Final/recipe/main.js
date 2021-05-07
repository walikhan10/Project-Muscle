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



var foodSearch = [];

$("#foodList").on('keyup', function (event){
    event.preventDefault();
var myHeaders = new Headers();
myHeaders.append("x-app-id", "1889c865");
myHeaders.append("x-app-key", "668fe1e1f50e5221f889d8e791685eea");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "query": "cookie"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};
fetch("https://trackapi.nutritionix.com/v2/search/instant", requestOptions)
  .then(response => response.json())
 // .then(result => console.log(result.common))
  .then(result => {

    
 for (var i = 0; i < result.common.length; i++){
            console.log( result.common[i].food_name)
         foodSearch.push(result.common[i].food_name);
  }

  })
  .then(console.log(foodSearch))
  .catch(error => console.log('error', error));



})

// for (var i = 0; i < response.common.length; i++){
//     //             console.log("testing" + response.common[i].food_name)
//     //             foodSearch.push(response.common[i].food_name);

// }






// var substringMatcher = function(strs) {
//     return function findMatches(q, cb) {
//       var matches, substrRegex;
   
//       // an array that will be populated with substring matches
//       matches = [];
   
//       // regex used to determine if a string contains the substring `q`
//       substrRegex = new RegExp(q, 'i');
   
//       // iterate through the pool of strings and for any string that
//       // contains the substring `q`, add it to the `matches` array
//       $.each(strs, function(i, str) {
//         if (substrRegex.test(str)) {
//           // the typeahead jQuery plugin expects suggestions to a
//           // JavaScript object, refer to typeahead docs for more info
//           matches.push({ value: str });
//         }
//       });
   
//       cb(matches);
//     };
//   };
   
  
   
//   $('#search-class .typeahead').typeahead({
//     hint: true,
//     highlight: true,
//     minLength: 1
//   },
//   {
//     name: 'foodList',
//     displayKey: 'value',
//     source: substringMatcher(foodSearch)
//   });


// console.log("TEST")

// var foodSearch = [];
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://trackapi.nutritionix.com/v2/search/instant?query=cheese",
//     "method": "GET",
//     "headers": {
//       "x-app-key": "1d07da98cfc1746cbbbf2f301a4ca900",
//       "x-app-id": "9beb2ceb",
//       "Cache-Control": "no-cache",
//       "Postman-Token": "36850c71-13e6-4bd9-97bd-e470293f1f6d"
//     }
//   }


//   $("#foodList").on('keyup', function (event) {
//     event.preventDefault();
//         console.log($(this).val());
//         var food = $(this).val();
//         settings = {
//             "async": true,
//             "crossDomain": true,
//             "url": `https://trackapi.nutritionix.com/v2/search/instant?query=${food}`,
//             "method": "GET",
//             "headers": {
//               "x-app-key": "668fe1e1f50e5221f889d8e791685eea",
//               "x-app-id": "1889c865",
//               "Cache-Control": "no-cache",
//               "Postman-Token": "36850c71-13e6-4bd9-97bd-e470293f1f6d"
//             }
//           }
//       $.ajax(settings).done(function (response) {
//         console.log(response);
    
//         for (var i = 0; i < response.common.length; i++){
//             console.log("testing" + response.common[i].food_name)
//             foodSearch.push(response.common[i].food_name);
    
//         }
//         console.log(foodSearch)
//       });
      
//   })

// var substringMatcher = function(strs) {
//     return function findMatches(q, cb) {
//       var matches, substrRegex;
   
//       // an array that will be populated with substring matches
//       matches = [];
   
//       // regex used to determine if a string contains the substring `q`
//       substrRegex = new RegExp(q, 'i');
   
//       // iterate through the pool of strings and for any string that
//       // contains the substring `q`, add it to the `matches` array
//       $.each(strs, function(i, str) {
//         if (substrRegex.test(str)) {
//           // the typeahead jQuery plugin expects suggestions to a
//           // JavaScript object, refer to typeahead docs for more info
//           matches.push({ value: str });
//         }
//       });
   
//       cb(matches);
//     };
//   };
   
  
   
//   $('#the-basics .typeahead').typeahead({
//     hint: true,
//     highlight: true,
//     minLength: 1
//   },
//   {
//     name: 'foodList',
//     displayKey: 'value',
//     source: substringMatcher(foodSearch)
//   });
