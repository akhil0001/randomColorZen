//TODO: Understand the setState limitations
//TODO: Check hue and saturation and change the font color accordingly
//TODO: Implement the copied colors drawer
import React from "react";
import { message } from "antd";

import "./index.css";

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color };
    message.config({
      top: 100,
      duration:0.8
    });
  }
  handleClick() {
    this.copyToClipBoard();
  }
  copyToClipBoard() {
    let { color } = this.props;
    navigator.clipboard.writeText(`${color}`).then(
      () => {
        message.success(`${color} is copied to clipboard`);
      },
      () => {
        message.fail(`Could not copy the color to clipboard`);
      }
    );
  }
  render() {
    let backgroundColor = this.props.color;
    let colorContainerStyle = {
      backgroundColor: backgroundColor.indexOf('#')===-1 && backgroundColor.indexOf('R')===-1 ? `#${this.props.color}`:backgroundColor,
      color:this.props.fontColor
    };
    return (
      <div
        className="colorContainer white"
        style={colorContainerStyle}
        onClick={() => this.handleClick()}
      >
        <h1 className="colorTitle">{this.props.color}</h1>
        <p className="hint">(click to copy)</p>
      </div>
    );
  }
}
