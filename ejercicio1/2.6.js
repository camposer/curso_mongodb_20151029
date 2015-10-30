db.inventario.aggregate([
  { 
    $group: {
      _id: null,
      cantidad: { 
        $sum: 1 
      },
      existenciaTotal: { 
        $sum: "$cantidad" 
      },
      promedioCantidad: {
        $avg: "$cantidad"
      }
    }
  }
])

db.inventario.aggregate([
  { 
    $group: {
      _id: null,
      cantidad: { 
        $sum: 1 
      },
      existenciaTotal: { 
        $sum: "$cantidad" 
      }
    }
  },
  {
    $project: {
      cantidad: "$cantidad",
      existenciaTotal: "$existenciaTotal",
      promedioCantidad: {
        $divide: [ "$existenciaTotal", "$cantidad" ]
      }
    }
  }
])
