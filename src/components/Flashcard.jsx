import playImage from '../assets/seta_play.png'

export default function Flashcard({pergunta,resposta,index}){
    return (
    <>
    <div className="pergunta">
        <h1>pergunta {index}</h1>
        
        <button>
            <img src={playImage} alt="" />
        </button>
        
    </div>
     
    </> 
    )
}
//tem seu feeedbacks