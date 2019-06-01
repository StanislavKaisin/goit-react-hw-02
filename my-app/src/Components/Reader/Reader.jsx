import React, { Component } from 'react';
import Publication from '../Publication/Publication';
import Counter from '../Counter/Counter';
import Controls from '../Controls/Controls';

import styles from './Reader.module.css';

import publications from '../../Sources/publications.json';

export default class Reader extends Component {
  constructor() {
    super();

    this.state = {
      currentPublicationNumber: 0,
      publicationsLength: publications.length,
      enableNext: true,
      enablePrevious: false,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => {
      const isOldestNumber =
        prevState.currentPublicationNumber + 1 >= prevState.publicationsLength;

      return {
        currentPublicationNumber: isOldestNumber
          ? prevState.currentPublicationNumber
          : prevState.currentPublicationNumber + 1,
        enableNext: !(
          prevState.currentPublicationNumber + 2 >=
          prevState.publicationsLength
        ),
        enablePrevious: true,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      const lessThenSmallestNumber =
        prevState.currentPublicationNumber - 1 <= 0;

      return {
        currentPublicationNumber: lessThenSmallestNumber
          ? 0
          : prevState.currentPublicationNumber - 1,
        enableNext: true,
        enablePrevious: !lessThenSmallestNumber,
      };
    });
  };

  render() {
    const {
      currentPublicationNumber,
      publicationsLength,
      enableNext,
      enablePrevious,
    } = this.state;
    const publicationHeader = publications[currentPublicationNumber].title;
    const publicationText = publications[currentPublicationNumber].text;

    return (
      <div className={styles.reader}>
        <Controls
          onNextClick={this.handleIncrement}
          onPreviousClick={this.handleDecrement}
          enableNext={enableNext}
          enablePrevious={enablePrevious}
        />
        <Counter
          currentPublicationNumber={currentPublicationNumber}
          publicationsLength={publicationsLength}
        />
        <Publication header={publicationHeader} text={publicationText} />
      </div>
    );
  }
}
