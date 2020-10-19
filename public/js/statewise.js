let api = 'https://api.covid19india.org/data.json';

function get(){
    fetch(api)
    .then(function(response){
        let data = response.json();
        return data
    })

    .then(function(data){
        var tabval = document.getElementById('tbval');
        var r = 1;
        for(var i = 1; i<= (data['statewise'].length); i++ ){
            var x = tabval.insertRow();
            x.insertCell(0);
            tabval.rows[r].cells[0].innerHTML = data['statewise'][i].state;
            tabval.rows[r].cells[0].style.color = '#000';

            x.insertCell(1);
            tabval.rows[r].cells[1].innerHTML = data['statewise'][i].confirmed;
            tabval.rows[r].cells[1].style.color = '#000';

            x.insertCell(2);
            tabval.rows[r].cells[2].innerHTML = data['statewise'][i].active;
            tabval.rows[r].cells[2].style.color = '#000';

            x.insertCell(3);
            tabval.rows[r].cells[3].innerHTML = data['statewise'][i].recovered;
            tabval.rows[r].cells[3].style.color = '#000';

            x.insertCell(4);
            tabval.rows[r].cells[4].innerHTML = data['statewise'][i].deaths;
            tabval.rows[r].cells[4].style.color = '#000';


            r++;
        }
    })
    var preloader = document.getElementById('loader');
    preloader.style.display = 'none';
}

// page load
get()