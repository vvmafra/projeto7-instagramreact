
export default function NavBar() {
    return (
        <div className="menu-topo">
            <div className="menu-topo-esquerdo">
                <ion-icon name="logo-instagram" className="logo-insta"></ion-icon>
                <div className="linha"></div>
                <img src="/assets/logo-insta.png" />
            </div> {/*menu topo esquerdo*/}
            <div className="menu-topo-centro">
                Pesquisar
            </div> {/*menu topo centro*/}
            <div className="menu-topo-direito">
                <ion-icon className="paper-plane" name="paper-plane-outline"></ion-icon>
                <ion-icon className="compass" name="compass-outline"></ion-icon>
                <ion-icon className="heart" name="heart-outline"></ion-icon>
                <ion-icon className="person" name="person-outline"></ion-icon>
            </div> {/*menu topo direito*/}
        </div>
        )
}