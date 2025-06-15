import React, { Component } from "react";
import Newsitems from "./Newsitems";

export default class News extends Component {
  articles = {
    status: "ok",
    totalResults: 10,
    articles: [
      {
        source: { id: "bbc-news", name: "BBC News" },
        author: "John Doe",
        title: "Breaking News: Major Event Unfolds",
        description: "A major event has occurred, impacting global markets.",
        url: "https://example.com/news-article",
        urlToImage: "https://example.com/news-image.jpg",
        publishedAt: "2025-06-06T12:00:00Z",
        content: "Detailed news content goes here...",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Jane Smith",
        title: "Technology Advancements in AI",
        description: "New AI breakthroughs are changing industries.",
        url: "https://example.com/tech-news",
        urlToImage: "https://example.com/tech-image.jpg",
        publishedAt: "2025-06-06T14:30:00Z",
        content: "More details on AI advancements...",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Jane Smith",
        title: "Technology Advancements in AI",
        description: "New AI breakthroughs are changing industries.",
        url: "https://example.com/tech-news",
        urlToImage: "https://example.com/tech-image.jpg",
        publishedAt: "2025-06-06T14:30:00Z",
        content: "More details on AI advancements...",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Jane Smith",
        title: "Technology Advancements in AI",
        description: "New AI breakthroughs are changing industries.",
        url: "https://example.com/tech-news",
        urlToImage: "https://example.com/tech-image.jpg",
        publishedAt: "2025-06-06T14:30:00Z",
        content: "More details on AI advancements...",
      },
      {
        source: { id: "cnn", name: "CNN" },
        author: "Jane Smith",
        title: "Technology Advancements in AI",
        description: "New AI breakthroughs are changing industries.",
        url: "https://example.com/tech-news",
        urlToImage: "https://example.com/tech-image.jpg",
        publishedAt: "2025-06-06T14:30:00Z",
        content: "More details on AI advancements...",
      },
    ],
  };

  constructor(prop) {
    super();
    console.log("constructor");
    this.state = {
      articles: this.articles.articles,
    };
  }
  render() {
    return (
      <>
        <h1 className="text-center text-danger">Live News</h1>
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              console.log(element);
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitems
                    title={element.title}
                    description={element.description}
                    url={element.url}
                    content={element.content}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
