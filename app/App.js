import React from 'react';
import styles from './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'foo'};
  }
  render() {
    return (
      <div>
        <div id={'bap'}>
          bar
        </div>
        <div className={'app'}>
          bar
        </div>
      </div>
    );
  }
}
