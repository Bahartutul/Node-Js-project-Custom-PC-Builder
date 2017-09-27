/*module.exports = function Cart(oldCart){
	
		this.item = oldCart.items || {};
		this.totalQty= oldCart.totalQty || 0;
		this.totalPrice = oldCart.totalPrice || 0;

		this.add = function(item, id){
			var storedItem = this.item.id;
			if(!storedItem){
				storedItem =this.item.id={item:item, qty:0, price:0};
			}
			storedItem.qty++;
			storedItem.price = storedItem.item.price*storedItem.qty;
			this.totalQty++;
			this.totalPrice += storedItem.item.price;
			
			var storedItem = this.item[id];
			if(!storedItem){
				storedItem = this.item[id]={item:item, qty:0, price:0};
			}
			storedItem.qty++;
			storedItem.price = storedItem.item.price*storedItem.qty;
			this.totalQty++;
			this.totalPrice += storedItem.item.price;
		};

		this.generateArray = function(){
			var arr = [];
			for (var id in this.item) {
				arr.push(this.item.id);
			}
			return arr;
		};
	
};*/
var db = require('./db');
module.exports = {
	get: function(callbackFromController){
		var sql = "SELECT * FROM cart ";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	insert: function(user, callbackFromController){
		var sql ="INSERT INTO cart(id, item, quantity, price, pid, type) VALUES (null,?,?,?,?, ?)";
		db.execute(sql, [user.item, user.qty, user.price, user.id, user.type], function(result){
				callbackFromController(result);
		});
	},

	update: function(user, callbackFromController){
		var sql = "UPDATE cart SET quantity=?, price=? WHERE pid=?";
		db.execute(sql, [user.qty, user.price, user.id], function(result){
			callbackFromController(result);
		});
	},
	getCart: function(user, callbackFromController){
		var sql = "SELECT * FROM cart WHERE type=?";
		db.execute(sql, [user.type], function(result){
			callbackFromController(result);
		});
	},
	remove: function(callbackFromController){
		var sql = "DELETE FROM cart";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	setOrder: function(order, callbackFromController){
		var sql ="INSERT INTO orders(orderNumber, item, itemID, user, quantity, price, status, date, address, phone) VALUES (null,?,?,?,?,?,?,sysdate(),?,?)";

		db.execute(sql, [order.item, order.itemID, order.user, order.quantity, order.price, order.status,  order.address,order.phone], function(result){
				callbackFromController(result);
		});
	},

	getQuantity: function(user, callbackFromController){
	var str1 = "SELECT 	quantity From ";
    var str2 = user.type;
    var str3 = " WHERE id=?";
    var sql = str1.concat(str2, str3);
   
    db.execute(sql, [user.id], function(result){
  
			callbackFromController(result);
		});
	},

	updateQuantity: function(user, callbackFromController){
	var str1 = "Update ";
    var str2 = user.type;
    var str3 = " set quantity=? WHERE id=?";
    var sql = str1.concat(str2, str3);

    db.execute(sql, [user.quantity, user.id], function(result){
			callbackFromController(result);
		});
	}

};