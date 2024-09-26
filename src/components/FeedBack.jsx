import { useState } from "react";
import styled from 'styled-components'

export default function Feedback({index,setQuestao,setControle,mudaCor,icone_errado,icone_certo,icone_quase}){
    
    const[imagemFeed,setImagemFeed]=useState('');
    const[resposta,setResposta]=useState(false);
    function selecionada(imagem){
        setImagemFeed(imagem);
        setResposta(true);
        respostaFeed();
        mudaCor(imagem);
        
    }
    function respostaFeed(){
        setQuestao('pergunta ' +(index+1))
        setControle(true);
        
    }

    return (
    
     <><div>
        <img src={imagemFeed} alt="" />
     </div>
        <Feed resposta={resposta}>
        <Errado><button onClick={()=>selecionada(icone_errado)}>não lembrei</button></Errado>
        <Quase><button onClick={()=>selecionada(icone_quase)}> quase não lembrei</button></Quase>
        <Certo><button onClick={()=>selecionada(icone_certo)}>zap</button></Certo>
        </Feed> 
      
     </> 
     )
 }

 const Feed = styled.div`
  ${({ resposta }) => 
    resposta 
      ? `display: none;` 
      : `
        display: flex;
        justify-content: space-around;

        div {
          display: flex;
          justify-content: center;
          width: 85px;
          height: 38px; 
          border-radius: 8px;
        }

        button {
          font-family: "Recursive", sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 14.4px;
          color: #FFFFFF;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}
`;
const Certo = styled.div`background-color: #2fbe34;`
const Quase= styled.div`background-color: #e98930;`
const Errado = styled.div`background-color: #ff3030;`
