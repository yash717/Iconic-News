import React, { Component } from "react";
import Section from "./section";
import Article1 from "./article1";
import "../App.css";
import Uptop from "./uptop";

export class Home extends Component {
  render() {
    return (
      <div>
        <Uptop />
        <Article1 />

        <Section />
      </div>
    );
  }
}

export default Home;
