import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";

function BigArticle(props) {
  return (
    <div className="big_card" data-aos="fade-up" data-aos-duration="1000">
      <div className="big_card_img_holder">
        <img src={props.pic} className="big_card_img" alt="" srcset="" />
      </div>
      <div className="big_card_body">
        <div className="content_holder">
          <b className="title">{props.title}</b>
          <p className="summary">{props.summary}.</p>
        </div>
        <div className="author_date">
          <p>
            {" "}
            <FaPenFancy className="clr" /> {props.author}
          </p>
          <p>
            {" "}
            <AiOutlineCalendar className="clr" /> {props.date}
          </p>
        </div>
        <a href={props.link}>
          <button className="link_btn">Read more</button>
        </a>
      </div>
    </div>
  );
}

export default BigArticle;
