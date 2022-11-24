import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="section--doctors_module content-wide">
        <div className="c-doctors">
          <div className="content-wrapper">
            <div className="columns columns--2-widecontent columns--reverse">
              <div className="columns__item--title c-doctors__copy">
                <header className="eyebrow">Have a real conversation</header>
                <h2 className="c-doctors__title">
                  Select a doctor of your choice
                </h2>
                <ul className="c-doctors__checklist">
                  <li>Caring doctors - ready to help</li>
                  <li>Experienced and board-certified</li>
                  <li>Trained to perform visits online</li>
                </ul>

                <div className="c-doctors__cta c-doctors__cta--desktop">
                  <a className="ui-btn ui-btn--solid" href="#">
                    See a doctor now
                  </a>{" "}
                </div>
              </div>

              <div
                className="columns__item--content c-doctors__list-wrapper"
                data-component="doctors-slider"
              >
                <div className="c-doctors__list-holder">
                  <div className="c-doctors__list">
                    <div className="c-doctors__profile">
                      <div className="c-doctors__profile-image">
                        <img
                          alt="Photo of Imran Ahmad"
                          className="lazy"
                          src="https://www.woodlandshospital.in/images/doctor-img/imran-ahmed.jpg"
                        ></img>
                      </div>
                      <div className="c-doctors__profile-name">Imran Ahmad</div>
                      <div className="c-doctors__profile-field">
                        Family Physician
                      </div>
                      <div className="c-doctors__profile-rating">
                        <div
                          className="c-doctor__profile-stars stars_5"
                          role="image"
                          aria-label="Star rating is 5 stars"
                        >
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>

                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                        </div>
                      </div>
                      <div className="c-doctors__profile-exp">
                        12 years of experience
                      </div>
                      <div className="c-doctors__profile-education">
                        University Of Illinois at Chicago Medical School
                      </div>
                    </div>{" "}
                    <div className="c-doctors__profile">
                      <div className="c-doctors__profile-image">
                        <img
                          alt="Photo of Janice Johnston"
                          className="lazy"
                          src="https://www.woodlandshospital.in/images/doctor-img/prasenjit-chatterjee.jpg"
                        ></img>
                      </div>
                      <div className="c-doctors__profile-name">Imran Ahmad</div>
                      <div className="c-doctors__profile-field">
                        Family Physician
                      </div>
                      <div className="c-doctors__profile-rating">
                        <div
                          className="c-doctor__profile-stars stars_5"
                          role="image"
                          aria-label="Star rating is 5 stars"
                        >
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                        </div>
                      </div>
                      <div className="c-doctors__profile-exp">
                        26 years of experience
                      </div>
                      <div className="c-doctors__profile-education">
                        University of Toronto
                      </div>
                    </div>{" "}
                    <div className="c-doctors__profile">
                      <div className="c-doctors__profile-image">
                        <img
                          alt="Photo of Wilbert Cain"
                          className="lazy"
                          src="https://www.woodlandshospital.in/images/doctor-img/SUBESHA-BASU-ROY.jpg"
                        ></img>
                      </div>
                      <div className="c-doctors__profile-name">
                        Subesha Basu Roy
                      </div>
                      <div className="c-doctors__profile-field">
                        Obstetrics & Gynaecology
                      </div>
                      <div className="c-doctors__profile-rating">
                        <div
                          className="c-doctor__profile-stars stars_5"
                          role="image"
                          aria-label="Star rating is 5 stars"
                          style={{ marginBottom: "3.43vh" }}
                        >
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>

                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                          <img
                            src="images\star.png"
                            alt="Rating star"
                            className="lazy"
                          ></img>
                        </div>
                        <div className="c-doctors__profile-exp">
                          33 years of experience
                        </div>
                        <div className="c-doctors__profile-education">
                          MeHarry Medical College
                        </div>
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
