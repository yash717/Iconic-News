import React from "react";
import { Component } from "react";
import "../App.css";

export class SectionItem3 extends Component {
  render() {
    let { title, imageUrl, description } = this.props;
    return (
      <>
        <article className="politics">
          <h2 id="world__id__h2">ENTERTAINMENT</h2>
          <img
            src={
              !imageUrl
                ? "https://us.123rf.com/450wm/bbbar/bbbar1201/bbbar120100203/11939314-image-not-available-written-in-chalk-on-a-blackboard.jpg?ver=6"
                : imageUrl
            }
            alt="first"
          />

          <h3>{title}</h3>
          <p>{description}</p>
        </article>
      </>
    );
  }
}

export default SectionItem3;
