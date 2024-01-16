class Palavra {
    constructor(palavra){
        this._palavra = palavra.split('');
        this._quantLetra = this.getPalavra().length;
        this._caracteres = this.defChar();
        this._erros = 0;
    }

    getPalavra() {
        return this._palavra.join('');
    }

    getCaracteres(){
        return this._caracteres;
    }

    getErros(){
        return this._erros;
    }

    defChar() /* Método que conta os caracteres da palavra e define quantos underlines ela deve ter. */ {
        let _ = [];
        for(let i = 0; i <= this._quantLetra - 1; i++){
            _.push("__");
        };
        return _;
    }

    setTeste(teste, jogo, fim) /* Setter que testa se a letra digitada pelo usuário faz parte da própria palavra */ {
        const msg = document.getElementById('msg');
        const img = document.getElementById('img');

        let contem = false; // Variável de controle

        // Lógicas e condições do setter abaixo:
        for(let i = 0; i < this._quantLetra; i++){
            if(teste === this._palavra[i]){
                this._caracteres[i] = teste;
                contem = true;
                msg.textContent = "";
            }
        }
        for(let i = 0; i <= jogo.getLetras().length; i++) /* Loop de controle para saber se o usuário já digitou a letra */ {
            if(teste == jogo.getLetras()[i]){
                msg.classList.remove("text-red-500")
                msg.textContent = "Você já digitou essa letra.";
                return true;
            }
        }
        jogo.setLetras(teste); //letrasDigitadas.push(teste);
        document.getElementById('Letras').textContent = jogo.getLetras().join(', ');
        if(contem === false && teste != this.getPalavra()){
            msg.classList.add('text-red-500');
            msg.textContent = 'Essa letra não existe na palavra escolhida.';
            this._erros++
            img.src = `./Forcas/Forca${this.getErros()}.png`
        }
        if (teste === this.getPalavra() || this._caracteres.join('') === this._palavra.join('')){
            jogo.setAndamento(false);

            msg.classList.remove('text-red-500');
            msg.classList.add('text-yellow-600');
            msg.innerHTML = `Você ganhou! A palavra é <strong>${this._palavra.join('')}</strong>`;
            document.getElementById('tentativa').readOnly = true;
            document.getElementById('btn').style.display = 'none';
            document.getElementById('deNovo').style.display = 'block';
        }
        else if(this.getErros() == 6){
            jogo.setAndamento(false);
            
            msg.classList.add("text-red-500");
            msg.innerHTML = `Você perdeu! A palavra é <strong>${this._palavra.join('')}</strong>`;
            document.getElementById('tentativa').readOnly = true;
            document.getElementById('btn').style.display = 'none';
            document.getElementById('deNovo').style.display = 'block';
        }

        document.getElementById('char').innerHTML = teste === this.getPalavra() ? this.getPalavra() : this.getCaracteres().join(' ');
    }
};

class Jogo{
    constructor(){
        this._andamento = true;
        this._letrasDigitadas = [];
    }

    getAndamento(){
        return this._andamento;
    }

    setAndamento(valor){
        this._andamento = valor;
    }

    getLetras(){
        return this._letrasDigitadas;
    }

    setLetras(letra){
        this._letrasDigitadas.push(letra);
    }
}

export {Palavra, Jogo};