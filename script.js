function pokemonHandler() {
  event.preventDefault
  const value = document.getElementById("pokemonName").value;
  if (value === "")
    return;
  console.log(value);
const url = "https://pokeapi.co/api/v2/pokemon/" + value;

  fetch(url, {
  headers: {
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET, POST',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json',
  }})
    .then(function(response) {
      return response.json();
      console.log(response.json())
    }).then(function(json) {
      let results = "";
      let title = "";
      results += '<h2>Pokemon Pictures </h2>';
      results += '<img src=' + json.sprites.front_default+'>';
      results += '<img src=' + json.sprites.back_default+'>';

      results += '<h2>Pokemons Element: </h2> <ul>';
      for (let i =0; i < json.types.length; i ++){
        results += "<li>" + json.types[i].type.name + " </li>";
      }
      results += "</ul>"

      results += '<h2>Pokemons Abilities: </h2> <ul>';
      for (let i =0; i < json.abilities.length; i ++){
        results += "<li>" + json.abilities[i].ability.name + " </li>";
      }
      results += "</ul>"
      title += "<div class='title'>"
      title += "<h1>"
      title += value.charAt(0).toUpperCase() + value.slice(1);
      title += "</h1>";
      title += "<h1> Pokedex: " + json.id + "</h1>"
      title += "</div>"
      console.log(results)
      document.getElementById("pokeResults").innerHTML = results;
      document.getElementById("pokeTitle").innerHTML = title;
      document.getElementById("squirtsquirt").click();
    });

  // const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=427a95156f5984bf9f36c699fb9b67c0";
  // fetch(url2)
  //   .then(function(response) {
  //     return response.json();
  //   }).then(function(json)
  //     let forecast = "<table class='table table-striped' > <thead>    <tr><th scope='col'></th><th scope='col'>Weather </th><th scope='col'>Date and Time</th><th scope='col'>Temperature</th></tr></thead><tbody>";
  //     for (let i = 0; i < json.list.length; i++) {
  //       forecast += "<tr>"
  //       forecast += "<th scope='row'></th>"
  //       forecast += "<td>" + '<img src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>' +"</td>"
  //       forecast += "<td>" + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</td>";
  //       forecast += "<td>" + json.list[i].main.temp + " &deg;F</td>";
  //       //forecast += "<td>" + json.list[i].main.temp + "</td>";
  //
  //       forecast += "</tr>"
  //     }
  //     forecast += "</tbody></table>"
  //     document.getElementById("forecastResults").innerHTML = forecast;
  //   });
}
