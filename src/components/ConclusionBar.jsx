import styled from 'styled-components'
export default function ConclusionBar({cards,concluidas}){
    return (
    <>
    <Conclusion>
        <p>{concluidas}/{cards.length} concluídas</p>
    </Conclusion>
    </> 
    )
}

const Conclusion=styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #FFFFFF;
    text-align: center;
    z-index: 1; 
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 18px;
`