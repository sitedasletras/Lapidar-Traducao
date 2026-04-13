/*
ENGINE DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– receber pacote do Lapidar Pensante
– carregar texto no Core
– definir idioma destino
– preparar o fluxo tradutório
– acionar o orquestrador
*/


const EngineTraducaoLP = {

executarTraducao(idioma){

if(!idioma){
return "Idioma destino não informado"
}

let pacote = null

try{
const bruto = localStorage.getItem("lp_segunda_linguas_bridge")

if(bruto){
pacote = JSON.parse(bruto)
}
}catch(e){
return "Falha ao ler pacote tradutório"
}

if(!pacote || !pacote.textoBase || pacote.textoBase.trim()===""){
return "Nenhum pacote tradutório disponível"
}

let retorno = []

retorno.push(
CoreTraducaoLP.carregarTexto(pacote)
)

retorno.push(
CoreTraducaoLP.definirIdiomaDestino(idioma)
)

RegistroTraducaoLP.registrarExecucao(
"traducao_iniciada_para_" + idioma
)

retorno.push(
this.prepararTraducao()
)

return retorno.join("\n")

},


prepararTraducao(){

let resposta = PreparadorTextoTraducaoLP.prepararTexto()

if(!resposta){
return "Texto não disponível para tradução"
}

CoreTraducaoLP.registrarTextoPreparado(resposta)

return this.executarPipelineTraducao()

},


executarPipelineTraducao(){

let resposta = OrquestradorTraducaoLP.executarFluxo()

return resposta

},


status(){

return CoreTraducaoLP.status()

}

}


console.log("ENGINE TRADUÇÃO LP ATIVA")
