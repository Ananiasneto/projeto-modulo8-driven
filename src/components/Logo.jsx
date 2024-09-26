import logo from "../assets/logo.png";
import styled from 'styled-components'
export default function Logo(){
    return (
    <>
        <div><img src={logo} alt="" /></div>
        <TextoLogo><h1>ZapRecall</h1></TextoLogo>
    </> 
    )
}

const TextoLogo=styled.div`

    font-family: "Recursive", sans-serif;
    color: white;
    padding-left: 20px;
    font-weight: 400;

`