/*var router = express.Router();
var componentModel = require.main.require('./models/component-model');

router.get('/component/processor', function(req, res){
	componentModel.getAllCPU(function(result){
		//console.log(result);
		res.render('components/processor', {cpuList: result});
});
});

router.post('/component/processor', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var cpu = {
		quantity:quantity,
		price: req.body.price,
		cpu: req.body.cpu
	};
	req.session.cpu = cpu
	console.log(cpu.price);
	res.redirect('/home/system');


});

router.get('/component/motherboard', function(req, res){
	componentModel.getAllMobo(function(result){
		//console.log(result);
		res.render('components/motherboard', {motherboardList: result});
});
});

router.post('/component/motherboard', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var mobo = {
		quantity: quantity,
		price: req.body.price,
		motherboard: req.body.motherboard
	};
	req.session.motherboard = mobo
	res.redirect('/home/system');
});


module.exports = router;*/
var express = require('express');
var router = express.Router();
var componentModel = require.main.require('./models/component-model');

router.get('/component/processor', function(req, res){
	componentModel.getAllCPU(function(result){
		//console.log(result);
		res.render('components/processor', {cpuList: result});
});
});

router.post('/component/processor', function(req, res){
	
	
	var cpu = {
		price: req.body.price,
		cpu: req.body.cpu
	};
	req.session.cpu = cpu
	console.log(cpu.price);
	res.redirect('/home/system');


});

router.get('/component/motherboard', function(req, res){
	componentModel.getAllMobo(function(result){
		//console.log(result);
		res.render('components/motherboard', {motherboardList: result});
});
});

router.post('/component/motherboard', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var mobo = {
		quantity: quantity,
		price: req.body.price,
		motherboard: req.body.motherboard
	};
	req.session.motherboard = mobo
	res.redirect('/home/system');
});


router.get('/component/case', function(req, res){
	componentModel.getAllCase(function(result){
		//console.log(result);
		res.render('components/case', {caseList: result});
});
});

router.post('/component/case', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var cas= {
		quantity:quantity,
		price: req.body.price,
		case: req.body.case
	};
	req.session.case = cas
	res.redirect('/home/system');

});

router.get('/component/casefan', function(req, res){
	componentModel.getAllCooler(function(result){
		//console.log(result);
		res.render('components/casefan', {casefanList: result});
});
});

router.post('/component/casefan', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var cf = {
		quantity: quantity,
		price: req.body.price,
		casefan: req.body.casefan
	};
	req.session.casefan = cf
	res.redirect('/home/system');
});



router.get('/component/keyboard', function(req, res){
	componentModel.getAllKeyboard(function(result){
		//console.log(result);
		res.render('components/keyboard', {keyboardList: result});
});
});

router.post('/component/keyboard', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var kb = {
		quantity:quantity,
		price: req.body.price,
		keyboard: req.body.keyboard
	};
	req.session.keyboard = kb
	console.log(kb.price);
	res.redirect('/home/system');


});

router.get('/component/memory', function(req, res){
	componentModel.getAllRam(function(result){
		//console.log(result);
		res.render('components/memory', {memoryList: result});
});
});

router.post('/component/memory', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var mem = {
		quantity: quantity,
		price: req.body.price,
		memory: req.body.memory
	};
	req.session.memory = mem
	res.redirect('/home/system');
});
router.get('/component/mice', function(req, res){
	componentModel.getAllMouse(function(result){
		//console.log(result);
		res.render('components/mice', {miceList: result});
});
});

router.post('/component/mice', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var mice = {
		quantity:quantity,
		price: req.body.price,
		mice: req.body.mice
	};
	req.session.mice = mice
	console.log(mice.price);
	res.redirect('/home/system');


});

router.get('/component/monitor', function(req, res){
	componentModel.getAllMonitor(function(result){
		//console.log(result);
		res.render('components/monitor', {monitorList: result});
});
});

router.post('/component/monitor', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var mnt = {
		quantity: quantity,
		price: req.body.price,
		monitor: req.body.monitor
	};
	req.session.monitor = mnt
	res.redirect('/home/system');
});
router.get('/component/opticaldrive', function(req, res){
	componentModel.getAllOd(function(result){
		//console.log(result);
		res.render('components/opticaldrive', {opticaldriveList: result});
});
});

router.post('/component/opticaldrive', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var od = {
		quantity:quantity,
		price: req.body.price,
		opticaldrive: req.body.opticaldrive
	};
	req.session.opticaldrive = od
	console.log(od.price);
	res.redirect('/home/system');


});

router.get('/component/powersupply', function(req, res){
	componentModel.getAllPSU(function(result){
		//console.log(result);
		res.render('components/powersupply', {powersupplyList: result});
});
});

router.post('/component/powersupply', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var ps = {
		quantity: quantity,
		price: req.body.price,
		powersupply: req.body.powersupply
	};
	req.session.powersupply = ps
	res.redirect('/home/system');
});


router.get('/component/speaker', function(req, res){
	componentModel.getAllSpeaker(function(result){
		//console.log(result);
		res.render('components/speaker', {speakerList: result});
});
});

router.post('/component/speaker', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var spkr = {
		quantity: quantity,
		price: req.body.price,
		speaker: req.body.speaker
	};
	req.session.speaker = spkr
	res.redirect('/home/system');
});
router.get('/component/storage', function(req, res){
	componentModel.getAllHDD(function(result){
		//console.log(result);
		res.render('components/storage', {storageList: result});
});
});

router.post('/component/storage', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var strg = {
		quantity:quantity,
		price: req.body.price,
		storage: req.body.storage
	};
	req.session.storage = strg
	
	res.redirect('/home/system');


});


router.get('/component/videocard', function(req, res){
	componentModel.getAllGPU(function(result){
		//console.log(result);
		res.render('components/videocard', {videocardList: result});
});
});

router.post('/component/videocard', function(req, res){
	
	var quantity =req.body.val;
	var price = quantity*req.body.price;
	var vc = {
		quantity:quantity,
		price: req.body.price,
		videocard: req.body.videocard
	};
	req.session.videocard = vc
	res.redirect('/home/system');


});


module.exports = router;