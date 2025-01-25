import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date , source} = this.props;
    return (
      <div>
        <div className="card">
          <div style={{
            display:'flex',
            justifyContent:'flex-end',
            position:'absolute',
            right:'0'
          }}>
          <span className=" badge rounded-pill bg-danger" >
                {source}
              </span>
          </div>

          <img
            src={
              !imageUrl
                ? "https://img.hvg.hu/Img/7fcefbf8-ac48-4ee6-aef5-32203afa118c/aea67c8e-881b-40b6-b7b7-82eaa2bc3af9.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title || "Default Title"}{" "}

            </h5>
            <p className="card-text">{description || "no desc"}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={newsUrl || "/"}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
