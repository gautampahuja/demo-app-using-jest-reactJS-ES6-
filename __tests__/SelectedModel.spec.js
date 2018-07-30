/* global describe, test, expect */

import React from 'react'
import SelectedModel from '../src/js/components/SelectedModel.js'
import renderer from 'react-test-renderer'

describe('SelectedModel component', () => {
  test('SelectedModel is rendered without selectedCarName object', () => {
    const component = renderer.create(<SelectedModel/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  });

  test('SelectedModel is rendered with selectedCarName object ', () => {
    const selectedCarName = "MERCEDES BENZ";
    const component = renderer.create(<SelectedModel selectedCarName={selectedCarName} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot()
  })
});
