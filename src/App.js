import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";
import imgCerto from "./assets/img/icone_certo.png";
import imgQuase from "./assets/img/icone_quase.png";
import imgErro from "./assets/img/icone_erro.png";

export default function App() {
    const [pergunta, setPergunta] = useState([]);
    const [errou, setErrou] = useState([]);
    const [quase, setQuase] = useState([]);
    const [acertou, setAcertou] = useState([]);
    const [carta, setCarta] = useState("");
    
    return (
        <div className="screen-container">
            <Header />

            <Questions pergunta={pergunta} setPergunta={setPergunta} errou={errou}
                quase={quase} acertou={acertou} carta={carta} setCarta={setCarta}
                imgCerto={imgCerto} imgQuase={imgQuase} imgErro={imgErro} />

            <Footer setPergunta={setPergunta} errou={errou} setErrou={setErrou} quase={quase}
                setQuase={setQuase} acertou={acertou} setAcertou={setAcertou} carta={carta}
                setCarta={setCarta} imgCerto={imgCerto} imgQuase={imgQuase} imgErro={imgErro} />
        </div>
    )
};