import { useState } from "react";
import styled from "styled-components";

let iconsArray = [];

export default function Footer(props) {
    const [hits, setHits] = useState(0);
    const [counter, setCounter] = useState(0);
    const [icons, setIcons] = useState([]);

    function wrong() {
        const wrong = [...props.wrongAnswer, props.card];
        iconsArray = [...icons, props.imgWrong];
        setHits(hits + 0);
        setCounter(counter + 1);
        props.setWrongAnswer(wrong);
        setIcons(iconsArray);
        props.setCard([]);
        props.setQuestion([]);
        props.setLockOnClick(wrong);
    }

    function medium() {
        const medium = [...props.mediumAnswer, props.card];
        iconsArray = [...icons, props.imgMedium];
        setHits(hits + 50);
        setCounter(counter + 1);
        props.setMediumAnswer(medium);
        setIcons(iconsArray);
        props.setCard([]);
        props.setQuestion([]);
        props.setLockOnClick(medium);
    }

    function right() {
        const right = [...props.rightAnswer, props.card];
        iconsArray = [...icons, props.imgRight];
        setHits(hits + 100);
        setCounter(counter + 1);
        props.setRightAnswer(right);
        setIcons(iconsArray);
        props.setCard([]);
        props.setQuestion([]);
        props.setLockOnClick(right);
    }

    if (counter > 7) {
        return (
            <StyledFooter>
                <h2>🥳 Você terminou!!! 🥳</h2>
                <h2>E obteve {hits * 100 / 800}% de acertos</h2>
            </StyledFooter>
        )
    } else {
        return (
            <StyledFooter>
                <StyledContainer>
                    <StyledButton disabled={counter > 7 ? true :
                        props.card.length !== 0 ? false : true}
                        onClick={() => wrong()}>
                        Não lembrei
                    </StyledButton>
                    <StyledButton disabled={counter > 7 ? true :
                        props.card.length !== 0 ? false : true}
                        onClick={() => medium()}>
                        Quase não lembrei
                    </StyledButton>
                    <StyledButton disabled={counter > 7 ? true :
                        props.card.length !== 0 ? false : true}
                        onClick={() => right()}>
                        Zap!
                    </StyledButton>
                </StyledContainer>
                <h1>{counter}/8 concluidos</h1>
                <div>
                    {
                        iconsArray.map((n, i) => { return <img src={n} alt="img" key={i} /> })
                    }
                </div>
            </StyledFooter>
        )
    }
};

const StyledFooter = styled.div`
    width: 100%;
    min-height: 50px;
    background-color: #FFFFFF;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    padding: 10px;
`

const StyledContainer = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;    
`

const StyledButton = styled.button`
    width: 90px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 5px;
    &:nth-child(1) {
        background: #FF3030;
    }
    &:nth-child(2) {
        background: #FF922E;
    }
    &:nth-child(3) {
        background: #2FBE34;
    }
`
