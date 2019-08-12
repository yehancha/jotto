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
  return shallow(<Input store={store} />).dive().dive();
}

describe('render', () => {
  describe('word has not been guessed', () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test('renders component without an error', () => {
      const component = findByTestAttr(wrapper, 'component-input');
      expect(component.length).toBe(1);
    });

    test('renders input box', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.length).toBe(1);
    });

    test('renders submit button', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.length).toBe(1);
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