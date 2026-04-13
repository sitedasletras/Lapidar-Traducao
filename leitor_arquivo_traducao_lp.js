/*
LEITOR DE ARQUIVO PARA TRADUÇÃO
Segunda Língua(s) — Lapidar

Responsável por:

– receber arquivo .txt
– receber arquivo .docx
– extrair texto-base
– preencher os campos do painel
*/


const LeitorArquivoTraducaoLP = {

async carregarArquivo(inputId){

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

return {
sucesso:false,
mensagem:"Formato não suportado. Use .txt ou .docx"
}

},


async lerTXT(arquivo){

try{
const texto = await arquivo.text()

return {
sucesso:true,
mensagem:"Arquivo TXT carregado com sucesso",
texto:texto,
nome:arquivo.name
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
nome:arquivo.name
}

}catch(e){
return {
sucesso:false,
mensagem:"Falha ao ler arquivo DOCX"
}
}

}

}


console.log("LEITOR DE ARQUIVO PARA TRADUÇÃO ATIVO")
