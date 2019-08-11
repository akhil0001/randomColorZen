import React from "react";

import Main from './Main/index'

export default class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        colors:[]
    };
  }
  render() {
      return (
          <React.Fragment>
              <Main />
          </React.Fragment>
      );
  }
}
