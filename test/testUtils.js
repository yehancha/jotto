import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/reducers';

/**
 * Create a testing store with imported reducers, middleware and initial state.
 * globals: rootReducer.
 * @param {object} initialState Initial state for store
 * @function storeFacotry
 * @returns {Store} Redux store
 */
export const storeFacotry = initialState => {
  return createStore(rootReducer, initialState);
};

/**
 * Returns node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper Enzyme Shallow Wrapper
 * @param {string} val Value of the data-test attribute to search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
  expect(propError).toBeUndefined();
}