const getCotacaoAPI = require("./getCotacaoAPI.js");

function cotacaoComMultiplicador() {
	const cotacao = getCotacaoAPI.getCotacaoAPI();	
	const cotacaoComMultiplicador = cotacao * 1.01;
	return cotacaoComMultiplicador;
}

module.exports = cotacaoComMultiplicador;
