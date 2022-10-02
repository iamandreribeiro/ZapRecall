import logo from "./assets/img/logo.png";

export default function Header() {
    return (
        <div className="logo-container">
            <img src={logo} alt="logo"></img>
            <h1>ZapRecall</h1>
        </div>
    )
};