import React, { useState, useEffect } from "react";
import { BiSearchAlt, BiSun, BiMoon } from "react-icons/bi";

const Nav = ({ gettingValues }) => {
  const [search, Setsearch] = useState("");
  const [theme, setTheme] = useState("sun");
  useEffect(() => {
    changeTheme(theme);
  });

  const changeTheme = (e) => {
    // const e = theme;
    var sun = document.getElementsByClassName("sun");
    var moon = document.getElementsByClassName("moon");
    var div = document.getElementsByClassName("clr");
    if (e == "moon") {
      console.log(2);
      for (let i = 0; i < sun.length; i++) {
        sun[i].style.display = "block";
      }
      for (let i = 0; i < moon.length; i++) {
        moon[i].style.display = "none";
      }
      for (let i = 0; i < div.length; i++) {
        document.body.style.backgroundImage =
          "linear-gradient(to right, #000000 0%, black 100%)";
        div[i].style.backgroundColor = "#333";
        div[i].style.color = "#fff";
      }
      // setTheme("sun");
    }
    if (e == "sun") {
      for (let i = 0; i < moon.length; i++) {
        moon[i].style.display = "block";
      }
      for (let i = 0; i < sun.length; i++) {
        sun[i].style.display = "none";
      }
      for (let i = 0; i < div.length; i++) {
        document.body.style.backgroundImage =
          "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)";
        div[i].style.backgroundColor = "#fff";
        div[i].style.color = "black";
      }
      // setTheme("moon");
    }
  };

  const setTopic = (e) => {
    gettingValues(e);
    var btn = document.getElementsByClassName("topic_btn");
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].value == e) {
        btn[i].style.backgroundColor = "crimson";
        btn[i].style.color = "white";
      } else {
        btn[i].style.backgroundColor = "white";
        btn[i].style.color = "black";
      }
    }
  };

  const getSearchValue = (e) => {
    e.preventDefault();
    gettingValues(search);
  };
  return (
    <div className="navbar">
      <div className="nav clr">
        <h1 className="header">The Latest</h1>
        <div className="search">
          <input
            type="search"
            placeholder="Search "
            className="ip"
            onChange={(e) => {
              Setsearch(e.target.value);
            }}
          />
          <button onClick={getSearchValue} className="btn">
            <BiSearchAlt />
          </button>
        </div>

        <div className="box">
          <BiSun
            className="sun"
            onClick={(e) => {
              setTheme(e.target.className.animVal);
            }}
            // onClick={setTheme('sun')}
          />
          <BiMoon
            className="moon"
            onClick={(e) => {
              setTheme(e.target.className.animVal);
            }}
            // onClick={setTheme('moon')}
          />
        </div>
      </div>
      <div className="small_nav clr">
        <h1>The Latest</h1>
        <div className="box">
          <BiSun
            className="sun"
            onClick={(e) => {
              setTheme(e.target.className.animVal);
            }}
            // onClick={setTheme('sun')}
          />
          <BiMoon
            className="moon"
            onClick={(e) => {
              setTheme(e.target.className.animVal);
            }}
            // onClick={setTheme('moon')}
          />
        </div>
      </div>
      <div className="small_search">
        <input
          type="search"
          placeholder="Search "
          className="ip"
          onChange={(e) => {
            Setsearch(e.target.value);
          }}
        />
        <button onClick={getSearchValue} className="btn">
          <BiSearchAlt />
        </button>
      </div>
      <div className="topics">
        <button
          className="topic_btn"
          onClick={(e) => {
            setTopic(e.target.value);
          }}
          value="current affairs"
        >
          Recent
        </button>
        <button
          className="topic_btn"
          onClick={(e) => {
            setTopic(e.target.value);
          }}
          value="Indian Cricket"
        >
          Cricket
        </button>
        <button
          className="topic_btn"
          onClick={(e) => {
            setTopic(e.target.value);
          }}
          value="recent tech"
        >
          Tech
        </button>
        <button
          className="topic_btn"
          onClick={(e) => {
            setTopic(e.target.value);
          }}
          value="covid"
        >
          Covid
        </button>
        <button
          className="topic_btn"
          onClick={(e) => {
            setTopic(e.target.value);
          }}
          value="taliban"
        >
          Taliban
        </button>
      </div>
    </div>
  );
};

export default Nav;
