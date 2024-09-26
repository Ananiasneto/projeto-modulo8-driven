import { useState } from "react";
import icone_certo from "..//assets/icone_certo.png";
import icone_errado from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";

export default function Feedback({index,setQuestao,setControle}){
    
    const[imagemFeed,setImagemFeed]=useState('');
    const[resposta,setResposta]=useState(false);
    function selecionada(imagem){
        setImagemFeed(imagem);
        setResposta(true);
        respostaFeed();
    }
    function respostaFeed(){
        setQuestao('pergunta ' +(index+1))
        setControle(true);
    }

    return (
    
     <><div>
        <img src={imagemFeed} alt="" />
     </div>
    <div className={resposta ? 'feed': 'feedBack'}>
        <div className= "errado"><button onClick={()=>selecionada(icone_errado)}>não lembrei </button></div>
        <div className="quase"><button onClick={()=>selecionada(icone_quase)}>quase não lembrei</button></div>
        <div className="certo"><button onClick={()=>selecionada(icone_certo)}>zap</button></div>
    </div>
      
     </> 
     )
 }