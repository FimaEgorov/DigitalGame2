(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"knowladgeracegame_atlas_P_", frames: [[3912,542,180,105],[2980,542,930,543],[2980,0,960,540],[3904,1782,186,54],[3904,1838,186,54],[3912,711,180,60],[3942,182,150,180],[3442,1784,460,260],[4048,468,32,32],[3832,1404,214,175],[0,1338,1518,740],[0,0,1696,1336],[2980,2046,250,100],[3692,1606,230,174],[2980,1606,710,176],[3942,416,104,53],[2980,1784,460,260],[3912,649,180,60],[3942,0,150,180],[3942,471,104,53],[3942,364,150,50],[2980,1404,850,200],[3904,1894,185,54],[2980,1087,960,315],[4048,416,45,50],[1698,0,1280,1220],[1698,1222,1280,1135]]},
		{name:"knowladgeracegame_atlas_NP_", frames: [[1922,4958,1320,928],[1922,1283,1920,1280],[0,1442,1920,1280],[1922,0,1920,1281],[0,5945,960,365],[1922,2565,1920,1280],[0,2724,1920,1280],[0,0,1920,1440],[1282,5888,1280,832],[1922,3847,1920,1109],[0,5090,1280,853],[0,4006,1920,1082]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._2players = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.about = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Background960x540 = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap48 = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap49 = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.block = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.blue_car = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.blue_driver = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.box = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.carburetor = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ComboBox = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.cornerKick = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.corner = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.crowd = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.dashboard = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.finish = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.flags = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.flagsback = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.grey = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.hitLogoBack = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.jumpshot = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.jumperCables = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.keyboard = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.leftArrow = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.lightblue = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.orange_car = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.orange_driver = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.rebound = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.rightArrow = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.save = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Smallblackstars = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.stars = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.startGame = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.timeoff = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.timer = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.touchdown = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.wheelOpener = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_NP_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.correctV = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.wrongX = function() {
	this.spriteSheet = ss["knowladgeracegame_atlas_P_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.Symbol1, null, null);


(lib.white_stars = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.grey();
	this.instance.parent = this;
	this.instance.setTransform(305,293);

	this.instance_1 = new lib.stars();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.white_stars, new cjs.Rectangle(0,0,850,393), null);


(lib.timeroffbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שימו רגל על הגז..\nלהמשך לחצו ENTER", "bold 50px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 58;
	this.text.lineWidth = 668;
	this.text.parent = this;
	this.text.setTransform(3.8,4.9);

	this.text_1 = new cjs.Text("נגמר הזמן!", "bold 100px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 114;
	this.text_1.lineWidth = 875;
	this.text_1.parent = this;
	this.text_1.setTransform(0,-120.8);

	this.instance = new lib.timeoff();
	this.instance.parent = this;
	this.instance.setTransform(-480,-157.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeroffbox, new cjs.Rectangle(-480,-157.5,960,315), null);


(lib.pauseWindow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("משחק מושהה", "20px 'Arial Narrow'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 110;
	this.text.parent = this;
	this.text.setTransform(2.1,-34.7,2.589,2.589);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A6PMqIAA5TMA0fAAAIAAZTg");
	this.shape.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pauseWindow, new cjs.Rectangle(-168,-80.9,336.1,162), null);


(lib.movingCrowd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.crowd();
	this.instance.parent = this;
	this.instance.setTransform(297,-229,1,0.932);

	this.instance_1 = new lib.Background960x540();
	this.instance_1.parent = this;
	this.instance_1.setTransform(297,-260,1,0.963);

	this.instance_2 = new lib.crowd();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-480,-229,1,0.932);

	this.instance_3 = new lib.Background960x540();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-480,-260,1,0.963);

	this.instance_4 = new lib.crowd();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-1257,-229,1,0.932);

	this.instance_5 = new lib.Background960x540();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-1257,-260,1,0.963);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.movingCrowd, new cjs.Rectangle(-1257,-260,2514,520), null);


(lib.hitLogo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hitLogoBack();
	this.instance.parent = this;
	this.instance.setTransform(-115,-87);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hitLogo, new cjs.Rectangle(-115,-87,230,174), null);


(lib.about_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.about();
	this.instance.parent = this;
	this.instance.setTransform(-465,-271.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.about_1, new cjs.Rectangle(-465,-271.5,930,543), null);


(lib.an_TextInput = function(options) {
	this._element = new $.an.TextInput(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.startBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.startGame();
	this.instance.parent = this;
	this.instance.setTransform(-92.5,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-92.5,-27,185,54);


(lib.restart2_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap48();
	this.instance.parent = this;
	this.instance.setTransform(-93,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-27,186,54);


(lib.restart_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap49();
	this.instance.parent = this;
	this.instance.setTransform(-93,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93,-27,186,54);


(lib.howtoplaybut = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("איך משחקים", "20px 'Arial'", "#0645AD");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 157;
	this.text.parent = this;
	this.text.setTransform(-40.5,-13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AHei7IEyAAIAAF3IkyAAIzuAAIAAl3g");
	this.shape.setTransform(-39,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHfC7IAAl1IEyAAIAAF1gAHfC7IzvAAIAAl1ITvAAIAAF1g");
	this.shape_1.setTransform(-39,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121,-19.7,161.4,40.8);


(lib.hitText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "20px 'Arial'", "#009999");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 362;
	this.text.parent = this;
	this.text.setTransform(0.2,-11.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A9Ah5MA6BAAAIAADzMg6BAAAg");
	this.shape.setTransform(0,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("A9AB6IAAjzMA6BAAAIAADzg");
	this.shape_1.setTransform(0,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-186.7,-13.2,373.5,27.4);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.aboutbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("אודות", "20px 'Arial'", "#0645AD");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 79;
	this.text.parent = this;
	this.text.setTransform(-1.5,-13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AmNioIMbAAIAAFRIsbAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmNCpIAAlRIMbAAIAAFRg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.9,-17.9,83.7,37.1);


(lib.about_x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("X", "bold 20px 'Tahoma'", "#89A4A7");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 21;
	this.text.parent = this;
	this.text.setTransform(-0.6,-12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#89A4A7").ss(1,1,1).p("AiHiHIEPAAIAAEPIkPAAg");
	this.shape.setTransform(0,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiHCIIAAkPIEPAAIAAEPg");
	this.shape_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-14.1,29.2,29.2);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.startBtn();
	this.startbtn.parent = this;
	this.startbtn.setTransform(125,120.1,0.654,0.654,0,0,0,92.4,27);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 1);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 3, בחר נושא, 0, מכונאות רכב, 1, ספורט, 2', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(63,-27,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(4,-38.5,121,158.6), null);


(lib.B_P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.p2_name = new lib.an_TextInput({'id': 'p2_name', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.p2_name.setTransform(0,0,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.p2_name).wait(1));

}).prototype = getMCSymbolPrototype(lib.B_P, new cjs.Rectangle(-50.5,-11.5,101,23), null);


(lib.A_P = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.p1_name = new lib.an_TextInput({'id': 'p1_name', 'value':'', 'disabled':false, 'visible':true, 'class':'ui-textinput'});

	this.p1_name.setTransform(0,0,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.p1_name).wait(1));

}).prototype = getMCSymbolPrototype(lib.A_P, new cjs.Rectangle(-50.5,-11.5,101,23), null);


(lib.Back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_94 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.stop();
	}
	this.frame_96 = function() {
		this.stop();
	}
	this.frame_104 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}
	this.frame_106 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(94).call(this.frame_94).wait(1).call(this.frame_95).wait(1).call(this.frame_96).wait(8).call(this.frame_104).wait(1).call(this.frame_105).wait(1).call(this.frame_106).wait(1));

	// crowdMoves
	this.instance = new lib.white_stars();
	this.instance.parent = this;
	this.instance.setTransform(-5,48.5,1,1,0,0,0,425,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:true},1).wait(12));

	// gameLayers
	this.instance_1 = new lib.movingCrowd();
	this.instance_1.parent = this;
	this.instance_1.setTransform(777,10);

	this.instance_2 = new lib._2players();
	this.instance_2.parent = this;
	this.instance_2.setTransform(453,-267,0.133,0.133);

	this.instance_3 = new lib.B_P();
	this.instance_3.parent = this;
	this.instance_3.setTransform(353.3,90.3);

	this.instance_4 = new lib.A_P();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-345.3,88.4);

	this.instance_5 = new lib.Smallblackstars();
	this.instance_5.parent = this;
	this.instance_5.setTransform(337,-248);

	this.instance_6 = new lib.orange_driver();
	this.instance_6.parent = this;
	this.instance_6.setTransform(278,-128);

	this.instance_7 = new lib.orange_car();
	this.instance_7.parent = this;
	this.instance_7.setTransform(271,180);

	this.instance_8 = new lib.blue_driver();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-413,-128);

	this.instance_9 = new lib.blue_car();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-427,120);

	this.instance_10 = new lib.grey();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-125,144);

	this.instance_11 = new lib.Background960x540();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-480,-250,1,0.963);

	this.t1 = new cjs.Text("", "bold 20px 'Tahoma'");
	this.t1.name = "t1";
	this.t1.textAlign = "center";
	this.t1.lineHeight = 26;
	this.t1.lineWidth = 159;
	this.t1.parent = this;
	this.t1.setTransform(-368.5,31);

	this.t2 = new cjs.Text("", "bold 20px 'Tahoma'");
	this.t2.name = "t2";
	this.t2.textAlign = "center";
	this.t2.lineHeight = 26;
	this.t2.lineWidth = 118;
	this.t2.parent = this;
	this.t2.setTransform(387.6,-45.4);

	this.instance_12 = new lib.rightArrow();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-409,-16);

	this.instance_13 = new lib.leftArrow();
	this.instance_13.parent = this;
	this.instance_13.setTransform(326,37);

	this.instance_14 = new lib.keyboard();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-274,-38,0.786,0.786);

	this.text6_window4 = new cjs.Text("היו מהירים מחברכם! ענית מהר – התקדמת יותר", "25px 'Tahoma'");
	this.text6_window4.name = "text6_window4";
	this.text6_window4.textAlign = "center";
	this.text6_window4.lineHeight = 32;
	this.text6_window4.lineWidth = 658;
	this.text6_window4.parent = this;
	this.text6_window4.setTransform(5.5,-81.9);

	this.text5_window4 = new cjs.Text("מענה מוצלח יקדם אתכם במרוץ!", "25px 'Tahoma'");
	this.text5_window4.name = "text5_window4";
	this.text5_window4.textAlign = "center";
	this.text5_window4.lineHeight = 32;
	this.text5_window4.lineWidth = 658;
	this.text5_window4.parent = this;
	this.text5_window4.setTransform(5.5,-114.2);

	this.text4_window4 = new cjs.Text("השתמשו במקשים 1-4 המסומנים בכדי לענות על שאלות", "25px 'Tahoma'");
	this.text4_window4.name = "text4_window4";
	this.text4_window4.textAlign = "center";
	this.text4_window4.lineHeight = 32;
	this.text4_window4.lineWidth = 658;
	this.text4_window4.parent = this;
	this.text4_window4.setTransform(5.5,-155.3);

	this.text3_window4 = new cjs.Text("הוראות המשחק:", "bold 25px 'Tahoma'");
	this.text3_window4.name = "text3_window4";
	this.text3_window4.textAlign = "center";
	this.text3_window4.lineHeight = 32;
	this.text3_window4.lineWidth = 230;
	this.text3_window4.parent = this;
	this.text3_window4.setTransform(5.5,-188.3);

	this.text2_window4 = new cjs.Text("זמן ומספר השאלה", "bold 22px 'Tahoma'");
	this.text2_window4.name = "text2_window4";
	this.text2_window4.textAlign = "center";
	this.text2_window4.lineHeight = 29;
	this.text2_window4.lineWidth = 230;
	this.text2_window4.parent = this;
	this.text2_window4.setTransform(-364.3,-240.2);

	this.text_window4 = new cjs.Text("בחלק זה תופיע הנחיה כיצד לענות על שאלה", "bold 20px 'Tahoma'");
	this.text_window4.name = "text_window4";
	this.text_window4.textAlign = "center";
	this.text_window4.lineHeight = 26;
	this.text_window4.lineWidth = 490;
	this.text_window4.parent = this;
	this.text_window4.setTransform(36.9,-237.1);

	this.instance_15 = new lib.finish();
	this.instance_15.parent = this;
	this.instance_15.setTransform(250,110);

	this.instance_16 = new lib.lightblue();
	this.instance_16.parent = this;
	this.instance_16.setTransform(-383,-426,1.875,1.654);

	this.instance_17 = new lib.timer();
	this.instance_17.parent = this;
	this.instance_17.setTransform(-345,-244,0.8,0.8);

	this.instance_18 = new lib.Symbol1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(3,80);

	this.instance_19 = new lib.flags();
	this.instance_19.parent = this;
	this.instance_19.setTransform(-125,-134,0.18,0.18);

	this.instance_20 = new lib.flagsback();
	this.instance_20.parent = this;
	this.instance_20.setTransform(-194,-198,0.241,0.243);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.text_window4},{t:this.text2_window4,p:{x:-364.3,y:-240.2,text:"זמן ומספר השאלה",font:"bold 22px 'Tahoma'",lineHeight:28.55,lineWidth:230}},{t:this.text3_window4,p:{x:5.5,y:-188.3,text:"הוראות המשחק:",font:"bold 25px 'Tahoma'",color:"#000000",lineHeight:32.15,lineWidth:230}},{t:this.text4_window4,p:{x:5.5,y:-155.3,text:"השתמשו במקשים 1-4 המסומנים בכדי לענות על שאלות",font:"25px 'Tahoma'",color:"#000000",lineHeight:32.15,lineWidth:658}},{t:this.text5_window4,p:{x:5.5,y:-114.2,text:"מענה מוצלח יקדם אתכם במרוץ!",font:"25px 'Tahoma'",color:"#000000",lineHeight:32.15,lineWidth:658}},{t:this.text6_window4,p:{x:5.5,y:-81.9,text:"היו מהירים מחברכם! ענית מהר – התקדמת יותר",font:"25px 'Tahoma'",color:"#000000",lineHeight:32.15,lineWidth:658}},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_5},{t:this.instance_10},{t:this.t2,p:{x:387.6,y:-45.4,text:"",font:"bold 20px 'Tahoma'",lineHeight:26.15,lineWidth:118,color:"#000000"}},{t:this.t1,p:{x:-368.5,y:31,text:"",font:"bold 20px 'Tahoma'",lineHeight:26.15,lineWidth:159,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t1,p:{x:-1.2,y:-98.6,text:"3",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:100,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t1,p:{x:-1.2,y:-98.6,text:"3",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:100,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t1,p:{x:-1.2,y:-98.6,text:"2",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:100,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t1,p:{x:-1.2,y:-98.6,text:"2",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:100,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t1,p:{x:-1.2,y:-98.6,text:"1",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:100,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t1,p:{x:-1.2,y:-98.6,text:"1",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:100,color:"#000000"}},{t:this.instance_2}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.t2,p:{x:3.2,y:-98.6,text:"GO!",font:"bold 120px 'Arial'",lineHeight:136.1,lineWidth:262,color:"#000000"}},{t:this.instance_2},{t:this.t1,p:{x:3.2,y:72.6,text:"אם אתם מוכנים - לחצו ENTER",font:"bold 20px 'Arial'",lineHeight:24.35,lineWidth:262,color:"#000000"}}]},1).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.instance_17},{t:this.text2_window4,p:{x:-421.9,y:-240.1,text:"",font:"bold 20px 'Tahoma'",lineHeight:26.15,lineWidth:101}},{t:this.text3_window4,p:{x:-257.3,y:-67.5,text:"1",font:"bold 20px 'Tahoma'",color:"#FFFFFF",lineHeight:26.15,lineWidth:31}},{t:this.text4_window4,p:{x:-27.4,y:-66.5,text:"2",font:"bold 20px 'Tahoma'",color:"#FFFFFF",lineHeight:26.15,lineWidth:31}},{t:this.text5_window4,p:{x:206.4,y:-66.2,text:"3",font:"bold 20px 'Tahoma'",color:"#FFFFFF",lineHeight:26.15,lineWidth:31}},{t:this.text6_window4,p:{x:442.6,y:-66.2,text:"4",font:"bold 20px 'Tahoma'",color:"#FFFFFF",lineHeight:26.15,lineWidth:31}},{t:this.instance_16,p:{x:-383}},{t:this.t2,p:{x:6.9,y:-241.9,text:"הקישו על המספר (1-4) המתאים לשאלה",font:"bold 20px 'Tahoma'",lineHeight:26.15,lineWidth:490,color:"#000000"}},{t:this.instance_15},{t:this.t1,p:{x:-298.5,y:-204.2,text:"",font:"bold 20px 'Tahoma'",lineHeight:26.15,lineWidth:54,color:"#000000"}},{t:this.instance_2}]},2).to({state:[{t:this.instance_11},{t:this.instance_5},{t:this.instance_16,p:{x:-370}},{t:this.text2_window4,p:{x:8,y:-245.3,text:"תוצאות",font:"bold 30px 'Tahoma'",lineHeight:38.2,lineWidth:490}},{t:this.instance_15},{t:this.text3_window4,p:{x:-354.8,y:-117.7,text:"התוצאה\n",font:"bold 20px 'Tahoma'",color:"#333333",lineHeight:26.15,lineWidth:180}},{t:this.text4_window4,p:{x:-266.8,y:18.5,text:"זמן ממוצע לשאלה בשניות",font:"bold 16px 'Tahoma'",color:"#666666",lineHeight:21.3,lineWidth:128}},{t:this.text5_window4,p:{x:-401.3,y:18.5,text:"מס' השגיאות",font:"bold 16px 'Tahoma'",color:"#666666",lineHeight:21.3,lineWidth:95}},{t:this.text6_window4,p:{x:341.8,y:-117.7,text:"התוצאה\n",font:"bold 20px 'Tahoma'",color:"#333333",lineHeight:26.15,lineWidth:180}},{t:this.instance_20},{t:this.t2,p:{x:407.3,y:18.5,text:"זמן ממוצע לשאלה בשניות",font:"bold 16px 'Tahoma'",lineHeight:21.3,lineWidth:128,color:"#666666"}},{t:this.t1,p:{x:272.4,y:18.5,text:"מס' השגיאות",font:"bold 16px 'Tahoma'",lineHeight:21.3,lineWidth:95,color:"#666666"}},{t:this.instance_19},{t:this.instance_18},{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:760.5},0).wait(1).to({x:744.1},0).wait(1).to({x:727.7},0).wait(1).to({x:711.2},0).wait(1).to({x:694.7},0).wait(1).to({x:678.3},0).wait(1).to({x:661.8},0).wait(1).to({x:645.4},0).wait(1).to({x:628.9},0).wait(1).to({x:612.5},0).wait(1).to({x:596},0).wait(1).to({x:579.6},0).wait(1).to({x:563.1},0).wait(1).to({x:546.7},0).wait(1).to({x:530.2},0).wait(1).to({x:513.8},0).wait(1).to({x:497.3},0).wait(1).to({x:480.9},0).wait(1).to({x:464.4},0).wait(1).to({x:447.9},0).wait(1).to({x:431.5},0).wait(1).to({x:415},0).wait(1).to({x:398.6},0).wait(1).to({x:382.2},0).wait(1).to({x:365.7},0).wait(1).to({x:349.2},0).wait(1).to({x:332.8},0).wait(1).to({x:316.3},0).wait(1).to({x:299.9},0).wait(1).to({x:283.4},0).wait(1).to({x:267},0).wait(1).to({x:250.5},0).wait(1).to({x:234.1},0).wait(1).to({x:217.6},0).wait(1).to({x:201.2},0).wait(1).to({x:184.7},0).wait(1).to({x:168.3},0).wait(1).to({x:151.8},0).wait(1).to({x:135.3},0).wait(1).to({x:118.9},0).wait(1).to({x:102.4},0).wait(1).to({x:86},0).wait(1).to({x:69.5},0).wait(1).to({x:53.1},0).wait(1).to({x:36.6},0).wait(1).to({x:20.2},0).wait(1).to({x:3.7},0).wait(1).to({x:-12.7},0).wait(1).to({x:-29.2},0).wait(1).to({x:-45.6},0).wait(1).to({x:-62.1},0).wait(1).to({x:-78.5},0).wait(1).to({x:-95},0).wait(1).to({x:-111.4},0).wait(1).to({x:-127.9},0).wait(1).to({x:-144.3},0).wait(1).to({x:-160.8},0).wait(1).to({x:-177.3},0).wait(1).to({x:-193.7},0).wait(1).to({x:-210.2},0).wait(1).to({x:-226.6},0).wait(1).to({x:-243},0).wait(1).to({x:-259.5},0).wait(1).to({x:-276},0).wait(1).to({x:-292.4},0).wait(1).to({x:-308.9},0).wait(1).to({x:-325.3},0).wait(1).to({x:-341.8},0).wait(1).to({x:-358.2},0).wait(1).to({x:-374.7},0).wait(1).to({x:-391.1},0).wait(1).to({x:-407.6},0).wait(1).to({x:-424},0).wait(1).to({x:-440.5},0).wait(1).to({x:-456.9},0).wait(1).to({x:-473.4},0).wait(1).to({x:-489.9},0).wait(1).to({x:-506.3},0).wait(1).to({x:-522.8},0).wait(1).to({x:-539.2},0).wait(1).to({x:-555.7},0).wait(1).to({x:-572.1},0).wait(1).to({x:-588.6},0).wait(1).to({x:-605},0).wait(1).to({x:-621.5},0).wait(1).to({x:-637.9},0).wait(1).to({x:-654.4},0).wait(1).to({x:-670.8},0).wait(1).to({x:-687.3},0).wait(1).to({x:-703.7},0).wait(1).to({x:-720.2},0).wait(1).to({x:-736.6},0).wait(1).to({x:-753.1},0).wait(1).to({x:-769.5},0).to({_off:true},1).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-250,2514,520);


// stage content:
(lib.knowladgeracegame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		$("#canvas").css("direction", "rtl"); //הגדרת כיוון כתיבה בכאנבאס כולו
		var home = this;
		var stageWidth = parseInt(canvas.style.width); //הגדרת רוחב במה
		var mychoice = 0; //משתנה שיעזור לברר איזה ערך מסומן בכל פעם בקומבו בוקס. עם הפתיחה מופיע הערך הראשון ולכן הערך ההתחלתי הוא 0
		
		var p1name = []; //הגדרת משתנה גלובלי לשמירת שם שחקן 1
		var p2name = []; //הגדרת משתנה גלובלי לשמירת שם שחקן 2
		var gameInSeconds = 0;
		var gameInMinutes = 0;
		if (gameInSeconds == 60) {
			gameInSeconds = 0;
			gameInMinutes++;
		}
		var trigger = 0;
		var carsInterval;
		var carsInterval2;
		var carMovment = 1;
		var carhalfmovement = 5;
		var carDistance;
		var carmove;
		var position;
		var carmove2;
		var position2;
		
		
		
		//----------------משתנים השייכים למהלך ותוצאות המשחק----------------
		
		//נתוני שחקן ראשון
		var scorep1 = 0; //ניקוד השחקן הראשון
		var timeperp1 = 0; //זמן ממוצע למענה לשחקן הראשון
		var falsep1 = 0; //מספר השגיאות של השחקן הראשון
		
		
		//נתוני שחקן שני
		var scorep2 = 0; //ניקוד השחקן השני
		var timeperp2 = 0; //זמן ממוצע למענה לשחקן השני
		var falsep2 = 0; //מספר השגיאות של השחקן השני
		
		
		//בניית הערכים החשובים
		var timeperq = 30;
		var textboxfortimer;
		var timerInterval;
		var qnum = 1; //qnum_text= qnum 
		var qmax = 0;; //  var qmax= qmechanics.length;
		var qnumtxt;
		var selectedQ = -1;
		var questionElms = [];
		var correctAns; //ישמש למציאת התשובה הנכונה
		var timeForthisQuestionp1 = 0; //משתנה שבודק כמה זמן לוקח לשחקן עד שהוא לוחץ
		var timeForthisQuestionp2 = 0; //משתנה שבודק כמה זמן לוקח לשחקן עד שהוא לוחץ
		
		//----------------שאלות המשחק מכונאות רכב---------------------------
		var qmechanics = [
			//שאלה ראשונה
			[0,
				//השאלה עצמה
				["txt", "לאחר נסיעה של 15 דקות המחוג מראה שהרכב חם יותר מהרגיל. בדקות שלאחר מכן - מהי הפעולה שעליך לא לבצע?", "q1"],
				//ארבעה מסיחים
				["txt", "להוריד את מהירות הנסיעה בכדי שהמנוע לא יתחמם עוד יותר", false],
				["txt", "להתקשר למומחה לקבלת יעוץ טלפוני", false],
				["txt", "לפתוח את מיכל המים ולמלא מים קרים", true],
				["txt", "להמשיך בנסיעה עד לנקודה בה אינך מפריע לנוסעים בכביש", false]
			],
			//שאלה שניה
			[0,
				//השאלה עצמה - להוסיף תמונה
				["pic", lib.carburetor, "q2"],
				//שלושה מסיחים
				["txt", "קרבורטור", true],
				["txt", "אלטרנטור", false],
				["txt", "מצבר", false]
			],
			//שאלה שלישית
			[0,
				//השאלה עצמה
				["txt", "איזה מהפעולות הבאות מתבצעת לאחר שימוש בג'ק?", "q3"],
				//שני מסיחים
				["pic", lib.jumperCables, false], //להוסיף תמונה
				["pic", lib.wheelOpener, true] //להוסיף תמונה
			],
			//שאלה רביעית
			[0,
				//השאלה עצמה
				["txt", "הפעלת את מגבי הרכב אך השמשה נשארה רטובה מאוד. סיבה נפוצה לתקלה זו היא:", "q4"],
				//ארבעה מסיחים
				["txt", "מחסור של נוזל ניקוי במיכל המים של השמשה", false],
				["txt", "תקלה במנוע הרכב, המספק את הכח להפעלת המגבים", false],
				["txt", "שחיקה של הגומי המולבש על המגבים", true],
				["txt", "תקלה במזגן, המאפשר חימום תמידי של השמשה וייבוש המים שעליה", false]
			],
			//שאלה חמישית
			[0,
				//השאלה עצמה - להוסיף תמונה
				["pic", lib.dashboard, "q5"],
				//ארבעה מסיחים
				["txt", "קיימת תקלה כללית במנוע", false],
				["txt", "קיימת תקלה במד המהירות של הרכב", false],
				["txt", "קיים חוסר של שמן ומים במיכלים שמתחת למכסה המנוע", false],
				["txt", "בלם היד מורם כלפי מעלה ואינו מאפשר נסיעה", true]
			]
		];
		
		//----------------שאלות המשחק ספורט---------------------------------
		
		var qsports = [
			//שאלה ראשונה
			[0,
				//השאלה עצמה
				["pic", lib.jumpshot, "q1"], //להוסיף תמונה
				//שני מסיחים
				["txt", "Layup", false],
				["txt", "Jump Shot", true]
			],
			//שאלה שניה
			[0,
				//השאלה עצמה
				["txt", "באיזה מהמקרים הבאים ישתנה הניקוד במשחק?", "q2"],
				//ארבעה מסיחים
				["pic", lib.block, false], //להוסיף תמונה
				["pic", lib.rebound, false], //להוסיף תמונה
				["pic", lib.touchdown, true], //להוסיף תמונה
				["pic", lib.save, false] //להוסיף תמונה
			],
			//שאלה שלישית
			[0,
				//השאלה עצמה
				["txt", "בפוטבול האמריקאי – אחרי טאצ'דאון והבקעה לעמוד השער, מה יהיה המהלך הבא?", "q3"],
				//ארבעה מסיחים
				["txt", "קבוצת ההגנה תתחיל לשחק מקו האמצע שבמרכז המגרש", false],
				["txt", "קבוצת ההגנה תבעט בכדור לכיוון ההתקפה, המשחק יתחדש מהנקודה בה יתפס הכדור", false],
				["txt", "קבוצת ההתקפה תתחיל לשחק מקו האמצע שבמרכז המגרש", false],
				["txt", "קבוצת ההתקפה תבעט בכדור לכיוון ההגנה, המשחק יתחדש מהנקודה בה יתפס הכדור", true]
			],
			//שאלה רביעית
			[0,
				//השאלה עצמה - להוסיף תמונה
				["pic", lib.cornerKick, "q4"],
				//ארבעה מסיחים
				["txt", "הרמת קרן", true],
				["txt", "בעיטה חופשית", false],
				["txt", "בעיטת פנדל", false],
				["txt", "מסירת רוחב", false]
			],
			//שאלה חמישית
			[0,
				//השאלה עצמה - להוסיף תמונה
				["pic", lib.corner, "q5"],
				//שלושה מסיחים
				["txt", "נקודה ממנה מתחיל מהלך התקפי בלבד", true],
				["txt", "נקודה ממנה מתחיל מהלך הגנתי בלבד", false],
				["txt", "נקודה ממנה מתחילים מהלכים הגנתיים והתקפיים", false]
			],
			//שאלה שישית
			[0,
				//השאלה עצמה
				["txt", "בכדורסל – ביצוע שני צעדים ללא כדרור ליד הסל שאליו תוקפים:", "q6"],
				//ארבעה מסיחים
				["txt", "צעדים", false],
				["txt", "צעד וחצי", true],
				["txt", "Pick & Roll", false],
				["txt", "Dunk", false]
			]
		];
		
		var qSelected;
		var startSound;
		var endSound;
		var moveSound;
		welcomeScreen(); //מסך הפתיחה של המשחק
		
		//-------------------מסך כניסה למשחק בו נבחר סוג משחק
		function welcomeScreen() {
		
		
			home.Back.gotoAndPlay(1);
			createjs.Sound.registerSound({
				id: "startSound",
				src: "sounds/startsound.mp3"
			});
			createjs.Sound.registerSound({
				id: "endSound",
				src: "sounds/endsound.mp3"
			});
			createjs.Sound.registerSound({
				id: "movesSound",
				src: "sounds/movesound.mp3"
			});
		
		
			createjs.Sound.on("fileload", loadHandler);
			function loadHandler(event) {
				switch (event.id) {
					case "startSound":
						startSound = createjs.Sound.play("startSound");
						break;
				}
			}
		
			var AboutButton = new lib.aboutbutton();
			AboutButton.x = 40;
			AboutButton.y = 5;
			AboutButton.addEventListener('click', aboutFunc);
			AboutButton.scaleX = 0.7;
			AboutButton.scaleY = 0.7;
			stage.addChild(AboutButton);
		
			var gamename = new createjs.Text(); // createjs היא מחלקה בtext
			gamename.x = 350;
			gamename.y = 140;
			gamename.color = "#FFFFFF ";
			gamename.font = "75px Arial";
			stage.addChild(gamename); //  game הוא המחזיק של כל הגרפיקה
			gamename.text = "מרוץ הידע";
			gamename.name = "gamename";
		
			var gameinfo = new createjs.Text(); // createjs היא מחלקה בtext
			gameinfo.x = 180;
			gameinfo.y = 240;
			gameinfo.color = "#FFFFFF ";
			gameinfo.font = "35px Arial";
			stage.addChild(gameinfo); //  game הוא המחזיק של כל הגרפיקה
			gameinfo.text = "משחק מרוצים לשני שחקנים – ידעת? נסעת!";
			gameinfo.name = "gameinfo";
		
			var forcombo = new lib.forcomb();
			forcombo.x = 410;
			forcombo.y = 360;
			stage.addChild(forcombo);
			forcombo.name = "Myforcombo";
			forcombo.startbtn.alpha = 0.5;
		
			var fl_TF = new createjs.Text();
			fl_TF.x = 200;
			fl_TF.y = 100;
			fl_TF.color = "#ff7700";
			fl_TF.font = "20px Arial";
			stage.addChild(fl_TF);
		
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
			//בעת שינוי ערך בקומבו
			function mycb_change(evt) {
				fl_TF.text = ""; //ניקוי הבחירה הקודמת
				//שימרת הערך שנבחר בקומבו
				console.log(evt.currentTarget.value);
				mychoice = evt.currentTarget.value;
				//אם נבחר הערך הראשון - "בחר נושא
				if (mychoice == 0) {
					//ניטרול כפתור "בחר
					forcombo.startbtn.removeEventListener("click", readyFunc);
				} else {
		
					forcombo.startbtn.alpha = 1;
					//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
					forcombo.startbtn.addEventListener("click", startGameOneFunc);
				}
		
		
			}
		}
		
		//-----------------מסך הזנת שמות השחקנים 
		
		function startGameOneFunc() {
			startSound.volume = 0.2;
			stage.removeChild(stage.getChildByName("Myforcombo"));
			stage.removeChild(stage.getChildByName("gamename"));
			stage.removeChild(stage.getChildByName("gameinfo"));
		
			home.Back.gotoAndPlay(95); //הצגת מסך השמות השחקנים
		
			//-------כותרת המשחק - תהיה במהלך כל המשחק----------------
			var gametitle = new createjs.Text();
			gametitle.x = 855;
			gametitle.y = 35;
			gametitle.color = "#000000";
			gametitle.font = "15px Arial";
			stage.addChild(gametitle); //  
		
			switch (mychoice) //בחירה של רשימת שאלות על בסיס בחירה בקומבו לפי מצבים השונים
			{
		
		
				case "2":
					gametitle.text = "ספורט";
					break;
				case "1":
				default:
					gametitle.text = "מכונאות רכב";
					break;
			}
			gametitle.name = "gametitle";
		
			var gamename_top = new createjs.Text();
			gamename_top.x = 870;
			gamename_top.y = 2;
			gamename_top.color = "#000000";
			gamename_top.font = "15px Arial ";
			stage.addChild(gamename_top); //  
			gamename_top.text = "מרוץ הידע";
			gamename_top.name = "gamename_top";
		
		
			introductionofgameone(); //מעלה את כל המרכיבים של מסך ההוראות הראשון
		
		
			function introductionofgameone() {
		
				var player1 = new createjs.Text(); //הוספת טיבת טקסט הכוללת את הכותרת איפה שחקן ראשון
				player1.x = 80;
				player1.y = 95;
				player1.color = "#000000";
				player1.font = "35px Arial";
				stage.addChild(player1);
				player1.text = "שחקן 1";
				player1.name = "player1";
		
				var player2 = new createjs.Text(); //הוספת טיבת טקסט הכוללת את הכותרת איפה שחקן שני
				player2.x = 775;
				player2.y = 95;
				player2.color = "#000000";
				player2.font = "35px Arial";
				stage.addChild(player2);
				player2.text = "שחקן 2";
				player2.name = "player2";
		
				var playernamestxt = new createjs.Text();
				playernamestxt.x = 480;
				playernamestxt.y = 200;
				playernamestxt.color = "#000000";
				playernamestxt.lineWidth = "300";
				playernamestxt.font = "35px Arial";
				playernamestxt.textAlign = "center";
				stage.addChild(playernamestxt);
				playernamestxt.text = "רשמו את שמכם בצד בו תשחקו (2-8 תווים)";
				playernamestxt.name = "playernamestxt";
			}
		
			var nextscreentxt = new createjs.Text();
			nextscreentxt.x = 400;
			nextscreentxt.y = 460;
			nextscreentxt.color = "#FFFF00";
			nextscreentxt.font = "16px Arial";
			stage.addChild(nextscreentxt);
			nextscreentxt.text = "להמשך הקישו על ENTER";
			nextscreentxt.name = "nextscreentxt";
		
			window.addEventListener("keydown", gameinstructions);
		}
		
		//---------------------מסך הוראות
		
		function gameinstructions(e) {
		
			var player_name_1 = home.Back.getChildAt(7).children[0]._element._$this[0].value;
			var player_name_2 = home.Back.getChildAt(8).children[0]._element._$this[0].value;
		
			textboxfortimer = new createjs.Text();
			textboxfortimer.x = 145;
			textboxfortimer.y = 40;
			textboxfortimer.color = "#000000";
			textboxfortimer.font = "16px Arial";
			stage.addChild(textboxfortimer);
			textboxfortimer.name = "textboxfortimer";
		
			if (e.keyCode == 13 && (player_name_1.length > 2 && player_name_2.length > 2) && (player_name_1.length < 8 && player_name_2.length < 8)) {
		
				p1name = new createjs.Text();
				p1name.x = 50;
				p1name.y = 330;
				p1name.color = "#2200FF";
				p1name.font = "40px Arial";
				stage.addChild(p1name);
				p1name.text = player_name_1;
				p1name.name = "p1name";
		
		
				p2name = new createjs.Text();
				p2name.x = 840;
				p2name.y = 240;
				p2name.color = "#FF7700";
				p2name.font = "40px Arial";
				stage.addChild(p2name);
				p2name.text = player_name_2;
				p2name.name = "p2name";
		
		
				var nextscreentxt = new createjs.Text();
				nextscreentxt.x = 400;
				nextscreentxt.y = 460;
				nextscreentxt.color = "#FFFF00";
				nextscreentxt.font = "16px Arial";
				stage.addChild(nextscreentxt);
				nextscreentxt.text = " להמשך הקישו על ENTER";
				nextscreentxt.name = "nextscreentxt";
		
		
		
		
				stage.removeChild(stage.getChildByName("player1"));
				stage.removeChild(stage.getChildByName("player2"));
				stage.removeChild(stage.getChildByName("playernamestxt"));
				stage.removeChild(stage.getChildByName("nextscreentxt"));
				home.Back.gotoAndPlay(96); //המסך המוצג כעת
				window.removeEventListener("keydown", gameinstructions);
				window.addEventListener("keydown", beforegame);
			}
			return true;
		}
		
		function beforegame() {
		
			if (trigger != 0) {
					home.Back.gotoAndPlay(97);
					window.removeEventListener("keydown", beforegame);
					window.addEventListener("keydown", gameone);
		
				} else {
					stage.removeChild(stage.getChildByName("p1name"));
					stage.removeChild(stage.getChildByName("p2name"));
					stage.removeChild(stage.getChildByName("nextscreentxt"));
					home.Back.gotoAndPlay(97);
					window.removeEventListener("keydown", beforegame);
					window.addEventListener("keydown", gameone);
				}
		
			}
		
		
		
			//---------------------משחק מכונאות רכב
			function gameone() {
				window.removeEventListener("keydown", gameone);
				home.Back.gotoAndPlay(105);
				startSound.stop();
		
				var blue_car = new lib.blue_car();
				blue_car.x = 50;
				blue_car.y = 400;
				stage.addChild(blue_car);
				blue_car.name = "blue_car";
		
				var orange_car = new lib.orange_car();
				orange_car.x = 50;
				orange_car.y = 450;
				stage.addChild(orange_car);
				orange_car.name = "orange_car";
		
				qnumtxt = new createjs.Text();
				qnumtxt.x = 20;
				qnumtxt.y = 40; //להחליט איפה ממוקם על המסך
				qnumtxt.color = "#000000";
				qnumtxt.font = "20px Arial";
				qnumtxt.textAlign = "left";
				stage.addChild(qnumtxt);
		
		
				bringTheQuestion();
		
				function bringTheQuestion() {
					if (moveSound)
						moveSound.stop();
					textboxfortimer.text = '30';
					clearInterval(timerInterval);
					timerInterval = setInterval(timer, 1000); //יוצר את האינטרוול של הטיימר
		
		
					var pickedAnsp1; //מראה את הבחירה ששחקן 1 בחר
					var pickedAnsp2; //מראה את הבחירה ששחקן 2 בחר
					var counterAnsp1 = 0; //בודק כמה פעמים בחר שחקן 1 תשובה
					var counterAnsp2 = 0; //בודק כמה פעמים בחר שחקן 2 תשובה
		
					switch (mychoice) //בחירה של רשימת שאלות על בסיס בחירה בקומבו לפי מצבים השונים
					{
						case "1":
							qSelected = qmechanics;
							break;
						case "2":
							qSelected = qsports;
							break;
						default:
							qSelected = qmechanics;
							break;
					}
					carDistance = 700.0 / qSelected.length;
					qmax = qSelected.length; //משתנה גלובלי ששמנו בחלק העליון של המשחק
					qnumtxt.text = (qnum) + "/" + qmax;
					if (counterAnsp1 > counterAnsp2 && (correctAns - 1) == pickedAnsp1) { //בודק האם שחקן 1 לחץ מהר יותר משחקן 2 וצדק
						scorep1++; //מקבל אקסטרה נקודה על מענה מהיר מהשחקן השני
		
						//תוכל להכניס פה את התנאי לרכב שיזוז יותר מהשני--------
					} else if (counterAnsp1 < counterAnsp2 && (correctAns - 1) == pickedAnsp2) { //בודק האם שחקן 2 לחץ מהר יותר משחקן 1 וצדק
						scorep2++; //מקבל אקסטרה נקודה על מענה מהיר מהשחקן השני
		
						//תוכל להכניס פה את התנאי לרכב שיזוז יותר מהשני--------
					}
		
		
		
					//-----------------סוף החלק של החישוב שקשור לטיימר-------------------
		
					//בחירת שאלה רנדומלית משאלות המשחק
		
					selectedQ = Math.floor(Math.random() * qSelected.length);
					rndq = selectedQ
					var howMuchKeys = qSelected[rndq].length - 1; //ישמש להעלאת מס' הכפתורים למשחק
		
					if (qSelected[rndq][0] == 0) { //בדיקה שהשאלה לא נענתה בהצלחה כבר
		
						qSelected[rndq][0] = 1; //הפוך לשאלה שכן נשאלה
						showTheQuestions();
		
						function showTheQuestions() {
							//יצירת השאלה על המסך
							var maxImgQuestionHeight = 120; //הגדרות גובה מקסימלי של שאלה
							var maxImgAnswerWidth = 190; //הגדרות גובה מקסימלי של שאלה
		
							for (i = 1; i < qSelected[rndq].length; i++) {
		
								//העלאת השאלה הנשאלת
								if (i == 1) {
									//בדיקה האם זה מלל
									if (qSelected[rndq][i][0].indexOf("txt") != -1) {
										var textq = new createjs.Text();
										questionElms.push(textq);
										textq.x = stageWidth / 2;
										textq.y = 100; //להחליט איפה ממוקם על המסך
										textq.color = "#FFFFF ";
										textq.font = "20px Arial";
										textq.textAlign = "center";
										textq.text = qSelected[rndq][i][1];
										textq.name = qSelected[rndq][i][2];
										stage.addChild(textq); // 								
		
									} else if (qSelected[rndq][i][0].indexOf("pic") != -1) { //בדיקה האם זאת תמונה
										var pictureq = new qSelected[rndq][i][1]();
										questionElms.push(pictureq);
										pictureq.scaleX = maxImgQuestionHeight / pictureq.getBounds().height;
										pictureq.scaleY = maxImgQuestionHeight / pictureq.getBounds().height;
										pictureq.x = stageWidth / 2 - (maxImgQuestionHeight / 2);
										pictureq.y = 80; //להחליט איפה ממוקם על המסך
		
										pictureq.name = "picQ";
										stage.addChild(pictureq);
										//imageExplain(); //מאפשר להסבר על התמונה להופיע
										//pictureq.addEventListener('mouseover', hoverPic); //מאפשר להגדיל את התמונה
										//pictureq.addEventListener('mouseout', hoverPicOut); //מבטל הגדלת תמונה ביציאה ממנה
									}
								}
		
								//----------------------העלאת המסיחים--------------------
								else if (i > 1) {
									if (qSelected[rndq][i][2] == true) {
										correctAns = i;
									}
									//בדיקה האם זה מלל
									if (qSelected[rndq][i][0].indexOf("txt") != -1) { //במקרה וזה מלל
		
										var box = new lib.box();
										box.x = (i - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 350;
										box.y = 150;
										stage.addChild(box);
										box.name = "box";
										questionElms.push(box);
		
										var answernumberbox = new createjs.Text();
										answernumberbox.x = (i - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 40;
										answernumberbox.y = 200;
										answernumberbox.color = "#FFFFFF";
										answernumberbox.font = "30px Arial";
										stage.addChild(answernumberbox); //  
										answernumberbox.text = i - 1;
										answernumberbox.name = "answernumberbox";
		
										questionElms.push(answernumberbox);
										var answerq = new createjs.Text(qSelected[rndq][i][1], "16px Arial", "#FFFFF");
										answerq.textAlign = "right";
										answerq.lineWidth = "150";
										answerq.x = (i - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 50;
										answerq.y = 250; //להחליט איפה ממוקם על המסך
										stage.addChild(answerq);
		
										questionElms.push(answerq);
		
									} else if (qSelected[rndq][i][0].indexOf("pic") != -1) { //במקרה וזה תמונה
										//בדיקה האם זאת תמונה
										var box = new lib.box();
										box.x = (i - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 350;
										box.y = 150;
										stage.addChild(box);
										box.name = "box";
										questionElms.push(box);
		
										var answernumberbox = new createjs.Text();
										answernumberbox.x = (i - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 40;
										answernumberbox.y = 200;
										answernumberbox.color = "#FFFFFF";
										answernumberbox.font = "30px Arial";
										stage.addChild(answernumberbox); //  
										answernumberbox.text = i - 1;
										answernumberbox.name = "answernumberbox";
										questionElms.push(answernumberbox);
		
										var thisPic = new qSelected[rndq][i][1]();
										thisPic.x = (i - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 200;
										thisPic.y = 220; //להחליט איפה ממוקם על המסך
										thisPic.scaleX = maxImgAnswerWidth / thisPic.getBounds().width;
										thisPic.scaleY = maxImgAnswerWidth / thisPic.getBounds().width;
										thisPic.name = "p" + i;
		
										questionElms.push(thisPic);
										stage.addChild(thisPic);
										//imageExplain(); //מאפשר להסבר על התמונה להופיע
										//"p" + i.addEventListener('mouseover', hoverPic); //מאפשר להגדיל את התמונה
										//"p" + i.addEventListener('mouseout', hoverPicOut); //מבטל הגדלת תמונה ביציאה ממנה
									}
								}
							}
							//function imageExplain() {
							//	var textPic = new createjs.Text();
							//	questionElms.push(textPic);
							//	textPic.x = stageWidth / 2;
							//	textPic.y = 20; //להחליט איפה ממוקם על המסך
							//	textPic.color = "#FFFFF ";
							//	textPic.font = "10px Arial";
							//	textPic.text = "להגדלת התמונה עברו מעליה בעזרת העכבר";
							//	textPic.name = "howToPic";
							//	stage.addChild(textPic);
							//}
							//function hoverPic(e) {
							//	e.currentTarget.scaleX = 1.2;
							//	e.currentTarget.scaleY = 1.2;
							//	removeIfExists("howToPic");
							//}
							//function hoverPicOut(e) {
							//	e.currentTarget.scaleX = 1;
							//	e.currentTarget.scaleY = 1;
		
							//	var textPic = new createjs.Text();
							//	questionElms.push(textPic);
							//	textPic.x = stageWidth / 2;
							//	textPic.y = 20; //להחליט איפה ממוקם על המסך
							//	textPic.color = "#FFFFF ";
							//	textPic.textAlign = "center";
							//	textPic.font = "14px Arial";
							//	textPic.text = "להגדלת התמונה עברו מעליה בעזרת העכבר";
							//	textPic.name = "howToPic";
							//	stage.addChild(textPic);
							//}
		
		
							openkeys(); //קורא לפונקציה שמחליטה כמה מקשים שמישים בשאלה
						}
					} else if (qSelected[rndq][0] == 1) {
		
						if (qSelected.filter(function (q) {
							return (q[0] == 0)
						}).length > 0) {
							bringTheQuestion(); //בחירת שאלה מחדש
						} else {
							openFinishFrame();
						}
					}
		
					function openFinishFrame() {
		
						timeperp1 = parseInt(timeperp1 / qmax);
						timeperp2 = parseInt(timeperp2 / qmax);
						qnumtxt.text = "";
						home.Back.gotoAndPlay(106);
						textboxfortimer.text = '';
						clearInterval(timerInterval);
						endSound = createjs.Sound.play("endSound");
		
						scorep1txtbox = new createjs.Text();
						scorep1txtbox.x = 120;
						scorep1txtbox.y = 200; //להחליט איפה ממוקם על המסך
						scorep1txtbox.color = "#000000";
						scorep1txtbox.font = "50px Arial";
						scorep1txtbox.textAlign = "center";
						scorep1txtbox.text = scorep1;
						stage.addChild(scorep1txtbox);
						questionElms.push(scorep1txtbox);
		
						scorep2txtbox = new createjs.Text();
						scorep2txtbox.x = 820;
						scorep2txtbox.y = 200; //להחליט איפה ממוקם על המסך
						scorep2txtbox.color = "#000000";
						scorep2txtbox.font = "50px Arial";
						scorep2txtbox.textAlign = "center";
						scorep2txtbox.text = scorep2;
						stage.addChild(scorep2txtbox);
						questionElms.push(scorep2txtbox);
		
						timep1txtbox = new createjs.Text();
						timep1txtbox.x = 220;
						timep1txtbox.y = 350; //להחליט איפה ממוקם על המסך
						timep1txtbox.color = "#000000";
						timep1txtbox.font = "30px Arial";
						timep1txtbox.textAlign = "center";
						timep1txtbox.text = timeperp1;
						stage.addChild(timep1txtbox);
						questionElms.push(timep1txtbox);
		
						timep2txtbox = new createjs.Text();
						timep2txtbox.x = 880;
						timep2txtbox.y = 350; //להחליט איפה ממוקם על המסך
						timep2txtbox.color = "#000000";
						timep2txtbox.font = "30px Arial";
						timep2txtbox.textAlign = "center";
						timep2txtbox.text = timeperp2;
						stage.addChild(timep2txtbox);
						questionElms.push(timep2txtbox);
		
		
						falsep1txtbox = new createjs.Text();
						falsep1txtbox.x = 70;
						falsep1txtbox.y = 350; //להחליט איפה ממוקם על המסך
						falsep1txtbox.color = "#000000";
						falsep1txtbox.font = "30px Arial";
						falsep1txtbox.textAlign = "center";
						falsep1txtbox.text = falsep1;
						stage.addChild(falsep1txtbox);
						questionElms.push(falsep1txtbox);
		
						falsep2txtbox = new createjs.Text();
						falsep2txtbox.x = 750;
						falsep2txtbox.y = 350; //להחליט איפה ממוקם על המסך
						falsep2txtbox.color = "#000000";
						falsep2txtbox.font = "30px Arial";
						falsep2txtbox.textAlign = "center";
						falsep2txtbox.text = falsep2;
						stage.addChild(falsep2txtbox);
						questionElms.push(falsep2txtbox);
		
						//הודעות נצחון:
						finalExplain = new createjs.Text();
						finalExplain.x = (stageWidth / 2) + 5;
						finalExplain.y = 100; //להחליט איפה ממוקם על המסך
						finalExplain.color = "#FFFF00";
						finalExplain.font = "20px Arial";
						finalExplain.textAlign = "center";
						finalExplain.text = "לאחר מרוץ של " + qmax + " שאלות ו-" + gameInMinutes + ":" + gameInSeconds + " דקות הזוכה הוא:";
						stage.addChild(finalExplain);
						questionElms.push(finalExplain);
		
						var p1namelast = new createjs.Text();
						p1namelast.x = 85;
						p1namelast.y = 100;
						p1namelast.color = "#2200FF";
						p1namelast.font = "40px Arial";
						stage.addChild(p1namelast);
						p1namelast.text = p1name.text;
						p1namelast.name = "p1namelast";
						questionElms.push(p1namelast);
		
		
		
						var p2namelast = new createjs.Text();
						p2namelast.x = 800;
						p2namelast.y = 100;
						p2namelast.color = "#FF7700";
						p2namelast.font = "40px Arial";
						stage.addChild(p2namelast);
						p2namelast.text = p2name.text;
						p2namelast.name = "p2namelast";
						questionElms.push(p2namelast);
		
						//הזוכה:
						if (scorep1 > scorep2) {
							theWinner = new createjs.Text();
							theWinner.x = stageWidth / 2;
							theWinner.y = 300; //להחליט איפה ממוקם על המסך
							theWinner.color = "#2200FF";
							theWinner.font = "50px Arial";
							theWinner.textAlign = "center";
							theWinner.text = p1name.text;
							stage.addChild(theWinner);
							questionElms.push(theWinner);
						}
						if (scorep2 > scorep1) {
							theWinner = new createjs.Text();
							theWinner.x = stageWidth / 2;
							theWinner.y = 300; //להחליט איפה ממוקם על המסך
							theWinner.color = "#FF7700";
							theWinner.font = "50px Arial";
							theWinner.textAlign = "center";
							theWinner.text = p2name.text;
							stage.addChild(theWinner);
							questionElms.push(theWinner);
		
						} else if (scorep1 == scorep2) {
							theWinner = new createjs.Text();
							theWinner.x = stageWidth / 2;
							theWinner.y = 300; //להחליט איפה ממוקם על המסך
							theWinner.color = "#FFFF00";
							theWinner.font = "30px Arial";
							theWinner.textAlign = "center";
							theWinner.text = "תיקו";
							stage.addChild(theWinner);
							questionElms.push(theWinner);
						}
		
						var restart_btn = new lib.restart_btn; // הצבת הזמן הכולל שהשחקן שיחק
						restart_btn.x = 380;
						restart_btn.y = 380;
						restart_btn.scaleX = 0.7;
						restart_btn.scaleY = 0.7;
						restart_btn.name = "restart_btn";
						stage.addChild(restart_btn);
						restart_btn.cursor = "pointer";
						restart_btn.addEventListener('click', allover);
						questionElms.push(restart_btn);
		
		
						var restart2_btn = new lib.restart2_btn; // הצבת הזמן הכולל שהשחקן שיחק
						restart2_btn.x = 570;
						restart2_btn.y = 380;
						restart2_btn.scaleX = 0.7;
						restart2_btn.scaleY = 0.7;
						restart2_btn.name = "restart2_btn";
						stage.addChild(restart2_btn);
						restart2_btn.cursor = "pointer";
						restart2_btn.addEventListener('click', restart);
						questionElms.push(restart2_btn);
		
		
		
		
		
					}
		
					function allover() {
						for (i = 0; i < qmechanics.length; i++) {
							if (qmechanics[i][0] == 1) {
								qmechanics[i][0] = 0;
							}
						}
						for (i = 0; i < qsports.length; i++) {
							if (qsports[i][0] == 1) {
								qsports[i][0] = 0;
							}
						}
		
						for (i = 0; i < questionElms.length; i++) {
							var elmIndex = stage.getChildIndex(questionElms[i]);
							stage.removeChildAt(elmIndex);
						}
		
						gameInSeconds = 0;
						gameInMinutes = 0;
						scorep1 = 0;
						timeperp1 = 0;
						falsep1 = 0;
						scorep2 = 0;
						timeperp2 = 0;
						falsep2 = 0;
						timeperq = 30;
						qnum = 1;
						qmax = 0;
						qnumtxt;
						selectedQ = -1;
						questionElms = [];
						correctAns = 0;
						timeForthisQuestionp1 = 0;
						timeForthisQuestionp2 = 0;
						trigger++;
						stage.removeChild(stage.getChildByName("blue_car"));
						stage.removeChild(stage.getChildByName("orange_car"));
		
						beforegame();
					}
					
					
					function restart() {
						location.reload();
						
					}
		
		
					function cleanQuestion() {
						for (i = 0; i < questionElms.length; i++) {
							var elmIndex = stage.getChildIndex(questionElms[i])
							stage.removeChildAt(elmIndex);
						}
					}
					function markAnswerP1() {
						var rightArrow = new lib.rightArrow();
						rightArrow.x = (pickedAnsp1) * (stageWidth / (qSelected[rndq].length - 2)) - 260;
						rightArrow.y = 260;
						rightArrow.scaleX = 0.5;
						stage.addChild(rightArrow);
						rightArrow.name = "rightArrow";
						questionElms.push(rightArrow);
					}
					function markAnswerCorrect() {
						if ((correctAns - 1) == pickedAnsp1 || (correctAns - 1) == pickedAnsp2) {
		
							var correctV = new lib.correctV();
							correctV.x = (correctAns - 1) * (stageWidth / (qSelected[rndq].length - 2)) - 160;
							correctV.y = 160;
							correctV.scaleX = 0.07;
							correctV.scaleY = 0.07;
							stage.addChild(correctV);
							correctV.name = "correctV";
							questionElms.push(correctV); //שמירת אלמנט במבנה נתונים נוסף ע"מ שנוכל למוחק אחר כך
							moveSound = createjs.Sound.play("movesSound");
		
		
							if ((correctAns - 1) == pickedAnsp1) {
		
								movingcar('left'); //להכניס בנוסף לתוך התנאי
								scorep1 += parseInt(100 / qmax); //מבצע חישוב של התוספת לציון השחקן הראשון לפי המשתנים הגלובליים
							}
							if ((correctAns - 1) == pickedAnsp2) { //להכניס בנוסף לתוך התנאי
								movingcar('right');
								scorep2 += parseInt(100 / qmax); //מבצע חישוב של התוספת לציון השחקן השני לפי המשתנים הגלובליים
							}
						}
						if ((correctAns - 1) != pickedAnsp1 || (correctAns - 1) != pickedAnsp2) {
		
							if ((correctAns - 1) != pickedAnsp1) {
								var wrongX = new lib.wrongX();
								wrongX.x = (pickedAnsp1) * (stageWidth / (qSelected[rndq].length - 2)) - 160;
								wrongX.y = 160;
								wrongX.scaleX = 0.07;
								wrongX.scaleY = 0.07;
								stage.addChild(wrongX);
								wrongX.name = "wrongX";
								questionElms.push(wrongX);
								falsep1++;
							}
		
							if ((correctAns - 1) != pickedAnsp2) {
								var wrongX = new lib.wrongX();
								wrongX.x = (pickedAnsp2) * (stageWidth / (qSelected[rndq].length - 2)) - 160;
								wrongX.y = 160;
								wrongX.scaleX = 0.07;
								wrongX.scaleY = 0.07;
								stage.addChild(wrongX);
								wrongX.name = "wrongX";
								questionElms.push(wrongX);
								falsep2++;
							}
		
							if ((correctAns - 1) != pickedAnsp1 && (correctAns - 1) != pickedAnsp2) { //בודק אם במקרה שניהם לא ענו נכון
								qSelected[rndq][0] = 0; //מאפס את מענה השאלה - כדי שתחזור על עצמה שוב						
							} else {
								if (qnum != 5) {
									qnum++;
								}
							}
						}
					}
					function markAnswerP1() {
						var rightArrow = new lib.rightArrow();
						rightArrow.x = (pickedAnsp1) * (stageWidth / (qSelected[rndq].length - 2)) - 260;
						rightArrow.y = 235;
						rightArrow.scaleX = 0.5;
						stage.addChild(rightArrow);
						rightArrow.name = "rightArrow";
						questionElms.push(rightArrow);
					}
					function markAnswerP2() {
						var leftArrow = new lib.leftArrow();
						leftArrow.x = (pickedAnsp2) * (stageWidth / (qSelected[rndq].length - 2)) - 50;
						leftArrow.y = 285;
						leftArrow.scaleX = 0.5;
						stage.addChild(leftArrow);
						leftArrow.name = "leftArrow";
						questionElms.push(leftArrow);
					}
		
					function openkeys() {
		
						window.addEventListener("keydown", processAnswers);
		
						function processAnswers(e) {
		
							if (counterAnsp1 == 0) { //מאפשר לחיצה אם שחקן 1 לא בחר כבר לפני
								if (e.keyCode == 49) {
									//להוסיף חץ בצד הנבחר (1), לקדם את הרכב במידת הצורך
									counterAnsp1++;
									pickedAnsp1 = 1;
									console.log("Player 1 choose: 1");
									markAnswerP1()
								}
								if (e.keyCode == 50) {
									//להוסיף חץ בצד הנבחר (2), לקדם את הרכב במידת הצורך
									counterAnsp1++;
									pickedAnsp1 = 2;
									console.log("Player 1 choose: 2");
									markAnswerP1()
								}
								if (e.keyCode == 51 && qSelected[selectedQ].length > 4) {
									//להוסיף חץ בצד הנבחר (3), לקדם את הרכב במידת הצורך
									counterAnsp1++;
									pickedAnsp1 = 3;
									console.log("Player 1 choose: 3");
									markAnswerP1()
								}
								if (e.keyCode == 52 && qSelected[selectedQ].length > 5) {
									//להוסיף חץ בצד הנבחר (4), לקדם את הרכב במידת הצורך
									counterAnsp1++;
									pickedAnsp1 = 4;
									console.log("Player 1 choose: 4");
									markAnswerP1()
								}
								timeperp1 += 30 - timeperq;
								if (counterAnsp1 > 0 && counterAnsp2 > 0) {
									markAnswerCorrect();
								}
							}
		
							if (counterAnsp2 == 0) { //מאפשר לחיצה אם שחקן 2 לא בחר כבר לפני
								if (e.keyCode == 97) {
									//להוסיף חץ בצד הנבחר (1), לקדם את הרכב במידת הצורך
									counterAnsp2++;
									pickedAnsp2 = 1;
									console.log("Player 2 choose: 1");
									markAnswerP2()
		
								}
								if (e.keyCode == 98) {
									//להוסיף חץ בצד הנבחר (2), לקדם את הרכב במידת הצורך
									counterAnsp2++;
									pickedAnsp2 = 2;
									console.log("Player 2 choose: 2");
									markAnswerP2()
		
								}
								if (e.keyCode == 99 && qSelected[selectedQ].length > 4) {
									//להוסיף חץ בצד הנבחר (3), לקדם את הרכב במידת הצורך
									counterAnsp2++;
									pickedAnsp2 = 3;
									console.log("Player 2 choose: 3");
									markAnswerP2()
		
								}
								if (e.keyCode == 100 && qSelected[selectedQ].length > 5) {
									//להוסיף חץ בצד הנבחר (4), לקדם את הרכב במידת הצורך
									counterAnsp2++;
									pickedAnsp2 = 4;
									console.log("Player 2 choose: 4");
									markAnswerP2()
								}
								timeperp2 += 30 - timeperq;
		
								if (counterAnsp1 > 0 && counterAnsp2 > 0) {
									markAnswerCorrect();
								}
							}
							if (timeperq == 0) {
								clearInterval(timerInterval);
								cleanQuestion();
		
								var endOfTime = new lib.timeroffbox();
								endOfTime.x = stageWidth / 2;
								endOfTime.y = 230;
								endOfTime.name = "endOfTime";
								stage.addChild(endOfTime);
								questionElms.push(endOfTime);
		
								if (e.keyCode == 13) {
									stage.removeChild(stage.getChildByName("endOfTime"));
									window.removeEventListener("keydown", processAnswers);
									timeperq = 30;
									counterAnsp1 = 0; //מאפס את ההגבלה על בחירה נוספת של השחקן
									counterAnsp2 = 0; //מאפס את ההגבלה על בחירה נוספת של השחקן
									//לאפס את כל החלון - להוריד כל מה שעליו
									bringTheQuestion(); //בחירת שאלה מחדש
								}
							}
							if (counterAnsp1 == 1 && counterAnsp2 == 1) {
		
								//מונע לחיצות אחרות מעבר לאנטר ומעבר לשאלה הבאה
								//להקפיץ את התשובות הנכונות/לא נכונות ואת ההנחיה להמשך ע"ג המסך
								clearInterval(timerInterval);
								timeperq = 30;
								var nextscreentxt = new createjs.Text();
								nextscreentxt.x = 400;
								nextscreentxt.y = 440;
								nextscreentxt.color = "#FFFF00";
								nextscreentxt.font = "16px Arial";
								stage.addChild(nextscreentxt);
								nextscreentxt.text = " להמשך הקישו על ENTER";
								nextscreentxt.name = "nextscreentxt";
								questionElms.push(nextscreentxt);
		
								if (e.keyCode == 13) {
									stage.removeChild(stage.getChildByName("nextscreentxt"));
									window.removeEventListener("keydown", processAnswers);
									counterAnsp1 = 0; //מאפס את ההגבלה על בחירה נוספת של השחקן
									counterAnsp2 = 0; //מאפס את ההגבלה על בחירה נוספת של השחקן
									//לאפס את כל החלון - להוריד כל מה שעליו
									cleanQuestion();
									bringTheQuestion(); //בחירת שאלה מחדש
								}
							}
						}
					}
				}
		
			}
		
			//-------------------פונקציית טיקר לתזוזת רכבים
			function movingcar(car) {
				if (car == 'left') {
		
					carmove = stage.getChildByName("blue_car");
					position = carmove.x;
		
					carsInterval = setInterval(function () {
						console.log("left moved to: " + (carmove.x + carMovment))
						if (carmove.x <= (position + carDistance)) {
							carmove.x += carMovment;
						} else {
							clearInterval(carsInterval);
						}
					}, 5);
				} else if (car == 'right') {
		
					carmove2 = stage.getChildByName("orange_car");
					position2 = carmove2.x;
		
					carsInterval2 = setInterval(function () {
		
						console.log("right moved to: " + (carmove2.x + carMovment))
						if (carmove2.x <= (position2 + carDistance)) {
							carmove2.x += carMovment;
						} else {
							clearInterval(carsInterval2);
						}
					}, 5);
				}
		
			}
		
		
			//------------------אודות
		
			function aboutFunc() {
		
				//הוספת חלונית אודות בלחיצה על אודות
				var aboutWindow = new lib.about();
				aboutWindow.scaleX = 0.8;
				aboutWindow.scaleY = 0.8;
				aboutWindow.name = "aboutWindow";
				aboutWindow.x = 100;
				aboutWindow.y = 80;
				stage.addChild(aboutWindow);
		
		
				var aboutX = new lib.about_x();
				aboutX.x = 116;
				aboutX.y = 95;
				aboutX.name = "aboutX";
				stage.addChild(aboutX);
		
				//הוספת כותרת של המשחק
				var gameTitleAbout = new createjs.Text();
				gameTitleAbout.text = "מרוץ הידע";
				gameTitleAbout.color = "black";
				gameTitleAbout.font = "bold 17pt Arial";
				gameTitleAbout.name = "aboutTitle";
				stage.addChild(gameTitleAbout);
				gameTitleAbout.x = 390;
				gameTitleAbout.y = 158;
		
				//הוספת יוצרים
				var gameCreatorsAbout = new createjs.Text();
				gameCreatorsAbout.text = "אפיון ופיתוח: יפים יגורוב ודין מרקוס";
				gameCreatorsAbout.color = "black";
				gameCreatorsAbout.font = "bold 14pt Arial";
				gameCreatorsAbout.name = "aboutCreators";
				stage.addChild(gameCreatorsAbout);
				gameCreatorsAbout.x = 340;
				gameCreatorsAbout.y = 185;
				//הוספת מסגרת קורס
				var gameCoursesAbout = new createjs.Text();
				gameCoursesAbout.text = "פותח במסגרת פרוייקט בקורס: סביבות לימוד אינטרקטיביות 1 & אנימציה";
				gameCoursesAbout.color = "black";
				gameCoursesAbout.font = "14pt Arial";
				stage.addChild(gameCoursesAbout);
				gameCoursesAbout.textAlign = "center";
				gameCoursesAbout.name = "aboutCourses";
				gameCoursesAbout.x = 470;
				gameCoursesAbout.y = 220;
		
				//הוספת טקסט למכון הטכנולוגי
				var hitText = new lib.hitText();
				hitText.x = 470;
				hitText.y = 450;
				hitText.name = "hitText";
				stage.addChild(hitText);
		
				//הוספת לוגו של המכון הטכנולוגי חולון
				var hitLogo = new lib.hitLogo();
				hitLogo.x = 470;
				hitLogo.y = 350;
				hitLogo.scaleX = 0.8;
				hitLogo.scaleY = 0.8;
				hitLogo.name = "HIT";
				stage.addChild(hitLogo);
		
				//פונקציית סגירת אודות
				hitLogo.addEventListener('click', HITLink);
				aboutX.addEventListener("click", closeAbout);
				stage.getChildByName("Myforcombo").y = 1000;
		
			}
		
		
		
			function closeAbout() { //פונקציית סגירת אודות
		
				stage.removeChild(stage.getChildByName("aboutX"));
				stage.removeChild(stage.getChildByName("aboutWindow"));
				stage.removeChild(stage.getChildByName("HIT"));
				stage.removeChild(stage.getChildByName("hitText"));
				stage.removeChild(stage.getChildByName("aboutCourses"));
				stage.removeChild(stage.getChildByName("aboutCreators"));
				stage.removeChild(stage.getChildByName("aboutTitle"));
		
		
				stage.getChildByName("Myforcombo").y = 360;
		
			}
		
			//פונקציה שפותחת את עמוד הפקולטה של המכון בלחיצה על הלוגו בעמוד האודות
			function HITLink() {
				window.open("http://www.hit.ac.il/telem/overview");
			}
		
		
			function timesUp() {
				console.log("Times up!");
			}
			function timer() {
				if (parseInt(textboxfortimer.text) > 0) {
					textboxfortimer.text = (parseInt(textboxfortimer.text) - 1).toString();
					timeperq--;
					gameInSeconds++; //מהרגע שמתחילה לרוץ, מעלה את סכום הזמן של המשחק כל פעם ב-1
				} else {
					timesUp();
				}
		
			}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.Back = new lib.Back();
	this.Back.parent = this;
	this.Back.setTransform(480,270);

	this.timeline.addTween(cjs.Tween.get(this.Back).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,290,2514,520);
// library properties:
lib.properties = {
	id: '55F4A58258F1B447A1ADD41B9171ECD3',
	width: 960,
	height: 540,
	fps: 2,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/knowladgeracegame_atlas_P_.png", id:"knowladgeracegame_atlas_P_"},
		{src:"images/knowladgeracegame_atlas_NP_.jpg", id:"knowladgeracegame_atlas_NP_"},
		{src:"sounds/endsound.mp3", id:"endsound"},
		{src:"sounds/movesound.mp3", id:"movesound"},
		{src:"sounds/startsound.mp3", id:"startsound"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/textinput.js", id:"an.TextInput"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['55F4A58258F1B447A1ADD41B9171ECD3'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;