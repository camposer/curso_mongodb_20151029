db.personas.insert([
	{
		nombre: "Juan",
		ordenadores: [
			{
				nombre: "Ordenador #1",
				serial: "123",
				precio: 100
			}
		]
	},
	{
		nombre: "Pedro",
		ordenadores: [
			{
				nombre: "Ordenador #1",
				serial: "123",
				precio: 100
			},
			{
				nombre: "Ordenador #2",
				serial: "456",
				preci: 400
			}
		]
	},
	{
		nombre: "María",
		ordenadores: [
			{
				nombre: "Ordenador #3",
				serial: "789",
				precio: 300
			},
			{
				nombre: "Ordenador #2",
				serial: "456",
				precio: 200
			}
		]
	}
]);

// Personas que tienen el Ordenador #2
db.personas.find({ "ordenadores.nombre": /.*#2$/i }, { _id: 0, nombre: 1 })


