import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

function Article(props) {
  return (
    <div id={props.key} className="card" data-aos="fade-up" data-aos-duration="1000" >
      <div className="car_img_holder">
        <img src={props.pic} alt="" className="card_img" />
      </div>

      <div className="card_body">
        <div className="author_date">
          <p>
            {" "}
            <FaPenFancy className="clr" /> {props.author}
          </p>
          <p>
            {" "}
            <AiOutlineCalendar className="clr"/> {props.date}
          </p>
        </div>
        <div className="content_holder">
          <b className="title">{props.title}</b>
          <p className="summary">{props.summary}.</p>
        </div>
      </div>
      <a href={props.link}>
        <button className="link_btn">Read more</button>
      </a>
    </div>
  );
}

export default Article;
