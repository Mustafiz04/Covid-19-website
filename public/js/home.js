let api = 'https://api.covid19api.com/summary';
let apiindia = 'https://api.covid19india.org/data.json';


function get(){
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data
    })

    .then(function(data){
        var totalcases = document.getElementById('totalcases');
        var totalrecovered = document.getElementById('totalrecovered');
        var totaldeath = document.getElementById('totaldeath');
        var newconfirmed = document.getElementById('newconfirmed');
        
        totalcases.innerHTML = data['Global'].TotalConfirmed;
        totalrecovered.innerHTML = data['Global'].TotalRecovered;
        totaldeath.innerHTML = data['Global'].TotalDeaths;
        newconfirmed.innerHTML = data['Global'].NewConfirmed;
        
    })

    fetch(apiindia)
    .then(function(response){
        let indiadata = response.json();
        return indiadata
    })

    .then(function(indiadata){
        var totalcasesindia = document.getElementById('totalcasesindia');
        var totalrecoveredindia = document.getElementById('totalrecoveredindia');
        var totaldeathindia = document.getElementById('totaldeathindia');
        var totalactiveindia = document.getElementById('totalactiveindia');
        
        totalcasesindia.innerHTML = indiadata['statewise'][0].confirmed;
        totalrecoveredindia.innerHTML = indiadata['statewise'][0].recovered;
        totalactiveindia.innerHTML = indiadata['statewise'][0].active;
        totaldeathindia.innerHTML = indiadata['statewise'][0].deaths;
    })

    var preloader = document.getElementById('loader');
    preloader.style.display = 'none';
}

// page load
get()