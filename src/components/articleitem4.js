import React from "react";
import { Component } from "react";
import "../App.css";

export class ArticleItem4 extends Component {
  render() {
    let { title, imageUrl, date } = this.props;
    return (
      <>
        <div className="carousel-item ">
          <img
            className="d-block w-100"
            id="img__carousel__2"
            src={
              !imageUrl
                ? "https://us.123rf.com/450wm/bbbar/bbbar1201/bbbar120100203/11939314-image-not-available-written-in-chalk-on-a-blackboard.jpg?ver=6"
                : imageUrl
            }
            alt="First slide"
          />
          <div className="carousel-caption d-md-block">
            <h5 className="h5__class_search">{title}</h5>
            <p>{date}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ArticleItem4;
