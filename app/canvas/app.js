define(['createjs'], function(cjs) {
var lib = lib||{};
window.lib = lib;
//(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 600,
	height: 200,
	fps: 24,
	color: "#00FFFF",
	manifest: []
};



// symbols:



(lib.logo = function() {
	this.initialize();

	// MeltedSpork  App
	this.text = new cjs.Text("MeltedSpork  App", "53px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 55;
	this.text.lineWidth = 376;
	this.text.setTransform(205.9,19.2,1,0.777);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#424242").s().p("Av3HHQkMgkjpg3QpziXAAjVQAAjNJPiUIAkgJQJ2iXN2gBQEHAADyAOQI4AfG5BrQJ2CWAADUQAADVp2CXQm5Bqo4AfQjyANkHAAQovAAnIg7g");
	this.shape.setTransform(214.5,51.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,428.9,136.8);


// stage content:
(lib.app = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();
	this.instance.setTransform(305.5,115.9,1,1,0,0,0,214.5,69.9);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(391,146,428.9,136.8);

//})(lib = lib||{}, images = images||{}, createjs = createjs||{});
//var lib, images, createjs;
return lib;
});