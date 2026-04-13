/*
MOTOR MULTILÍNGUE PARALELO
Segunda Língua(s) — Lapidar

Responsável por:

– executar tradução simultânea para múltiplos idiomas
– registrar execuções multilíngues
– preservar texto-base original
– gerar pacote internacional da obra
*/


const MotorMultilingueLP = {


idiomasDisponiveis:[
"ingles",
"espanhol",
"frances",
"italiano",
"alemao"
],



executarTraducaoMultilingue(){

if(!CoreTraducaoLP.memoria.textoPreparado){

return "Nenhum texto preparado disponível"

}


let relatorio = []

for(let idioma of this.idiomasDisponiveis){

relatorio.push(
this.executarIdioma(idioma)
)

}


RegistroTraducaoLP.registrarExecucao(
"traducao_multilingue_executada"
)


return relatorio.join("\n")

},



executarIdioma(idioma){

let titulo = CoreTraducaoLP.memoria.titulo || "sem_titulo"

let pacote = {

titulo:titulo,
idiomaDestino:idioma,
timestamp:new Date().toISOString()

}


localStorage.setItem(
"traducao_multilingue_"+idioma,
JSON.stringify(pacote)
)


return "Versão preparada para: "+idioma

},



verIdiomasGerados(){

let resultado = []

for(let idioma of this.idiomasDisponiveis){

let bruto = localStorage.getItem(
"traducao_multilingue_"+idioma
)

if(bruto){

resultado.push(idioma+" ✓")

}else{

resultado.push(idioma+" — não gerado")

}

}


return resultado.join("\n")

},



limparIdiomasGerados(){

for(let idioma of this.idiomasDisponiveis){

localStorage.removeItem(
"traducao_multilingue_"+idioma
)

}


return "Pacotes multilíngues removidos"

}



}


console.log("MOTOR MULTILÍNGUE PARALELO ATIVO")
