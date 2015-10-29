db.orders.insert([
        {
                cust_id: "abc123",
                ord_date: new Date("Oct 04, 2012"),
                status: 'A',
                price: 25,
                items: [ 
                        { sku: "mmm", qty: 5, price: 2.5 },
                        { sku: "nnn", qty: 5, price: 2.5 } 
                ]
        },
        {
                cust_id: "abc123",
                ord_date: new Date("Oct 04, 2012"),
                status: 'A',
                price: 30,
                items: [ 
                        { sku: "nnn", qty: 2, price: 2.5 } 
                ]
        },
        {
                cust_id: "efg456",
                ord_date: new Date("Oct 04, 2012"),
                status: 'A',
                price: 80,
                items: [ 
                        { sku: "ttt", qty: 10, price: 2.5 },
                        { sku: "zzz", qty: 20, price: 2.5 },
                        { sku: "qqq", qty: 33, price: 2.5 } 
                ]
        }
]);
