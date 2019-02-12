import React, { Component } from 'react';

import MainNav from '../common/MainNav';
import Plant from './Plant';
import LargeButton from '../common/LargeButton';

class Dashboard extends Component {
  render() {
    return (
      <>
        <MainNav />
        <Plant />
        <LargeButton />
      </>
    );
  }
}

export default Dashboard;
