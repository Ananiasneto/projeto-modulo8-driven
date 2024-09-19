import logo from "../assets/logo.png";
export default function Logo(){
    return (
    <>
        <div><img src={logo} alt="" /></div>
        <div className="textoLogo"><h1>ZapRecall</h1></div>
    </> 
    )
}