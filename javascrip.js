let nome = document.getElementById("nome");
let numeroPokemon = document.getElementById("numeroPokemon");
let img = document.getElementById("img");
let tipo1 = document.getElementById("tipo1");
let tipo2 = document.getElementById("tipo2");
let altura = document.getElementById("altura");
let peso = document.getElementById("peso");
let ataque = document.getElementById("ataque");
let defesa = document.getElementById("defesa");
let velocidade = document.getElementById("velocidade");
let ataqueEspecial = document.getElementById("ataqueEspecial");
let icon = document.getElementById("icon");
let propriedades = document.getElementById("propriedades");
let tela = document.getElementById("tela");
let audio = document.getElementById("audio");
let erro = document.getElementById("erro");

let ir = document.getElementById("ir");
let voltar = document.getElementById("voltar");

let pokemon = document.getElementById("pokemon");
let numero = document.getElementById("numero");

let numeroInicial = 0

function letraMaiuscula(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
    //str.charAt(0) pega o primeiro caracter do nome
    //.toUpperCase() transforma esse caracter em maiusculo
    //+ concatena a frase
    //str.slice(1) pega o resto dos caracteres a partir do 2
    //.toLowerCase() transforma esses caracteres em minusculo
}

function buscarPokemon(idOuNome) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + idOuNome;
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon não encontrado!');
            }
            return response.json();
        });
}

function atualizarPokemon(dados) {
    numeroInicial = dados.id;
    tipo1.innerHTML = "Tipo: " + letraMaiuscula(dados.types[0].type.name);
    tipo2.innerHTML = "Tipo 2: " + letraMaiuscula(dados.types[1] ? dados.types[1].type.name : "Não possui");

    nome.innerHTML = letraMaiuscula(dados.name);
    numeroPokemon.innerHTML = "Número: " + dados.id;
    img.src = dados.sprites.other.dream_world.front_default ? dados.sprites.other.dream_world.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dados.id + ".png";
    img.style.height = "141px";
    img.style.width = "153px";
    icon.src = dados.sprites.front_default ? dados.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/" + dados.id + ".png";
    altura.innerHTML = "Altura: 0," + dados.height + " Metros";
    peso.innerHTML = "Peso: 0," + dados.weight + " Quilos";
    ataque.innerHTML = "Ataque: " + dados.stats[1].base_stat;
    defesa.innerHTML = "Defesa: " + dados.stats[2].base_stat;
    velocidade.innerHTML = "Velocidade: " + dados.stats[5].base_stat;
    ataqueEspecial.innerHTML = "Especial: " + letraMaiuscula(dados.moves[0].move.name);
    audio.src = dados.cries.latest;
    audio.play();
    erro.innerHTML = "";
    propriedades.style.border = "1px solid";
}

function limparDados() {
    tipo1.innerHTML = "";
    tipo2.innerHTML = "";
    nome.innerHTML = "";
    numeroPokemon.innerHTML = "";
    img.src = "";
    img.style.height = "";
    img.style.width = "";
    altura.innerHTML = "";
    peso.innerHTML = "";
    ataque.innerHTML = "";
    defesa.innerHTML = "";
    velocidade.innerHTML = "";
    ataqueEspecial.innerHTML = "";
    erro.innerHTML = "Pokémon não encontrado!";
    erro.style.display = "block";
    propriedades.style.border = "none";
    pokemon.value = "";
    icon.src = "";
}

function gerarPokemon() {
    buscarPokemon(pokemon.value)
        .then(dados => {
            atualizarPokemon(dados);
        })
        .catch(error => {
            limparDados();
        });
}
numero.addEventListener("click", gerarPokemon)//quando o botao for clicado

pokemon.addEventListener("keypress", function (event) {//adiciona no input caso o enter seja apertado
    if (KeyboardEvent.keyCode === 13) {//13 é o codigo da tecla enter
        gerarPokemon()
    }
})

function mudarPokemonFrente() {
    if (numeroInicial >= 1025) {
        return;
    }
    numeroInicial += 1;
    pokemon.value = numeroInicial;
    
    buscarPokemon(numeroInicial)
        .then(dados => {
            atualizarPokemon(dados);
        })
        .catch(error => {
            limparDados();
        });
}
    numeroInicial += 1;
    pokemon.value = numeroInicial;
    
    buscarPokemon(numeroInicial)
        .then(dados => {
            atualizarPokemon(dados);
        })
        .catch(error => {
            limparDados();
        });
}
            return response.json();//retorna a funcao
        })
        .then((dados) => {

            if (numeroInicial > 1025) {
                return false
            } //PRECISO ARRUMAR AQUI

            else {
                pokemon.value = numeroInicial
                tipo1.innerHTML = "Tipo: " + letraMaiuscula(dados.types[0].type.name)//como tipos é um vetor precisamos declarar qual indice queremos
                tipo2.innerHTML = "Tipo 2: " + letraMaiuscula(dados.types[1] ? dados.types[1].type.name : "não possui")
                nome.innerHTML = (letraMaiuscula(dados.name))
                numeroPokemon.innerHTML = "Número: " + dados.id
                img.src = dados.sprites.other.dream_world.front_default ? dados.sprites.other.dream_world.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dados.id + ".png"
                img.style.height = "141px"
                img.style.width = "153px"
                icon.src = dados.sprites.front_default ? dados.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/" + dados.id + ".png"
                altura.innerHTML = "Altura: 0," + dados.height + " Metros"
                peso.innerHTML = "Peso: 0," + dados.weight + " Quilos"
                ataque.innerHTML = "Ataque: " + dados.stats[1].base_stat
                defesa.innerHTML = "Defesa: " + dados.stats[2].base_stat
                velocidade.innerHTML = "Velocidade: " + dados.stats[5].base_stat
                ataqueEspecial.innerHTML = "Especial: " + letraMaiuscula(dados.moves[0].move.name)
                audio.src = dados.cries.latest
                audio.play()
                erro.innerHTML = ""
            }


            if (propriedades.style.border = "none") {
                propriedades.style.border = "1px solid"
            }
            else {
                propriedades.style.border = "none"
            }

            // if (tela.style.height = "50%") {
            //     tela.style.height = "57%"
            //     tela.style.top = "1%"
            // }
            // else {
            //     tela.style.height = "60%"
            //     tela.style.top = ""
            // } iria expandir a tela, mas desisti
        })
        .catch(error => {//caso der erro (pokemon não encontrado etc)
            tipo1.innerHTML = ""
            tipo2.innerHTML = ""
            nome.innerHTML = ""
            numeroPokemon.innerHTML = ""
            img.src = ""
            img.style.height = ""
            img.style.width = ""
            altura.innerHTML = ""
            peso.innerHTML = ""
            ataque.innerHTML = ""
            defesa.innerHTML = ""
            velocidade.innerHTML = ""
            ataqueEspecial.innerHTML = ""
            propriedades.style.border = "none"
            erro.innerHTML = "Pokémon não encontrado!"
            erro.style.display = "block"
            propriedades.style.border = "none"
            pokemon.value = ""
            icon.src = ""
        })
}

function mudarPokemonTras() {
    if (numeroInicial <= 1) {
        return;
    }
    numeroInicial -= 1;
    pokemon.value = numeroInicial;
    
    buscarPokemon(numeroInicial)
        .then(dados => {
            atualizarPokemon(dados);
        })
        .catch(error => {
            limparDados();
        });
}
