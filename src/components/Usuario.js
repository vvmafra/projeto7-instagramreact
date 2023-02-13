import { useState } from "react"

export default function Usuario() {
    const [nomeUsuario, setNomeUsuario] = useState("Username")
    const [fotoUsuario, setFotoUsuario] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrfi6fs9h09rEEkSRPckTTuw7bnu7h8eMYA&usqp=CAU")

    function trocarNome() {
        const novoNome = prompt("Qual o novo nome do usuário")
        if (novoNome !== "") {
            setNomeUsuario(novoNome)
        }
    }

    function trocarFoto() {
        const novaFoto = prompt("Insira link da nova foto")
        if (novaFoto !== "" || novaFoto !== "undefined") {
            setFotoUsuario(novaFoto)
        }
    }

    return (
        <div class="profile">
            <div data-test="profile-image" class="prop-usuario" onClick={trocarFoto}>
            <PropsUsuario  imagem={fotoUsuario} nome={nomeUsuario} />
            </div>
            <button onClick={trocarNome} data-test="edit-name"><ion-icon name="pencil" ></ion-icon></button>
        </div>
    )
}

function PropsUsuario(props) {

    return (
        <>
            <img src={props.imagem} />
            <div data-test="name"><span class="negrito" >{props.nome}</span></div>
        </>
    )


}