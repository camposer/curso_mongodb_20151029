db.inventario.find({ cantidad: { $gt: 40 } });

db.inventario.find({ $where: "function() { return this.cantidad > 40 }" });
