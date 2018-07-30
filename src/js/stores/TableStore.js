var TableActions = require('../actions/TableActions');
var alt = require('../alt');
var TableApi = require('../utils/TableApi');

class TableStore {
    constructor() {
        this.bindActions(TableActions);
        this.data = [];
        this.result = null;
        this.searchValue = null;
        this.carNames = [];
        this.getDummyData();
        this.selectedCarName = null;
        this.filteredCars = null;
    }

    getDummyData() {
        TableApi.getInfo();
    }

    onPopulateInfo(resp) {
        this.carNames = resp.filter(function(l){
            var matches = l.name.match(/\b(\w)/g);
            var acronym = matches.join('');
            if(acronym.length > 1)
                l.name = l.name + '(' + acronym + ')';
            return l.name.toLowerCase();
        });
        this.filteredCars = this.carNames.filter(function (l) {
            return l.name.toLowerCase();
        });
    }

    // search utility to search from the dummy JSON data
    getSearchValue(query) {
        this.searchValue = query;
        if (query.length > 0) {
            this.filteredCars = this.carNames.filter(function (l) {
                return l.name.toLowerCase().match(query);
            });
        } else {
            this.filteredCars = this.carNames.filter(function (l) {
                return l.name.toLowerCase();
            });
        }
    }

    onSelectedCar(car) {
        this.selectedCarName = car;
    }
}

module.exports = alt.createStore(TableStore, "TableStore");