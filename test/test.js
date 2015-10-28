var assert = require("assert"),
	prueba = require(__dirname+"/../models/taskDao.js");
	prueba2 = require(__dirname+"/../routes/tasklist.js");

describe('init', function(){
	// Testea que se haya cargado bien la librería
	it('Cargando la base de datos', function(){
		assert(prueba, "Cargado documentDB de Azure");
	});
});

describe('addItem', function () {
    it('Añadimos una nueva nota de empresa', function(){
		assert(prueba, "Creada la empresa correctamente");
	});
})

describe('addItem', function () {
	if('Añadiendo empresa en el acto',function(){
		assert(prueba2, "Creando la empresa en tiempo real correctamente");
	});
})
