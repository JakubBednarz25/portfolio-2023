import Button from "../components/Button/Button";
import { CardType } from "../components/Card/Card";

import Github from "../assets/github.svg";

type CardsType = {
  category: string;
  cards: CardType[];
};

const cards: CardsType[] = [
  {
    category: "Top Picks for you",
    cards: [
      {
        imgSrc: "/cards/my-story.png",
        title: "About",
        children: (
          <>
            <p>
              I first discovered web development in the 1st year of my BSc
              Computer Science course. I began studying and practising outside
              of school, and saw my skills grow.
            </p>
            <p>
              During my time at Royal Holloway, I was able to put these skills
              to use for many projects throughout the course, and also for my
              final year project which was a social media application for
              students allowing them to post their study timetables.
            </p>
            <p>
              I consider myself a programmer at heart, meaning I also like
              learning languages/technologies which aren't used on the web, this
              includes Rust which I have found to be extremely interesting.
            </p>
            <p>
              I'm always open to learning new technlogies whichever ones are
              required for the project and job.
            </p>
          </>
        ),
      },
      {
        imgSrc: "/cards/technologies.png",
        title: "Technologies",
        children: (
          <div className="logos">
            <img src="/technologies/react.png" />
            <img src="/technologies/next.png" />
            <img src="/technologies/js.png" />
            <img src="/technologies/ts.png" />
            <img src="/technologies/sass.png" />
            <img src="/technologies/html5.png" />
            <img src="/technologies/css3.png" />
          </div>
        ),
      },
      {
        imgSrc: "/cards/education.png",
        title: "Education",
        children: (
          <>
            <div className="education">
              <div className="education-section">
                <h4>A-Levels</h4>
                <p>
                  I did my A-levels at Rosedale college 6th form, where I took
                  Mathematics, Physics and Chemistry. I received A*AB
                  respectively.
                </p>
              </div>
              <div className="education-section">
                <h4>University</h4>
                <p>
                  I'm undertaking BSc Computer Science at Royal Holloway
                  university of London. As of 13/05/2023, I've finished all of
                  my 3rd year exams. In my 2nd year I got 80% overall, so I'm
                  predicted to graduate with a 1st.
                </p>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    category: "Projects",
    cards: [
      {
        imgSrc: "/cards/qas.png",
        title: "QAS",
        children: (
          <>
            <div className="project">
              <div className="project-section">
                <h4>Description</h4>
                <p>
                  For context, QAS (Quality Auto Services) is a company that
                  builds recovery truck bodies. The website I've created for QAS
                  showcases the different truck bodies they offer, and states
                  relevant information for each truck body.
                </p>
                <p>
                  There is also a cart system, allowing the user to browse
                  additional items that are sold by QAS (this includes a
                  checkout page, however there's no payment feature added yet as
                  per the owners instructions).
                </p>
                <p>
                  There is also a contact feature which allows the user to
                  contact QAS via an email form.
                </p>
              </div>
              <div className="project-section project-links">
                <a href="https://qualityautoservices.co.uk/" target="_blank">
                  <Button type="primary">
                    <span>Live demo</span>
                  </Button>
                </a>
                <a
                  href="https://github.com/JakubBednarz25/quality-auto-services-2023"
                  target="_blank"
                >
                  <Button type="secondary">
                    <span>
                      <img src={Github} />
                      View code
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </>
        ),
      },
      {
        imgSrc: "/cards/martech.png",
        title: "Martech",
        children: (
          <>
            <div className="project">
              <div className="project-section">
                <h4>Description</h4>
                <p>
                  For context, Martech is a company that sells car/van air
                  suspensions. The website I've created for Martech showcases
                  the different services they offer.
                </p>
                <p>
                  There is also a cart system, allowing the user to browse items
                  that are sold by Martech (this includes a checkout page,
                  however there's no payment feature added yet as per the owners
                  instructions).
                </p>
              </div>
              <div className="project-section project-links">
                <a
                  href="https://www.martech-airsuspensions.co.uk/"
                  target="_blank"
                >
                  <Button type="primary">
                    <span>Live demo</span>
                  </Button>
                </a>
                <a
                  href="https://github.com/JakubBednarz25/martech-2023"
                  target="_blank"
                >
                  <Button type="secondary">
                    <span>
                      <img src={Github} />
                      View code
                    </span>
                  </Button>
                </a>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
];

export { cards };
