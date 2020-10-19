var tableViewModel = function(){
    return {
        // data variables
        api: 'https://api.covid19api.com/summary',
        data: [],
        countries: [],
        searchInput: '',
        sortAsc: true,
        sortField: 'Country',
        // initializes the retrieved data
        getData() {
            fetch(this.api)
            .then(response => {
                let data = response.json()
                return data
            })
            .then(data => {
                // console.log(data)
                this.data = data
                this.countries = data.Countries.slice()

                // remove loader
                var preloader = document.getElementById('loader')
                preloader.style.display = 'none'
            })
        },
        // sorts the row when clicking on header
        // - rowField is the field to change to
        // - noSortChange is there is no sorting change like on reset
        sortRow(rowField, noSortChange) {
            // change field for ascending sort if same field
            if(this.sortField === rowField && !noSortChange) this.sortAsc = !this.sortAsc

            var sorted
            if(rowField === 'Country'){
                sorted = this.countries.sort((a, b) => {
                    var aName = a.Country.toUpperCase()
                    var bName = b.Country.toUpperCase()

                    // direction of sort changes when clicking on the same field
                    if(this.sortAsc){
                        if(aName < bName) return -1
                        if(aName > bName) return 1
                        
                    } else {
                        if(aName > bName) return -1
                        if(aName < bName) return 1
                    }

                    return 0

                })
                
            } else {
                sorted = this.countries.sort((a, b) => {
                    // direction of sort changes when clicking on the same field
                    if(this.sortAsc){
                        if(a[rowField] < b[rowField]) return -1
                        if(a[rowField] > b[rowField]) return 1
                    } else {
                        if(a[rowField] > b[rowField]) return -1
                        if(a[rowField] < b[rowField]) return 1
                    }
                    return 0
                })
            }

            // set new current sort field
            this.sortField = rowField
            // set new data
            this.countries = sorted
        },
        // updates the search with the input, called on input change
        updateSearch(event) {
            var pattern = new RegExp(this.searchInput.toUpperCase(), 'g')
            var filtered
            filtered = this.data.Countries.slice().filter(row => pattern.test(row.Country.toUpperCase()))

            this.countries = filtered
            this.sortRow(this.sortField, true)
        },
        // resets the search to whatever is currently set
        resetSearch(event) {
            this.countries = this.data.Countries.slice()
            this.sortRow(this.sortField, true)
            this.searchInput = ''
        }
    }
}
