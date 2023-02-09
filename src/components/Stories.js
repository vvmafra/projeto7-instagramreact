export default function Stories() {
    const storiesInsta = [
        { imagem: "/assets/dog.jpg", nome: "dog" },
        { imagem: "/assets/Ronaldinho_in_2019.jpg", nome: "ronaldinho" },
        { imagem: "/assets/Jokic.jpg", nome: "Jokic" },
        { imagem: "/assets/Arsenal.jpg", nome: "Arsenal" },
        { imagem: "/assets/logo-rockets.jpg", nome: "Rockets" },
        { imagem: "/assets/stars.jpg", nome: "Stars" },
        { imagem: "/assets/Doncic.jpg", nome: "Magic77" },
        { imagem: "/assets/tubo.jpg", nome: "waves_rider" },

    ]
    return (
        <div class="stories">
            {storiesInsta.map((i) => <Story nome={i.nome} imagem={i.imagem} />)}

            <div class="seta">
                <ion-icon
                    name="chevron-forward-circle"
                ></ion-icon>
            </div>
        </div>
    )

}

function Story(props) {
    return (
        <div class="caixa-stories">
            <img class="background-stories" src="/assets/stories_background.jpg" />
            <img class="imagem" src={props.imagem} />
            <p>{props.nome}</p>
        </div>
    )
}