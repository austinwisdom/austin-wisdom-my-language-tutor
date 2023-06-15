import { Link } from "react-router-dom";

import flagUS from "../../assets/icons/flag-us.png"
import flagES from "../../assets/icons/flag-es.png"
import flagBR from "../../assets/icons/flag-br.png"
import flagDE from "../../assets/icons/flag-de.png"
import flagJP from "../../assets/icons/flag-jp.png"
import flagFR from "../../assets/icons/flag-fr.png"

import "./MyTutorPage.scss"

const MyTutorPage = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <main className="page__container">
            <section className="page__container--tutor">
                {/* <h1 className="page__heading">MyTUTOR</h1> */}
                <div className="page__container--conversation" contenteditable>
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
                <h2 className="info__heading">Topics</h2>
        
                <div className="info__container--buttons">
                    <button className="info__button">Ordering a drink</button>
                    <button className="info__button">Talking about hobbies</button>
                    <button className="info__button">Introducing a friend</button>
                    <button className="info__button">Asking for directions</button>
                    <button className="info__button">Talking about the weekend</button>
                    <button className="info__button">Checking into an Airbnb</button>
                </div>

                <div>
                    <h2 className="info__heading">Language</h2>
                    <div>
                        <div>
                            <img src={flagUS} className="info__img--language" alt="language selector for "/>
                            <img src={flagBR} className="info__img--language" alt="language selector for "/>
                            <img src={flagES} className="info__img--language" alt="language selector for "/>
                        </div>
                        <div>
                            <img src={flagDE} className="info__img--language" alt="language selector for "/>
                            <img src={flagJP} className="info__img--language" alt="language selector for "/>
                            <img src={flagFR} className="info__img--language" alt="language selector for "/>
                        </div>
                    </div>
                
                </div>
    
            </section>
            
        </main>
    );
};

export default MyTutorPage;