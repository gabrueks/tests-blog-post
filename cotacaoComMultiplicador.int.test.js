const sinon = require('sinon');
const { expect } = require('chai');

const getCotacaoAPI = require('./getCotacaoAPI.js');
const cotacaoComMultiplicador = require('./cotacaoComMultiplicador.js');

const sinonSandbox = sinon.createSandbox();

const getCotacaoAPISpy = sinonSandbox.spy(getCotacaoAPI, 'getCotacaoAPI');

describe('cotacaoComMultiplicador', () => {
	after(() => {
		sinonSandbox.restore();
	})
	it('cotacaoComMultiplicador deve retornar 510.05', () => {
		const resposta = cotacaoComMultiplicador();
		expect(resposta).equal(getCotacaoAPISpy.getCall(0).returnValue * 1.01);
		expect(getCotacaoAPISpy.calledOnce);
	});
});
