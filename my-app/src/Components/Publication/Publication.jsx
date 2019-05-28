import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const Publication = props => {
  return (
    <article className={styles.publication}>
      <h2 className={styles.publicationHeader}>Lorem ipsum dolor sit amet.</h2>
      <p className={styles.publicationText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
        molestiae dolore ipsa sed similique necessitatibus. Aut qui porro
        quibusdam esse libero est eius, repellendus unde nihil, sequi voluptate
        eaque officiis aliquam impedit laborum adipisci cumque sit.
      </p>
    </article>
  );
};

Publication.propTypes = {};

export default Publication;
