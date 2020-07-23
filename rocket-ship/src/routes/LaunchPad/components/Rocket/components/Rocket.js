import React, { Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  return <RocketCore initialLaunchTime={Date.now()}></RocketCore>;
}

export class ClassRocket extends Component {
  constructor() {
    super();

    this.state = {
      initialLaunchTime: Date.now()
    };
  }

  render() {
    const { initialLaunchTime } = this.state.initialLaunchTime;

    return <RocketCore initialLaunchTime={initialLaunchTime} />;
  }
}
