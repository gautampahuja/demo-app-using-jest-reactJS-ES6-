import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import App from '../src/js/components/App.js'

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div)
    });

    it('renders a inside App with a FRI:DAY value', () => {
        const component = shallow(<App />);
        expect(component.find('a').text()).toEqual('FRI:DAY')
    })
});
