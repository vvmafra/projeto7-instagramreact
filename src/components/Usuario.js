export default function Usuario() {
    return (
        
            <PropsUsuario imagem={"/assets/dog.jpg"} nome={"dog"} />
    )
}

function PropsUsuario(props) {
    return (
        <div class="profile">
        <img src={props.imagem}/>
            <h1><span class="negrito">{props.nome}</span><ion-icon name="pencil"></ion-icon></h1>
        </div>
    )
}