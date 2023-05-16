import "./Icon.scss";

import PlayCircle from "../../assets/circle-play-solid.svg";
import Plus from "../../assets/plus-solid.svg";
import ThumbsUp from "../../assets/thumbs-up-regular.svg";
import ChevronDown from "../../assets/chevron-down.svg";
import Close from "../../assets/close.svg";
import { FunctionComponent } from "react";

type IconProps = {
  type: "play-circle" | "plus" | "thumbs-up" | "chevron-down" | "close";
};

const Icon: FunctionComponent<IconProps> = ({ type }) => {
  if (type === "play-circle") {
    return <img className="play-img" src={PlayCircle} />;
  } else if (type === "plus") {
    return (
      <div className="round-image">
        <img className="thumbs-up" src={Plus} />
      </div>
    );
  } else if (type === "thumbs-up") {
    return (
      <div className="round-image">
        <img className="thumbs-up" src={ThumbsUp} />
      </div>
    );
  } else if (type === "chevron-down") {
    return (
      <div className="round-image">
        <img className="thumbs-up" src={ChevronDown} />
      </div>
    );
  }
  else{
    return (
      <div className="round-image close-btn">
        <img className="close-btn" src={Close} />
      </div>
    );
  }
};

export default Icon;
