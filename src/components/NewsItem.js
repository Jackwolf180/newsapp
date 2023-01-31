import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, date ,source} = this.props;
    return (
      <div>
        <div className="card my-3 ">
        <div>
          <span className="position-absolute top-0 end-0 z-2 translate-middle badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
          <img
            src={
              urlToImage
                ? urlToImage
                : "https://eyeclinicofedmonds.com/wp-content/uploads/2017/10/placeholder-image.png"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                by {author ? author : "anonymus"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              href={url}
              target={"_blank"}
              rel="noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
