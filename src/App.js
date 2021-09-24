import React, { useState, useEffect } from "react";
import Article from "./Components/Article";
import BigArticle from "./Components/BigArticle";
import Nav from "./Components/Nav";

function App() {
  const [news, setNews] = useState([]);
  const [searchkey, setSearchkey] = useState("club football");
  useEffect(() => {
    fetch(`https://free-news.p.rapidapi.com/v1/search?q=${searchkey}&lang=en`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "3f1921d0eemsh9bd0f293f7c62edp172fd8jsnaa9cf7469cb6",
      },
    })
      .then((response) => response.json())
      .then((data) => arrangeNews(data.articles));
  }, [searchkey]);

  const gettingValues = (val) => {
    setSearchkey(val);
  };

  function arrangeNews(data) {
    setNews([]);
    var ranks = new Set();
    for (let i = 0; i < data.length; i++) {
      ranks.add(data[i].rank);
    }
    var arr = Array.from(ranks);
    arr.sort(function (a, b) {
      return b - a;
    });
    var news_divs = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < data.length; j++) {
        if (data[j].rank == arr[i]) {
          news_divs.push(data[j]);
          // console.log(data[j].author.length);
        }
        if (data[j].author == null || data[j].author.length > 40) {
          data[j].author = "PTI";
        }
      }
    }
    setNews(news_divs);
    console.log(news_divs);
  }

  return (
    <div className="App">
      <div>
        <Nav gettingValues={gettingValues} />
        <div className="container">
          {news.map((e) => {
            return (
              <Article
                key={e.rank}
                title={e.title}
                summary={e.summary}
                pic={e.media}
                author={e.author}
                date={e.published_date.slice(0, 10)}
                link={e.link}
              />
            );
          })}
        </div>

        {news.map((e) => {
          return (
            <BigArticle
              key={e.rank}
              title={e.title}
              summary={e.summary}
              pic={e.media}
              author={e.author}
              date={e.published_date.slice(0, 10)}
              link={e.link}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
