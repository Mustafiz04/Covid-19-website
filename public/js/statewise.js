// main table view model
var tableViewModel = function(){
    return {
        // data variables
        api: 'https://api.covid19india.org/data.json',
        data: [],
        states: [],
        searchInput: '',
        sortAsc: false,
        sortField: 'confirmed',
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
                this.states = data.statewise.slice()

                // remove loader
                var preloader = document.getElementById('loader')
                preloader.style.display = 'none'

                // set to default sort
                this.sortRow(this.sortField, true)
            })
        },
        // sorts the row when clicking on header
        // - rowField is the field to change to
        // - noSortChange is there is no sorting change like on reset
        sortRow(rowField, noSortChange) {
            // change field for ascending sort if same field
            if(this.sortField === rowField && !noSortChange) this.sortAsc = !this.sortAsc

            var sorted
            if(rowField === 'state'){
                sorted = this.states.sort((a, b) => {
                    var aName = a.state.toUpperCase()
                    var bName = b.state.toUpperCase()

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
                sorted = this.states.sort((a, b) => {
                    // direction of sort changes when clicking on the same field
                    var aNum = parseInt(a[rowField]) 
                    var bNum = parseInt(b[rowField]) 
                    if(this.sortAsc){
                        if(aNum < bNum) return -1
                        if(aNum > bNum) return 1
                    } else {
                        if(aNum > bNum) return -1
                        if(aNum < bNum) return 1
                    }
                    return 0
                })
            }

            // set new current sort field
            this.sortField = rowField
            // set new data
            this.states = sorted
        },
        // updates the search with the input, called on input change
        updateSearch(event) {
            var pattern = new RegExp(this.searchInput.toUpperCase(), 'g')
            var filtered
            filtered = this.data.statewise.slice().filter(row => pattern.test(row.state.toUpperCase()))

            this.states = filtered
            this.sortRow(this.sortField, true)
        },
        // resets the search to whatever is currently set
        resetSearch(event) {
            this.states = this.data.statewise.slice()
            this.sortRow(this.sortField, true)
            this.searchInput = ''
        }
    }
}
