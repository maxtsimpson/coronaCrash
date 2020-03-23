
let mapApiToVirusObject = function(ajaxResponse){
    var totalInfected = 0;
    var totalRecovered = 0;
    var totalDeaths = 0;
        ajaxResponse.data.covid19Stats.forEach(location => {
            totalInfected += location.confirmed;
            totalRecovered += location.recovered;
            totalDeaths += location.deaths;
        });

        var totalStats = {
            infected: totalInfected,
            recovered: totalRecovered,
            deaths: totalDeaths
        }

        createChart(totalStats);
};

let getVirusStatsByCountry = function(country){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=" + country,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "c147388137msh5aecc71df92365cp15e140jsn200cde844ea8"
        }
    }
    $.ajax(settings).done(mapApiToVirusObject);
}

var createChart = function(totalStats) {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: Object.keys(totalStats),
        datasets: [{
            label: 'Covid 19 Stats',
            data: Object.values(totalStats),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
});
}

const ALPHAVANTAGEKEY = "IXMGIC5PG1TECNCZ"
const IEXClOUDKEY = "pk_52d0f60a5213467ba11ea8c961508026"


function openTab(event) {

    if ($(this).attr("id") === "stock-market-tab") {
        console.log("clicked stock market");
        $("#currency-data-div" ).hide();
        $("#currency-tab").removeClass("is-active");
        $("#financial-data-div" ).show();
    } else if ($(this).attr("id") === "currency-tab") {
        console.log("clicked currency");
        $("#financial-data-div" ).hide();
        $("#stock-market-tab").removeClass("is-active");
        $("#currency-data-div" ).show();
    }
    
    //do a remove then an add so it doesnt get doubled up
    $(this).removeClass("is-active").addClass("is-active")



    
  }

  $("#stock-market-tab").on("click",openTab)
  $("#currency-tab").on("click",openTab)  

// Here we are building the URL we need to query the database
var queryURL = "https://api.covid19api.com/countries";

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

  });

  var queryParams = {};

  function buildQueryURLGain() {
      // URL we need to query the database
      var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/gainers?";

      queryParams.token = "pk_5db4c42244024da5be36585c0beb7a59";

      queryParams.displayPercent = "true"; 

      //console.log(queryURL + $.param(queryParams));
      return queryURL + $.param(queryParams)
  }

  var queryURL = buildQueryURLGain();
  
// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
  url: queryURL,
  method: "GET"
})
  // We store all of the retrieved data inside of an object called "response"
  .then(function(response) {

    // Log the queryURL
    console.log(queryURL);

    // Log the resulting object
    console.log(response);

  });


  function buildQueryURLlose() {
    // URL we need to query the database
    var queryURL = "https://cloud.iexapis.com/stable/stock/market/list/losers?";

    queryParams.token = "pk_5db4c42244024da5be36585c0beb7a59";

    queryParams.displayPercent = "true"; 

    //console.log(queryURL + $.param(queryParams));
    return queryURL + $.param(queryParams)
}

var queryURL = buildQueryURLlose();

// Here we run our AJAX call to the OpenWeatherMap API
$.ajax({
url: queryURL,
method: "GET"
})
// We store all of the retrieved data inside of an object called "response"
.then(function(response) {

  // Log the queryURL
  console.log(queryURL);

  // Log the resulting object
  console.log(response);

});

