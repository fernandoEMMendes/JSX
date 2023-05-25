import "../../css/Contato.css"
import zapzap from "../../imgs/whatsapp.png"

function Contato() {
    return (
        <div>
            <a className="titulotexto">Mande um zap e marque um horario!</a><br /><br /> 
            <img src={zapzap} alt="Whatsapp" width="30"/>
            <a className="contatotexto">WhatsApp: (14)99164-7879</a>
        </div>
    )
}

export default Contato