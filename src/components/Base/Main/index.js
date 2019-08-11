//TODO:this.state must be set to an object
//TODO:Refactoring needed
//TODO:
import React from "react";
import { Button, Radio } from "antd";
import "antd/dist/antd.css";

import Color from "./Color/index";
import { fetchARandomColorFromHexNoop } from "../../../api/index";
import "./index.css";
import RadioGroup from "antd/lib/radio/group";

import colorCodeConverter from "../../../utils/colorConverter";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.loadingMessage = `Generating a new color`;
    this.normalMessage = `Generate a new color`;
    this.optionsForColorCode = [
      { value: "_hex", key: "#hex" },
      { value: "hex", key: "hex" },
      { value: "rgb", key: "rgb" },
      { value: "rgba", key: "rgba" }
    ];
    this.initialState = {
      colors: [
        {
          _hex: "#f0f0f0",
          hex: "f0f0f0",
          rgba: "rgba(244,244,244,1)",
          rgb: "rgb(244,244,244)"
        }
      ],
      button: {
        size: "large",
        loading: false,
        msg: this.normalMessage
      },
      selectedColorCode: this.optionsForColorCode[0].value
    };
    this.state = this.initialState;
  }
  componentDidMount() {
    this.fetchARandomColor();
  }
  renderOptionsForColorCode() {
    const radioGroupItems = this.optionsForColorCode.map(option => {
      return (
        <Radio.Button
          value={option.value}
          key={option.key}
          onChange={data => this.handleChangeofRadioGroup(data)}
        >
          {option.key}
        </Radio.Button>
      );
    });
    return radioGroupItems;
  }
  handleChangeofRadioGroup(data) {
    this.setState({
      selectedColorCode: data.target.value
    });
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
        let refinedColorData = colorCodeConverter(data.colors[0].value);
        let colors = this.state.colors;
        let newColors = colors.concat(refinedColorData);
        this.setState({
          colors: newColors,
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
    const { selectedColorCode } = this.state;
    const selectedColor = this.state.colors[this.state.colors.length-1][selectedColorCode];
    const { size, loading, msg } = this.state.button;
    return (
      <div className="container">
        <Color color={selectedColor} />
        <RadioGroup
          defaultValue="_hex"
          buttonStyle="solid"
          className="radio-group radio-group--center"
          size="large"
        >
          {this.renderOptionsForColorCode()}
        </RadioGroup>
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

export default Main;
