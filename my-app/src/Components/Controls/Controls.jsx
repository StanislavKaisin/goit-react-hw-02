import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onNextClick,
  onPreviousClick,
  enableNext,
  enablePrevious,
}) => {
  return (
    <section className={styles.controls}>
      <button
        className={enablePrevious ? styles.button : styles.buttonDisabled}
        type="button"
        onClick={onPreviousClick}
      >
        Назад
      </button>
      <button
        className={enableNext ? styles.button : styles.buttonDisabled}
        type="button"
        onClick={onNextClick}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onPreviousClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  enableNext: PropTypes.bool.isRequired,
  enablePrevious: PropTypes.bool.isRequired,
};
export default Controls;
