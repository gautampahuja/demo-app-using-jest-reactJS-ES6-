import React from 'react';

class SearchInput extends React.Component {
    render() {
        return (
            <div className="search-container">
                <div className="inputs-wrapper forward">
                    <span>
                        <div className="mobile-input mobile-input-selection OB_1_MERK">
                            <label className="question-text" htmlFor="OB_1_MERK">Please Enter your Car Make</label>
                            <div>
                                <input type="text" autoComplete="off" onChange={this.props.search} autoCorrect="off" placeholder="Ex: Mercedes, BMW."/>
                                </div>
                            </div>
                    </span>
                </div>
            </div>
        )
    }
}
export default SearchInput;