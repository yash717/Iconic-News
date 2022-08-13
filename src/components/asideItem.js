import React, { Component } from "react";
import "../App.css";

export class AsideItem extends Component {
  render() {
    let { title, imageUrl } = this.props;

    return (
      <>
        <div className="recent-news">
          <img src={imageUrl} alt="carousel" />
          <p className="recent__news__class__3">{title}</p>
        </div>
      </>
    );
  }
}

export default AsideItem;
