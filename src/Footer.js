import { useState } from "react";

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
            <div className="footer-concluidos">
                <h2>🥳 Você terminou!!! 🥳</h2>
                <h2>E obteve {hits * 100 / 800}% de acertos</h2>
            </div>
        )
    } else {
        return (
            <div className="footer-concluidos">
                <div className="container-botoes">
                    <button disabled={counter > 7 ? true :
                        props.card.length !== 0 ? false : true} className="red"
                        onClick={() => wrong()}>
                        Não lembrei
                    </button>
                    <button disabled={counter > 7 ? true :
                        props.card.length !== 0 ? false : true} className="yellow"
                        onClick={() => medium()}>
                        Quase não lembrei
                    </button>
                    <button disabled={counter > 7 ? true :
                        props.card.length !== 0 ? false : true} className="green"
                        onClick={() => right()}>
                        Zap!
                    </button>
                </div>
                <h1>{counter}/8 concluidos</h1>
                <div>
                    {
                        iconsArray.map((n, i) => { return <img src={n} alt="img" key={i} /> })
                    }
                </div>
            </div>
        )
    }
};
