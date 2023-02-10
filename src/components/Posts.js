export default function Posts() {
    const postsObj = [
        { profileImagem: "/assets/Ronaldinho_in_2019.jpg", nomeProfile: "ronaldinho", postImagem: "/assets/Ronaldinho-hang.jpg", imgCurtido:"assets/dog.jpg" , curtido: "dog", numCurtidas: "3.902.008" },
        { profileImagem: "/assets/Jokic.jpg", nomeProfile: "Jokic", postImagem: "/assets/tigre-taco.jpg", imgCurtido:"/assets/logo-rockets.jpg", curtido: "Rockets", numCurtidas: "92.783" },
        { profileImagem: "/assets/stars.jpg", nomeProfile: "Stars__", postImagem: "/assets/supertaco.jpg", imgCurtido:"assets/tubo.jpg", curtido: "waves_rider", numCurtidas: "9.721" }
    ]
    return (

        <div class="posts">
            {postsObj.map((p) => <Post profileImagem={p.profileImagem} nomeProfile={p.nomeProfile} postImagem={p.postImagem} imgCurtido={p.imgCurtido} curtido={p.curtido} numCurtidas={p.numCurtidas} />)}
        </div>  
    )
}

function Post(props) {
    return (
        <div class="post">
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
                class="imagem-post"
                src={props.postImagem}
            />
            <div class="curtidas-post">
                <div class="curtidas-post-esquerda">
                    <ion-icon
                        name="heart-outline"
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
                        name="bookmark-outline"
                    ></ion-icon>
                </div>

            </div>

            <div class="curtido-por">
                <img src={props.imgCurtido} />
                <p>
                    Curtido por
                    <span class="negrito"> {props.curtido} </span>
                    e
                    <span class="negrito">
                        outras {props.numCurtidas} pessoas
                    </span>
                </p>
            </div>
        </div>

    )
}