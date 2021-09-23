import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

const Nav = ({ gettingValues }) => {
  const [search, Setsearch] = useState("");
  const [color, setColor] = useState("crimson");
  const [val, setVal] = useState("");

  useEffect(() => {
    console.log(color);
    changecolor(color);
  });

  const show_palette = () => {
    var div = document.getElementsByClassName("color_palette");
    for (let i = 0; i < div.length; i++) {
      // div[i].style.display="flex";
      div[i].style.visibility = "visible";
    }
  };

  const changecolor = (e) => {
    // console.log(e);
    setColor(e);
    var topic_btn = document.getElementsByClassName("topic_btn");
    var card = document.getElementsByClassName("card");
    var big_card = document.getElementsByClassName("big_card");
    var btn = document.getElementsByClassName("link_btn");
    var clr = document.getElementsByClassName("clr");
    document.getElementsByClassName("btn")[0].style.backgroundColor = e;
    for (let i = 0; i < card.length; i++) {
      big_card[i].style.boxShadow = "0px 0px 7px " + e;
      card[i].style.boxShadow = "0px 0px 7px " + e;
    }
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.backgroundColor = e;
    }
    for (let i = 0; i < clr.length; i++) {
      clr[i].style.color = e;
    }
    for (let i = 0; i < topic_btn.length; i++) {
      topic_btn[i].style.borderColor = e;
    }

    var btn2 = document.getElementsByClassName("topic_btn");
    for (let i = 0; i < btn2.length; i++) {
      if (btn2[i].value == val) {
        btn2[i].style.backgroundColor = e;
      }
    }

    var div = document.getElementsByClassName("color_palette");
    var div2 = document.getElementsByClassName("visible_color");
    for (let i = 0; i < div.length; i++) {
      // div[i].style.display="flex";
      div[i].style.visibility = "hidden";
      div2[i].style.backgroundColor = e;
    }
  };

  const setTopic = (e) => {
    gettingValues(e);
    setVal(e);
    // console.log(e);
    var btn = document.getElementsByClassName("topic_btn");
    for (let i = 0; i < btn.length; i++) {
      if (btn[i].value == e) {
        btn[i].style.backgroundColor = color;
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
      <div className="nav">
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
          <big style={{ marginTop: "5px" }}>Theme</big>
          <div className="visible_color" onClick={show_palette}></div>
          <div className="color_palette">
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="crimson"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(255, 230, 0)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(113, 255, 100)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(0, 204, 255)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(255, 121, 32)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(131, 34, 221)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(241, 33, 33)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(0, 11, 112)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(0, 0, 0)"
            ></div>
          </div>
        </div>
      </div>
      <div className="small_nav">
        <input
          type="text"
          className="small_ip"
          placeholder="The Latest"
          onChange={(e) => {
            Setsearch(e.target.value);
          }}
        />
        <BiSearchAlt id="small_icon" className="clr" onClick={getSearchValue} />

        <div className="box">
          <div className="visible_color" onClick={show_palette}></div>
          <div className="small_color_palette color_palette">
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="crimson"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(255, 230, 0)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(113, 255, 100)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(0, 204, 255)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(255, 121, 32)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(131, 34, 221)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(241, 33, 33)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(0, 11, 112)"
            ></div>
            <div
              className="color_box"
              onClick={(e) => {
                changecolor(e.target.dataset.bg_color);
              }}
              data-bg_color="rgb(0, 0, 0)"
            ></div>
          </div>
        </div>
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
          value="cricket"
        >
          Cricket
        </button>
        <button
          className="topic_btn"
          onClick={(e) => {
            setTopic(e.target.value);
          }}
          value="tech"
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
