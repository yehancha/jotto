import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional React Component for congratulatory message.
 * @function
 * @param {object} props React props
 * @returns {JSX.Element} - Rendered Component (or null if 'success' prop is false).
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test='component-congrats' className='alert alert-success'>
        <span data-test='congrats-message'>
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  } else {
    return (
      <div data-test='component-congrats' />
    );
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;