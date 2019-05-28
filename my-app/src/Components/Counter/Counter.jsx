import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ currentPublicationNumber, publicationsLength }) => {
  return (
    <p className={styles.counter}>
      {currentPublicationNumber}/{publicationsLength}
    </p>
  );
};

Counter.propTypes = {
  currentPublicationNumber: PropTypes.number,
  publicationsLength: PropTypes.number,
};

Counter.defaultProps = {
  currentPublicationNumber: 1,
  publicationsLength: 1,
};

export default Counter;
