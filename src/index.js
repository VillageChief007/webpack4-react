import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import A from "./component/a";

class App extends React.Component {
  render() {
    return (
      <div className="hello">
        <A />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
