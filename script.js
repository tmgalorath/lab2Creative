document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
const url = "https://www.virustotal.com/vtapi/v2/url/report?apikey=9b34138c48b8cae58ed7b7efceca51aafbb521a2d5f491a7610b5f106a0d17c8&resource=https://byu.edu"

  fetch(url, {
  headers: {
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Access-Control-Allow-Methods': 'GET',
    'Access-Control-Allow-Origin': 'http://lvh.me:1111',
  }})
    .then(function(response) {
      // return response.json();
      console.log(response.json())
    }).then(function(json) {
      let results = "";
      results += '<h2>Scan Successfull, Scan ID: ' + json.scan_id + "</h2>";
      results += '<h2>URL Scanned: ' + json.url + "</h2>";
      // for (let i = 0; i < json.weather.length; i++) {
      //   results += '<img src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      // }
      results += "<p>"
      results += json.total + " different scans run and " + json.positives + " vulnerabilities and malware was found."
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
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
});
