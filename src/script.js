import {Palavra, Jogo} from "./classes.js";
import listaPalavras from "./palavras.js";

let jogo = new Jogo(); //Objeto de controle para o jogo

let tema = Math.floor(Math.random() * listaPalavras.length);
console.log(tema);
const localTema = document.getElementById('tema');
switch (tema){
    case 0:
        localTema.textContent = "Países";
        break;
    case 1:
        localTema.textContent = "Cores";
        break;
    case 2:
        localTema.textContent = "Frutas";
        break;
    case 3:
        localTema.textContent = "Animais";
        break;
    case 4:
        localTema.textContent = 'Profissões'
        break;
    case 5:
        localTema.textContent = "Esportes";
        break;
    default:
        console.error('Error');
}

let indice = Math.floor(Math.random() * listaPalavras[tema].length); // Indice aleatório para a escolha da palavra.
let escolhida = new Palavra(listaPalavras[tema][indice]); // Criando o objeto que é a palavra escolhida

document.getElementById('char').textContent = escolhida.getCaracteres().join(' ');

const testarLetra = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    escolhida.setTeste(document.getElementById('tentativa').value.toUpperCase(), jogo);
    document.getElementById('tentativa').value = "";
    return false;
}
window.testarLetra = testarLetra;

const deNovo = () => {
    location.reload();
};
window.deNovo = deNovo;