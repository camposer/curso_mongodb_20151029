// Utiliza el fichero orders.js
		
// Primer ejemplo del tutorial
var mapFunction1 = function() {
                       emit(this.cust_id, this.price);
                   };

var reduceFunction1 = function(keyCustId, valuesPrices) {
                          return Array.sum(valuesPrices);
                      };

db.orders.mapReduce(
                     mapFunction1,
                     reduceFunction1,
                     { out: { inline: 1 } }
                   );


// Segundo ejemplo del tutorial
var mapFunction2 = function() {
                       for (var idx = 0; idx < this.items.length; idx++) {
                           var key = this.items[idx].sku;
                           var value = {
                                         count: 1,
                                         qty: this.items[idx].qty
                                       };
                           emit(key, value);
                       }
                    };

var reduceFunction2 = function(keySKU, countObjVals) {
                     reducedVal = { count: 0, qty: 0 };

                     for (var idx = 0; idx < countObjVals.length; idx++) {
                         reducedVal.count += countObjVals[idx].count;
                         reducedVal.qty += countObjVals[idx].qty;
                     }

                     return reducedVal;
                  };

var finalizeFunction2 = function (key, reducedVal) {

                       reducedVal.avg = reducedVal.qty/reducedVal.count;

                       return reducedVal;

                    };

db.orders.mapReduce( mapFunction2,
                     reduceFunction2,
                     {
                       out: { inline: 1 },
			finalize: finalizeFunction2
                     }
                   )








