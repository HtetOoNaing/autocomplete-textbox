import React, { useState } from "react";
import "./AutoCompleteText.css";
const AutoCompleteText = props => {
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const onTextChanged = e => {
    const value = e.target.value;
    const { items } = props;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter(item => regex.test(item));
    }

    setSuggestions(suggestions);
    setText(value);
  };

  const suggestionSelected = value => {
    setText(value);
    setSuggestions([]);
  };

  return (
    <div className="AutoCompleteText">
      <input type="text" value={text} onChange={onTextChanged} />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <li key={index} onClick={() => suggestionSelected(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoCompleteText;
