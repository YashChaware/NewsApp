import React, { Component } from "react";

export class NewsItem extends Component {
      render() {
            let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
            return (
                  <div className="my-3">
                        <div className="card">
                              <img
                                    src={
                                          !imageUrl
                                                ? "https://images.moneycontrol.com/static-mcnews/2024/02/market_stocks_sensex_Nifty-770x433.jpg"
                                                : imageUrl
                                    }
                                    alt="..."
                              />
                              <div className="card-body">
                                    <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: "1"}}>
                                          {source}
                                    </span>
                                    <h5 className="card-title">{title}</h5>
                                    <p className="card-text">{description}</p>
                                    <p className="card-text">
                                          <small className="text-muted">
                                                By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
                                          </small>
                                    </p>
                                    <a
                                          rel="noreferrer"
                                          href={newsUrl}
                                          target="_blank"
                                          className="btn btn-sm btn-secondary"
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
