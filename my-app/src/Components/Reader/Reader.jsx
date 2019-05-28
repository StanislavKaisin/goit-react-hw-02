import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

// import './Reader.css';
import styles from './Reader.module.css';

import publications from '../../Sources/publications.json';

console.log('publications=', publications);

export default class Reader extends Component {
  props = publications;

  state = {
    currentPublication: 1,
    publicationsLength: this.props.length,
  };

  static propTypes = {
    publications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
  };

  componentDidMount() {
    console.log('this=', this);
    console.log('this.props=', this.props);
  }

  render() {
    const { currentPublication, publicationsLength } = this.state;
    return (
      <div className={styles.reader}>
        <Publication />
        <Counter
          currentPublication={currentPublication}
          publicationsLength={publicationsLength}
        />
        <Controls />
      </div>
    );
  }
}

Reader.defaultProps = {
  publications: [],
};
