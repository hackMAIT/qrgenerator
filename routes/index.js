
/*
 * GET home page.
 */
var qr = require('qr-image');
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.sign2 = function(req, res){
	var a = req.body.bloodsugarlevel;
	var b = req.body.bloodcount;
	var c1= req.body.bloodpressureul;
	var c2= req.body.bloodpressurell;
	var c = c1+c2;
	var d = req.body.ironlevel;
	var e = req.body.cholestrol;
	var f = req.body.pulse;
	var g = req.body.bodymassindex;

	var ad = (Math.abs((80-a)/80))*100*2;
	var bd = (Math.abs((5-b)/5))*100;
	var cd1= (Math.abs((105-c1)/105))*100;
	var cd2 = (Math.abs((70-c2)/70))*100;
	var cd= (cd1+cd2)/2;
	var dd = Math.abs((45-d)/45)*100 ;
	var ed = (Math.abs((200-e)/200))*100*2;
	var fd= (Math.abs((80-f)/80))*100;
	var gd=(Math.abs((22-g)/22))*100;

	var deviation = (ad+bd+cd+dd+ed+fd+gd)/12;
	var health=100-deviation;

var qr_svg = qr.image('Blood Sugar Level: ' + req.body.bloodsugarlevel + '\nBlood Count(trillion cells/Litre): ' + req.body.bloodcount + '\nBlood Pressure: ' + req.body.bloodpressureul +'/'+ req.body.bloodpressurell +'\nIron Level(percentage): ' + req.body.ironlevel + '\nCholestrol(mg/dL): ' + req.body.cholestrol + '\nPulse(beats/min): ' + req.body.pulse + ' \nBMI: ' + req.body.bodymassindex + '\n\nHealth Percentage' + health + '%', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('public/qr.svg'));

var svg_string = qr.imageSync('I love QR!', { type: 'svg' });
  res.render('sign2', {aditya: health, ad: ad, bd: bd, cd: cd, dd: dd, ed: ed, fd: fd, gd: gd});
};

