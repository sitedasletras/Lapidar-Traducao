/*
EXPORTADOR DOCX DE TRADUÇÃO
Segunda Língua(s) — Lapidar

Módulo periférico externo

Responsável por:

– exportar resultado traduzido em DOCX
– exportar tradução por capítulos em DOCX
– preservar espinha dorsal do sistema
*/

const ExportadorDOCXTraducaoLP = {

obterResultadoTexto(){

if(typeof OrquestradorTraducaoLP === "undefined"){
return null
}

const resultado = OrquestradorTraducaoLP.verResultado()

if(!resultado || typeof resultado !== "string"){
return null
}

return resultado
},

obterNomeArquivoBase(){

let titulo = "traducao_lapidar"

try{
if(
typeof CoreTraducaoLP !== "undefined" &&
CoreTraducaoLP.memoria &&
CoreTraducaoLP.memoria.titulo
){
titulo = CoreTraducaoLP.memoria.titulo
}
}catch(e){}

return titulo
.replace(/[\\/:*?"<>|]+/g, "")
.replace(/\s+/g, "_")
.trim() || "traducao_lapidar"
},

criarDocumentoDOCX(texto, tituloDocumento){

if(typeof docx === "undefined"){
return { sucesso:false, mensagem:"Biblioteca DOCX não carregada" }
}

if(!texto || !texto.trim()){
return { sucesso:false, mensagem:"Nenhum texto disponível para exportação DOCX" }
}

const linhas = texto.split("\n")
const paragrafos = []

for(const linha of linhas){
paragrafos.push(
new docx.Paragraph({
children:[new docx.TextRun(linha || "")]
})
)
}

const documento = new docx.Document({
sections: [
{
properties: {},
children: [
new docx.Paragraph({
children: [
new docx.TextRun({
text: tituloDocumento,
bold: true,
size: 30
})
]
}),
new docx.Paragraph({ children:[new docx.TextRun("")] }),
...paragrafos
]
}
]
})

return { sucesso:true, documento }
},

baixarBlob(blob, nomeArquivo){

const link = document.createElement("a")
link.href = URL.createObjectURL(blob)
link.download = nomeArquivo
link.click()

setTimeout(() => {
URL.revokeObjectURL(link.href)
}, 1000)
},

async exportarDOCXResultado(){

const texto = this.obterResultadoTexto()

if(!texto){
return "Nenhum resultado disponível para exportação DOCX"
}

const nomeBase = this.obterNomeArquivoBase()
const tituloDocumento = "Tradução Final — " + nomeBase.replace(/_/g, " ")

const criado = this.criarDocumentoDOCX(texto, tituloDocumento)

if(!criado.sucesso){
return criado.mensagem
}

const blob = await docx.Packer.toBlob(criado.documento)

this.baixarBlob(blob, nomeBase + "_traducao_final.docx")

return "DOCX da tradução final exportado com sucesso"
},

async exportarDOCXPorCapitulos(){

if(
typeof SegmentadorCapitulosTraducaoLP === "undefined" ||
!SegmentadorCapitulosTraducaoLP.estrutura ||
!SegmentadorCapitulosTraducaoLP.estrutura.length
){
return "Nenhuma estrutura por capítulos disponível para exportação DOCX"
}

let conteudo = ""

for(let i = 0; i < SegmentadorCapitulosTraducaoLP.estrutura.length; i++){
const bloco = SegmentadorCapitulosTraducaoLP.estrutura[i]
conteudo += bloco.titulo + "\n\n"
conteudo += (bloco.conteudo || "") + "\n\n"
}

const nomeBase = this.obterNomeArquivoBase()
const tituloDocumento = "Estrutura por Capítulos — " + nomeBase.replace(/_/g, " ")

const criado = this.criarDocumentoDOCX(conteudo, tituloDocumento)

if(!criado.sucesso){
return criado.mensagem
}

const blob = await docx.Packer.toBlob(criado.documento)

this.baixarBlob(blob, nomeBase + "_estrutura_capitulos.docx")

return "DOCX da estrutura por capítulos exportado com sucesso"
}

}

console.log("EXPORTADOR DOCX DE TRADUÇÃO ATIVO")
