import React from 'react'
import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'
import video3 from '../../videos/video3.mp4'
import video4 from '../../videos/video4.mp4'
import video5 from '../../videos/video5.mp4'
import video6 from '../../videos/video6.mp4'
import video7 from '../../videos/video7.mp4'
import '../../css/Servicos.css'

export default function Servicos (){
    return(
        <div class="embed-responsive embed-responsive-16by9"><br/>

        <h2 class='textoServiço'>Tricoscopio</h2>
        <iframe class="embed-responsive-item" src={video1} width="600" height="400" allowfullscreen="" onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        <h2 class='textoServiço'>Silene Cassia falando sobre o Trabalho</h2>
        <iframe class="embed-responsive-item" src={video2} width="600" height="400" allowfullscreen="" onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        <h2 class='textoServiço'>Nome não identificado</h2>
        <iframe class="embed-responsive-item" src={video3} width="600" height="400" allowfullscreen=""onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        <h2 class='textoServiço'>Alta Frequência</h2>
        <iframe class="embed-responsive-item" src={video4} width="600" height="400" allowfullscreen="" onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        <h2 class='textoServiço'>Laser e Led</h2>
        <iframe class="embed-responsive-item" src={video5} width="600" height="400" allowfullscreen="" onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        <h2 class='textoServiço'>convite de Claudia Mendes sobre o Tricoscopio</h2>
        <iframe class="embed-responsive-item" src={video6} width="600" height="400" allowfullscreen="" onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        <h2 class='textoServiço'>Nome não identificado</h2>
        <iframe class="embed-responsive-item" src={video7} width="600" height="400" allowfullscreen=""  onLoad={pause} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br/>
        </div>

    )
}
