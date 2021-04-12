fetch("https://type.fit/api/quotes")
   .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let index = Math.floor(Math.random() * data.length);
   document.getElementById('frame').innerHTML = data[index].text + " -" + (data[index].author ? data[index].author : "Anonymous");
  });
  

  $(document).ready(function () {
            //$('.image').maphilight({ alwaysOn: true });
             //uncomment this line for normal hover highlighting
            $('.image').maphilight();
        });   