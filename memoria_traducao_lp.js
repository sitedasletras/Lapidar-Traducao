/*
MEMÓRIA DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– guardar estado atual do módulo
– salvar idioma de destino
– salvar texto preparado
– salvar último resultado traduzido
– permitir restauração rápida do estado
*/


const MemoriaTraducaoLP = {

chaveMemoria:"segunda_linguas_memoria_atual",


estruturaBase(){
return {
idiomaDestino:null,
textoPreparado:null,
resultadoTraduzido:null,
statusEngine:null,
ultimaAtualizacao:null
}
},


lerMemoria(){

let bruto = localStorage.getItem(this.chaveMemoria)

if(!bruto){
return this.estruturaBase()
}

try{
return JSON.parse(bruto)
}catch(e){
return this.estruturaBase()
}

},


salvarMemoria(){

let memoria = this.lerMemoria()

memoria.idiomaDestino =
(typeof EngineTraducaoLP !== "undefined")
? EngineTraducaoLP.idiomaDestino
: null

memoria.textoPreparado =
(typeof PreparadorTextoTraducaoLP !== "undefined")
? PreparadorTextoTraducaoLP.textoPreparado
: null

memoria.resultadoTraduzido =
localStorage.getItem("segunda_linguas_resultado_traducao") || null

memoria.statusEngine =
(typeof EngineTraducaoLP !== "undefined")
? EngineTraducaoLP.status()
: null

memoria.ultimaAtualizacao = new Date().toISOString()

localStorage.setItem(
this.chaveMemoria,
JSON.stringify(memoria)
)

return "Memória atual da tradução salva com sucesso"
},


verMemoria(){

return JSON.stringify(
this.lerMemoria(),
null,
2
)

},


carregarMemoria(){

let memoria = this.lerMemoria()

if(typeof EngineTraducaoLP !== "undefined" && memoria.idiomaDestino){
EngineTraducaoLP.idiomaDestino = memoria.idiomaDestino
}

if(typeof PreparadorTextoTraducaoLP !== "undefined" && memoria.textoPreparado){
PreparadorTextoTraducaoLP.textoPreparado = memoria.textoPreparado
}

if(memoria.resultadoTraduzido){
localStorage.setItem(
"segunda_linguas_resultado_traducao",
memoria.resultadoTraduzido
)
}

return "Memória atual da tradução carregada"
},


limparMemoria(){

localStorage.removeItem(this.chaveMemoria)

if(typeof EngineTraducaoLP !== "undefined"){
EngineTraducaoLP.idiomaDestino = null
EngineTraducaoLP.textoAtual = null
}

if(typeof PreparadorTextoTraducaoLP !== "undefined"){
PreparadorTextoTraducaoLP.textoPreparado = null
}

return "Memória atual da tradução removida"
}

}


console.log("MEMÓRIA DE TRADUÇÃO LP ATIVA")
