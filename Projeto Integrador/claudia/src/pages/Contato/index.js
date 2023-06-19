import "./Contato.css"
import zapzap from "../../imgs/whatsapp.png"

function Contato() {
    return (
        <div>
            <a className="alinhar">Mande um zap e marque um horario!</a><br /><br />
            <img src={zapzap} alt="Whatsapp" width="30" />
            <a className="alinhar">WhatsApp: (14)99164-7879</a><br />
            <a>[img] </a>
            <a>Instagram: [nome]</a> <br />
            <a>[img]</a>
            <a>Rede-social:[nome]</a>
        </div>
    )
}

export default Contato