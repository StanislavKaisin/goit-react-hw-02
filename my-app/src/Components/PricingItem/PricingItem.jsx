import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingItem.module.css';

const PricingItem = ({ capacity, description, icon, label, price }) => {
  return (
    <div className={styles.pricingItem}>
      <i className={styles.icon} style={{ backgroundImage: `url(${icon})` }} />
      <h2 className={styles.label}>{label}</h2>
      <p className={styles.capacity}>{capacity} Storage</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.price}>${price}/MO</p>
      <button className={styles.button} type="button">
        Get Started
      </button>
    </div>
  );
};

PricingItem.propTypes = {
  capacity: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default PricingItem;
