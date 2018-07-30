var TableActions = require('../actions/TableActions');
import 'isomorphic-fetch'

module.exports = {
    getInfo: function () {
        fetch("demodata.json")
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                TableActions.populateInfo(json);
                return json;
            });
    }
};
