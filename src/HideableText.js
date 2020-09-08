import React, { Component } from "react";

class HideableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  toggleIsHidden() {
    this.setState(currentState => ({
      isHidden: !currentState.isHidden
    }));
  }
  render() {
    return (
      <div>
        <button onClick={() => this.toggleIsHidden()}>Toggle</button>
        <p>{!this.state.isHidden && this.props.text}</p>
      </div>
    );
  }
}

export default HideableText;
