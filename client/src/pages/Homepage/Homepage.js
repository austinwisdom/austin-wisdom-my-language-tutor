import "./Homepage.scss";

const Homepage = () => {
  return (
    <>
      <main>
        <section className="home__container">
          <article className="home__stats home__stats--progress">
            <h2 className="home__heading home__heading--welcome">Welcome back</h2>
            <h1 className="home__heading home__heading--name">Smitty Werbenjägermanjensen!</h1>   
            <div className="challenge__div challenge__div--progress">
              <h2>Leaderboard Rank: <h2 className="number-one">#1</h2> </h2>
              <h2>Favorite languages: 🇩🇪 🇺🇲 🇧🇷</h2>
              <h2>230,326 words spoken</h2>
              <h2>🔥 976 day streak!</h2>
            </div>
          
          </article>
          <article className="home__stats">
            <div className="challenge__div">
              <h2 className="challenge__heading">Daily Challenges</h2>
              <ul className="challenge__ul">
                <li className="challenge__li"> ✅ Complete 3 conversations</li>
                <li className="challenge__li">Speak 300 words: 196/300 </li>
                <li className="challenge__li">✅ Complete 1 conversation in 2 different languages</li>
              </ul>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default Homepage;
