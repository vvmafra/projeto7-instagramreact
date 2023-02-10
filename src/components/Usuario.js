import { useState } from "react"

export default function Usuario() {
    const [nomeUsuario, setNomeUsuario] = useState("Username")
    const [fotoUsuario, setFotoUsuario] = useState("/assets/dog.jpg")

    function trocarNome() {
        const novoNome = prompt("Qual o novo nome do usuário")
        if (novoNome !== "") {
            setNomeUsuario(novoNome)
        }
    }

    function trocarFoto() {
        const novaFoto = prompt("Insira link da nova foto")
        if (novaFoto !== "") {
            setFotoUsuario(novaFoto)
        }
    }

    return (
        <div class="profile">
            <div class="prop-usuario" onClick={trocarFoto}>
            <PropsUsuario  imagem={fotoUsuario} nome={nomeUsuario} />
            </div>
            <button onClick={trocarNome}><ion-icon name="pencil" ></ion-icon></button>
        </div>
    )
}

function PropsUsuario(props) {

    return (
        <>
            <img src={props.imagem} />
            <h1><span class="negrito">{props.nome}</span></h1>
        </>
    )


}