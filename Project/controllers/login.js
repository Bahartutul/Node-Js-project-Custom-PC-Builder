var express = require('express');
var router = express.Router();
var loginModel =  require.main.require('./models/login-model');

router.get('/login', function(req, res){
 	
		res.redirect('/login/signin')

});



router.get('/login/userprofile', function(req, res){
	   var user ={
	   	username:req.session.user.username
	   };

		loginModel.getUserDetails(user, function(result){
			console.log(result);
			res.render('user/userprofile' , { home: req.session.home, user: result });

		});
 	
		


});


router.get('/login/signin', function(req, res){
 	
		res.render('login/signin',{msg:''});


});

router.post('/login/signin', function(req, res){
 	
			var login = {
 			username: req.body.username,
 			password: req.body.password,
 			};
 			var data = {
 				address: "",
 				phone: "",
 			};
 			loginModel.getUserDetails(login, function(result){
 				if(result)
 				{
 				data.address= result[0].address;
 				data.phone= result[0].phone;
 				req.session.userdetails = data;
 			}
 			else
 			{
 				res.render('login/signin',{msg:'Invalid Username and password...!!!'});
 			}
 			});
            
 			loginModel.verifyUser(login, function(result){
 			if(result){
 				if(result[0].type == "user"){
 					var home = {
 					user:result[0].username,
 					login: '/login/userprofile'
 					};
 					req.session.home = home;
 					req.session.user = login;
 					
 					res.redirect('/home');
 				}				
 				
 			}
 			else{
 		         res.render('login/signin',{msg:'Invalid Username and password...!!!'});
 			}

 		});



});
       

router.get('/login/signup', function(req, res){
	var data={
		msg1:'',
		msg2:'',
		msg3:''
	};
	var username='';
	var password='';
	var confirmpassword='';
 	
		res.render('login/signup',{msg:data,username:username,password:password,confirmpassword:confirmpassword});



});


router.post('/login/signup', function(req, res){
	var data={
		msg1:'Username Required...!!!',
		msg2:'Password Required...!!!',
		msg3:'Password and confirmpassword not match...!!!'
	};
	
	var signup = {
 			username: req.body.username,
 			password: req.body.password,
 			confirmpassword:  req.body.cpassword
 			};
 		var home = {
 				user: signup.username,
 				login: '/login/userprofile'
 		};

 if(req.body.username!="" && req.body.password!="" && req.body.password==req.body.cpassword)
 {
 	loginModel.signupUser(signup, function(result){
 		if(result){
 			req.session.user = signup;
 			req.session.home = home;
 			res.redirect('../login/userdetails');
 		}
 		else{
 			res.redirect('/login/signup');
 		}
 		
 	});}

 	
 	var username=req.body.username;
 	var password=req.body.password;
 	var confirmpassword=req.body.confirmpassword;
    
 	if(req.body.username=="" && req.body.password=="" )
 	{
 		res.render('login/signup',{msg:data,username:username,password:password,confirmpassword:confirmpassword});
 	}

    if(req.body.password!="" && req.body.username=="")
    {
    	var data={
		msg1:'Username Required...!!!',
		msg2:'',
		msg3:'Password and confirmpassword not match...!!!'
	};
    	res.render('login/signup',{msg:data,username:username,password:password,confirmpassword:confirmpassword});
    }
    
    if(req.body.password=="" && req.body.username!="")
    {
    	var data={
		msg1:'',
		msg2:'Password Required...!!!',
		msg3:'Password and confirmpassword not match...!!!'
	};
    	res.render('login/signup',{msg:data,username:username,password:password,confirmpassword:confirmpassword});
    }
 	     if(req.body.password!="" && req.body.username!="" && req.body.cpassword!=req.body.password)
    {
    	var data={
		msg1:'',
		msg2:'',
		msg3:'Password and confirmpassword not match...!!!'
	};
    	res.render('login/signup',{msg:data,username:username,password:password,confirmpassword:confirmpassword});

    }
     		
});
router.get('/login/userdetails', function(req, res){
 	
 	var data={
		msg1:'',
		msg2:'',
		msg3:''
	};
	var name='';
	var address='';
	var phone='';
		res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});


});

/*router.get('/login/userdetails', function(req, res){
 	
		res.render('login/userdetails');


});*/
router.post('/login/userdetails', function(req, res){
	var data={
		msg1:'Name Required...!!!',
		msg2:'Address Required...!!!',
		msg3:'Mobile no. Required ...!!!'
	};
		var userdetails = {
 			name: req.body.name,
 			address: req.body.address,
 			phone:  req.body.mobile,
 			username: req.session.user.username
 			};
 			req.session.user.address = req.body.address;
 			req.session.user.phone = req.body.mobile;
       if(req.body.name!="" && req.body.address!="" && req.body.mobile!=""){
 			loginModel.userDetails(userdetails, function(result){
 				req.session.userdetails = userdetails;
 				res.redirect('/home');
       
       });}

 var name=req.body.name;
 	var address=req.body.address;
 	var phone=req.body.mobile;
       if(req.body.name=="" && req.body.address=="" && req.body.mobile=="")
       {
       	var data={
		msg1:'Name Required...!!!',
		msg2:'Address Required...!!!',
		msg3:'Mobile no. Required ...!!!'
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
       }
 		
 	
	 if(req.body.name!="" && req.body.address=="" && req.body.mobile=="")
	{
      var data={
		msg1:'',
		msg2:'Address Required...!!!',
		msg3:'Mobile no. Required ...!!!'
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
	}

	     if( req.body.name!="" && req.body.address!="" && req.body.mobile=="")
       {
       	var data={
		msg1:'',
		msg2:'',
		msg3:'Mobile no. Required ...!!!'
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
       }

       if(req.body.name!="" && req.body.address=="" && req.body.mobile!="")
       {
       	var data={
		msg1:'',
		msg2:'Address Required...!!!',
		msg3:''
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
       }

       if( req.body.mobile=="" && req.body.name=="" && req.body.address!="")
       {
       	var data={
		msg1:'Name Required...!!!',
		msg2:'',
		msg3:'Mobile no. Required ...!!!'
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
       }

        if(req.body.address!="" && req.body.mobile!="" && req.body.name=="")
       {
       	var data={
		msg1:'Name Required...!!!',
		msg2:'',
		msg3:''
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
       }

       if(req.body.phone!="" &&  req.body.mobile=="" && req.body.name=="")
       {
       	var data={
		msg1:'Name Required...!!!',
		msg2:'Address Required...!!!',
		msg3:''
	};
	res.render('login/userdetails',{msg:data,name:name,address:address,phone:phone});
       }
    
});



module.exports = router;