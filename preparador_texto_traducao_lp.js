/*
PREPARADOR DE TEXTO PARA TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– receber texto-base
– limpar excesso de espaços
– normalizar quebras de linha
– organizar bloco traduzível
– entregar texto preparado ao engine
*/


const PreparadorTextoTraducaoLP = {

textoPreparado:null,


obterTextoOrigem(){

try{

if(
typeof PonteLPSegundaLinguas !== "undefined" &&
PonteLPSegundaLinguas.verPacoteTraducao
){

const bruto = localStorage.getItem("lp_segunda_linguas_bridge")

if(bruto){

const pacote = JSON.parse(bruto)

if(pacote.textoBase && pacote.textoBase.trim() !== ""){

return pacote.textoBase

}

}

}

}catch(e){

console.warn("Falha ao obter texto pela ponte LP ↔ Segunda Língua(s)")

}


try{

if(
typeof LapidarPensanteCore !== "undefined" &&
LapidarPensanteCore.memoriaObra &&
LapidarPensanteCore.memoriaObra.textoBase
){

return LapidarPensanteCore.memoriaObra.textoBase

}

}catch(e){

console.warn("Falha ao obter texto do núcleo simbiótico")

}


return null

},



limparTexto(texto){

if(!texto){
return null
}

let limpo = texto

.replace(/\r\n/g,"\n")
.replace(/\r/g,"\n")
.replace(/[ \t]+/g," ")
.replace(/\n{3,}/g,"\n\n")
.trim()

return limpo

},



normalizarEstrutura(texto){

if(!texto){
return null
}

let normalizado = texto
.split("\n")
.map(linha => linha.trimEnd())
.join("\n")
.trim()

return normalizado

},



prepararTexto(){

let textoOrigem = this.obterTextoOrigem()

if(!textoOrigem){
return null
}

let textoLimpo = this.limparTexto(textoOrigem)
let textoFinal = this.normalizarEstrutura(textoLimpo)

this.textoPreparado = textoFinal

if(typeof EngineTraducaoLP !== "undefined"){
EngineTraducaoLP.textoAtual = textoFinal
}

return textoFinal

},



verTextoPreparado(){

return this.textoPreparado || "Nenhum texto preparado"

},



limparPreparacao(){

this.textoPreparado = null

if(typeof EngineTraducaoLP !== "undefined"){
EngineTraducaoLP.textoAtual = null
}

return "Preparação de texto removida"

}



}


console.log("PREPARADOR DE TEXTO PARA TRADUÇÃO LP ATIVO")
