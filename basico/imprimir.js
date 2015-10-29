var imprimir = function(cursor) { 
	while (cursor.hasNext()) {
		var p = cursor.next();
		print("nombre = " + p.nombre); 
		for (var i in p.ordenadores)
			print("ordenador.nombre = " + p.ordenadores[i].nombre); 
	}
}

// Para ejecutar: 
load('imprimir.js');
imprimir(db.personas.find());
