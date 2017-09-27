var db = require('./db');
module.exports = {
	getAllCPU: function(callbackFromController) {
		var sql = "SELECT * FROM processors";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllMobo: function(callbackFromController) {
		var sql = "SELECT * FROM motherboards";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllCooler: function(callbackFromController) {
		var sql = "SELECT * FROM casefans";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllRam: function(callbackFromController) {
		var sql = "SELECT * FROM memories";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllGPU: function(callbackFromController) {
		var sql = "SELECT * FROM videocards";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllPSU: function(callbackFromController) {
		var sql = "SELECT * FROM powersupplies";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllHDD: function(callbackFromController) {
		var sql = "SELECT * FROM storages";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllMonitor: function(callbackFromController) {
		var sql = "SELECT * FROM monitors";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllMouse: function(callbackFromController) {
		var sql = "SELECT * FROM mices";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllKeyboard: function(callbackFromController) {
		var sql = "SELECT * FROM keyboards";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getAllCase: function(callbackFromController) {
		var sql = "SELECT * FROM cases";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	getAllSpeaker: function(callbackFromController) {
		var sql = "SELECT * FROM speakers";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	getAllOd: function(callbackFromController) {
		var sql = "SELECT * FROM opticaldrives";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},


    









	getPC: function(id, callbackFromController){
		var sql = "SELECT * FROM pc WHERE id=?";
		db.execute(sql, [id], function(result){
			callbackFromController(result[0]);
		});
	},
	getCPU: function(id, callbackFromController){
		var sql = "SELECT * FROM processors WHERE id=?";
		db.execute(sql, [id], function(result){
			callbackFromController(result[0]);
		});
	},
	insertCart: function(user, callbackFromController){
		var sql = "INSERT INTO cart VALUES (null, ?, ?, ?, ?)";
		db.execute(sql, [user.item, user.qty, user.price, user.id], function(result){
				callbackFromController(result);
		});
	},
	updateCart: function(user, callbackFromController) {
		var sql = "UPDATE cart SET quantity=?, price=?  WHERE pid=?";
		db.execute(sql, [user.qty, user.price, user.id], function(result){
			callbackFromController(result);
		});
	},
	getPc: function(callbackFromController){
		var sql = "SELECT * FROM pc";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},

	getCart: function(callbackFromController) {
		var sql = "SELECT * FROM cart";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	remove: function(callbackFromController){
		var sql = "DELETE FROM cart";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});

	},



	cpusearch:function(data,callbackFromController){
		var sql="select * from processors where CONCAT(item,details,price,shop) like '%?%'";
	}
};