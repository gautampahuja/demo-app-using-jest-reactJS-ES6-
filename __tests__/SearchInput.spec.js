import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import SearchInput from '../src/js/components/SearchInput.js'

describe('SearchInput', () => {
    it('should render a `input`', () => {
        const component = shallow(<SearchInput />);
        expect(component.find('input')).toBeTruthy()
    });

    it('should render label with a text', () => {
        const component = shallow(<SearchInput />);
        expect(component.find('label').text()).toEqual('Please Enter your Car Make')
    })
});
