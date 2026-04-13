/*
EXPORTADOR DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Módulo periférico externo

Responsável por:

– exportar tradução em TXT
– exportar tradução multilíngue
– exportar relatório editorial
– preservar espinha dorsal do sistema
*/


const ExportadorTraducaoLP = {


obterResultado(){

if(typeof OrquestradorTraducaoLP === "undefined"){
return null
}

let resultado =
OrquestradorTraducaoLP.verResultado()

if(!resultado){
return null
}

return resultado

},



exportarTXT(){

let resultado = this.obterResultado()

if(!resultado){

return "Nenhum resultado disponível para exportação"

}


let blob = new Blob(
[resultado],
{ type:"text/plain;charset=utf-8" }
)


let link = document.createElement("a")

link.href = URL.createObjectURL(blob)

link.download = "traducao_lapidar.txt"

link.click()


return "Arquivo TXT exportado com sucesso"

},



exportarRelatorioEditorial(){

if(typeof MotorTraducaoEditorialLP === "undefined"){

return "Motor editorial não disponível"

}


let relatorio =
MotorTraducaoEditorialLP.executarTraducaoEditorial()


let blob = new Blob(
[relatorio],
{ type:"text/plain;charset=utf-8" }
)


let link = document.createElement("a")

link.href = URL.createObjectURL(blob)

link.download = "relatorio_editorial_traducao.txt"

link.click()


return "Relatório editorial exportado com sucesso"

},



exportarMultilingue(){

if(typeof MotorMultilingueLP === "undefined"){

return "Motor multilíngue não disponível"

}


let idiomas =
MotorMultilingueLP.verIdiomasGerados()


let blob = new Blob(
[idiomas],
{ type:"text/plain;charset=utf-8" }
)


let link = document.createElement("a")

link.href = URL.createObjectURL(blob)

link.download = "traducao_multilingue.txt"

link.click()


return "Arquivo multilíngue exportado com sucesso"

},



exportarHistorico(){

if(typeof RegistroTraducaoLP === "undefined"){

return "Registro tradutório indisponível"

}


let historico =
RegistroTraducaoLP.exportarHistorico()


let blob = new Blob(
[historico],
{ type:"application/json" }
)


let link = document.createElement("a")

link.href = URL.createObjectURL(blob)

link.download = "historico_traducao.json"

link.click()


return "Histórico exportado com sucesso"

}


}


console.log("EXPORTADOR DE TRADUÇÃO ATIVO")
