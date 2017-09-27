var express = require('express');
var router = express.Router();
var componentModel = require.main.require('./models/component-model');


router.get('/remove/cpu', function(req, res){
	req.session.cpu = null;
	res.redirect('/home/system');

});

router.get('/remove/motherboard', function(req, res){
	req.session.motherboard = null;
	res.redirect('/home/system');

});
router.get('/remove/gpu', function(req, res){
	req.session.videocard = null;
	res.redirect('/home/system');

});
router.get('/remove/psu', function(req, res){
	req.session.powersupply = null;
	res.redirect('/home/system');

});
router.get('/remove/storage', function(req, res){
	req.session.storage = null;
	res.redirect('/home/system');

});
router.get('/remove/memory', function(req, res){
	req.session.memory = null;
	res.redirect('/home/system');

});
router.get('/remove/opticaldrive', function(req, res){
	req.session.opticaldrive = null;
	res.redirect('/home/system');

});
router.get('/remove/monitor', function(req, res){
	req.session.monitor = null;
	res.redirect('/home/system');

});
router.get('/remove/case', function(req, res){
	req.session.case = null;
	res.redirect('/home/system');

});
router.get('/remove/casefan', function(req, res){
	req.session.casefan = null;
	res.redirect('/home/system');

});
router.get('/remove/speaker', function(req, res){
	req.session.speaker = null;
	res.redirect('/home/system');

});
router.get('/remove/mice', function(req, res){
	req.session.mice = null;
	res.redirect('/home/system');

});
router.get('/remove/keyboard', function(req, res){
	req.session.keyboard = null;
	res.redirect('/home/system');

});



router.get('/remove/logout', function(req, res){
	req.session.destroy(function(err) {
		res.redirect('/home');
});
	
});

module.exports = router;