import { Link } from "react-router-dom";

import flagUS from "../../assets/icons/flag-us.png"
import flagES from "../../assets/icons/flag-es.png"
import flagBR from "../../assets/icons/flag-br.png"
import flagDE from "../../assets/icons/flag-de.png"
import flagJP from "../../assets/icons/flag-jp.png"
import flagFR from "../../assets/icons/flag-fr.png"

import "./StudyPage.scss"

const StudyPage = () => {

    const langArrays = {
        lang: "en",
        words_en: ["See you later!", "What's up?", "That's awesome!", "cool", "smart"],
        words_pt: ["Até logo!", "Fala aí!", "Que legal!", "legal, beleza", "inteligente"]
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const onClickHandler = (e) => {
        console.log("Build this out")
    }

    return (
        <main className="page__container">
            <section className="page__container--tutor">
                <div className="page__container--conversation">
                    <p className="conversation__phrase conversation__phrase--ai">Daily Lesson</p>
                </div>
                <form className="form" onSubmit={onSubmit}>
                    <label id="userInput"></label>
                    <textarea 
                        className="form__textarea"
                        name="userInput"
                        id="userInput"
                    >
                    </textarea>
                    <button className="form__button--submit">SEND</button>
                </form>
            </section>

            <section className="info__container">
                <h2 className="info__heading"> My words</h2>
        
                <div className="info__container--buttons">
                    <Link to={"/my-tutor/en/0"}><button id={0} className="info__button">Ordering a drink</button></Link>
                    <Link to={"/my-tutor/en/1"}><button id={1} className="info__button">Talking about hobbies</button></Link>
                    <Link to={"/my-tutor/en/2"}><button id={2} className="info__button">Introducing a friend</button></Link>
                    <Link to={"/my-tutor/en/3"}><button id={3} className="info__button">Asking for directions</button></Link>
                    <Link to={"/my-tutor/en/4"}><button id={4} className="info__button">Talking about the weekend</button></Link>
                    <Link to={"/my-tutor/en/5"}><button id={5} className="info__button">Checking into an Airbnb</button></Link>
                    <Link to={"/my-tutor/en/6"}><button id={6} className="info__button">Dream vacation</button></Link>
                </div>

                <div>
                    {/* <h2 className="info__heading">Language</h2> */}
                    <div className="info__container--languages">
                        <div className="info__div--buttons">
                            <Link><button onClick={onClickHandler} id="es" className="info__button--flag"><img src={flagUS} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="pt" className="info__button--flag"><img src={flagBR} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="es" className="info__button--flag"><img src={flagES} className="info__img--language" alt="language selector for "/></button></Link>
                        </div>
                        <div className="info__div--buttons">
                            <Link><button onClick={onClickHandler} id="de" className="info__button--flag"><img src={flagDE} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="jp" className="info__button--flag"><img src={flagJP} className="info__img--language" alt="language selector for "/></button></Link>
                            <Link><button onClick={onClickHandler} id="fr" className="info__button--flag"><img src={flagFR} className="info__img--language" alt="language selector for "/></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default StudyPage;

