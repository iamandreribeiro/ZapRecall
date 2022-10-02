import Footer from "./Footer";
import Header from "./Header";
import Questions from "./Questions";
import { useState } from "react";

export default function App() {
    const [contador, setContador] = useState(0);
    const [errou, setErrou] = useState([]);
    const [quase, setQuase] = useState([]);
    const [acertou, setAcertou] = useState([]);

    return (
        <div className="screen-container">
            <Header />

            <Questions errou={errou} setErrou={setErrou}
                quase={quase} setQuase={setQuase}
                acertou={acertou} setAcertou={setAcertou} />

            <Footer contador={contador} setContador={setContador} />
        </div>
    )
};