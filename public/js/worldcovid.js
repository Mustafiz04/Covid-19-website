let api = 'https://api.covid19api.com/summary';

function get(){
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data
    })

    .then(function(data){
        var tabval = document.getElementById('tbval');
        for(var i = 1; i<(data['Countries'].length); i++){
            var x = tabval.insertRow();
            x.insertCell(0);
            tabval.rows[i].cells[0].innerHTML = data['Countries'][i-1].Country;
            // tabval.rows[i].cells[0].style.background = '#337c7c';
            tabval.rows[i].cells[0].style.color = '#000';

            x.insertCell(1);
            tabval.rows[i].cells[1].innerHTML = data['Countries'][i-1].TotalConfirmed;
            // tabval.rows[i].cells[1].style.background = '#4c3d76';
            tabval.rows[i].cells[1].style.color = '#000';

            x.insertCell(2);
            tabval.rows[i].cells[2].innerHTML = data['Countries'][i-1].TotalRecovered;
            // tabval.rows[i].cells[2].style.background = '#322e40';
            tabval.rows[i].cells[2].style.color = '#000';

            x.insertCell(3);
            tabval.rows[i].cells[3].innerHTML = data['Countries'][i-1].TotalDeaths;
            // tabval.rows[i].cells[3].style.background = '#af4763';
            tabval.rows[i].cells[3].style.color = '#000';

            x.insertCell(4);
            tabval.rows[i].cells[4].innerHTML = data['Countries'][i-1].NewConfirmed;
            // tabval.rows[i].cells[4].style.background = '#8e2f63';
            tabval.rows[i].cells[4].style.color = '#000';

            x.insertCell(5);
            tabval.rows[i].cells[5].innerHTML = data['Countries'][i-1].NewRecovered;
            // tabval.rows[i].cells[5].style.background = '#02387a';
            tabval.rows[i].cells[5].style.color = '#000';

            x.insertCell(6);
            tabval.rows[i].cells[6].innerHTML = data['Countries'][i-1].NewDeaths;
            // tabval.rows[i].cells[6].style.background = '#538196';
            tabval.rows[i].cells[6].style.color = '#000';

        }
    })

    var preloader = document.getElementById('loader');
    preloader.style.display = 'none';
}

// page load
get()