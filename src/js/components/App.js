import React from 'react';
import TableStore from '../stores/TableStore';
import TableActions from '../actions/TableActions';
import 'bootstrap/less/bootstrap.less';
import '../../styles/app.less';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import SearchInput from './SearchInput'
import SearchResults from './SearchResults'
import SelectedModel from './SelectedModel'

export default class App extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.state = this.getState();
        this.onChangeListener = () => this.setState(this.getState());
        this.search = this.search.bind(this);
        this.onCarClick = this.onCarClick.bind(this)
    }
    getState() {
        return TableStore.getState();
    }
    componentDidMount() {
        TableStore.listen(this.onChangeListener);
    }
    componentWillUnmount() {
        TableStore.unlisten(this.onChangeListener);
    }

    search(e) {
        const q = e.target.value;
        e.preventDefault();
        TableActions.getSearchValue(q);
    }
    onCarClick(name) {
        TableActions.selectedCar(name);
    }
    render() {
        const filteredCars = this.state.filteredCars;
        const selectedCarName = this.state.selectedCarName;
        return (
            <div>
                <header>
                    <div className="header-wrapper">
                        <div className="header">
                            <h1>
                                <a href="https://www.friday.de/">FRI:DAY</a>
                            </h1>
                        </div>
                    </div>
                </header>
                <Row>
                    <Col sm={8} smOffset={2} lg={8} lgOffset={2} md={8} mdOffset={2} xs={8} xsOffset={2}>
                        <div id="mainDiv">
                            <SearchInput search={this.search}></SearchInput>
                        {
                            filteredCars != null
                                ?
                                <SearchResults onCarClick={this.onCarClick} filteredCars={filteredCars}></SearchResults>
                                :
                                ""
                            }
                            <SelectedModel selectedCarName={selectedCarName}></SelectedModel>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}