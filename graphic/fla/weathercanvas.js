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


(lib.sun = function() {
	this.initialize(img.sun);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,263,257);


(lib.weather = function() {
	this.initialize();

	// Layer 1
	this.title = new cjs.Text("Snow", "150px 'Arial'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 152;
	this.title.lineWidth = 675;

	this.addChild(this.title);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,679.2,341.2);


(lib.thunderstorm = function() {
	this.initialize();

	// Clear
	this.title = new cjs.Text("Thunderstorm", "150px 'Arial'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 152;
	this.title.lineWidth = 989;
	this.title.setTransform(-404,344.1);

	this.addChild(this.title);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-404,344.1,993.2,510.8);


(lib.sunny = function() {
	this.initialize();

	// Clear
	this.title = new cjs.Text("Clear", "150px 'Arial'", "#FFFFFF");
	this.title.name = "title";
	this.title.lineHeight = 152;
	this.title.lineWidth = 675;

	this.addChild(this.title);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,679.2,341.2);


(lib.sun_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sun();
	this.instance.setTransform(-639.2,-164.5,2.868,2.868);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-639.2,-164.5,1329.3,737.1);


(lib.night = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#152129","#000000"],[0.012,1],0,150,0,-150).s().p("A3aXbMAAAgu2MAu1AAAMAAAAu2g");
	this.shape.setTransform(150,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
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


(lib.day = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#0099FF","#000066"],[0,1],0,150,0,-150).s().p("A3aXbMAAAgu2MAu1AAAMAAAAu2g");
	this.shape.setTransform(150,150);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
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


(lib.raindrop2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drop();
	this.instance.setTransform(526.7,-544.1,1,1,0,0,0,23.4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-165.4,y:468.1},33).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(503.3,-580.7,46.7,73.2);


(lib.raindrop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.drop();
	this.instance.setTransform(526.7,-544.1,1,1,0,0,0,23.4,36.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-165.4,y:468.1},46).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(503.3,-580.7,46.7,73.2);


(lib.rain = function() {
	this.initialize();

	// Rain2
	this.instance = new lib.raindrop2();
	this.instance.setTransform(425,642.2,1,1,0,0,0,6.5,40);

	this.instance_1 = new lib.raindrop2();
	this.instance_1.setTransform(95,144,1,1,0,0,0,6.5,40);

	this.instance_2 = new lib.raindrop2();
	this.instance_2.setTransform(-287.1,370.1,1,1,0,0,0,6.5,40);

	this.instance_3 = new lib.raindrop2();
	this.instance_3.setTransform(-287.1,962.2,1,1,0,0,0,6.5,40);

	this.instance_4 = new lib.raindrop2();
	this.instance_4.setTransform(-121.1,959.6,1,1,0,0,0,6.5,40);

	this.instance_5 = new lib.raindrop2();
	this.instance_5.setTransform(-701.2,662.2,1,1,0,0,0,6.5,40);

	this.instance_6 = new lib.raindrop2();
	this.instance_6.setTransform(-701.2,-38,1,1,0,0,0,6.5,40);

	this.instance_7 = new lib.raindrop2();
	this.instance_7.setTransform(-11,-38,1,1,0,0,0,6.5,40);

	this.instance_8 = new lib.raindrop2();
	this.instance_8.setTransform(265,-38,1,1,0,0,0,6.5,40);

	this.instance_9 = new lib.raindrop2();
	this.instance_9.setTransform(237,1014.3,1,1,0,0,0,6.5,40);

	this.instance_10 = new lib.raindrop2();
	this.instance_10.setTransform(-923.2,1058.3,1,1,0,0,0,6.5,40);

	this.instance_11 = new lib.raindrop2();
	this.instance_11.setTransform(-1005.3,612.2,1,1,0,0,0,6.5,40);

	this.instance_12 = new lib.raindrop2();
	this.instance_12.setTransform(-538.1,684.2,1,1,0,0,0,6.5,40);

	this.instance_13 = new lib.raindrop2();
	this.instance_13.setTransform(-287.1,-220,1,1,0,0,0,6.5,40);

	this.instance_14 = new lib.raindrop2();
	this.instance_14.setTransform(-287.1,-122,1,1,0,0,0,6.5,40);

	this.instance_15 = new lib.raindrop2();
	this.instance_15.setTransform(265,-222,1,1,0,0,0,6.5,40);

	this.instance_16 = new lib.raindrop2();
	this.instance_16.setTransform(265,476.1,1,1,0,0,0,6.5,40);

	this.instance_17 = new lib.raindrop2();
	this.instance_17.setTransform(-701.2,444.1,1,1,0,0,0,6.5,40);

	this.instance_18 = new lib.raindrop2();
	this.instance_18.setTransform(-562,942.2,1,1,0,0,0,6.5,40);

	this.instance_19 = new lib.raindrop2();
	this.instance_19.setTransform(-701.2,336.1,1,1,0,0,0,6.5,40);

	this.instance_20 = new lib.raindrop2();
	this.instance_20.setTransform(-287.1,236.1,1,1,0,0,0,6.5,40);

	this.instance_21 = new lib.raindrop2();
	this.instance_21.setTransform(265,236.1,1,1,0,0,0,6.5,40);

	this.instance_22 = new lib.raindrop2();
	this.instance_22.setTransform(265,876.2,1,1,0,0,0,6.5,40);

	this.instance_23 = new lib.raindrop2();
	this.instance_23.setTransform(22.1,878.6,1,1,0,0,0,6.5,40);

	this.instance_24 = new lib.raindrop2();
	this.instance_24.setTransform(-318.4,886.4,1,1,0,0,0,6.5,40);

	this.instance_25 = new lib.raindrop2();
	this.instance_25.setTransform(-134,468.2,1,1,0,0,0,6.5,40);

	this.instance_26 = new lib.raindrop2();
	this.instance_26.setTransform(106,508.2,1,1,0,0,0,6.5,40);

	this.instance_27 = new lib.raindrop2();
	this.instance_27.setTransform(106,508.2,1,1,0,0,0,6.5,40);

	// Rain1
	this.instance_28 = new lib.raindrop_1();
	this.instance_28.setTransform(-8.4,827,1.244,1,0,0,0,6.5,40);

	this.instance_29 = new lib.raindrop_1();
	this.instance_29.setTransform(45.5,1131.3,1,1,0,0,0,6.5,40);

	this.instance_30 = new lib.raindrop_1();
	this.instance_30.setTransform(605.5,920.6,1,1,0,0,0,6.5,40);

	this.instance_31 = new lib.raindrop_1();
	this.instance_31.setTransform(437.5,878.6,1,1,0,0,0,6.5,40);

	this.instance_32 = new lib.raindrop_1();
	this.instance_32.setTransform(235.1,1125.5,1,1,0,0,0,6.5,40);

	this.instance_33 = new lib.raindrop_1();
	this.instance_33.setTransform(-424.2,106.7,1.244,1,0,0,0,6.5,40);

	this.instance_34 = new lib.raindrop_1();
	this.instance_34.setTransform(-562,-0.2,1.008,1,0,0,7.4,6.5,40);

	this.instance_35 = new lib.raindrop_1();
	this.instance_35.setTransform(508.5,890.6,1,1,0,0,0,6.5,40);

	this.instance_36 = new lib.raindrop_1();
	this.instance_36.setTransform(118.4,1020.6,1,1,0,0,0,6.5,40);

	this.instance_37 = new lib.raindrop_1();
	this.instance_37.setTransform(-702.2,1133.2,1,1,0,0,0,6.5,40);

	this.instance_38 = new lib.raindrop_1();
	this.instance_38.setTransform(-333.8,942.2,1.008,1,0,0,7.4,6.5,40);

	this.instance_39 = new lib.raindrop_1();
	this.instance_39.setTransform(-770.6,942.2,1,1,0,0,0,6.5,40);

	this.instance_40 = new lib.raindrop_1();
	this.instance_40.setTransform(-94.9,918,1,1,0,0,0,6.5,40);

	this.instance_41 = new lib.raindrop_1();
	this.instance_41.setTransform(-141.6,1126.7,1,1,0,0,0,6.5,40);

	this.instance_42 = new lib.raindrop_1();
	this.instance_42.setTransform(-328.2,1119.1,1,1,0,0,0,6.5,40);

	this.instance_43 = new lib.raindrop_1();
	this.instance_43.setTransform(-138.6,1113.3,1,1,0,0,0,6.5,40);

	this.instance_44 = new lib.raindrop_1();
	this.instance_44.setTransform(298.2,1113.3,1,1,0,0,0,6.5,40);

	this.instance_45 = new lib.raindrop_1();
	this.instance_45.setTransform(321.5,1113.3,1.244,1,0,0,0,6.5,40);

	this.instance_46 = new lib.raindrop_1();
	this.instance_46.setTransform(134.8,878.4,1.008,1,0,0,7.4,6.5,40);

	this.instance_47 = new lib.raindrop_1();
	this.instance_47.setTransform(-11.9,769.2,1,1,0,0,0,6.5,40);

	this.instance_48 = new lib.raindrop_1();
	this.instance_48.setTransform(330.9,938.5,1,1,0,0,0,6.5,40);

	this.instance_49 = new lib.raindrop_1();
	this.instance_49.setTransform(-255.3,1008.4,1,1,0,0,0,6.5,40);

	this.instance_50 = new lib.raindrop_1();
	this.instance_50.setTransform(-334.6,813.2,1,1,0,0,0,6.5,40);

	this.instance_51 = new lib.raindrop_1();
	this.instance_51.setTransform(-229.9,947.4,1,1,0,0,0,6.5,40);

	this.instance_52 = new lib.raindrop_1();
	this.instance_52.setTransform(-1144.3,930,1,1,0,0,0,6.5,40);

	this.instance_53 = new lib.raindrop_1();
	this.instance_53.setTransform(-411.4,1090.1,1,1,0,0,0,6.5,40);

	this.instance_54 = new lib.raindrop_1();
	this.instance_54.setTransform(-707.5,930,1,1,0,0,0,6.5,40);

	this.instance_55 = new lib.raindrop_1();
	this.instance_55.setTransform(-1097.6,1060,1,1,0,0,0,6.5,40);

	this.instance_56 = new lib.raindrop_1();
	this.instance_56.setTransform(-515.3,1114.6,1,1,0,0,0,6.5,40);

	this.instance_57 = new lib.raindrop_1();
	this.instance_57.setTransform(268,378.6,1,1,0,0,0,6.5,40);

	this.instance_58 = new lib.raindrop_1();
	this.instance_58.setTransform(447.5,294.6,1,1,0,0,0,6.5,40);

	this.instance_59 = new lib.raindrop_1();
	this.instance_59.setTransform(272.6,185.7,1,1,0,0,0,6.5,40);

	this.instance_60 = new lib.raindrop_1();
	this.instance_60.setTransform(254.6,303.7,1,1,0,0,0,6.5,40);

	this.instance_61 = new lib.raindrop_1();
	this.instance_61.setTransform(424.6,143.7,1,1,0,0,0,6.5,40);

	this.instance_62 = new lib.raindrop_1();
	this.instance_62.setTransform(676.1,-193,1,1,0,0,0,6.5,40);

	this.instance_63 = new lib.raindrop_1();
	this.instance_63.setTransform(483.1,-183.9,1,1,0,0,0,6.5,40);

	this.instance_64 = new lib.raindrop_1();
	this.instance_64.setTransform(653.2,-343.9,1,1,0,0,0,6.5,40);

	this.instance_65 = new lib.raindrop_1();
	this.instance_65.setTransform(333.1,-343.9,1,1,0,0,0,6.5,40);

	this.instance_66 = new lib.raindrop_1();
	this.instance_66.setTransform(287.8,675.3,1,1,0,0,0,6.5,40);

	this.instance_67 = new lib.raindrop_1();
	this.instance_67.setTransform(145.1,645.3,1,1,0,0,0,6.5,40);

	this.instance_68 = new lib.raindrop_1();
	this.instance_68.setTransform(581.9,645.3,1,1,0,0,0,6.5,40);

	this.instance_69 = new lib.raindrop_1();
	this.instance_69.setTransform(397.8,645.3,1,1,0,0,0,6.5,40);

	this.instance_70 = new lib.raindrop_1();
	this.instance_70.setTransform(124.4,440.4,1,1,0,0,0,6.5,40);

	this.instance_71 = new lib.raindrop_1();
	this.instance_71.setTransform(-898.9,1060,1,1,0,0,0,6.5,40);

	this.instance_72 = new lib.raindrop_1();
	this.instance_72.setTransform(234.4,410.4,1,1,0,0,0,6.5,40);

	this.instance_73 = new lib.raindrop_1();
	this.instance_73.setTransform(884.6,410.4,1,1,0,0,0,6.5,40);

	this.instance_74 = new lib.raindrop_1();
	this.instance_74.setTransform(564.5,410.4,1,1,0,0,0,6.5,40);

	this.instance_75 = new lib.raindrop_1();
	this.instance_75.setTransform(744,326.4,1,1,0,0,0,6.5,40);

	this.instance_76 = new lib.raindrop_1();
	this.instance_76.setTransform(1045.1,179.9,1,1,0,0,0,6.5,40);

	this.instance_77 = new lib.raindrop_1();
	this.instance_77.setTransform(294.2,137.9,1,1,0,0,0,6.5,40);

	this.instance_78 = new lib.raindrop_1();
	this.instance_78.setTransform(281.1,106.7,0.779,1,0,0,0,6.5,40);

	this.instance_79 = new lib.raindrop_1();
	this.instance_79.setTransform(546.9,137.9,1,1,0,0,0,6.5,40);

	this.instance_80 = new lib.raindrop_1();
	this.instance_80.setTransform(877,137.9,1,1,0,0,0,6.5,40);

	this.instance_81 = new lib.raindrop_1();
	this.instance_81.setTransform(1056.6,53.9,1,1,0,0,0,6.5,40);

	this.instance_82 = new lib.raindrop_1();
	this.instance_82.setTransform(273.5,-67,1,1,0,0,0,6.5,40);

	this.instance_83 = new lib.raindrop_1();
	this.instance_83.setTransform(-707.5,33.5,1,1,0,0,0,6.5,40);

	this.instance_84 = new lib.raindrop_1();
	this.instance_84.setTransform(-58.6,471.1,1,1,0,0,0,6.5,40);

	this.instance_85 = new lib.raindrop_1();
	this.instance_85.setTransform(-562,-192.3,1.362,0.798,0,0,0,6.5,40.1);

	this.instance_86 = new lib.raindrop_1();
	this.instance_86.setTransform(893.1,-181,1,1,0,0,0,6.5,40);

	this.instance_87 = new lib.raindrop_1();
	this.instance_87.setTransform(-1012.8,561.2,1,1,0,0,0,6.5,40);

	this.instance_88 = new lib.raindrop_1();
	this.instance_88.setTransform(-34.5,-87.4,1,1,0,0,0,6.5,40);

	this.instance_89 = new lib.raindrop_1();
	this.instance_89.setTransform(116.1,-280.3,1,1,0,0,0,6.5,40);

	this.instance_90 = new lib.raindrop_1();
	this.instance_90.setTransform(-966.1,853.4,1.008,1,0,0,7.4,6.5,40);

	this.instance_91 = new lib.raindrop_1();
	this.instance_91.setTransform(-492,-292.3,1,1,0,0,0,6.5,40);

	this.instance_92 = new lib.raindrop_1();
	this.instance_92.setTransform(-634.8,-322.3,1,1,0,0,0,6.5,40);

	this.instance_93 = new lib.raindrop_1();
	this.instance_93.setTransform(440.2,-386.4,1,1,0,0,0,6.5,40);

	this.instance_94 = new lib.raindrop_1();
	this.instance_94.setTransform(-198,-322.3,1,1,0,0,0,6.5,40);

	this.instance_95 = new lib.raindrop_1();
	this.instance_95.setTransform(-588.1,-192.3,1,1,0,0,0,6.5,40);

	this.instance_96 = new lib.raindrop_1();
	this.instance_96.setTransform(-382,-322.3,1,1,0,0,0,6.5,40);

	this.instance_97 = new lib.raindrop_1();
	this.instance_97.setTransform(268.2,-322.3,1,1,0,0,0,6.5,40);

	this.instance_98 = new lib.raindrop_1();
	this.instance_98.setTransform(-51.9,-322.3,1,1,0,0,0,6.5,40);

	this.instance_99 = new lib.raindrop_1();
	this.instance_99.setTransform(127.6,-406.3,1,1,0,0,0,6.5,40);

	this.instance_100 = new lib.raindrop_1();
	this.instance_100.setTransform(-919.4,661.2,1,1,0,0,0,6.5,40);

	this.instance_101 = new lib.raindrop_1();
	this.instance_101.setTransform(-81.2,191.9,1,1,0,0,0,6.5,40);

	this.instance_102 = new lib.raindrop_1();
	this.instance_102.setTransform(39.4,-3.4,1,1,0,0,0,6.5,40);

	this.instance_103 = new lib.raindrop_1();
	this.instance_103.setTransform(363.4,-109.5,1,1,0,0,0,6.5,40);

	this.instance_104 = new lib.raindrop_1();
	this.instance_104.setTransform(-194.7,116.3,1,1,0,0,0,6.5,40);

	this.instance_105 = new lib.raindrop_1();
	this.instance_105.setTransform(-128.7,-45.4,1,1,0,0,0,6.5,40);

	this.instance_106 = new lib.raindrop_1();
	this.instance_106.setTransform(50.9,-129.4,1,1,0,0,0,6.5,40);

	this.instance_107 = new lib.raindrop_1();
	this.instance_107.setTransform(-508.8,639.2,1.008,1,0,0,7.4,6.5,40);

	this.instance_108 = new lib.raindrop_1();
	this.instance_108.setTransform(-945.6,639.2,1,1,0,0,0,6.5,40);

	this.instance_109 = new lib.raindrop_1();
	this.instance_109.setTransform(-692.8,639.2,1,1,0,0,0,6.5,40);

	this.instance_110 = new lib.raindrop_1();
	this.instance_110.setTransform(-42.6,639.2,1,1,0,0,0,6.5,40);

	this.instance_111 = new lib.raindrop_1();
	this.instance_111.setTransform(12.2,367,1,1,0,0,0,6.5,40);

	this.instance_112 = new lib.raindrop_1();
	this.instance_112.setTransform(-244.7,458,1.008,1,0,0,7.4,6.5,40);

	this.instance_113 = new lib.raindrop_1();
	this.instance_113.setTransform(-538.7,488,1,1,0,0,0,6.5,40);

	this.instance_114 = new lib.raindrop_1();
	this.instance_114.setTransform(-681.5,458,1,1,0,0,0,6.5,40);

	this.instance_115 = new lib.raindrop_1();
	this.instance_115.setTransform(-244.7,458,1,1,0,0,0,6.5,40);

	this.instance_116 = new lib.raindrop_1();
	this.instance_116.setTransform(-634.8,588,1,1,0,0,0,6.5,40);

	this.instance_117 = new lib.raindrop_1();
	this.instance_117.setTransform(-428.7,458,1,1,0,0,0,6.5,40);

	this.instance_118 = new lib.raindrop_1();
	this.instance_118.setTransform(80.9,374,1,1,0,0,0,6.5,40);

	this.instance_119 = new lib.raindrop_1();
	this.instance_119.setTransform(-668.2,769.2,1,1,0,0,0,6.5,40);

	this.instance_120 = new lib.raindrop_1();
	this.instance_120.setTransform(45.5,794.3,1.004,1,0,0,5.3,6.5,40);

	this.instance_121 = new lib.raindrop_1();
	this.instance_121.setTransform(-408.1,813.2,1,1,0,0,0,6.5,40);

	this.instance_122 = new lib.raindrop_1();
	this.instance_122.setTransform(230,661.2,1,1,0,0,0,6.5,40);

	this.instance_123 = new lib.raindrop_1();
	this.instance_123.setTransform(-94,265.1,1,1,0,0,0,6.5,40);

	this.instance_124 = new lib.raindrop_1();
	this.instance_124.setTransform(-702.2,253.1,1,1,0,0,0,6.5,40);

	this.instance_125 = new lib.raindrop_1();
	this.instance_125.setTransform(-844.9,223.1,1,1,0,0,0,6.5,40);

	this.instance_126 = new lib.raindrop_1();
	this.instance_126.setTransform(-408.1,223.1,1,1,0,0,0,6.5,40);

	this.instance_127 = new lib.raindrop_1();
	this.instance_127.setTransform(-592.2,223.1,1,1,0,0,0,6.5,40);

	this.instance_128 = new lib.raindrop_1();
	this.instance_128.setTransform(58,223.1,1,1,0,0,0,6.5,40);

	this.addChild(this.instance_128,this.instance_127,this.instance_126,this.instance_125,this.instance_124,this.instance_123,this.instance_122,this.instance_121,this.instance_120,this.instance_119,this.instance_118,this.instance_117,this.instance_116,this.instance_115,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-647.5,-1027,2247.6,1612.7);


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


(lib.mist = function() {
	this.initialize();

	// Mists
	this.instance = new lib.mists();
	this.instance.setTransform(35.3,253.9,1,1,0,0,0,1190,593.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-898.6,-685.5,3239.9,1860.9);


(lib.graycloudy = function() {
	this.initialize();

	// Cloudy
	this.instance = new lib.sunclouds();
	this.instance.setTransform(779.5,253.9,1,1,0,0,0,1190,593.9);
	this.instance.filters = [new cjs.ColorFilter(0.49, 0.49, 0.49, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,83,2180,959);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
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


(lib.sunnycloudy = function() {
	this.initialize();

	// Cloudy
	this.instance = new lib.sunclouds();
	this.instance.setTransform(779.5,253.9,1,1,0,0,0,1190,593.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-410.5,-255.5,2176.1,955.3);


(lib.shower = function() {
	this.initialize();

	// Rain2
	this.instance = new lib.raindrop2();
	this.instance.setTransform(425,642.2,1,1,0,0,0,6.5,40);

	this.instance_1 = new lib.raindrop2();
	this.instance_1.setTransform(95,144,1,1,0,0,0,6.5,40);

	this.instance_2 = new lib.raindrop2();
	this.instance_2.setTransform(-287.1,370.1,1,1,0,0,0,6.5,40);

	this.instance_3 = new lib.raindrop2();
	this.instance_3.setTransform(-287.1,962.2,1,1,0,0,0,6.5,40);

	this.instance_4 = new lib.raindrop2();
	this.instance_4.setTransform(-121.1,959.6,1,1,0,0,0,6.5,40);

	this.instance_5 = new lib.raindrop2();
	this.instance_5.setTransform(-701.2,662.2,1,1,0,0,0,6.5,40);

	this.instance_6 = new lib.raindrop2();
	this.instance_6.setTransform(-701.2,-38,1,1,0,0,0,6.5,40);

	this.instance_7 = new lib.raindrop2();
	this.instance_7.setTransform(-11,-38,1,1,0,0,0,6.5,40);

	this.instance_8 = new lib.raindrop2();
	this.instance_8.setTransform(265,-38,1,1,0,0,0,6.5,40);

	this.instance_9 = new lib.raindrop2();
	this.instance_9.setTransform(237,1014.3,1,1,0,0,0,6.5,40);

	this.instance_10 = new lib.raindrop2();
	this.instance_10.setTransform(-923.2,1058.3,1,1,0,0,0,6.5,40);

	this.instance_11 = new lib.raindrop2();
	this.instance_11.setTransform(-1005.3,612.2,1,1,0,0,0,6.5,40);

	this.instance_12 = new lib.raindrop2();
	this.instance_12.setTransform(-538.1,684.2,1,1,0,0,0,6.5,40);

	this.instance_13 = new lib.raindrop2();
	this.instance_13.setTransform(-287.1,-220,1,1,0,0,0,6.5,40);

	this.instance_14 = new lib.raindrop2();
	this.instance_14.setTransform(-287.1,-122,1,1,0,0,0,6.5,40);

	this.instance_15 = new lib.raindrop2();
	this.instance_15.setTransform(265,-222,1,1,0,0,0,6.5,40);

	this.instance_16 = new lib.raindrop2();
	this.instance_16.setTransform(265,476.1,1,1,0,0,0,6.5,40);

	this.instance_17 = new lib.raindrop2();
	this.instance_17.setTransform(-701.2,444.1,1,1,0,0,0,6.5,40);

	this.instance_18 = new lib.raindrop2();
	this.instance_18.setTransform(-562,942.2,1,1,0,0,0,6.5,40);

	this.instance_19 = new lib.raindrop2();
	this.instance_19.setTransform(-701.2,336.1,1,1,0,0,0,6.5,40);

	this.instance_20 = new lib.raindrop2();
	this.instance_20.setTransform(-287.1,236.1,1,1,0,0,0,6.5,40);

	this.instance_21 = new lib.raindrop2();
	this.instance_21.setTransform(265,236.1,1,1,0,0,0,6.5,40);

	this.instance_22 = new lib.raindrop2();
	this.instance_22.setTransform(265,876.2,1,1,0,0,0,6.5,40);

	this.instance_23 = new lib.raindrop2();
	this.instance_23.setTransform(22.1,878.6,1,1,0,0,0,6.5,40);

	this.instance_24 = new lib.raindrop2();
	this.instance_24.setTransform(-318.4,886.4,1,1,0,0,0,6.5,40);

	this.instance_25 = new lib.raindrop2();
	this.instance_25.setTransform(-134,468.2,1,1,0,0,0,6.5,40);

	this.instance_26 = new lib.raindrop2();
	this.instance_26.setTransform(106,508.2,1,1,0,0,0,6.5,40);

	this.instance_27 = new lib.raindrop2();
	this.instance_27.setTransform(106,508.2,1,1,0,0,0,6.5,40);

	// Rain1
	this.instance_28 = new lib.raindrop_1();
	this.instance_28.setTransform(-8.4,827,1.244,1,0,0,0,6.5,40);

	this.instance_29 = new lib.raindrop_1();
	this.instance_29.setTransform(45.5,1131.3,1,1,0,0,0,6.5,40);

	this.instance_30 = new lib.raindrop_1();
	this.instance_30.setTransform(605.5,920.6,1,1,0,0,0,6.5,40);

	this.instance_31 = new lib.raindrop_1();
	this.instance_31.setTransform(235.1,1125.5,1,1,0,0,0,6.5,40);

	this.instance_32 = new lib.raindrop_1();
	this.instance_32.setTransform(508.5,890.6,1,1,0,0,0,6.5,40);

	this.instance_33 = new lib.raindrop_1();
	this.instance_33.setTransform(-702.2,1133.2,1,1,0,0,0,6.5,40);

	this.instance_34 = new lib.raindrop_1();
	this.instance_34.setTransform(-94.9,918,1,1,0,0,0,6.5,40);

	this.instance_35 = new lib.raindrop_1();
	this.instance_35.setTransform(-141.6,1126.7,1,1,0,0,0,6.5,40);

	this.instance_36 = new lib.raindrop_1();
	this.instance_36.setTransform(-138.6,1113.3,1,1,0,0,0,6.5,40);

	this.instance_37 = new lib.raindrop_1();
	this.instance_37.setTransform(298.2,1113.3,1,1,0,0,0,6.5,40);

	this.instance_38 = new lib.raindrop_1();
	this.instance_38.setTransform(321.5,1113.3,1.244,1,0,0,0,6.5,40);

	this.instance_39 = new lib.raindrop_1();
	this.instance_39.setTransform(134.8,878.4,1.008,1,0,0,7.4,6.5,40);

	this.instance_40 = new lib.raindrop_1();
	this.instance_40.setTransform(-11.9,769.2,1,1,0,0,0,6.5,40);

	this.instance_41 = new lib.raindrop_1();
	this.instance_41.setTransform(-334.6,813.2,1,1,0,0,0,6.5,40);

	this.instance_42 = new lib.raindrop_1();
	this.instance_42.setTransform(-229.9,947.4,1,1,0,0,0,6.5,40);

	this.instance_43 = new lib.raindrop_1();
	this.instance_43.setTransform(-1144.3,930,1,1,0,0,0,6.5,40);

	this.instance_44 = new lib.raindrop_1();
	this.instance_44.setTransform(-411.4,1090.1,1,1,0,0,0,6.5,40);

	this.instance_45 = new lib.raindrop_1();
	this.instance_45.setTransform(-1097.6,1060,1,1,0,0,0,6.5,40);

	this.instance_46 = new lib.raindrop_1();
	this.instance_46.setTransform(-515.3,1114.6,1,1,0,0,0,6.5,40);

	this.instance_47 = new lib.raindrop_1();
	this.instance_47.setTransform(424.6,143.7,1,1,0,0,0,6.5,40);

	this.instance_48 = new lib.raindrop_1();
	this.instance_48.setTransform(676.1,-193,1,1,0,0,0,6.5,40);

	this.instance_49 = new lib.raindrop_1();
	this.instance_49.setTransform(653.2,-343.9,1,1,0,0,0,6.5,40);

	this.instance_50 = new lib.raindrop_1();
	this.instance_50.setTransform(145.1,645.3,1,1,0,0,0,6.5,40);

	this.instance_51 = new lib.raindrop_1();
	this.instance_51.setTransform(581.9,645.3,1,1,0,0,0,6.5,40);

	this.instance_52 = new lib.raindrop_1();
	this.instance_52.setTransform(397.8,645.3,1,1,0,0,0,6.5,40);

	this.instance_53 = new lib.raindrop_1();
	this.instance_53.setTransform(124.4,440.4,1,1,0,0,0,6.5,40);

	this.instance_54 = new lib.raindrop_1();
	this.instance_54.setTransform(234.4,410.4,1,1,0,0,0,6.5,40);

	this.instance_55 = new lib.raindrop_1();
	this.instance_55.setTransform(884.6,410.4,1,1,0,0,0,6.5,40);

	this.instance_56 = new lib.raindrop_1();
	this.instance_56.setTransform(744,326.4,1,1,0,0,0,6.5,40);

	this.instance_57 = new lib.raindrop_1();
	this.instance_57.setTransform(1045.1,179.9,1,1,0,0,0,6.5,40);

	this.instance_58 = new lib.raindrop_1();
	this.instance_58.setTransform(281.1,106.7,0.779,1,0,0,0,6.5,40);

	this.instance_59 = new lib.raindrop_1();
	this.instance_59.setTransform(546.9,137.9,1,1,0,0,0,6.5,40);

	this.instance_60 = new lib.raindrop_1();
	this.instance_60.setTransform(1056.6,53.9,1,1,0,0,0,6.5,40);

	this.instance_61 = new lib.raindrop_1();
	this.instance_61.setTransform(273.5,-67,1,1,0,0,0,6.5,40);

	this.instance_62 = new lib.raindrop_1();
	this.instance_62.setTransform(-58.6,471.1,1,1,0,0,0,6.5,40);

	this.instance_63 = new lib.raindrop_1();
	this.instance_63.setTransform(-562,-192.3,1.362,0.798,0,0,0,6.5,40.1);

	this.instance_64 = new lib.raindrop_1();
	this.instance_64.setTransform(893.1,-181,1,1,0,0,0,6.5,40);

	this.instance_65 = new lib.raindrop_1();
	this.instance_65.setTransform(-1012.8,561.2,1,1,0,0,0,6.5,40);

	this.instance_66 = new lib.raindrop_1();
	this.instance_66.setTransform(116.1,-280.3,1,1,0,0,0,6.5,40);

	this.instance_67 = new lib.raindrop_1();
	this.instance_67.setTransform(-966.1,853.4,1.008,1,0,0,7.4,6.5,40);

	this.instance_68 = new lib.raindrop_1();
	this.instance_68.setTransform(-634.8,-322.3,1,1,0,0,0,6.5,40);

	this.instance_69 = new lib.raindrop_1();
	this.instance_69.setTransform(440.2,-386.4,1,1,0,0,0,6.5,40);

	this.instance_70 = new lib.raindrop_1();
	this.instance_70.setTransform(-198,-322.3,1,1,0,0,0,6.5,40);

	this.instance_71 = new lib.raindrop_1();
	this.instance_71.setTransform(-588.1,-192.3,1,1,0,0,0,6.5,40);

	this.instance_72 = new lib.raindrop_1();
	this.instance_72.setTransform(-51.9,-322.3,1,1,0,0,0,6.5,40);

	this.instance_73 = new lib.raindrop_1();
	this.instance_73.setTransform(127.6,-406.3,1,1,0,0,0,6.5,40);

	this.instance_74 = new lib.raindrop_1();
	this.instance_74.setTransform(-194.7,116.3,1,1,0,0,0,6.5,40);

	this.instance_75 = new lib.raindrop_1();
	this.instance_75.setTransform(-128.7,-45.4,1,1,0,0,0,6.5,40);

	this.instance_76 = new lib.raindrop_1();
	this.instance_76.setTransform(-508.8,639.2,1.008,1,0,0,7.4,6.5,40);

	this.instance_77 = new lib.raindrop_1();
	this.instance_77.setTransform(-692.8,639.2,1,1,0,0,0,6.5,40);

	this.instance_78 = new lib.raindrop_1();
	this.instance_78.setTransform(-42.6,639.2,1,1,0,0,0,6.5,40);

	this.instance_79 = new lib.raindrop_1();
	this.instance_79.setTransform(12.2,367,1,1,0,0,0,6.5,40);

	this.instance_80 = new lib.raindrop_1();
	this.instance_80.setTransform(-244.7,458,1.008,1,0,0,7.4,6.5,40);

	this.instance_81 = new lib.raindrop_1();
	this.instance_81.setTransform(-538.7,488,1,1,0,0,0,6.5,40);

	this.instance_82 = new lib.raindrop_1();
	this.instance_82.setTransform(-244.7,458,1,1,0,0,0,6.5,40);

	this.instance_83 = new lib.raindrop_1();
	this.instance_83.setTransform(-634.8,588,1,1,0,0,0,6.5,40);

	this.instance_84 = new lib.raindrop_1();
	this.instance_84.setTransform(-428.7,458,1,1,0,0,0,6.5,40);

	this.instance_85 = new lib.raindrop_1();
	this.instance_85.setTransform(80.9,374,1,1,0,0,0,6.5,40);

	this.instance_86 = new lib.raindrop_1();
	this.instance_86.setTransform(-408.1,813.2,1,1,0,0,0,6.5,40);

	this.instance_87 = new lib.raindrop_1();
	this.instance_87.setTransform(230,661.2,1,1,0,0,0,6.5,40);

	this.instance_88 = new lib.raindrop_1();
	this.instance_88.setTransform(-844.9,223.1,1,1,0,0,0,6.5,40);

	this.instance_89 = new lib.raindrop_1();
	this.instance_89.setTransform(-592.2,223.1,1,1,0,0,0,6.5,40);

	this.addChild(this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-647.5,-1027,2247.6,1612.7);


(lib.cloudy = function() {
	this.initialize();

	// Clouds
	this.instance = new lib.clouds();
	this.instance.setTransform(779.5,253.9,1,1,0,0,0,1190,593.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-410.5,-255.5,2582.8,986.8);


// stage content:
(lib.weathercanvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.Day.visible = false;
		this.Night.visible = false;
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
	this.Rain.setTransform(964.3,307.1,1,1,0,0,0,339.6,170.6);

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

	// Day
	this.Day = new lib.day();
	this.Day.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.Day).wait(1));

	// Night
	this.Night = new lib.night();
	this.Night.setTransform(150,150,1,1,0,0,0,150,150);

	this.timeline.addTween(cjs.Tween.get(this.Night).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-152.6,-506.5,3239.9,2121.9);

})(weatherlib = weatherlib||{}, weatherimages = weatherimages||{}, createjs = createjs||{});
var weatherlib, weatherimages, createjs;