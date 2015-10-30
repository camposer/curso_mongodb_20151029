print("Utilizando OR")
db.inventario.find({ $or: [ { "lugar.id": 1 }, { "lugar.id": 2 } ] });

print("\n\n");

print("Utilizando IN");
db.inventario.find({ "lugar.id": { $in: [ 1, 2 ]  } });
