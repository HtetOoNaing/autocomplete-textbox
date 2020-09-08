import React from "react";
import "./App.css";
//import HideableText from "./HideableText";
import AutoCompleteText from "./HookAutoCompleteText";
import { regions, cities, townships } from "./AutoCompleteText.json";

function App() {
  return (
    <div className="App">
      <div style={{ height: 30, marginTop: 50 }}>Township</div>
      <AutoCompleteText items={townships} />
      <div style={{ height: 30, marginTop: 50 }}>City</div>
      <AutoCompleteText items={cities} />
      <div style={{ height: 30, marginTop: 50 }}>Region</div>
      <AutoCompleteText items={regions} />
    </div>
  );
}

export default App;
