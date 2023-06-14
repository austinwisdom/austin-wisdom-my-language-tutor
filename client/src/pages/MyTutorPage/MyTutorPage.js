import { Link } from "react-router-dom";

import "./MyTutorPage.scss"

const MyTutorPage = () => {

    const onSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <main className="page__container">
            <section className="page__container--tutor">
                <h1>MyTUTOR</h1>
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
        
                    <button className="info__button">Ordering a drink</button>
                    <button className="info__button">Talking about hobbies</button>
                    <button className="info__button">Introducing a friend</button>
                    <button className="info__button">Asking for directions</button>
                    <button className="info__button">Talking about the weekend</button>
                    <button className="info__button">Checking into an Airbnb</button>
    
            </section>
            
        </main>
    );
};

export default MyTutorPage;