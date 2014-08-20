(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1366,
	height: 768,
	fps: 24,
	color: "#000000",
	manifest: [
		{src:"images/cloud1.png", id:"cloud1"},
		{src:"images/cloud2.png", id:"cloud2"},
		{src:"images/fullmoon.png", id:"fullmoon"},
		{src:"images/raindrop.png", id:"raindrop"},
		{src:"images/star.png", id:"star"},
		{src:"images/sun.png", id:"sun"}
	]
};



// symbols:



(lib.cloud1 = function() {
	this.initialize(img.cloud1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,709,491);


(lib.cloud2 = function() {
	this.initialize(img.cloud2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,606,358);


(lib.fullmoon = function() {
	this.initialize(img.fullmoon);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1223,1223);


(lib.raindrop = function() {
	this.initialize(img.raindrop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,13,80);


(lib.star = function() {
	this.initialize(img.star);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,66,66);


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,257);


(lib.weather = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Snow
	this.title = new cjs.Text("Snow", "150px 'Arial'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 152;
	this.title.lineWidth = 675;

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,679.2,341.2);


(lib.thunderstorm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Clear
	this.title = new cjs.Text("Thunderstorm", "150px 'Arial'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 152;
	this.title.lineWidth = 989;
	this.title.setTransform(-404,344.1);

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-404,344.1,993.2,510.8);


(lib.sunny = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Clear
	this.title = new cjs.Text("Clear", "150px 'Arial'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 152;
	this.title.lineWidth = 675;

	this.timeline.addTween(cjs.Tween.get(this.title).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,679.2,341.2);


(lib.sun_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sun();
	this.instance.setTransform(-639.2,-164.5,2.868,2.868);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-639.2,-164.5,1329.3,737.1);


(lib.shower = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Shower
	this.text = new cjs.Text("Shower", "96px 'Arial'", "#FFFF00");
	this.text.textAlign = "center";
	this.text.lineHeight = 98;
	this.text.lineWidth = 743;
	this.text.setTransform(189.3,391.9);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-182.3,391.9,747.1,225.1);


(lib.night = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#152129","#000000"],[0.012,1],0,150,0,-150).s().p("A3aXbMAAAgu2MAu1AAAMAAAAu2g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.fullmoon_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fullmoon();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1223,1223);


(lib.drop = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.raindrop();
	this.instance.setTransform(40,0,0.597,1,30);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46.7,73.2);


(lib.day = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// BG
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0099FF","#000066"],[0,1],0,150,0,-150).s().p("A3aXbMAAAgu2MAu1AAAMAAAAu2g");
	this.shape.setTransform(150,150);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.cloud3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud1();
	this.instance.setTransform(0,0,1.324,1.245);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,938.5,611.1);


(lib.cloud2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud2();
	this.instance.setTransform(0,0,1.743,1.743);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1056.3,624);


(lib.cloud1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud1();
	this.instance.setTransform(0,0,2.362,1.945);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1674.6,955.3);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud3();
	this.instance.setTransform(258.1,-37.7,1,1,0,0,0,285.2,305.6);

	this.instance_1 = new lib.cloud3();
	this.instance_1.setTransform(-626.1,37.9,1,1,0,0,0,285.2,305.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-911.3,-343.3,1822.6,686.7);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud3();
	this.instance.setTransform(258.1,-37.7,1,1,0,0,0,285.2,305.6);

	this.instance_1 = new lib.cloud3();
	this.instance_1.setTransform(-626.1,37.9,1,1,0,0,0,285.2,305.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-911.3,-343.3,1822.6,686.7);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cloud3();
	this.instance.setTransform(258.1,-37.7,1,1,0,0,0,285.2,305.6);

	this.instance_1 = new lib.cloud3();
	this.instance_1.setTransform(-626.1,37.9,1,1,0,0,0,285.2,305.6);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-911.3,-343.3,1822.6,686.7);


(lib.sunclouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud1
	this.instance = new lib.cloud1_1();
	this.instance.setTransform(1062.7,286.1,1,1,0,0,0,561.2,201.6);
	this.instance.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1330.7},110).to({x:1062.7},118).wait(1));

	// cloud2
	this.instance_1 = new lib.cloud2_1();
	this.instance_1.setTransform(528.1,570.1,1,1,0,0,0,528.1,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:608.1},124).to({x:528.1},104).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,84.5,2176.1,955.3);


(lib.rain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var rainsCount = 200;
		var angleOffset = -400;// subtract this from rain xSpawnPosition, tween to that position, for angled motion
		var min_spawnXPosition = 0;
		var max_spawnXPosition = 1366 + 300;//$('#Stage').width();
		var yPos_start = -100;
		var yPos_end = 768;//$('#Stage').height() + 100;
		var min_tweenTime = 1;
		var max_tweenTime = 3;
		var min_tweenDelay = .2;
		var max_tweenDelay = .7;
		
		this.init = function(){
			this.visible = true;
		
			for(var i=0; i<rainsCount; i++){
				var xPos_start = getRandomInRangeRounded(min_spawnXPosition, max_spawnXPosition);
		
				this['raindrop_'+i] = new lib.drop();
				this['raindrop_'+i].x = xPos_start;
				this['raindrop_'+i].y = yPos_start;
				stage.addChild(this['raindrop_'+i]);
		
				tweenRain(this['raindrop_'+i],xPos_start);
			}
		}
		
		function tweenRain(raindrop,xPos_start){
			var tweenTime = getRandomInRange(min_tweenTime, max_tweenTime);
			var tweenDelay = getRandomInRange(min_tweenDelay, max_tweenDelay);
			var xPos_end = xPos_start + angleOffset;
			
			TweenMax.to(raindrop,tweenTime,{delay:tweenDelay, y:yPos_end, x:xPos_end, yoyo:false, repeat:-1, ease:Power2.easeIn});
		}
		
		function getRandomInRange(start, end) {
			return start + (Math.random() * (end - start));
		}
		
		function getRandomInRangeRounded(start, end) {
			return Math.round( start + (Math.random() * (end - start)) );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// raindrop
	this.instance = new lib.drop();
	this.instance.setTransform(-406.9,-192.5,1,1,0,0,0,23.4,36.6);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-430.3,-229.1,46.7,73.2);


(lib.period = function() {
	this.initialize();

	// Day
	this.Day = new lib.day();
	this.Day.setTransform(150,150,1,1,0,0,0,150,150);

	// Night
	this.Night = new lib.night();
	this.Night.setTransform(150,150,1,1,0,0,0,150,150);

	this.addChild(this.Night,this.Day);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.moon = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fullmoon_1();
	this.instance.setTransform(-262,208,0.562,0.562,0,0,0,611.5,611.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-605.5,-135.4,687,687);


(lib.mists = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud1
	this.instance = new lib.cloud1_1();
	this.instance.setTransform(2394.6,284.1,1.315,1.318,0,0,0,837.3,477.6);
	this.instance.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.66,scaleY:1.76,x:2594.6,y:332.1},44).to({scaleX:1.32,scaleY:1.32,x:2394.6,y:284.1},40).wait(1));

	// cloud1
	this.instance_1 = new lib.cloud1_1();
	this.instance_1.setTransform(1897.6,885.7,1.315,1.318,0,0,0,837.3,477.6);
	this.instance_1.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:837.4,scaleX:1.17,scaleY:1.16,x:1737.6},44).to({regX:837.3,scaleX:1.32,scaleY:1.32,x:1897.6},40).wait(1));

	// cloud1
	this.instance_2 = new lib.cloud1_1();
	this.instance_2.setTransform(1357.4,493.6,1.315,1.318,0,0,0,837.3,477.6);
	this.instance_2.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:2.03,scaleY:2.03,x:1477.5},44).to({scaleX:1.32,scaleY:1.32,x:1357.4},40).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(256.1,-345.5,3239.9,1860.9);


(lib.mist = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Mists
	this.instance = new lib.mists();
	this.instance.setTransform(35.3,253.9,1,1,0,0,0,1190,593.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-898.6,-685.5,3239.9,1860.9);


(lib.graycloudy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Cloudy
	this.instance = new lib.sunclouds();
	this.instance.setTransform(779.5,253.9,1,1,0,0,0,1190,593.9);
	this.instance.filters = [new cjs.ColorFilter(0.49, 0.49, 0.49, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,83,2180,959);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.5,-255.5,2176.1,955.3);


(lib.clouds = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// cloud1
	this.instance = new lib.cloud1_1();
	this.instance.setTransform(1062.7,286.1,1,1,0,0,0,561.2,201.6);
	this.instance.alpha = 0.621;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:1330.7},110).to({x:1062.7},118).wait(1));

	// cloud3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(1146.3,643.9);

	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.setTransform(998.3,643.9);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween3("synched",0);
	this.instance_3.setTransform(1146.3,643.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},52).to({state:[{t:this.instance_3}]},176).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:998.3},52).wait(177));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:false},52).to({_off:true,x:1146.3},176).wait(1));

	// cloud2
	this.instance_4 = new lib.cloud2_1();
	this.instance_4.setTransform(528.1,570.1,1,1,0,0,0,528.1,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:608.1},124).to({x:528.1},104).wait(1));

	// cloud1
	this.instance_5 = new lib.cloud1_1();
	this.instance_5.setTransform(1745.5,593.6,1,1,0,0,0,837.3,477.6);
	this.instance_5.alpha = 0.762;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:1833.5},165).to({x:1745.5},63).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,84.5,2582.8,986.8);


