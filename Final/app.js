

fetch("https://type.fit/api/quotes")
   .then(function(response) {
    return response.json();
  })
  .then(function(data) {
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


   


     

      $(function ready(){
        $('.image').maphilight();

        $("area").on("click", async (e) => {
          let muscle = e.target.id;
          await getExercise(muscle);
          
        });        


        $("#search").on("click",  (e) => {
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
    
    async function getExercise(muscle){

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

    document.getElementById('test2').textContent= result.exercises[0].nf_calories + " kcal";



  })

}

