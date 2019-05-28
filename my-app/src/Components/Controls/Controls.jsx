import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = props => {
  return (
    <section className={styles.controls}>
      <button className={styles.button} type="button">
        Назад
      </button>
      <button className={styles.button} type="button">
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {};

export default Controls;
