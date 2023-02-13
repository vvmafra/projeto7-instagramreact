import { useState } from "react"

export default function Posts() {
    const postsObj = [
        { profileImagem: "/assets/Ronaldinho_in_2019.jpg", nomeProfile: "ronaldinho", postImagem: "/assets/Ronaldinho-hang.jpg", imgCurtido:"assets/dog.jpg" , curtido: "dog", numCurtidas: Number(902.008) },
        { profileImagem: "/assets/Jokic.jpg", nomeProfile: "Jokic", postImagem: "/assets/tigre-taco.jpg", imgCurtido:"/assets/logo-rockets.jpg", curtido: "Rockets", numCurtidas: Number(92.783) },
        { profileImagem: "/assets/stars.jpg", nomeProfile: "Stars__", postImagem: "/assets/supertaco.jpg", imgCurtido:"assets/tubo.jpg", curtido: "waves_rider", numCurtidas: Number(9.721) }
    ]
    return (

        <div class="posts">
            {postsObj.map((p) => <Post profileImagem={p.profileImagem} nomeProfile={p.nomeProfile} postImagem={p.postImagem} imgCurtido={p.imgCurtido} curtido={p.curtido} numCurtidas={p.numCurtidas} />)}
        </div>  
    )
}

function Post(props) {
    const [curtiu, setCurtiu] = useState("heart-outline")
    const [nLikes, setNLikes] = useState(props.numCurtidas)
    const [salvado, setSalvado] = useState("bookmark-outline")
    const [corLike, setCorLike] = useState("")


    function curtida() {
        if (curtiu === "heart-outline") {
            setCurtiu("heart");
            setNLikes(props.numCurtidas + 0.001)
            setCorLike("red")
        } else {
            setCurtiu("heart-outline")
            setNLikes(props.numCurtidas)
            setCorLike("")
        }
    }

    function curtidaFoto() {
        if (curtiu === "heart-outline") {
            setCurtiu("heart");
            setNLikes(props.numCurtidas + 0.001)
            setCorLike("red")
        }
    }

    function salvar() {
        if (salvado === "bookmark-outline") {
            setSalvado("bookmark");
        } else {
            setSalvado("bookmark-outline");
        }
    }




    return (
        <div class="post" data-test="post">
            <div class="titulo-post">
                <div class="titulo-post-esquerdo">
                    <img
                        src={props.profileImagem}
                    />
                    <p>{props.nomeProfile}</p>
                </div>

                <ion-icon
                    name="ellipsis-horizontal"
                ></ion-icon>

            </div>

            <img
                data-test="post-image"
                class="imagem-post"
                onClick={curtidaFoto}
                src={props.postImagem}
            />
            <div class="curtidas-post">
                <div class="curtidas-post-esquerda">
                    <ion-icon
                        data-test="like-post"
                        onClick={curtida}
                        name={curtiu}
                        style={{color: (corLike)}}
                    ></ion-icon>
                    <ion-icon
                        name="chatbubble-outline"
                    ></ion-icon>
                    <ion-icon
                        name="paper-plane-outline"
                    ></ion-icon>
                </div>

                <div class="curtidas-post-direita">
                    <ion-icon
                        data-test="save-post"
                        onClick={salvar}
                        name={salvado}
                    ></ion-icon>
                </div>

            </div>

            <div class="curtido-por">
                <img src={props.imgCurtido} />
                <p>
                    Curtido por
                    <span class="negrito"> {props.curtido} </span>
                    e
                    <span class="negrito" data-test="likes-number">
                        outras {nLikes} pessoas
                    </span>
                </p>
            </div>
        </div>

    )
}