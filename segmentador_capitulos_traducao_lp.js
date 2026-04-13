/*
SEGMENTADOR DE CAPÍTULOS
Lapidar — Segunda Língua(s)

Responsável por:

– detectar capítulos automaticamente
– separar prólogo
– separar epílogo
– dividir livro em blocos
– permitir tradução progressiva por capítulo
– preservar espinha dorsal
*/


const SegmentadorCapitulosTraducaoLP = {

estrutura: [],


detectarCapitulos(texto){

if(!texto){

return {
sucesso:false,
mensagem:"Texto não disponível"
}

}

let regexCapitulo =
/(cap[ií]tulo\s+\d+|chapter\s+\d+|capítulo\s+[ivxlcdm]+)/gi

let partes =
texto.split(regexCapitulo)


if(partes.length <= 1){

this.estrutura = [
{
tipo:"texto_unico",
titulo:"Texto integral",
conteudo:texto
}
]

return {
sucesso:true,
mensagem:"Nenhum capítulo detectado — tratado como texto único"
}

}


let estruturaFinal = []

for(let i = 0; i < partes.length; i++){

let bloco = partes[i].trim()

if(!bloco) continue

estruturaFinal.push({

tipo:"capitulo",
titulo:"Bloco " + (estruturaFinal.length + 1),
conteudo:bloco

})

}

this.estrutura = estruturaFinal


return {

sucesso:true,
mensagem:
estruturaFinal.length +
" blocos estruturais detectados"

}

},



detectarPrologoEpílogo(texto){

let prologoRegex = /(pr[oó]logo)/i
let epilogoRegex = /(ep[ií]logo)/i


let estruturaNova = []


this.estrutura.forEach(bloco => {

if(prologoRegex.test(bloco.conteudo)){

bloco.tipo = "prologo"

}

if(epilogoRegex.test(bloco.conteudo)){

bloco.tipo = "epilogo"

}

estruturaNova.push(bloco)

})


this.estrutura = estruturaNova


return "Prólogo e epílogo verificados"

},



listarEstrutura(){

if(!this.estrutura.length){

return "Nenhuma estrutura disponível"

}

return this.estrutura.map((b,i)=>

(i+1) + " — " + b.tipo + " — " + b.titulo

).join("\n")

},



traduzirPorCapitulo(idioma){

if(!this.estrutura.length){

return "Estrutura não detectada ainda"

}

if(typeof EngineTraducaoLP === "undefined"){

return "Engine de tradução indisponível"

}


let resultadoFinal = ""


this.estrutura.forEach((bloco,indice)=>{

CoreTraducaoLP.carregarTexto({

titulo:bloco.titulo,
autor:"segmentado",
genero:"estrutura_segmentada",
estrutura:bloco.tipo,
textoBase:bloco.conteudo

})


let traducao =
EngineTraducaoLP.executarTraducao(idioma)


resultadoFinal +=

"\n\n====================\n" +
bloco.titulo +
"\n====================\n\n" +
traducao


})


return resultadoFinal

},



traduzirCapituloIndividual(indice,idioma){

if(!this.estrutura[indice]){

return "Capítulo não encontrado"

}


let bloco = this.estrutura[indice]


CoreTraducaoLP.carregarTexto({

titulo:bloco.titulo,
autor:"segmentado",
genero:"estrutura_segmentada",
estrutura:bloco.tipo,
textoBase:bloco.conteudo

})


return EngineTraducaoLP.executarTraducao(idioma)

},



limparEstrutura(){

this.estrutura = []

return "Estrutura segmentada limpa"

}

}


console.log("SEGMENTADOR DE CAPÍTULOS ATIVO")
