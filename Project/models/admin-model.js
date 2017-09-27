var db = require('./db');
module.exports = {
	getAllCPU: function(callbackFromController) {
		var sql = "SELECT * FROM processors ORDER BY date DESC";
		db.execute(sql, null ,function(result){
			callbackFromController(result);
		});
	},
	setAllCPU: function(data, callbackFromController) {
		var sql = "INSERT INTO processors(brand, model, speed, core, thread, tdp, socket, quantity, price, id, date) VALUES (?,?,?,?,?,?,?,?,?,null, sysdate())";
		db.execute(sql, [data.brand, data.model, data.speed, data.core, data.thread, data.tdp, data.socket, data.quantity, data.price] ,function(result){
			callbackFromController(result);
		});
	},
	getCPU: function(id, callbackFromController){
			var sql = "SELECT * FROM processors where id=?";
			db.execute(sql, [id] ,function(result){
			callbackFromController(result);
		});
	},
	updateCPU: function(data, callbackFromController){
		
		var sql = "UPDATE processors SET brand=?, model=?, speed=?, core=?, thread=?, tdp=?, socket=?, quantity=?, price = ?, date=sysdate() WHERE id=?";
		db.execute(sql, [ data.brand, data.model, data.speed, data.core, data.thread, data.tdp, data.socket, data.quantity, data.price, data.id], function(result){

			callbackFromController(result);
		});

	},

	removeCPU: function(data, callbackFromController){
		var sql = "DELETE FROM processors WHERE id = ?";
		db.execute(sql, [data] ,function(result){
			callbackFromController(result);
		});
	}

}