import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";
import imgRight from "./assets/img/icone_certo.png";
import imgMedium from "./assets/img/icone_quase.png";
import imgWrong from "./assets/img/icone_erro.png";
import styled from "styled-components";
import GlobalStyle from "./assets/css/globalStyles";

export default function App() {
    const [question, setQuestion] = useState([]);
    const [wrongAnswer, setWrongAnswer] = useState([]);
    const [mediumAnswer, setMediumAnswer] = useState([]);
    const [rightAnswer, setRightAnswer] = useState([]);
    const [card, setCard] = useState("");
    const [lockOnClick, setLockOnClick] = useState("");

    return (
        <>
            <GlobalStyle />
            <StyledScreen>
                <Header />

                <Questions question={question} setQuestion={setQuestion} wrongAnswer={wrongAnswer}
                    mediumAnswer={mediumAnswer} rightAnswer={rightAnswer} card={card}
                    setCard={setCard} imgRight={imgRight} imgMedium={imgMedium}
                    imgWrong={imgWrong} lockOnClick={lockOnClick} />

                <Footer setQuestion={setQuestion} wrongAnswer={wrongAnswer} setWrongAnswer={setWrongAnswer}
                    mediumAnswer={mediumAnswer} setMediumAnswer={setMediumAnswer} rightAnswer={rightAnswer}
                    setRightAnswer={setRightAnswer} card={card} setCard={setCard} imgRight={imgRight}
                    imgMedium={imgMedium} imgWrong={imgWrong} setLockOnClick={setLockOnClick} />
            </StyledScreen>
        </>
    )
};

const StyledScreen = styled.div`
    background-color: #FB6B6B;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`