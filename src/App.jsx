import Logo from './components/Logo'
import Deck from './components/Deck'
import styled from 'styled-components'

export default function App() {
  
  return (
    <Conteudo>
    <ImagemLogo>
      <Logo/>
    </ImagemLogo>
    <Deck/>
    </Conteudo>
  )
}
const Conteudo=styled.div`
background-color: #FB6B6B;
background-size: cover; 
`

const ImagemLogo=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    img{
    width: 52px;
    height: 60px;
}
`

