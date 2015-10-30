// Cuántos productos hay en el lugar con id=1?

db.inventario.aggregate([
	{
		$match: {
			"lugar.id": 1
		}
	},
	{
		$group: {
			_id: null,
			count: {
				$sum: 1
			}
		}
	}
]);

// Esta consulta no tiene ningún sentido, pero está chula...
db.inventario.aggregate([
	{
		$match: {
			"lugar.id": 1
		}
	},
	{
		$group: {
			_id: {
				tipo: "$tipo",
				lugar: "$lugar.id"
			},
			count: {
				$sum: 1
			}
		}
	},
	{
		$unwind: "$_id.lugar"
		
	},
	{
		$match: { "_id.lugar": 1 }
	}
]);
