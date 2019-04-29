import React from "react";
import Main from "./components/main/main.js";
import Fetch from "react-fetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: ""
    };
  }

  fetchData = e => {
    e.preventDefault();
    Fetch("https://city-explorer-backend.herokuapp.com/");
  };

  searchLocation = e => {
    e.preventDefault();
    this.setState({ location: e.target.value });
    console.log(this.state.location);
  };

  render() {
    return (
      <>
        <Main searchLocation={this.searchLocation} fetchData={this.fetchData} />
      </>
    );
  }
}
export default App;
