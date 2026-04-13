/*
CORE DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– armazenar estado central do módulo
– registrar texto de origem
– registrar idioma de origem e destino
– registrar texto preparado
– registrar resultado traduzido
– servir de núcleo lógico para a engine
*/


const CoreTraducaoLP = {

estado:{
textoCarregado:false,
textoPreparado:false,
traducaoExecutada:false,
resultadoDisponivel:false
},

memoria:{
titulo:null,
autor:null,
genero:null,
idiomaOrigem:"portugues",
idiomaDestino:null,
textoOrigem:null,
textoPreparado:null,
resultadoTraduzido:null,
status:"nao_iniciado"
},


carregarTexto(pacote){

if(!pacote || !pacote.textoBase || pacote.textoBase.trim()===""){
return "Nenhum texto válido para carregar"
}

this.memoria.titulo = pacote.titulo || "sem_titulo"
this.memoria.autor = pacote.autor || "sem_autor"
this.memoria.genero = pacote.genero || "nao_identificado"
this.memoria.textoOrigem = pacote.textoBase
this.memoria.status = "texto_carregado"

this.estado.textoCarregado = true

return "Texto carregado no Core de Tradução"
},


definirIdiomaDestino(idioma){

if(!idioma){
return "Idioma destino não informado"
}

this.memoria.idiomaDestino = idioma
this.memoria.status = "idioma_destino_definido"

return "Idioma destino definido: " + idioma
},


registrarTextoPreparado(texto){

if(!texto || texto.trim()===""){
return "Texto preparado inválido"
}

this.memoria.textoPreparado = texto
this.memoria.status = "texto_preparado"

this.estado.textoPreparado = true

return "Texto preparado registrado no Core"
},


registrarResultadoTraduzido(texto){

if(!texto || texto.trim()===""){
return "Resultado traduzido inválido"
}

this.memoria.resultadoTraduzido = texto
this.memoria.status = "traducao_concluida"

this.estado.traducaoExecutada = true
this.estado.resultadoDisponivel = true

return "Resultado traduzido registrado no Core"
},


status(){

return {
estado:this.estado,
memoria:this.memoria
}

},


resetar(){

this.estado = {
textoCarregado:false,
textoPreparado:false,
traducaoExecutada:false,
resultadoDisponivel:false
}

this.memoria = {
titulo:null,
autor:null,
genero:null,
idiomaOrigem:"portugues",
idiomaDestino:null,
textoOrigem:null,
textoPreparado:null,
resultadoTraduzido:null,
status:"nao_iniciado"
}

return "Core de Tradução resetado"
}

}


console.log("CORE DE TRADUÇÃO LP ATIVO")
