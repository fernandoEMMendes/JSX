import "../../css/Contato.css"
import zapzap from "../../imgs/whatsapp.png"

function Contato() {
    return (
        <div>
            <h2>Mande um zap e marque um horario!</h2>
            <img src={zapzap} width="40"/>
            <a className="contatotexto">WhatsApp: (14)99164-7879</a>
        </div>
    )
}

export default Contato