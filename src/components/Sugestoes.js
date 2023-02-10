export default function Sugestoes() {
    const sugestoesVoce = [
        { imagemSugestao: "assets/Green.jpg", usuarioSugestao: "Jalen.Green", segue: "Segue você" },
        { imagemSugestao: "assets/ney.jpg", usuarioSugestao: "menino.ney", segue: "Novo no instagram" },
        { imagemSugestao: "assets/fluminense.jpg", usuarioSugestao: "fluzão", segue: "Segue você" },
        { imagemSugestao: "assets/henry.jpg", usuarioSugestao: "T_Henry", segue: "Segue você" },
        { imagemSugestao: "assets/Martinelli.jpg", usuarioSugestao: "MartinelliG", segue: "Novo no instagram" },
    ]

    return (
        <div class="todas-sugestoes">
            <div class="sugestoes">
                <div class="sugestoes-voce">
                    <h1> Sugestões para você</h1>
                </div>
                <div class="ver-tudo"><span class="negrito">Ver tudo</span>
                </div>
            </div>
            {sugestoesVoce.map((s) => <Sugestao imagemSugestao={s.imagemSugestao} usuarioSugestao={s.usuarioSugestao} segue={s.segue} />)}
        </div>
    )
}

function Sugestao(props) {
    return (
    <div class="container-segue-seguir">
        <div class="container-segue-voce">
            <img src={props.imagemSugestao} />
            <div class="usuario-segue-voce">
                <p class="usuario">{props.usuarioSugestao}</p>
                <p class="segue-voce">{props.segue}</p>
            </div>
        </div>
        <div class="seguir">
            Seguir
        </div>
    </div>
    )
}
