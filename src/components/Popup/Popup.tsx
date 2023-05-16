import "./Popup.scss";

import { CardType } from "../Card/Card";
import { FunctionComponent } from "react";
import Button from "../Button/Button";

import Play from "../../assets/play-solid.svg";
import Icon from "../Icon/Icon";

type PopupProps = {
  card: CardType;
  closePopup: Function;
  children: React.ReactNode;
};

const Popup: FunctionComponent<PopupProps> = ({
  card,
  closePopup,
  children,
}) => {
  return (
    <div className="popup">
      <div className="top">
        <div className="popup-shade">
          <img src={card.imgSrc} />
          <div className="popup-title">
            <h3>{card.title}</h3>
            <div className="flex-row-center button-icons">
              <Button type="primary">
                <span>
                  <img src={Play} />
                  Play
                </span>
              </Button>
              <Icon type="plus" />
              <Icon type="thumbs-up" />
            </div>
          </div>
          <div
            className="close"
            onClick={() => {
              closePopup();
            }}
          >
            <Icon type="close" />
          </div>
        </div>
      </div>
      <div className="details">
        <div className="introduction">
          <div className="group">
            <p className="match-percent">100% Match</p>
            <img className="rated-12" src="/r12.png" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
