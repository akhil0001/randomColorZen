//TODO:this.state must be set to an object
//TODO:Refactoring needed
//TODO:
import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

import Color from "../Color/index";
import { fetchARandomColorFromHexNoop } from "../../api/index";
import "./index.css";

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.loadingMessage = `Generating a new color`;
    this.normalMessage = `Generate a new color`;
    this.initialState = {
      colors: [{ value: "#f0f0f0" }],
      button: {
        size: "large",
        loading: false,
        msg: this.normalMessage
      }
    };
    this.state = this.initialState;
  }
  componentDidMount() {
    this.fetchARandomColor();
  }
  fetchARandomColor() {
    let { size, loading, msg } = this.state.button;
    msg = this.loadingMessage;
    loading = !loading;
    this.setState({
      button: {
        size,
        loading,
        msg
      }
    });
    fetchARandomColorFromHexNoop()
      .then(data => {
        this.setState({
          colors: data.colors,
          button: this.initialState.button
        });
      })
      .catch(err => {
        this.setState(this.initialState);
      });
  }
  handleClick() {
    this.fetchARandomColor();
  }
  render() {
    const { value } = this.state.colors[0];
    const { size, loading, msg } = this.state.button;
    return (
      <div className="container">
        <h1 className="heading heading--center">Random Color Generator</h1>
        <Color color={value} />
        <Button
          className="buttonGenerator"
          type="primary"
          size={size}
          loading={loading}
          onClick={() => this.handleClick()}
        >
          {msg}
        </Button>
      </div>
    );
  }
}

export default Base;
