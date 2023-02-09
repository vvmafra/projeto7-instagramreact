import Corpo from "./Corpo"
import NavBar from "./NavBar"
import Posts from "./Posts"
import SideBar from "./SideBar"
import Stories from "./Stories"
import Sugestoes from "./Sugestoes"
import Usuario from "./Usuario"

function App() {
    return (
        <div className="pagina">
            <div className="background-topo"></div>
            <div className="conteudo">
                <NavBar />
                <Corpo />
                <SideBar />

            </div>
        </div>
    )
}


export default App