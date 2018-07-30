import React from 'react';

class SelectedModel extends React.Component {
    render () {
        var selectedCarName = this.props.selectedCarName;
        return (
            <div className="searchResults">
                {
                    selectedCarName != undefined
                        ?
                        <h4><u>Selected Model</u>: {selectedCarName}</h4>
                        :
                        ""
                }
            </div>
        )
    }
}
export default SelectedModel;