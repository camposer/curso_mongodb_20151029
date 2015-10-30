// Cantidad de productos de tipo="tipo1". Dejarlos en una colección llamada: total_productos_tipo1

// FIXME: Chapuza... Filtrar en la query!
var map = function() {
	if (this.tipo == "tipo1")
		emit(this.tipo, 1);
};

var reduce = function(clave, valores) {
	return valores.length;
}

db.inventario.mapReduce(map, reduce, { out: "total_productos_tipo1" });
