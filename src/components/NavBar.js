
export default function NavBar() {
    return (
        <div class="menu-topo">
            <div class="menu-topo-esquerdo">
                <ion-icon name="logo-instagram" class="logo-insta"></ion-icon>
                <div class="linha"></div>
                <img src="" /> {/* colocar em assets as imagens*/}
            </div> {/*menu topo esquerdo*/}
            <div class="menu-topo-centro">
                Pesquisar
            </div> {/*menu topo centro*/}
            <div class="menu-topo-direito">
                <ion-icon class="paper-plane" name="paper-plane-outline"></ion-icon>
                <ion-icon class="compass" name="compass-outline"></ion-icon>
                <ion-icon class="heart" name="heart-outline"></ion-icon>
                <ion-icon class="person" name="person-outline"></ion-icon>
            </div> {/*menu topo direito*/}
        </div>
        )
}