/*
ENGINE DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– receber texto preparado
– identificar idioma origem
– definir idioma destino
– acionar preparação estrutural
– registrar histórico de tradução
*/


const EngineTraducaoLP = {

textoAtual:null,

idiomaOrigem:"portugues",

idiomaDestino:null,


executarTraducao(idioma){

if(!idioma){

return "Idioma destino não informado"

}


this.idiomaDestino = idioma


RegistroTraducaoLP.registrarExecucao(
"traducao_iniciada_para_" + idioma
)


return this.prepararTraducao()

},



prepararTraducao(){

let resposta = PreparadorTextoTraducaoLP.prepararTexto()


if(!resposta){

return "Texto não disponível para tradução"

}


return this.executarPipelineTraducao()

},



executarPipelineTraducao(){

OrquestradorTraducaoLP.executarFluxo()

return "Pipeline de tradução executado para " + this.idiomaDestino

},



status(){

return {

origem:this.idiomaOrigem,

destino:this.idiomaDestino,

texto:this.textoAtual ? "carregado" : "não carregado"

}

}


}


console.log("ENGINE TRADUÇÃO LP ATIVO")
