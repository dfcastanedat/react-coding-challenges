import React, { Component } from 'react';
import RocketCore from './RocketCore';

export function FunctionalRocket() {
  return <RocketCore initialLaunchTime={Date.now()} />;
}

export class ClassRocket extends Component {
  render() {
    return <RocketCore initialLaunchTime={Date.now()} />;
  }
}
