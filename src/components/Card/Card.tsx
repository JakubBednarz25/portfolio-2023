import { FunctionComponent } from "react";

import "./Card.scss";

import Icon from "../Icon/Icon";

type CardType = {
  imgSrc: string;
  title: string;
  children: React.ReactNode;
};

type CardProps = {
  card: CardType;
};

const Card: FunctionComponent<CardProps> = ({ card }) => {
  return (
    <article className="card-small">
      <div className="image-container">
        <img className="card-image" src={card.imgSrc} />
        <span>{card.title}</span>
      </div>
      <div className="hover-info">
        <div className="row">
          <div className="group">
            <Icon type="play-circle" />
            <Icon type="plus" />
            <Icon type="thumbs-up" />
          </div>
          <div className="group">
            <Icon type="chevron-down" />
          </div>
        </div>
        <div className="row">
          <div className="group">
            <p className="match-percent">100% Match</p>
            <img className="rated-12" src="/r12.png" />
          </div>
          <div className="group"></div>
        </div>
      </div>
    </article>
  );
};

export default Card;
export type { CardType };
