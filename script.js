onload = () => {
    console.log('teste');
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(
            json => setcampo2(json),
        );
}

// function mostra_usuario(usuario) {
//     // console.log(usuario);
//     fetch('https://api.github.com/users/' + usuario)
//         .then(response => response.json())
//         .then(
//             json => setCampo(json),

//         );
// }

function setCampo(json) {
    document.getElementById('usuario').innerHTML = json['login'];
    document.getElementById("avatar").src = json['avatar_url'];
}

function setcampo2(dados) {
    console.log("<img src='" + dados['message'] + "'>");
    document.getElementById("sec1").innerHTML = "<img src='" + dados['message'] + "'>";
}