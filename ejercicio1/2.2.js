// Extraiga los documentos de tipo="tipo1" que tienen cantidad>40. El documento resultante deberá tener únicamente el nombre e _id

db.inventario.aggregate([
	{
		$match: {
			tipo: "tipo1",
			cantidad: { $gt: 40 }
		}
	},
	{
		$project: {
			"mi nombre": "$nombre"
		}
	}
])
