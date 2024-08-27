// Seleciona os elementos do textarea e mensagem
const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.mensagem');

// Função para encriptar texto
function btnEncriptografar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = '';
    
    // Remove a imagem de fundo quando o texto é encriptado
    if (mensagem.value.length > 0) {
        mensagem.style.backgroundImage = 'none';  // Remove a imagem de fundo
    }
}

// Função para encriptar o texto usando a matriz de substituição
function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

// Função para desencriptar texto
function btnDesencriptografar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = '';

    // Recoloca a imagem de fundo quando a função desencriptar é chamada
    if (mensagem.value.length === 0) {
        mensagem.style.backgroundImage = "url('img/lupa.png')";  // Recoloca a imagem de fundo
    } else {
        mensagem.style.backgroundImage = 'none';  // Remove a imagem de fundo
    }
}

// Função para desencriptar o texto usando a matriz de substituição
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}
