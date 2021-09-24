import React from "react";
import { FaPenFancy } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { FiShare2 } from "react-icons/fi";

function BigArticle(props) {
  const share = (link, heading) => {
    console.log(link);
    console.log(heading);

    if (navigator.share) {
      navigator
        .share({
          title: heading,
          url: link,
        })
        .then(() => {
          console.log("done");
        })
        .catch(console.log("error"));
    } else {
      alert("Share Option not supported");
    }
  };

  return (
    <div className="big_card clr" data-aos="fade-up" data-aos-duration="1000">
      <div className="big_card_img_holder">
        <img src={props.pic} className="big_card_img" alt="" srcset="" />
      </div>
      <div className="big_card_body">
        <div className="content_holder">
          <b className="title">{props.title}</b>
          <p className="summary">{props.summary}.</p>
        </div>
        <div className="author_date clr">
          <p>
            {" "}
            <FaPenFancy /> {props.author}
          </p>
          <p>
            {" "}
            <AiOutlineCalendar /> {props.date}
          </p>
        </div>

        <div className="share_btn">
            <FiShare2
              data-url={props.link}
              data-title={props.title}
              onClick={(e) =>
                share(e.target.dataset.url, e.target.dataset.title)
              }
            />
          </div>
        <a href={props.link}>
          <button className="link_btn">Read more</button>
        </a>
      </div>
    </div>
  );
}

export default BigArticle;