(lib.sunnycloudy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Cloudy
	this.instance = new lib.sunclouds();
	this.instance.setTransform(779.5,253.9,1,1,0,0,0,1190,593.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.5,-255.5,2176.1,955.3);


(lib.cloudy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.init = function(){
			this.visible = true;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Clouds
	this.instance = new lib.clouds();
	this.instance.setTransform(779.5,253.9,1,1,0,0,0,1190,593.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-410.5,-255.5,2582.8,986.8);


// stage content:
(lib.weathercanvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Period.Day.visible = false;
		this.Period.Night.visible = false;
		
		this.Sun.visible = false;
		this.Moon.visible = false;
		
		this.Clear.visible = false;
		this.SunnyCloudy.visible = false;
		this.Cloudy.visible = false;
		this.GrayCloudy.visible = false;
		this.Shower.visible = false;
		this.Rain.visible = false;
		this.Thunderstorm.visible = false;
		this.Snow.visible = false;
		this.Mist.visible = false;
		
		//this.stop();
		
		//window.Weather = this;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Clear
	this.Clear = new lib.sunny();
	this.Clear.setTransform(919.8,262.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Clear).wait(1));

	// SunnyCloudy
	this.SunnyCloudy = new lib.sunnycloudy();
	this.SunnyCloudy.setTransform(402.6,226.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.SunnyCloudy).wait(1));

	// Cloudy
	this.Cloudy = new lib.cloudy();
	this.Cloudy.setTransform(402.6,226.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Cloudy).wait(1));

	// GrayCloudy
	this.GrayCloudy = new lib.graycloudy();
	this.GrayCloudy.setTransform(402.6,226.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.GrayCloudy).wait(1));

	// Shower
	this.Shower = new lib.shower();
	this.Shower.setTransform(964.3,307.1,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Shower).wait(1));

	// Rain
	this.Rain = new lib.rain();
	this.Rain.setTransform(711.1,304.4);

	this.timeline.addTween(cjs.Tween.get(this.Rain).wait(1));

	// Thunderstorm
	this.Thunderstorm = new lib.thunderstorm();
	this.Thunderstorm.setTransform(919.8,262.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Thunderstorm).wait(1));

	// Snow
	this.Snow = new lib.weather();
	this.Snow.setTransform(588.2,469.1,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Snow).wait(1));

	// Mist
	this.Mist = new lib.mist();
	this.Mist.setTransform(402.6,226.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Mist).wait(1));

	// Sun
	this.Sun = new lib.sun_1();
	this.Sun.setTransform(919.8,262.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Sun).wait(1));

	// Moon
	this.Moon = new lib.moon();
	this.Moon.setTransform(919.8,262.6,1,1,0,0,0,339.6,170.6);

	this.timeline.addTween(cjs.Tween.get(this.Moon).wait(1));

	// Period
	this.Period = new lib.period();
	this.Period.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.Period).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.6,-245.6,3239.9,1860.9);

})(weatherlib = weatherlib||{}, weatherimages = weatherimages||{}, createjs = createjs||{});
var weatherlib, weatherimages, createjs;