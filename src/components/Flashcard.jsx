import { useState } from 'react'
import playImage from '../assets/seta_play.png'
import imagemVirar from '../assets/seta_virar.png'
import Feedback from './FeedBack';



export default function Flashcard({pergunta,resposta,index}){
   const [questao,setQuestao]=useState('pergunta ' +(index+1)); 
   const [imagem,setImagem]=useState(playImage);
   const [respondida,setRespondida]=useState(false);
   const [controle,setControle]=useState(false);

   function selecionado(){
    setQuestao(pergunta);
    setImagem(imagemVirar);
   }
   function pedeFeedBack(){
    setQuestao(resposta);
    setRespondida(true);
   }

   
   return (
    
   <>
<div className={`pergunta ${!controle ? (imagem === playImage ? '' : 'selecionada') + ' ' + (respondida ? 'final' : '') : 'finalizada'}`}>


    <h1 >{questao}</h1>
    <button onClick={(imagem===playImage) ? selecionado : pedeFeedBack} className={(respondida) ? 'botao feed' : 'botao'}>
        <img className="imgBotao" src={imagem} alt="" />
       
    </button>
    <div className={(!respondida) ? 'feed' : ''}>
        <Feedback index={index} setQuestao={setQuestao} setControle={setControle}/>
    </div>
   </div>
   </> 
    )
}
// className={`${imagemFeed===icone_errado ?'escolhida' : ''}`}

      