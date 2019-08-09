import { actionTypes } from '../actions';
import successReducer from './successReducer';

test('returns default inintial state of "false" if no action is passed', () => {
  const newState = successReducer(undefined, {});
  expect(newState).toBe(false);
});

test('returns the state "true" upon resceiving an action of type "CORRECT_GUESS"', () => {
  const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
  expect(newState).toBe(true);
});