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
        for(var i = (data['cases_time_series'].length); i>=0; i-- ){
            var x = tabval.insertRow();
            x.insertCell(0);
            tabval.rows[r].cells[0].innerHTML = data['cases_time_series'][i-1].date;
            tabval.rows[r].cells[0].style.background = '#538196';
            tabval.rows[r].cells[0].style.color = '#fff';

            x.insertCell(1);
            tabval.rows[r].cells[1].innerHTML = data['cases_time_series'][i-1].totalconfirmed;
            tabval.rows[r].cells[1].style.background = '#a5a147';
            tabval.rows[r].cells[1].style.color = '#fff';

            x.insertCell(2);
            tabval.rows[r].cells[2].innerHTML = data['cases_time_series'][i-1].totalrecovered;
            tabval.rows[r].cells[2].style.background = '#57950d';
            tabval.rows[r].cells[2].style.color = '#fff';

            x.insertCell(3);
            tabval.rows[r].cells[3].innerHTML = data['cases_time_series'][i-1].totaldeceased;
            tabval.rows[r].cells[3].style.background = '#489855';
            tabval.rows[r].cells[3].style.color = '#fff';

            x.insertCell(4);
            tabval.rows[r].cells[4].innerHTML = data['cases_time_series'][i-1].dailyconfirmed;
            tabval.rows[r].cells[4].style.background = '#2C3A7A';
            tabval.rows[r].cells[4].style.color = '#fff';

            x.insertCell(5);
            tabval.rows[r].cells[5].innerHTML = data['cases_time_series'][i-1].dailyrecovered;
            tabval.rows[r].cells[5].style.background = '#4da37c';
            tabval.rows[r].cells[5].style.color = '#fff';

            x.insertCell(6);
            tabval.rows[r].cells[6].innerHTML = data['cases_time_series'][i-1].dailydeceased;
            tabval.rows[r].cells[6].style.background = '#66959b';
            tabval.rows[r].cells[6].style.color = '#fff';

            r++;
        }
    })
}

