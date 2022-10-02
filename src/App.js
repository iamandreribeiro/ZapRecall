import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";
import imgRight from "./assets/img/icone_certo.png";
import imgMedium from "./assets/img/icone_quase.png";
import imgWrong from "./assets/img/icone_erro.png";

export default function App() {
    const [question, setQuestion] = useState([]);
    const [wrongAnswer, setWrongAnswer] = useState([]);
    const [mediumAnswer, setMediumAnswer] = useState([]);
    const [rightAnswer, setRightAnswer] = useState([]);
    const [card, setCard] = useState("");
    const [lockOnClick, setLockOnClick] = useState("");

    return (
        <div className="screen-container">
            <Header />

            <Questions question={question} setQuestion={setQuestion} wrongAnswer={wrongAnswer}
                mediumAnswer={mediumAnswer} rightAnswer={rightAnswer} card={card}
                setCard={setCard} imgRight={imgRight} imgMedium={imgMedium}
                imgWrong={imgWrong} lockOnClick={lockOnClick} />

            <Footer setQuestion={setQuestion} wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer}
                mediumAnswer={mediumAnswer} setMediumAnswer={setMediumAnswer} rightAnswer={rightAnswer}
                setRightAnswer={setRightAnswer} card={card} setCard={setCard} imgRight={imgRight}
                imgMedium={imgMedium} imgWrong={imgWrong} setLockOnClick={setLockOnClick} />
        </div>
    )
};