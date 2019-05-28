import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from '../PricingItem/PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items }) => {
  return (
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li key={item.label} className={styles.item}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  );
};

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string.isRequired }),
  ),
};
PricingPlan.defaultProps = {
  items: [],
};
export default PricingPlan;
