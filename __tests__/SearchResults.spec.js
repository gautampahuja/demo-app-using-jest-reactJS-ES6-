/* global describe, test, expect */

import React from 'react'
import SearchResults from '../src/js/components/SearchResults.js'
import renderer from 'react-test-renderer'

describe('SearchResults component', () => {
  test('SearchResults list is rendered without filteredCars object', () => {
    const component = renderer.create(<SearchResults/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  });

  test('SearchResults list is rendered with filteredCars object ', () => {
    const filteredCars = [{
        "name": "MERCEDES BENZ"
    }, {
        "name": "VOLKS WAGEN"
    },{
        "name": "HYUNDAI"
    },{
        "name": "INFINITI"
    }];
    const component = renderer.create(<SearchResults filteredCars={filteredCars} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
})
