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
    fetch("http://192.168.1.200:5000/status")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        this.setState({
          data: result,
        });
      });
  }

  render() {
    if (this.state.data) {
      return <div>True</div>;
    }
    return <div>False</div>;
  }
}

class ActivateButton extends React.Component {
  handleClick = () => {
    fetch("http://192.168.1.200:5000/activate");
  };
  render() {
    return <button onClick={this.handleClick}>Activate</button>;
  }
}

function App() {
  return (
    <div className="App">
      <Status />
      <ActivateButton />
    </div>
  );
}

export default App;
