// Cantidad de productos
var map = function() {
	emit("clave", { clave: null, valor: 1 });
};

var reduce = function(key, values) {
	return { clave: key, valor: values.length };
};

db.inventario.mapReduce(map, reduce, { out: { inline: 1 } });
