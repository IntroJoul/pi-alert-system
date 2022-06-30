import logo from "./logo.svg";
import "./App.css";
import React from "react";

class Status extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.getData(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  getData() {
    fetch("http://localhost:5000/status")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          data: result,
        });
      });
  }

  render() {
    if (this.state.data === true) {
      return <div>True</div>;
    } else {
      return <div>False</div>;
    }
  }
}

function App() {
  return (
    <div className="App">
      <Status />
    </div>
  );
}

export default App;
