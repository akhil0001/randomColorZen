import React from "react";

import Main from './Main/index'

class base extends React.Component {
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
