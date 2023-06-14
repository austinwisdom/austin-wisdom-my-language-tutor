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
            <section className="page__container--info">
                <h2>Topics</h2>
            </section>
            
        </main>
    );
};

export default MyTutorPage;