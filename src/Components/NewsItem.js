import React from "react";

const NewsItem = (props) => {
      let { title, description, imageUrl, newsUrl, author, date, source } = props;
      return (
            <div className="my-3">
                  <div className="card">
                        <div>
                              <span className="badge rounded-pill bg-danger" style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                                    {source}
                              </span>
                        </div>
                        <img
                              src={
                                    !imageUrl
                                          ? "https://images.moneycontrol.com/static-mcnews/2024/02/market_stocks_sensex_Nifty-770x433.jpg"
                                          : imageUrl
                              }
                              alt="..."
                        />
                        <div className="card-body">
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

export default NewsItem;
