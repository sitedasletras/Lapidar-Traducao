<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Painel Segunda Língua(s) — Lapidar</title>

<script src="core_traducao_lp.js"></script>
<script src="motor_traducao_editorial_lp.js"></script>
<script src="engine_traducao_lp.js"></script>
<script src="preparador_texto_traducao_lp.js"></script>
<script src="registro_traducao_lp.js"></script>
<script src="orquestrador_traducao_lp.js"></script>
<script src="memoria_traducao_lp.js"></script>
<script src="ponte_lp_segunda_linguas.js"></script>

<style>
body{
margin:0;
font-family:Arial, sans-serif;
background:#0f1f2e;
color:white;
}

header{
background:#17324a;
padding:25px;
text-align:center;
border-bottom:1px solid #31506b;
}

h1{
margin:0;
font-size:30px;
}

.sub{
margin-top:8px;
color:#c7d7e6;
font-size:16px;
}

.container{
max-width:1000px;
margin:0 auto;
padding:30px 20px;
}

.painel{
background:#1f3b55;
border:1px solid #31506b;
border-radius:14px;
padding:24px;
box-sizing:border-box;
}

label{
display:block;
margin-bottom:10px;
font-size:18px;
font-weight:bold;
}

select, button{
padding:12px 14px;
margin:8px 8px 8px 0;
font-size:16px;
border-radius:8px;
border:none;
box-sizing:border-box;
}

select{
min-width:240px;
}

button{
background:#5fb3ff;
color:#082033;
font-weight:bold;
cursor:pointer;
}

button:hover{
background:#82c4ff;
}

.blocos{
margin-top:22px;
}

.output{
margin-top:20px;
background:#122637;
border:1px solid #31506b;
border-radius:10px;
padding:18px;
white-space:pre-wrap;
word-break:break-word;
line-height:1.6;
min-height:120px;
}

.back{
display:inline-block;
margin-top:22px;
color:#c7d7e6;
cursor:pointer;
}

.back:hover{
text-decoration:underline;
}
</style>

<script>
function executarTraducao(){
let idioma = document.getElementById("idiomaDestino").value
let resposta = EngineTraducaoLP.executarTraducao(idioma)
document.getElementById("saida").innerText = resposta
}

function verResultadoTraducao(){
let resposta = OrquestradorTraducaoLP.verResultado()
document.getElementById("saida").innerText = resposta
}

function limparResultadoTraducao(){
let resposta = OrquestradorTraducaoLP.limparResultado()
document.getElementById("saida").innerText = resposta
}

function verHistoricoTraducao(){
let resposta = RegistroTraducaoLP.verHistorico()
document.getElementById("saida").innerText = resposta
}

function verUltimaExecucaoTraducao(){
let resposta = RegistroTraducaoLP.ultimaExecucao()
document.getElementById("saida").innerText =
typeof resposta === "string"
? resposta
: JSON.stringify(resposta, null, 2)
}

function exportarHistoricoTraducao(){
let resposta = RegistroTraducaoLP.exportarHistorico()
document.getElementById("saida").innerText = resposta
}

function limparHistoricoTraducao(){
let resposta = RegistroTraducaoLP.limparHistorico()
document.getElementById("saida").innerText = resposta
}

function verTextoPreparado(){
let resposta = PreparadorTextoTraducaoLP.prepararTexto()
document.getElementById("saida").innerText =
resposta || "Texto não disponível para preparação"
}

function verStatusEngineTraducao(){
let resposta = EngineTraducaoLP.status()
document.getElementById("saida").innerText =
JSON.stringify(resposta, null, 2)
}

function salvarMemoriaTraducao(){
let resposta = MemoriaTraducaoLP.salvarMemoria()
document.getElementById("saida").innerText = resposta
}

function carregarMemoriaTraducao(){
let resposta = MemoriaTraducaoLP.carregarMemoria()
document.getElementById("saida").innerText =
resposta + "\n\n" + MemoriaTraducaoLP.verMemoria()
}

function verMemoriaTraducao(){
let resposta = MemoriaTraducaoLP.verMemoria()
document.getElementById("saida").innerText = resposta
}

function limparMemoriaTraducao(){
let resposta = MemoriaTraducaoLP.limparMemoria()
document.getElementById("saida").innerText = resposta
}

function receberPacoteLP(){
let resposta = PonteLPSegundaLinguas.enviarPacoteTraducao()
document.getElementById("saida").innerText = resposta
}

function verPacoteRecebidoLP(){
let resposta = PonteLPSegundaLinguas.verPacoteTraducao()
document.getElementById("saida").innerText = resposta
}

function limparPacoteRecebidoLP(){
let resposta = PonteLPSegundaLinguas.limparPacoteTraducao()
document.getElementById("saida").innerText = resposta
}

function resetarCoreTraducao(){
let resposta = CoreTraducaoLP.resetar()
document.getElementById("saida").innerText = resposta
}

function verRelatorioMotorEditorial(){
let resposta = MotorTraducaoEditorialLP.executarTraducaoEditorial()
document.getElementById("saida").innerText = resposta
}
</script>
</head>

<body>

<header>
<h1>Segunda Língua(s)</h1>
<div class="sub">Módulo simbiótico de tradução editorial</div>
</header>

<div class="container">

<div class="painel">

<label for="idiomaDestino">Escolha o idioma de destino</label>

<select id="idiomaDestino">
<option value="ingles">Inglês</option>
<option value="espanhol">Espanhol</option>
<option value="frances">Francês</option>
<option value="italiano">Italiano</option>
<option value="alemao">Alemão</option>
</select>

<div class="blocos">
<button onclick="receberPacoteLP()">Receber obra do Lapidar Pensante</button>
<button onclick="verPacoteRecebidoLP()">Ver pacote recebido</button>
<button onclick="limparPacoteRecebidoLP()">Limpar pacote recebido</button>
</div>

<div class="blocos">
<button onclick="executarTraducao()">Executar tradução simbiótica</button>
<button onclick="verTextoPreparado()">Ver texto preparado</button>
<button onclick="verStatusEngineTraducao()">Ver status do engine/core</button>
<button onclick="resetarCoreTraducao()">Resetar core</button>
<button onclick="verRelatorioMotorEditorial()">Ver motor editorial</button>
</div>

<div class="blocos">
<button onclick="verResultadoTraducao()">Ver resultado da tradução</button>
<button onclick="limparResultadoTraducao()">Limpar resultado</button>
</div>

<div class="blocos">
<button onclick="verHistoricoTraducao()">Ver histórico</button>
<button onclick="verUltimaExecucaoTraducao()">Ver última execução</button>
<button onclick="exportarHistoricoTraducao()">Exportar histórico</button>
<button onclick="limparHistoricoTraducao()">Limpar histórico</button>
</div>

<div class="blocos">
<button onclick="salvarMemoriaTraducao()">Salvar memória</button>
<button onclick="carregarMemoriaTraducao()">Carregar memória</button>
<button onclick="verMemoriaTraducao()">Ver memória</button>
<button onclick="limparMemoriaTraducao()">Limpar memória</button>
</div>

<div id="saida" class="output">Aguardando comando do módulo Segunda Língua(s)...</div>

</div>

<div class="back" onclick="location.href='index.html'">← voltar ao início</div>

</div>

</body>
</html>
