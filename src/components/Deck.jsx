import { useState } from "react";
import styled from 'styled-components'
import ConclusionBar from "./ConclusionBar";
import Flashcard from "./Flashcard";

const cards = [
    { question: "Em que episódio Ace morreu? ", answer: "Episodio 483" },
    { question: "Por quem Law foi salvo? ", answer: "Corazón" },
    { question: "Qual é o primeiro aliado de Luffy em sua aventura?", answer: "Zoro" },
    { question: "Quem era o pirata com a maior recompensa do East Blue antes de ser derrotado por Luffy?", answer: "Arlong" },
    { question: "Qual o maior sonho de Sanji?", answer: "Encontrar o All Blue" },
    { question: "Qual a principal característica de Ussop?", answer: "Mentiroso" },
    { question: "O que Chopper é?", answer: "Uma rena" }
];

export default function Deck() {
    const [concluidas, setConcluidas] = useState(0);

    return (
        <>
            <CentralizarCards>
                <div>
                    {cards.map((card, index) => (
                        <div key={index}>
                            <Flashcard 
                                pergunta={card.question} 
                                resposta={card.answer} 
                                index={index} 
                                setConcluidas={setConcluidas} 
                                concluidas={concluidas}
                            />
                        </div>
                    ))}
                </div>
            </CentralizarCards>
            <div>
                <ConclusionBar cards={cards} concluidas={concluidas} />
            </div>
        </>
    );
}
const CentralizarCards=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 70px;
`

