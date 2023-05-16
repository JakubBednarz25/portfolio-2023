import "./App.scss";
import { useState } from "react";

import Play from "./assets/play-solid.svg";
import Info from "./assets/circle-info-solid.svg";

import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Card, { CardType } from "./components/Card/Card";

import Popup from "./components/Popup/Popup";

import { cards } from "./utils/utils";

function App() {
  const [currentCard, setCurrentCard] = useState<CardType | null>(null);

  const scrollToTop = () => {
    const element = document.getElementById("scroll-top");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      <Header />
      <div id="scroll-top"></div>
      <section className="landing">
        <div className="shade">
          <div className="information flex-col-left">
            <img src="/netflix-series.png" />
            <h1>Jakub Bednarz.</h1>
            <div className="top-10">
              <img src="/top10.png" />
              <b>No.1 in Films Today</b>
            </div>
            <p>
              A front-end developer specializing in React, and many more
              front-end technologies.
            </p>
            <div className="buttons">
              <Button type="primary">
                <span>
                  <img src={Play} />
                  Jr. React Dev
                </span>
              </Button>
              <Button type="secondary">
                <span>
                  <img src={Info} />
                  <a href="/JakubBednarzCV.pdf" download>
                    Download CV
                  </a>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {cards.map((cards, i) => (
        <section className="info-cards" style={{ zIndex: 100 - i }}>
          <h2>{cards.category}</h2>
          <ul className="wrapper">
            {cards.cards.map((card) => (
              <li
                onClick={() => {
                  setCurrentCard(card);
                  scrollToTop();
                }}
              >
                <Card card={card} />
              </li>
            ))}
          </ul>
        </section>
      ))}
      {currentCard && (
        <>
          <div
            className="popup-bg"
            onClick={() => {
              setCurrentCard(null);
            }}
          ></div>
          <Popup
            card={currentCard}
            closePopup={() => {
              setCurrentCard(null);
            }}
          >
            {currentCard.children}
          </Popup>
        </>
      )}
      <Footer />
    </main>
  );
}

export default App;
