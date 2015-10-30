var Persona = function(nombre, apellido) {
	this.nombre = nombre;
	this.apellido = apellido;
}

var p = new Persona("Rodolfo", "Campos");
print(p.nombre) => Rodolfo

var o = {
	a: "Hola",
	b: 1,
	c: 1.2,
	d: function() {
		print("hola");
	},
	e: new Persona("Rodolfo", "Campos"),
	f: {
		f2: "hola"
	},
	g: [ 1, 2, 3 ]
}

o.d() => Hola
