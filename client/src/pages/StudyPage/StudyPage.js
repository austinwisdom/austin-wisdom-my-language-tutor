import axios from "axios";
import { Link } from "react-router-dom";
import { Howl, Howler } from "howler";
import { useEffect, useState } from "react";

import { endPoint } from "../../utilities/endpoints";
import speakerIcon from "../../assets/icons/speaker-black.png";

import "./StudyPage.scss";

const StudyPage = () => {
  const [lessonSlide, setLessonSlide] = useState(0);

  const [lessonSlideArray] = useState([
    {
      id: 0,
      lesson_title: "What's up?",
      lesson_id: "Advanced I: Lesson 01",
      info_title: "Informal Greetings",
      info: '"What\'s up?" is one of the most common ways that Americans greet each other. It is considered informal, but you can still hear it in some professional environments.',
      info_title2: "",
    },
    {
      id: 1,
      lesson_title: "What's up?",
      lesson_id: "Advanced I: Lesson 01",
      info: "This is the second slide",
    },
  ]);

  const [audio, setAudio] = useState("");

  const goBack = (e) => {
    if (lessonSlide > 0) {
      setLessonSlide(lessonSlide - 1);
    }
  };

  const goForward = (e) => {
    if (lessonSlide < lessonSlideArray.length - 1) {
      setLessonSlide(lessonSlide + 1);
    }
  };

  const clickHandler = async (e) => {
    const textToSend = e.target.id;
    console.log(textToSend);
    //need to pass in text and language (to change voice)
    axios
      .post(`${endPoint}/study`, {
        textToSynthesize: `${textToSend}`,
      })
      .then((result) => {
        console.log(result);
        let audio = new Howl({
          src: [`${endPoint}/${result.data}`],
          autoplay: true,
        });
        setAudio(audio);
        audio.play();
      })
      .catch((err) => {
        console.log("Could not fetch study endpoint");
      });
  };

  return (
    <main className="study__container">
      <section className="study__container--tutor">
        <div className="lesson__div">
          <div className="lesson__info">
            <h2 className="lesson__title">
              {lessonSlideArray[lessonSlide].lesson_title}
            </h2>
            <p>{lessonSlideArray[lessonSlide].lesson_id}</p>
          </div>
        </div>
        <div className="study__container--conversation">
          <div className="lesson__container--info">
            <h3 className="lesson__container--heading">
              {lessonSlideArray[lessonSlide].info_title}
            </h3>
            <p className="lesson__container--body">
              {lessonSlideArray[lessonSlide].info}
            </p>
          </div>
        </div>
        <div className="lesson__buttons--div">
          <button className="lesson__buttons--navigate" onClick={goBack}>
            BACK
          </button>
          <button className="lesson__buttons--navigate" onClick={goForward}>
            NEXT
          </button>
        </div>
      </section>

      <section className="words__container--section">
        <article className="words__article">
          <h2 className="study__heading"> My words</h2>
          <div className="words__container">
          <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  className="words__img--icon"
                  id="I want to work for you."
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">I want to work for you.</h3>
                <p className="words__p">Quero trabalhar para você.</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  className="words__img--icon"
                  id="Sounds good!"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">Sounds good!</h3>
                <p className="words__p">Beleza!</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  id="Great job!"
                  className="words__img--icon"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>

              <div className="words__word--div">
                <h3 className="words__subheading">Great job!</h3>
                <p className="words__p">Bem feito!</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  id="You killed it!"
                  className="words__img--icon"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">You killed it!</h3>
                <p className="words__p">Arrasou!</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  id="What's up?"
                  className="words__img--icon"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">What's up?</h3>
                <p className="words__p">E aí, beleza!</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  id="How's it going?"
                  className="words__img--icon"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">How's it going?</h3>
                <p className="words__p">Tudo bem?</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                    id="I'm jobhunting."
                  className="words__img--icon"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">I'm jobhunting.</h3>
                <p className="words__p">Estou procurando emprego.</p>
              </div>
            </div>
            <div className="words__word">
              <button className="words__button--icon" onClick={clickHandler}>
                <img
                  className="words__img--icon"
                  src={speakerIcon}
                  alt="speaker icon, click for text to speech on each phrase"
                />
              </button>
              <div className="words__word--div">
                <h3 className="words__subheading">See you later!</h3>
                <p className="words__p">Até logo!</p>
              </div>
            </div>
          </div>
          <Link className="lesson__buttons--link" to={"/study/practice-words"}>
            <button className="lesson__buttons--practice">
              PRACTICE WORDS
            </button>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default StudyPage;
