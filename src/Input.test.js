import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFacotry } from '../test/testUtils';
import Input from './Input';

/**
 * Facotory function to create a Shallow Wrapper for GuessWords component.
 * @param {object} initialState Initial state for this setup
 * @returns {ShallowWrapper}
 */
const setup = (initialState = {}) => {
  const store = storeFacotry(initialState);
  const wrapper = shallow(<Input store={store} />).dive().dive();
}

describe('render', () => {
  describe('word has not been guessed', () => {
    test('renders component without an error', () => {

    });

    test('renders input box', () => {

    });

    test('renders submit button', () => {

    });
  });

  describe('word has been guessed', () => {
    test('renders component without an error', () => {

    });

    test('does not render input box', () => {

    });

    test('does not render submit button', () => {

    });
  });
});

describe('update state', () => {

});