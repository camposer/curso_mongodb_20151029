// Cuántos productos de tipo="tipo1" hay?

db.inventario.aggregate([
	{
		$match: {
			"tipo": "tipo1"
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

print();
// Cuántos productos hay por tipo

db.inventario.aggregate([
        {
                $group: {
                        _id: "$tipo",
                        count: {
                                $sum: 1
                        }
                }
        },
	{
		$project: {
			_id: 0,
			tipo: "$_id",
			count: 1
		}
	},
	{	
		$out: "salida"
	}
]);










