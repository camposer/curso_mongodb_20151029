// Cantidad de productos
var map = function() {
	emit("cantidadProductos", 1 );
};

var reduce = function(key, values) {
	return values.length;
};

db.inventario.mapReduce(map, reduce, { out: { inline: 1 } });

// Incluyendo un objeto...
var map = function() {
	emit("cantidadProductos", { clave: null, valor: 1 });
};

var reduce = function(key, values) {
	return { clave: key, valor: values.length };
};

db.inventario.mapReduce(map, reduce, { out: { inline: 1 } });
