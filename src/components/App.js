import Corpo from "./Corpo"
import NavBar from "./NavBar"
import SideBar from "./SideBar"

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