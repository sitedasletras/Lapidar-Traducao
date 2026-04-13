/*
REGISTRO DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– registrar execuções de tradução
– registrar idioma de destino
– manter histórico
– permitir auditoria futura
*/


const RegistroTraducaoLP = {

chaveRegistro:"segunda_linguas_registro_execucao",


estruturaBase(){
return {
execucoes:[],
ultimaAtualizacao:null
}
},


lerRegistro(){

let bruto = localStorage.getItem(this.chaveRegistro)

if(!bruto){
return this.estruturaBase()
}

try{
return JSON.parse(bruto)
}catch(e){
return this.estruturaBase()
}

},


salvarRegistro(registro){

registro.ultimaAtualizacao = new Date().toISOString()

localStorage.setItem(
this.chaveRegistro,
JSON.stringify(registro)
)

return "Registro de tradução atualizado"
},


registrarExecucao(etapa){

let registro = this.lerRegistro()

registro.execucoes.push({
etapa:etapa || "etapa_nao_informada",
idiomaDestino:
(typeof EngineTraducaoLP !== "undefined" && EngineTraducaoLP.idiomaDestino)
? EngineTraducaoLP.idiomaDestino
: "nao_definido",
data:new Date().toISOString()
})

return this.salvarRegistro(registro)
},


verHistorico(){

return JSON.stringify(
this.lerRegistro(),
null,
2
)

},


ultimaExecucao(){

let registro = this.lerRegistro()

if(!registro.execucoes || registro.execucoes.length === 0){
return "Nenhuma execução registrada"
}

return registro.execucoes[registro.execucoes.length - 1]
},


limparHistorico(){

localStorage.removeItem(this.chaveRegistro)

return "Histórico de tradução removido com sucesso"
},


exportarHistorico(){

const conteudo = this.verHistorico()

const blob = new Blob([conteudo], { type:"application/json" })
const url = URL.createObjectURL(blob)

const a = document.createElement("a")
a.href = url
a.download = "registro_traducao_lp.json"
a.click()

URL.revokeObjectURL(url)

return "Histórico de tradução exportado com sucesso"
}

}


console.log("REGISTRO DE TRADUÇÃO LP ATIVO")
