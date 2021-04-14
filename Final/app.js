fetch("https://type.fit/api/quotes")
   .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let index = Math.floor(Math.random() * data.length);
   document.getElementById('frame').innerHTML = '"' + data[index].text + '"' + " -" + (data[index].author ? data[index].author : "Anonymous");
  });
  

  $(document).ready(function () {
            //$('.image').maphilight({ alwaysOn: true });
             //uncomment this line for normal hover highlighting
            $('.image').maphilight();
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