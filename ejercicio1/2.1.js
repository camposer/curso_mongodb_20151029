// Extraiga los documentos con lugar.id=1. El documento resultante deberá tener únicamente el nombre y el _id

db.inventario.aggregate([
	{
		$match: {
			"lugar.id": 1
		}
	},
	{
		$project: {
			"nombre": 1
		}
	}
])

