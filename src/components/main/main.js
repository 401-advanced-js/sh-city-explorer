import React from "react";
import "./main.scss";

function Main(props) {
  return (
    <>
      <h1>City Explorer</h1>
      <div>
        Enter a location below to learn about the weather, events, restaurants,
        movies filmed there, and more! Search for a location
        <form onSubmit={props.fetchData}>
          <input
            onChange={props.searchLocation}
            placeholder="Enter a location here"
          />
          <button type="submit" value="Submit">
            Explore!
          </button>
        </form>
      </div>
    </>
  );
}

export default Main;
