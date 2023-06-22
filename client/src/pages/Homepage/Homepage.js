import Footer from "../../components/Footer/Footer";
import ProgressGauges from "../../components/ProgressGauges/ProgressGauges";

import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <main>
        <section className="home__container">
          <article className="home__stats">
            <div>
              <h2>7 day streak!</h2>
            </div>
            <div>
              <h2>2,326 words spoken</h2>
            </div>
          </article>
          <article className="home__stats">
            <div>
              <h2>Daily Challenges</h2>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Homepage;
