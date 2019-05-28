import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b}`;
};

const Stats = ({ stats }) => {
  return (
    <section className={styles.statsSection}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={styles.item}
              style={{ backgroundColor: `${randomColor()}` }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

Stats.defaultProps = {
  stats: [],
};
export default Stats;
