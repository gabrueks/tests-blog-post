const sinon = require('sinon');
const { expect } = require('chai');

const getCotacaoAPI = require('./getCotacaoAPI.js');
const cotacaoComMultiplicador = require('./cotacaoComMultiplicador.js');

const sinonSandbox = sinon.createSandbox();

let getCotacaoStub;

describe('cotacaoComMultiplicador', () => {
	beforeEach(() => {
		getCotacaoStub = sinonSandbox.stub(getCotacaoAPI, 'getCotacaoAPI').returns(505);
	})
	afterEach(() => {
		getCotacaoStub.reset();
	});

	it('cotacaoComMultiplicador deve retornar 510.05', () => {
		const resposta = cotacaoComMultiplicador();
		expect(resposta).equal(510.05);
	});
});
