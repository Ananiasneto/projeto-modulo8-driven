import { useState } from 'react'
import playImage from '../assets/seta_play.png'
import imagemVirar from '../assets/seta_virar.png'
import Feedback from './FeedBack';


export default function Flashcard({pergunta,resposta,index}){
   const [questao,setQuestao]=useState('pergunta ' +(index+1)); 
   const [imagem,setImagem]=useState(playImage);
   const [respondida,setRespondida]=useState(false);
    
   function selecionado(){
    setQuestao(pergunta);
    setImagem(imagemVirar);
   }
   function pedeFeedBack(){
    setQuestao(resposta);
    setRespondida(true);
   }
   
   return (
    
   <></> 
    )
}


      