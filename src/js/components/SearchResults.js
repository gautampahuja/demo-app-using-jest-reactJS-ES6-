import React from 'react';

class SearchResults extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedTab: null
        };
        this.carClick = this.carClick.bind(this);
    }
    carClick(name) {
        this.setState({
            selectedTab: name
        });
        this.props.onCarClick(name);
    }

    render() {
        const filteredCars = this.props.filteredCars;
        const self = this;
        return (
            <div id="search-Results" className="results">
                <ul id="cars-list">
                    {
                        filteredCars!=undefined
                            ?
                            filteredCars.map((obj, i) => <li key={i} className={self.state.selectedTab == obj.name ? 'active' : ''} onClick={self.carClick.bind(null, obj.name)}>{obj.name}</li>)
                            :
                            ""
                        }
                </ul>
            </div>
        )
    }
}
export default SearchResults;