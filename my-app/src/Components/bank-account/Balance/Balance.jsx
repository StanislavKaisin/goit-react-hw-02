/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import PropTypes from 'prop-types';

const Balance = ({ balance, deposit, witdraw }) => {
  return (
    <section className="balance">
      <span>⬆️</span>
      <span>{deposit}$</span>
      <span>⬇️</span>
      <span>{witdraw}$</span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
  witdraw: PropTypes.number.isRequired,
};

export default Balance;
