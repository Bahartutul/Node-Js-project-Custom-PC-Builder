var express = require('express');
var router = express.Router();
var adminModel = require.main.require('./models/admin-model');
var cartModel = require.main.require('./models/cart-model');

router.get('/admin', function(req, res){
	cartModel.getOrderByAdmin(function(result){
		
		res.render('admin/index', {data: result});
	});
	

});

router.get('/admin/products', function(req, res){
	res.render('Crud_Products/products');
});

router.get('/admin/processor/add', function(req, res){
	adminModel.getAllCPU(function(result){
		res.render('Crud_Products/addprocessor', {cpuList: result});
	});
});
 router.post('/admin/processor/add', function(req, res){
 	var cpu ={
 		brand: req.body.brand,
 		model: req.body.model,
 		speed: req.body.speed,
 		core: req.body.core,
 		thread: req.body.thread,
 		tdp: req.body.tdp,
 		socket: req.body.socket,
 		quantity: req.body.quantity,
 		price: req.body.price
 	};

 	adminModel.setAllCPU(cpu, function(result){
 		res.redirect('/admin/processor/add');
 	});

 });
 router.get('/admin/processor/edit', function(req, res){
	adminModel.getAllCPU(function(result){
		res.render('Crud_Products/editprocessor', {cpuList: result});
	});
});

router.get('/admin/updatecpu/:id', function(req, res){
	var productId = req.params.id;
	adminModel.getCPU(productId, function(result){
		res.render('Crud_Products/updatecpu', {cpuList: result});
	});
});
router.post('/admin/updatecpu/:id', function(req, res){
	var data ={
		id: req.body.id,
 		brand: req.body.brand,
 		model: req.body.model,
 		speed: req.body.speed,
 		core: req.body.core,
 		thread: req.body.thread,
 		tdp: req.body.tdp,
 		socket: req.body.socket,
 		quantity: req.body.quantity,
 		price: req.body.price
 	};
 	
 	adminModel.updateCPU(data, function(result){

 		res.redirect('/admin/processor/edit');
 	});

});

 router.get('/admin/processor/remove', function(req, res){
	adminModel.getAllCPU(function(result){
		res.render('Crud_Products/removeprocessor', {cpuList: result});
	});
});
 router.get('/admin/removecpu/:id', function(req, res){
	var productId = req.params.id;
	adminModel.getCPU(productId, function(result){
		res.render('Crud_Products/removeConfirm', {cpuList: result});
	});
});

 router.post('/admin/removecpu/:id', function(req, res){
	var productId = req.params.id;
	adminModel.removeCPU(productId, function(result){
		res.redirect('/admin/processor/remove');
	});
});

 router.get('/admin/topsell', function(req, res){
  cartModel.getReport(function(result){
  		
  		res.render('report/topselling', {data: result});
  });
 });


 router.get('/admin/details/:id', function(req, res){
 	var id = req.params.id;
 	cartModel.getOrderById(id, function(result){
 			console.log(result);
 			res.render('admin/orderApprove', {data: result});
 	});
 });


 router.get('/admin/update/:id/:type/', function(req, res){
 	var data = {
 		id:req.params.id,
 		msg:req.params.type
 	};
 	cartModel.updateOrderByAdmin(data, function(result){
       res.redirect('/admin');
 	});
 });

 router.get('/admin/report', function(req, res){

 	cartModel.getOrder(function(result){
 		res.render('report/index', {data: result});
 	});

 });

  router.post('/admin/report', function(req, res){
  	var data = {
  		from: req.body.from,
  		to: req.body.to
  	};

 	cartModel.getOrderByDate(data, function(result){
 		res.render('report/index', {data: result});
 	});

 });


module.exports = router;
