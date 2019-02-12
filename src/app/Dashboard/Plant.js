import React, { Component } from 'react';

import Mood from '../common/Mood';
import PlantNotif from './PlantNotif';

class Plant extends Component {
  render() {
    return (
      <>
        <Mood />
        <PlantNotif />
      </>
    );
  }
}

export default Plant;
