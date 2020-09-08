import React, { Component } from "react";
import "./AutoCompleteText.css";

class AutoCompleteText extends Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: [], text: "" };
  }

  onTextChanged = e => {
    const value = e.target.value;
    const { items } = this.props;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(item => regex.test(item));
    }
    this.setState({ suggestions, text: value });
  };

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((item, index) => (
          <li key={index} onClick={() => this.suggestionSelected(item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }

  suggestionSelected(value) {
    this.setState({
      text: value,
      suggestions: []
    });
  }

  render() {
    return (
      <div className="AutoCompleteText">
        <input
          type="text"
          value={this.state.text}
          onChange={this.onTextChanged}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default AutoCompleteText;
