<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Painel Segunda Língua(s) — Lapidar</title>

<script src="core_traducao_lp.js"></script>
<script src="glossario_autoral_lp.js"></script>
<script src="motor_traducao_editorial_lp.js"></script>
<script src="motor_multilingue_lp.js"></script>
<script src="engine_traducao_lp.js"></script>
<script src="preparador_texto_traducao_lp.js"></script>
<script src="registro_traducao_lp.js"></script>
<script src="orquestrador_traducao_lp.js"></script>
<script src="memoria_traducao_lp.js"></script>
<script src="ponte_lp_segunda_linguas.js"></script>

<style>
body{
margin:0;
font-family:Arial;
background:#0f1f2e;
color:white;
}

header{
background:#17324a;
padding:25px;
text-align:center;
border-bottom:1px solid #31506b;
}

.container{
max-width:1000px;
margin:auto;
padding:30px;
}

label{
display:block;
margin-bottom:10px;
font-size:18px;
font-weight:bold;
}

select, button{
padding:12px;
margin:6px;
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
cursor:pointer;
color:#082033;
font-weight:bold;
}

button:hover{
background:#82c4ff;
}

.bloco{
background:#122637;
padding:22px;
border-radius:12px;
border:1px solid #31506b;
}

.output{
margin-top:20px;
background:#0c1b28;
padding:20px;
border-radius:10px;
white-space:pre-wrap;
line-height:1.6;
border:1px solid #31506b;
min-height:140px;
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
saida(resposta)

}


function executarMotorEditorial(){

saida(
MotorTraducaoEditorialLP.executarTraducaoEditorial()
)

}


function executarMultilingue(){

saida(
MotorMultilingueLP.executarTraducaoMultilingue()
)

}


function verIdiomasGerados(){

saida(
MotorMultilingueLP.verIdiomasGerados()
)

}


function limparIdiomasGerados(){

saida(
MotorMultilingueLP.limparIdiomasGerados()
)

}


function receberPacoteLP(){

saida(
PonteLPSegundaLinguas.enviarPacoteTraducao()
)

}


function verPacoteRecebidoLP(){

saida(
PonteLPSegundaLinguas.verPacoteTraducao()
)

}


function limparPacoteRecebidoLP(){

saida(
PonteLPSegundaLinguas.limparPacoteTraducao()
)

}


function verStatus(){

saida(
JSON.stringify(
EngineTraducaoLP.status(),
null,
2
)
)

}


function verResultadoTraducao(){

saida(
OrquestradorTraducaoLP.verResultado()
)

}


function limparResultadoTraducao(){

saida(
OrquestradorTraducaoLP.limparResultado()
)

}


function verHistoricoTraducao(){

saida(
RegistroTraducaoLP.verHistorico()
)

}


function verUltimaExecucaoTraducao(){

let resposta = RegistroTraducaoLP.ultimaExecucao()

saida(
typeof resposta === "string"
? resposta
: JSON.stringify(resposta, null, 2)
)

}


function exportarHistoricoTraducao(){

saida(
RegistroTraducaoLP.exportarHistorico()
)

}


function limparHistoricoTraducao(){

saida(
RegistroTraducaoLP.limparHistorico()
)

}


function verTextoPreparado(){

let resposta = PreparadorTextoTraducaoLP.prepararTexto()

saida(
resposta || "Texto não disponível para preparação"
)

}


function salvarMemoriaTraducao(){

saida(
MemoriaTraducaoLP.salvarMemoria()
)

}


function carregarMemoriaTraducao(){

let resposta = MemoriaTraducaoLP.carregarMemoria()

saida(
resposta + "\n\n" + MemoriaTraducaoLP.verMemoria()
)

}


function verMemoriaTraducao(){

saida(
MemoriaTraducaoLP.verMemoria()
)

}


function limparMemoriaTraducao(){

saida(
MemoriaTraducaoLP.limparMemoria()
)

}


function resetarCoreTraducao(){

saida(
CoreTraducaoLP.resetar()
)

}


function extrairGlossario(){

saida(
GlossarioAutoralLP.extrairTermos()
)

}


function verGlossario(){

saida(
GlossarioAutoralLP.verGlossario()
)

}


function limparGlossario(){

saida(
GlossarioAutoralLP.limparGlossario()
)

}


function saida(texto){

document.getElementById("saida").innerText = texto

}

</script>

</head>

<body>

<header>
<h2>Segunda Língua(s)</h2>
<p>Motor de internacionalização editorial</p>
</header>

<div class="container">

<div class="bloco">

<label for="idiomaDestino">Escolha o idioma de destino</label>

<select id="idiomaDestino">
<option value="ingles">Inglês</option>
<option value="espanhol">Espanhol</option>
<option value="frances">Francês</option>
<option value="italiano">Italiano</option>
<option value="alemao">Alemão</option>
</select>

<br>

<button onclick="receberPacoteLP()">Receber obra do Lapidar Pensante</button>
<button onclick="verPacoteRecebidoLP()">Ver pacote recebido</button>
<button onclick="limparPacoteRecebidoLP()">Limpar pacote recebido</button>

<br>

<button onclick="executarTraducao()">Executar tradução</button>
<button onclick="executarMotorEditorial()">Executar motor editorial</button>
<button onclick="verTextoPreparado()">Ver texto preparado</button>
<button onclick="verStatus()">Ver status do sistema</button>
<button onclick="resetarCoreTraducao()">Resetar core</button>

<br>

<button onclick="executarMultilingue()">Executar multilíngue paralelo</button>
<button onclick="verIdiomasGerados()">Ver idiomas gerados</button>
<button onclick="limparIdiomasGerados()">Limpar idiomas gerados</button>

<br>

<button onclick="extrairGlossario()">Extrair glossário autoral</button>
<button onclick="verGlossario()">Ver glossário autoral</button>
<button onclick="limparGlossario()">Limpar glossário autoral</button>

<br>

<button onclick="verResultadoTraducao()">Ver resultado da tradução</button>
<button onclick="limparResultadoTraducao()">Limpar resultado</button>

<br>

<button onclick="verHistoricoTraducao()">Ver histórico</button>
<button onclick="verUltimaExecucaoTraducao()">Ver última execução</button>
<button onclick="exportarHistoricoTraducao()">Exportar histórico</button>
<button onclick="limparHistoricoTraducao()">Limpar histórico</button>

<br>

<button onclick="salvarMemoriaTraducao()">Salvar memória</button>
<button onclick="carregarMemoriaTraducao()">Carregar memória</button>
<button onclick="verMemoriaTraducao()">Ver memória</button>
<button onclick="limparMemoriaTraducao()">Limpar memória</button>

<div id="saida" class="output">
Sistema pronto para internacionalização simbiótica
</div>

</div>

<div class="back" onclick="location.href='index.html'">← voltar ao início</div>

</div>

</body>
</html>
