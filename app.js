

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let index = Math.floor(Math.random() * data.length);
    document.getElementById('frame').innerHTML = '"' + data[index].text + '"' + " -" + (data[index].author ? data[index].author : "Anonymous");
  });





function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
})();






//wger api







$(function ready() {
  $('.image').maphilight();

  $("area").on("click", async (e) => {
    let muscle = e.target.id;
    await getExercise(muscle);

  });


  $("#search").on("click", (e) => {
    e.preventDefault()
    exercise($('#searchTerm').val())
    ///alert("hi")

  })

  $("area").on("click", async (e) => {
    let muscle = e.target.id;
    await getExercise(muscle);

  });



});









// list all categories of functions, and then 


var API_URL = `https://wger.de/api/v2/exercise/?format=json&language=2&limit=100&category=`

async function getExercise(muscle) {

  console.log("hello " + muscle)

  const response = await fetch(API_URL + muscle);
  const data = await response.json();
  var i, x = "";
  for (i = 0; i < data.results.length; i++) {
    x +=

      `

<br>
  <article id = "card" class="message is-dark">
  <div class="message-header" >
    <p id = 'exercise_name'>  ${data.results[i].name} </p>
  </div>
  <div class="message-body">
  ${data.results[i].description}
  </div>
</article>`

  }
  document.getElementById("workouts").innerHTML = x


}




function exercise(input) {
  var myHeaders = new Headers();
  myHeaders.append("x-app-id", "1889c865");
  myHeaders.append("x-app-key", "668fe1e1f50e5221f889d8e791685eea");
  myHeaders.append("Content-Type", "application/json");
  //console.log(input)
  var raw = JSON.stringify({
    "query": input
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  fetch("https://trackapi.nutritionix.com/v2/natural/exercise", requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.exercises[0].nf_calories)

      document.getElementById('test2').textContent = result.exercises[0].nf_calories + " kcal";



    })


}

function recipe() {

  let searchButton = document.querySelector("#walirec")
  const searchForm = document.querySelector("#rec-form");


  //Add an event listener to the button that runs the function sendApiRequest when it is clicked
  searchButton.addEventListener("click", () => {
    console.log("button pressed")
    sendApiRequest()
  })


  // searchForm.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   searchQuery = e.target.querySelector("#searchItem").value;
  //   sendApiRequest()
  // });


  //An asynchronous function to fetch data from the API.
  async function sendApiRequest() {
    let APP_ID = "f1cf6ce0"
    let APP_key = "e40345273a7eed9cf09730927d58da4e"
    let response = await fetch(`https://api.edamam.com/search?q=pizza&app_id=${APP_ID}&app_key=${APP_key}&to=50`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
  }


  //function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
  function useApiData(data) {

    document.querySelector("#rec-content").innerHTML = `

  
      
     <div class="card">
     <img src="${data.hits[0].recipe.image}" alt="Avatar" >
     <div class="container">
       <h4><b>${data.hits[0].recipe.label}</b></h4>
       <p> Calories:${data.hits[0].recipe.calories.toFixed(2)}</p>
       <button id = "rec-button"><a href="${data.hits[0].recipe.url}">Search</a></button>
     </div>
   </div>


       

   
    `
  }



  recipe()
}




$(function () {
  var availableTags = [
    "walk",
    "yoga",
    "ran",
    "Biked",
    "Stretch",





  ];
  $("#searchTerm").autocomplete({
    source: availableTags
  });
});




// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDqJV3PB3fDfYUsk8Q2HbnbvE7SoQs-DWE",
  authDomain: "project-muscle-e3d84.firebaseapp.com",
  projectId: "project-muscle-e3d84",
  storageBucket: "project-muscle-e3d84.appspot.com",
  messagingSenderId: "182910615574",
  appId: "1:182910615574:web:5645114f6dde5674cd3537",
  measurementId: "G-EKVRD04K2W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Get Elements
const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnLogin = document.getElementById("btnLogin");
const btnSignup = document.getElementById("btnSignup");

//Add Login Event
btnLogin.addEventListener('click', e => {
  const email = txtEmail.value;
  const password = txtPassword.value;

  const auth = firebase.auth();

  //sign in with firebase auth
  auth.signInWithEmailAndPassword(email, password).then(user => {
    alert("Login Successful :)");
  }).catch(err => {
    alert(err.message);
  });

});



//Add Signup Event
btnSignup.addEventListener('click', e => {

  //get email and password
  const email = txtEmail.value;
  const password = txtPassword.value;
  const auth = firebase.auth();

  //sign in with firebase auth
  const promise = auth.createUserWithEmailAndPassword(email, password).then(user => {

    var user = firebase.auth().currentUser;

    user.updateProfile({

    }).then(function () {

      alert("Signup Successful :) ")

      window.location.href = "index.html"

      document.getElementById("sign-in").style.display = "none";


    }).catch(function (error) {
      // An error happened.
    });

  })

});



firebase.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    console.log(firebaseUser);
    btnLogOut.classList.remove('hidden');
    btnLogin.classList.add('hidden');
  } else {
    console.log('not logged in');
    btnLogOut.classList.add('hidden');
    btnLogin.classList.remove('hidden');
  }
});



