import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({
  onDeposit,
  onWithdraw,
  onInputChange,
  inputValue,
  isDepositEnable,
  isWithdrawEnable,
}) => {
  return (
    <section className={styles.controls}>
      <input
        type="number"
        onChange={onInputChange}
        value={inputValue}
        className={styles.input}
      />
      <button
        onClick={onDeposit}
        type="button"
        disabled={!isDepositEnable}
        className={isDepositEnable ? styles.button : styles.buttonDisabled}
      >
        Deposit
      </button>
      <button
        onClick={onWithdraw}
        type="button"
        disabled={!isWithdrawEnable}
        className={isWithdrawEnable ? styles.button : styles.buttonDisabled}
      >
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  inputValue: PropTypes.number.isRequired,
  isDepositEnable: PropTypes.bool.isRequired,
  isWithdrawEnable: PropTypes.bool.isRequired,
};

export default Controls;
