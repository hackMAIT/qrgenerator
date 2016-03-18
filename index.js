
/*
 * GET home page.
 */
var qr = require('qr-image');
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sign2 = function(req, res){
	// var a = req.body.bloodsugarlevel;
	// var b = req.bloodcount;
	// var c1= req.bloodpressureul;
	// var c2= req.bloodpressurell;
	// var c = c1+c2;
	// var d = req.ironlevel;
	// var e = req.cholestrol;
	// var f = req.pulse;
	// var g = req.bodymassindex;

	// var ad = ((80-a)/80)*100*2;
	// var bd = ((5-b)/5)*100;
	// var cd1= ((105-cd1)/105)*100;
	// var cd2 = ((70-cd2)/70)*100;
	// var cd= (cd1+cd2)*2;
	// var ed = ((200-e)/200)*100*2;
	// var fd= ((80-f)/80)*100;
	// var gd=((22-g)/22)*100;

	// var d = ad+bd+cd+ed+fd+gd;
	// var health=100-d;

var qr_svg = qr.image('Blood Sugar Level: ' + req.body.bloodsugarlevel + '\nBlood Count(trillion cells/Litre): ' + req.body.bloodcount + '\nBlood Pressure: ' + req.body.bloodpressureul +'/'+ req.body.bloodpressurell +'\nIron Level(percentage): ' + req.body.ironlevel + '\nCholestrol(mg/dL): ' + req.body.cholestrol + '\nPulse(beats/min): ' + req.body.pulse + ' \nBMI: ' + req.body.bodymassindex , { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('public/qr.svg'));

var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
  res.render('sign2', {aditya: req.body.bloodcount});
 // console.log(health); 
};

