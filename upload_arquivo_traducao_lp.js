/*
UPLOAD DE ARQUIVO PARA TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– receber arquivos .txt, .docx e .pdf
– extrair texto
– preencher automaticamente o painel
– preparar o envio ao Core de Tradução
*/

const UploadArquivoTraducaoLP = {

async processarArquivo(inputId){

const input = document.getElementById(inputId)

if(!input || !input.files || !input.files[0]){
return {
sucesso:false,
mensagem:"Nenhum arquivo selecionado"
}
}

const arquivo = input.files[0]
const nome = arquivo.name.toLowerCase()

if(nome.endsWith(".txt")){
return await this.lerTXT(arquivo)
}

if(nome.endsWith(".docx")){
return await this.lerDOCX(arquivo)
}

if(nome.endsWith(".pdf")){
return await this.lerPDF(arquivo)
}

return {
sucesso:false,
mensagem:"Formato não suportado. Use .txt, .docx ou .pdf"
}

},


async lerTXT(arquivo){

try{
const texto = await arquivo.text()

return {
sucesso:true,
mensagem:"Arquivo TXT carregado com sucesso",
texto:texto,
nome:arquivo.name,
tipo:"txt"
}
}catch(e){
return {
sucesso:false,
mensagem:"Falha ao ler arquivo TXT"
}
}

},


async lerDOCX(arquivo){

try{

if(typeof mammoth === "undefined"){
return {
sucesso:false,
mensagem:"Leitor DOCX não carregado"
}
}

const arrayBuffer = await arquivo.arrayBuffer()

const resultado = await mammoth.extractRawText({
arrayBuffer: arrayBuffer
})

return {
sucesso:true,
mensagem:"Arquivo DOCX carregado com sucesso",
texto:resultado.value || "",
nome:arquivo.name,
tipo:"docx"
}

}catch(e){
return {
sucesso:false,
mensagem:"Falha ao ler arquivo DOCX"
}
}

},


async lerPDF(arquivo){

try{

if(typeof pdfjsLib === "undefined"){
return {
sucesso:false,
mensagem:"Leitor PDF não carregado"
}
}

const arrayBuffer = await arquivo.arrayBuffer()
const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise

let textoFinal = ""

for(let pagina = 1; pagina <= pdf.numPages; pagina++){

const page = await pdf.getPage(pagina)
const content = await page.getTextContent()

const linhas = content.items.map(item => item.str).join(" ")

textoFinal += linhas + "\n\n"
}

return {
sucesso:true,
mensagem:"Arquivo PDF carregado com sucesso",
texto:textoFinal.trim(),
nome:arquivo.name,
tipo:"pdf"
}

}catch(e){
return {
sucesso:false,
mensagem:"Falha ao ler arquivo PDF"
}
}

},


preencherPainel(resultado){

if(!resultado || !resultado.sucesso){
return "Nenhum resultado válido para preencher"
}

const titulo = document.getElementById("tituloLivro")
const texto = document.getElementById("textoLivro")

if(texto){
texto.value = resultado.texto || ""
}

if(titulo && !titulo.value.trim()){
titulo.value = (resultado.nome || "arquivo")
.replace(/\.[^/.]+$/, "")
}

return "Painel preenchido com sucesso"

}

}

console.log("UPLOAD DE ARQUIVO PARA TRADUÇÃO ATIVO")
