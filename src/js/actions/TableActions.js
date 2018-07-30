var Alt = require('../alt');

class TableActions{
    constructor(){
        this.generateActions(
            'getInfo',
            'populateInfo',
            'getSearchValue',
            'selectedCar'
        )
    }
}
module.exports = Alt.createActions(TableActions);