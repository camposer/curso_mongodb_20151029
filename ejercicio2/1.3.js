// Cantidad de productos, existencia total (cantidad) y promedio de cantidades disponibles.

var map = function() {
	emit("clave", {
		cantidad: 1,
		existencia: this.cantidad
	});
};

var reduce = function(key, values) {
	var existencia = 0;
	for (var i in values)	
		existencia += values[i].existencia;

	return {
		cantidad: values.length,
		existencia: existencia
	};
};

var finalize = function(key, value) {
	value.promedio = value.existencia / value.cantidad;
	return value;
}

db.inventario.mapReduce(map, reduce, { out: { inline: 1 }, finalize: finalize});








