/*
DETECTOR DE RITMO NARRATIVO INTERNACIONAL
Segunda Língua(s) — Lapidar

Responsável por:

– analisar cadência textual
– medir densidade narrativa
– identificar respiração literária
– preservar tempo emocional da obra
*/


const DetectorRitmoNarrativoLP = {


obterTexto(){

if(
CoreTraducaoLP.memoria.textoPreparado
){
return CoreTraducaoLP.memoria.textoPreparado
}

if(
CoreTraducaoLP.memoria.textoOrigem
){
return CoreTraducaoLP.memoria.textoOrigem
}

return null

},



analisarTamanhoFrases(texto){

let frases = texto.split(/[.!?]/)

let soma = 0

for(let frase of frases){

soma += frase.trim().length

}

let media = Math.round(soma / frases.length)

return media

},



classificarCadencia(media){

if(media < 60){
return "cadência rápida"
}

if(media < 120){
return "cadência moderada"
}

return "cadência contemplativa"

},



analisarRespiracao(texto){

let pausas = texto.match(/[,;:—-]/g)

if(!pausas){
return "respiração direta"
}

if(pausas.length < 10){
return "respiração leve"
}

if(pausas.length < 40){
return "respiração equilibrada"
}

return "respiração densa"

},



avaliarDensidade(texto){

let palavras = texto.split(/\s+/)

if(palavras.length < 800){
return "narrativa leve"
}

if(palavras.length < 3000){
return "narrativa média"
}

return "narrativa densa"

},



executarAnalise(){

let texto = this.obterTexto()

if(!texto){
return "Nenhum texto disponível para análise de ritmo"
}

let mediaFrases =
this.analisarTamanhoFrases(texto)

let cadencia =
this.classificarCadencia(mediaFrases)

let respiracao =
this.analisarRespiracao(texto)

let densidade =
this.avaliarDensidade(texto)


let relatorio = [

"Cadência narrativa: " + cadencia,
"Respiração textual: " + respiracao,
"Densidade narrativa: " + densidade

]


RegistroTraducaoLP.registrarExecucao(
"ritmo_narrativo_analisado"
)


return relatorio.join("\n")

}


}


console.log("DETECTOR DE RITMO NARRATIVO ATIVO")
