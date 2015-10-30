// Extraiga los documentos de tipo="tipo1" y ordénelos de mayor a menor existencia (cantidad)

db.inventario.aggregate([
	{
		$match: {
			tipo: "tipo1"
		}
	},
	{
		$sort: {
			cantidad: -1
		}
	}
])

print();
db.inventario.find({ tipo: "tipo1" }).sort({ cantidad: -1 });
