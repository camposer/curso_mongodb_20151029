db.inventario.find({ "lugar.id": 1 }, { nombre: 1 });

> var cursor = db.inventario.find({ "lugar.id": 1 }, { nombre: 1, cantidad: 1 });
> while (cursor.hasNext()) { var p = cursor.next(); print("nombre + cantidad = " + p.nombre + " " + p.cantidad); }
