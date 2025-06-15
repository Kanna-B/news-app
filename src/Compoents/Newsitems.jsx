import React, { Component } from "react";

export default class Newsitems extends Component {
  render() {
    let { title, description, url, content, author, date, source } = this.props;
    console.log(this.props);
    return (
      <div className="container m-4">
        <div className="card">
          <img src="url" alt="not found" className="card-mg-top" />
          <div className="card-body">
            <span
              className="badge rounded-pill bg-danger text-light"
              style={{
                display: "flex",
                justifyContent: "flex-end",
                position: "absolute",
                right: "0px",
                top: "0px",
              }}
            >
              {source}
            </span>
            <h5 className="card-title text-success">
              {title.split("", 50)}...
            </h5>
            <p className="card-text">
              {description ? description.split("", 200) : "no description"}
            </p>
            <p>by: {author ? author : "Anonymous"}</p>
            <hr></hr>
            <p>Published At: {date}</p>
            <a href="" className="btn btn-danger">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
