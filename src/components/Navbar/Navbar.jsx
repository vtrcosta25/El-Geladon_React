// importando as imagens que fizemos download e salvando dentro uma variável
// import sacola from "assets/icons/sacola.svg"
// import logo from "assets/logo.svg"

// props = {
//     logo: "assets....",
//     sacola: "assets..."
// }

// function Navbar({logo, sacola}){
    function Navbar(props){

        // const {logo, sacola} = props
        // const logo = props.logo
        // const sacola = props.sacola 
    
        return(
            <div className="Home__header Header">
                <div className="row">
                    <div className="Header__logo Logo">
                    <img
                        src={props.logo}
                        width="70px"
                        alt="Logo El Geladon"
                        className="Logo__icone"
                    />
                    <span className="Logo__titulo"> El Geladon </span>
                    </div>
                    <div className="Header__opcoes Opcoes">
                    <div className="Opcoes__sacola Sacola">
                        <img
                        src={props.sacola}
                        width="40px"
                        className="Sacola__icone"
                        alt="Sacola de compras"
                        />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Navbar