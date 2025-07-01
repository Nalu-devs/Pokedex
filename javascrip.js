var nome = document.getElementById("nome")
var numeroPokemon = document.getElementById("numeroPokemon")
var img = document.getElementById("img")
var tipo1 = document.getElementById("tipo1")
var tipo2 = document.getElementById("tipo2")
var altura = document.getElementById("altura")
var peso = document.getElementById("peso")
var ataque = document.getElementById("ataque")
var defesa = document.getElementById("defesa")
var velocidade = document.getElementById("velocidade")
var ataqueEspecial = document.getElementById("ataqueEspecial")
var icon = document.getElementById("icon")
var propriedades = document.getElementById("propriedades")
var tela = document.getElementById("tela")
var audio = document.getElementById("audio")
var erro = document.getElementById("erro")

var ir = document.getElementById("ir")
var voltar = document.getElementById("voltar")

var pokemon = document.getElementById("pokemon")
var numero = document.getElementById("numero")

var numeroInicial = 0

function gerarPokemon() {
    var url = "https://pokeapi.co/api/v2/pokemon/" + pokemon.value
    fetch(url)
        .then(response => {
            if (!response.ok) { //analisa se o nome e id existem
                throw new Error('Pokémon não encontrado!');//caso n exista
            }
            return response.json();//retorna a funcao
        })
        .then((dados) => {

            numeroInicial = dados.id
            tipo1.innerHTML = "Tipo: " + dados.types[0].type.name//como tipos é um vetor precisamos declarar qual indice queremos
            tipo2.innerHTML = "Tipo 2: " + (dados.types[1] ? dados.types[1].type.name : "Não possui")
            nome.innerHTML = dados.name
            numeroPokemon.innerHTML = "Nº: " + dados.id
            img.src = dados.sprites.other.dream_world.front_default ? dados.sprites.other.dream_world.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dados.id + ".png"
            img.style.height = "141px"
            img.style.width = "153px"
            icon.src = dados.sprites.front_default ? dados.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/" + dados.id + ".png"
            altura.innerHTML = "Altura: 0," + dados.height + "Metros"
            peso.innerHTML = "Peso: 0," + dados.weight + "Quilos"
            ataque.innerHTML = "Ataque: " + dados.stats[1].base_stat
            defesa.innerHTML = "Defesa: " + dados.stats[2].base_stat
            velocidade.innerHTML = "Velocidade: " + dados.stats[5].base_stat
            ataqueEspecial.innerHTML = "Especial: " + dados.moves[0].move.name
            audio.src = dados.cries.latest
            audio.play()
            erro.innerHTML = ""


            if (propriedades.style.border = "none") {
                propriedades.style.border = "1px solid"
            }
            else {
                propriedades.style.border = "none"
            }

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
            erro.innerHTML = "Pokémon não encontrado!"
            erro.style.display = "block"
            propriedades.style.border = "none"
            pokemon.value = ""
            icon.src = ""

        })
}
numero.addEventListener("click", gerarPokemon)//quando o botao for clicado

pokemon.addEventListener("keypress", function (event) {//adiciona no input caso o enter seja apertado
    if (event.keyCode === 13) {//13 é o codigo da tecla enter
        gerarPokemon()
    }
})

function mudarPokemonFrente() {
    numeroInicial += 1
    var url = "https://pokeapi.co/api/v2/pokemon/" + numeroInicial
    fetch(url)
        .then(response => {
            if (!response.ok) { //analisa se o nome e id existem
                throw new Error('Pokémon não encontrado!');//caso n exista
            }
            return response.json();//retorna a funcao
        })
        .then((dados) => {

            if (numeroInicial > 1025) {
                return false
            } //PRECISO ARRUMAR AQUI

            else {
                pokemon.value = numeroInicial
                tipo1.innerHTML = "Tipo: " + dados.types[0].type.name//como tipos é um vetor precisamos declarar qual indice queremos
                tipo2.innerHTML = "Tipo 2: " + (dados.types[1] ? dados.types[1].type.name : "Não possui")
                nome.innerHTML = dados.name
                numeroPokemon.innerHTML = "Nº: " + dados.id
                img.src = dados.sprites.other.dream_world.front_default ? dados.sprites.other.dream_world.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dados.id + ".png"
                img.style.height = "141px"
                img.style.width = "153px"
                icon.src = dados.sprites.front_default ? dados.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/" + dados.id + ".png"
                altura.innerHTML = "Altura: 0," + dados.height + "Metros"
                peso.innerHTML = "Peso: 0," + dados.weight + "Quilos"
                ataque.innerHTML = "Ataque: " + dados.stats[1].base_stat
                defesa.innerHTML = "Defesa: " + dados.stats[2].base_stat
                velocidade.innerHTML = "Velocidade: " + dados.stats[5].base_stat
                ataqueEspecial.innerHTML = "Especial: " + dados.moves[0].move.name
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
    numeroInicial -= 1
    var url = "https://pokeapi.co/api/v2/pokemon/" + numeroInicial
    fetch(url)
        .then(response => {
            if (!response.ok) { //analisa se o nome e id existem
                throw new Error('Pokémon não encontrado!');//caso n exista

            }
            return response.json();//retorna a funcao
        })
        .then((dados) => {
            if (numeroInicial < 0) {
                return false
            }//PRECISO ARRUMAR AQUI

            else {
                pokemon.value = numeroInicial
                tipo1.innerHTML = "Tipo: " + dados.types[0].type.name//como tipos é um vetor precisamos declarar qual indice queremos
                tipo2.innerHTML = "Tipo 2: " + (dados.types[1] ? dados.types[1].type.name : "Não possui")
                nome.innerHTML = dados.name
                numeroPokemon.innerHTML = "Nº: " + dados.id
                img.src = dados.sprites.other.dream_world.front_default ? dados.sprites.other.dream_world.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + dados.id + ".png"
                img.style.height = "141px"
                img.style.width = "153px"
                icon.src = dados.sprites.front_default ? dados.sprites.front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/" + dados.id + ".png"
                altura.innerHTML = "Altura: 0," + dados.height + "Metros"
                peso.innerHTML = "Peso: 0," + dados.weight + "Quilos"
                ataque.innerHTML = "Ataque: " + dados.stats[1].base_stat
                defesa.innerHTML = "Defesa: " + dados.stats[2].base_stat
                velocidade.innerHTML = "Velocidade: " + dados.stats[5].base_stat
                ataqueEspecial.innerHTML = "Especial: " + dados.moves[0].move.name
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
            erro.innerHTML = "Pokémon não encontrado!"
            erro.style.display = "block"
            propriedades.style.border = "none"
            pokemon.value = ""
            icon.src = ""
        })

}