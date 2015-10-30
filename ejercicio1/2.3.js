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
