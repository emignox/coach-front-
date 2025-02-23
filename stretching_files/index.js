(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.img_1 = function() {
	this.initialize(img.img_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1200,828);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.WUlogo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Icon_B
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKpRhQhphJhRiKMgS9gg1IQLAAILsUMQA7BnBzAAQBxAAA8hmIrr0NIQLAAIGQK2IstV/QhQCKhoBJQhmBHhuAAQhuAAhkhHgAq9RhQhohKhRiKMgS9gg0IQMAAIRDdhIh5DTQhRCKhoBKQhmBHhtAAQhvAAhlhHg");
	this.shape.setTransform(-300.55,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Wordmark_B
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AmfQwQh6h4AAi5QAAhYAghPQAghOA7g7QA7g6BQgfQBPggBaAAQBaAABPAgQBQAfA7A6QA8A7AfBOQAgBPAABYQAAC5h6B4Qh6B4i7AAQi7AAh6h4gAkYJOQhFBHAABqQAABqBFBHQBGBHBoAAQBpAABFhHQBHhHAAhqQAAhqhHhHQhFhHhpAAQhoAAhGBHgEgomAQpQh2iAAAjhIAAqHIDDAAIAAKLQAACOBBBMQBBBLB5AAQB5AABBhLQBBhMAAiOIAAqLIDCAAIAAKHQAADhh2CAQh2B/jRAAQjSAAh2h/gAPfSZIAAnDQAAh3g9g2QgugohOAAQhdAAg0A8Qg1A7AABqIAAG3IjBAAIAAsyICmAAIAAB1QAnhABNgkQBJgiBZAAQCGAABYBQQBoBfAAC2IAAHegAszSZIAAsyIDAAAIAAMygAxtSZIAAnDQAAh3g9g2QgugohOAAQhdAAg0A8Qg0A7AABqIAAG3IjCAAIAAsyICmAAIAAB1QAohABMgkQBJgiBZAAQCHAABXBQQBoBfAAC2IAAHegAshD1QghggAAgtQAAguAgggQAhggAvAAQAuAAAgAhQAhAgAAAtQAAAtghAgQggAgguAAQguAAghgggALYi3Qh2h2AAi7QAAhYAehPQAehOA4g7QA4g7BNggQBMgfBXAAQBYAABJAdQBKAdA3A4QA/BAAfBeQAfBfgDB0IAAAJIp3AAQALBWBAA2QBBA1BdAAQBZAABBgvQAtghAUgrIADgFIADAAICSBKQgtBihoA8QhnA8h5AAQi7AAh3h2gATVo+QgHhOg8gzQg9gyhXAAQhWAAg+AyQg9AzgKBOIGyAAIAAAAgAElhxQgpgvAAhHIAAn+IhfAAIAAicIBfAAIAAi7IC2guIAADpIB8AAIACCcIh+AAIAAHVQAAATANAMQAOAMAVAAQArAAAkgGIAACbQgIAEgYAEQgwAHhKAAQhHAAgrgwgAnOiDQhyhKAAh3ICughIABANQAHA5AvAhQAwAhBMAAQA/AAAlgXQAlgYAAgoQAAgpg1gaQgggRhbgYQiKglg4glQhig/AAhzQAAhsBXhEQBWhFCJAAQCGAABZBKQBZBKAABzIijAeIgEABIgGgiQgGgygmgdQgmgdg7AAQg1AAgiAXQgiAWAAAkQAAAnAzAZQAgAQBZAXQCOAlA6AmQBkBBAAB6QAAB0haBDQhZBDibAAQiDAAhmhCgA02i3Qh3h2AAi7QAAhYAehPQAehOA4g7QA5g7BMggQBNgfBWAAQBYAABKAdQBKAdA3A4QA+BAAgBeQAfBfgDB0IAAAJIp4AAQALBWBBA2QBAA1BdAAQBaAABAgvQAtghAUgrIADgFIADAAICTBKQgtBihoA8QhnA8h5AAQi8AAh2h2gAs6o+QgHhOg8gzQg8gyhYAAQhWAAg9AyQg+AzgKBOIGyAAIAAAAgEAozgBQIAAnDQAAh3g9g1QgugphOAAQhdAAg0A8Qg1A8AABpIAAG3IjCAAIAAsxICnAAIAAB0QAnhABNgjQBIgiBaAAQCGAABYBQQBoBeAAC3IAAHdgAXthQIAAsxICgAAIAABnQAng/BJgbQBIgbBYAMIAIABIgCCrIgKgBQh+gSg9A0QguAmgEBMIACH0gA9bhQIgCgHQhflvgrixQgsi3gPhfQgQBcgvC5QgoCfhoGCIgCAHIjUAAIktxXIDNAAIACAGQBmGJApCnQAwDEASBhQAQhjAvjAQAlicBomWIACgGIDPAAIABAGQBdFjAvC8QAvDAAUBoQARhgAsi3QAriyBkl+IABgGIDGAAIkuRXg");
	this.shape_1.setTransform(230.075,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WUlogo, new cjs.Rectangle(-510.5,-119.2,1021.1,238.5), null);


(lib.Photo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.img_1();
	this.instance.setTransform(-614,-410,0.7083,0.7083);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Photo_1, new cjs.Rectangle(-614,-410,850,586.5), null);


(lib.h3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgVATIAAglIArAAIAAAlg");
	this.shape.setTransform(265.975,175.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAANIgNAWIgPgLIARgUIgZgEIAGgTIAYALIgCgaIASAAIgDAaIAYgLIAGATIgaAEIARAUIgPALg");
	this.shape_1.setTransform(259.05,159.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhWAAIAAAAQAAhiBWAAQBXAAAABiIAAAAQAABjhXAAQhWAAAAhjgAgtgDIAAAHQAABCAtAAQAtAAAAhCIAAgHQAAhCgtAAQgtAAAABCg");
	this.shape_2.setTransform(245.7,167.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5A5QgVgSABgjIAAgHQgBgiAVgTQAVgSAmAAQAkAAAUASQAUARAAAhIgBARIhyAAQABAnAmAAQAgAAAFgcIAnAEQgJAxhEAAQgmAAgUgSgAglgNIBLAAIAAgCQgBgigjAAQgkAAgDAkg");
	this.shape_3.setTransform(221.85,169.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhOAZIAAgEQAAhIA/AAQArAAAPAnIADgBQgIgYAAgUIAAgnIApAAIAAC+IgpAAQAAgMAIgXIgDgBQgQAngqAAQg/AAAAhIgAglAUIAAAGQgBAuAmABQAmAAAAgwIAAgFQAAgvgmABQgmAAABAug");
	this.shape_4.setTransform(204.15,167.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHATgRAKQgQAKgYAAQgVAAgMgJQgMgLAAgRIAAAAQAAgWASgMQAPgJAggHIAmgHIAAgIQAAgXgcAAQgiAAACAfIgngCQgCgZATgOQASgOAlAAQBCAAAAAwIAABBQAAAHADADQADABALABIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAAKIAAABQAAAPAUAAQASAAALgLQANgLAAgQIAAgHg");
	this.shape_5.setTransform(181.725,170);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBeIAAiOIAnAAIAACOgAgUhBIAAgdIApAAIAAAdg");
	this.shape_6.setTransform(169.975,167.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhNAAIAAgBQAAhJBOAAQBHAAAFA6IgoAFQgCgmgjAAQgkAAgBAuIAAAGQAAAvAmAAQAiAAADgjIAoAEQgGA4hHAAQhOAAAAhLg");
	this.shape_7.setTransform(158.2,169.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAjBJIAAhZQAAgdgdAAQgSAAgKAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgIAWIADABQATgoAqAAQAzAAAAAuIAABjg");
	this.shape_8.setTransform(141.05,169.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5BPQgVgSABgjIAAgIQgBghAVgSQAVgTAmAAQAkAAAUASQAUARAAAgIgCASIhxAAQABAnAmAAQAfAAAGgcIAnAFQgJAwhEAAQgmAAgUgSgAglAIIBLAAIAAgCQgBghgjAAQgkAAgDAjgAAWg+IgUgQIgVAQIgdAAIAggiIAkAAIAfAig");
	this.shape_9.setTransform(123.85,167.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgyBKIAAiOIAoAAQABAMgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmACgMAKQgLALAAAfIAAA8g");
	this.shape_10.setTransform(109.875,169.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag5A5QgUgSgBgjIAAgHQABgiAUgTQAVgSAlAAQAlAAAUASQAUARAAAhIgBARIhyAAQABAnAlAAQAgAAAGgcIAoAEQgKAxhEAAQglAAgVgSgAglgNIBKAAIAAgCQABgiglAAQgiAAgEAkg");
	this.shape_11.setTransform(95,169.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgdBhIAAh0IgXAAIAAgaIAXAAIAAgHQAAgXAQgJQARgKAtgCIAFAaQgiABgHAEQgGAEABAQIAtAAIAAAaIgrAAIAAB0g");
	this.shape_12.setTransform(80.75,167.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhIAZIAmgEQAAAeAkAAQAgAAAAgQQAAgIgJgFQgHgEgSgEIgXgGQgtgKAAgdQAAgrBDAAQBGAAAAAtIglAEQABgZgiAAQgdAAAAAOQAAAHAIAFQAHADARAEIAWAGQAWAFALAGQAQAMAAATQAAAshHAAQhJAAgBgyg");
	this.shape_13.setTransform(67.175,170);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiBJIAAhZQAAgdgcAAQgRAAgLAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgHAWIACABQASgoAsAAQAyAAAAAuIAABjg");
	this.shape_14.setTransform(50.75,169.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHATgRAKQgQAKgYAAQgVAAgMgJQgMgLAAgRIAAAAQAAgWASgMQAPgJAggHIAmgHIAAgIQAAgXgcAAQgiAAACAfIgngCQgCgZATgOQASgOAlAAQBCAAAAAwIAABBQAAAHADADQADABALABIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAAKIAAABQAAAPAUAAQASAAALgLQANgLAAgQIAAgHg");
	this.shape_15.setTransform(34.025,170);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgyBKIAAiOIAoAAQABAMgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmACgMAKQgLALAAAfIAAA8g");
	this.shape_16.setTransform(20.125,169.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgfA0IAAhNIgYAAIAAgaIAYAAIAAggIAngKIAAAqIAwAAIAAAaIgwAAIAABGQAAAVAWAAQANAAANgFIgDAaQgQAHgXAAQgtAAAAgqg");
	this.shape_17.setTransform(8,168.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag5A5QgVgSABgjIAAgHQgBgiAVgTQAVgSAmAAQAkAAAUASQAUARAAAhIgCARIhxAAQABAnAmAAQAfAAAGgcIAnAEQgJAxhEAAQgmAAgUgSgAglgNIBLAAIAAgCQAAgigkAAQgkAAgDAkg");
	this.shape_18.setTransform(227,139.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhOAYIAAgDQAAhHA/AAQAqAAAQAmIACgBQgGgXgBgVIAAgnIApAAIAAC/IgpAAQABgMAGgYIgCAAQgPAmgrAAQg/AAAAhJgAglAUIAAAFQAAAwAlAAQAmgBAAgvIAAgFQAAgugmgBQglAAAAAvg");
	this.shape_19.setTransform(209.3,137.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHASgRALQgQAKgYAAQgVAAgMgKQgMgJAAgSIAAgBQAAgVASgMQAPgKAggFIAmgHIAAgJQAAgYgcAAQgiABACAgIgngDQgCgaATgOQASgNAlAAQBCAAAAAwIAABAQAAAJADABQADADALAAIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAALIAAAAQAAAOAUAAQASABALgLQANgLAAgRIAAgGg");
	this.shape_20.setTransform(186.875,140);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAiBIIgZgiQgFgHgDgIIgCAAQgDAHgFAIIgZAiIgsAAIA3hIIg0hHIAtAAIAVAfIAJAQIACAAIAJgQIAWgfIArAAIg0BFIA3BKg");
	this.shape_21.setTransform(170.475,139.975);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHASgRALQgQAKgYAAQgVAAgMgKQgMgJAAgSIAAgBQAAgVASgMQAPgKAggFIAmgHIAAgJQAAgYgcAAQgiABACAgIgngDQgCgaATgOQASgNAlAAQBCAAAAAwIAABAQAAAJADABQADADALAAIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAALIAAAAQAAAOAUAAQASABALgLQANgLAAgRIAAgGg");
	this.shape_22.setTransform(154.525,140);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgfA0IAAhNIgXAAIAAgaIAXAAIAAggIAngKIAAAqIAvAAIAAAaIgvAAIAABGQAAAVAVAAQANAAANgFIgCAaQgQAHgXAAQgtAAAAgqg");
	this.shape_23.setTransform(140.1,138.025);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHASgRALQgQAKgYAAQgVAAgMgKQgMgJAAgSIAAgBQAAgVASgMQAPgKAggFIAmgHIAAgJQAAgYgcAAQgiABACAgIgngDQgCgaATgOQASgNAlAAQBCAAAAAwIAABAQAAAJADABQADADALAAIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAALIAAAAQAAAOAUAAQASABALgLQANgLAAgRIAAgGg");
	this.shape_24.setTransform(120.475,140);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("ABQBJIAAhdQAAgYgZAAQgRAAgJAOQgJAMAAAXIAABEIgnAAIAAhdQAAgYgYAAQgRAAgJAOQgJANAAAXIAABDIgoAAIAAiOIAoAAQAAAMgIAYIADABQATgoAmAAQAsAAgGApIADAAQASgpApAAQAtAAAAArIAABmg");
	this.shape_25.setTransform(98.85,139.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhJAbIAAhjIAoAAIAABZQAAAdAcAAQARAAAMgOQAKgOAAgYIAAhCIAoAAIAACPIgoAAQAAgPAIgWIgEgBQgRAogrAAQgzAAAAgug");
	this.shape_26.setTransform(77.1,140.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABPBJIAAhdQABgYgZAAQgQAAgKAOQgJAMAAAXIAABEIgnAAIAAhdQAAgYgYAAQgQAAgKAOQgKANABAXIAABDIgpAAIAAiOIApAAQAAAMgIAYIADABQATgoAmAAQArAAgEApIACAAQASgpApAAQAtAAABArIAABmg");
	this.shape_27.setTransform(49.85,139.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag5A5QgVgTAAgkIAAgDQAAgkAVgTQAUgSAlAAQAlAAAVASQAVATAAAkIAAADQAAAkgVATQgVASglAAQglAAgUgSgAgmgDIAAAHQAAAuAmAAQAnAAAAguIAAgHQAAgugnAAQgmAAAAAug");
	this.shape_28.setTransform(28,139.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhNAAIAAgBQAAhJBOAAQBHAAAFA6IgoAFQgDgmghAAQgmAAABAuIAAAGQAAAvAlAAQAiAAADgjIAoAEQgGA4hHAAQhOAAAAhLg");
	this.shape_29.setTransform(10.75,139.975);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_30.setTransform(265.575,110);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgTBfIAAiPIAnAAIAACPgAgUhBIAAgcIApAAIAAAcg");
	this.shape_31.setTransform(253.825,107.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgyBKIAAiPIAoAAQABANgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmABgMAMQgLAKAAAgIAAA7g");
	this.shape_32.setTransform(245.275,109.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAiBZQgGgIAEgWIgCAAQgHASgRAKQgQALgYAAQgVAAgMgKQgMgKAAgSIAAAAQAAgVASgMQAPgLAggGIAmgHIAAgHQAAgYgcAAQgiAAACAfIgngDQgCgYATgOQASgNAlAAQBCAAAAAvIAABBQAAAIADACQADACALAAIgFAXIgLACQgXgBgHgIgAgBAfQgUAFgIAEQgJAGAAAKIAAABQAAAOAUAAQASAAALgLQANgKAAgRIAAgGgAgSg9IASgjIAmAAIgdAjg");
	this.shape_33.setTransform(230.875,107.75);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhNAAIAAgBQAAhJBOAAQBHAAAFA6IgoAFQgDgmghAAQgmAAAAAuIAAAGQAAAvAmAAQAjAAACgjIAoAEQgGA4hHAAQhOAAAAhLg");
	this.shape_34.setTransform(213.75,109.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAjBJIAAhaQAAgcgcAAQgTAAgKAOQgLAOAAAYIAABCIgoAAIAAiPIAoAAQAAAPgIAWIAEABQARgoAsAAQAyAAAAAuIAABjg");
	this.shape_35.setTransform(196.6,109.85);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_36.setTransform(179.875,110);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgpA7IgDABQAGAWABANIgoAAIAAi/IAnAAIAAAnQAAAUgGAYIACABQAQgnAqAAQA/AAgBBIIAAAEQABBIg/AAQgqAAgPgmgAgmAUIAAAFQAAAwAngBQAmAAgBgvIAAgGQABgtgmgBQgnAAAAAvg");
	this.shape_37.setTransform(162.65,107.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_38.setTransform(139.825,110);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfA0IAAhNIgXAAIAAgaIAXAAIAAggIAngKIAAAqIAvAAIAAAaIgvAAIAABGQAAAVAVAAQANAAANgFIgCAaQgQAHgXAAQgtAAAAgqg");
	this.shape_39.setTransform(125.4,108.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAjBJIAAhaQAAgcgcAAQgSAAgLAOQgLAOAAAYIAABCIgoAAIAAiPIAoAAQAAAPgIAWIAEABQARgoArAAQAzAAAAAuIAABjg");
	this.shape_40.setTransform(111,109.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag5A5QgVgTAAgkIAAgDQAAgkAVgTQAUgSAlAAQAlAAAVASQAVATAAAkIAAADQAAAkgVATQgVASglAAQglAAgUgSgAgmgDIAAAHQAAAuAmAAQAnAAAAguIAAgHQAAgugnAAQgmAAAAAug");
	this.shape_41.setTransform(93.7,109.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AhNAAIAAgBQAAhJBOAAQBHAAAFA6IgoAFQgDgmgiAAQglAAABAuIAAAGQAAAvAlAAQAiAAADgjIAoAEQgGA4hHAAQhOAAAAhLg");
	this.shape_42.setTransform(76.45,109.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_43.setTransform(54.075,110);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ABQBJIAAhdQgBgYgYAAQgRAAgJAOQgJANAAAWIAABEIgnAAIAAhcQAAgZgYAAQgRAAgJAOQgKAOAAAXIAABCIgnAAIAAiPIAnAAQABANgIAYIADABQATgoAmAAQAsAAgGAoIADABQASgpApAAQAtAAAAArIAABmg");
	this.shape_44.setTransform(32.45,109.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AhJAbIAAhjIAoAAIAABaQAAAcAcAAQASAAALgOQAKgOAAgYIAAhCIAoAAIAACPIgoAAQAAgPAIgWIgDgCQgTApgqAAQgzAAAAgug");
	this.shape_45.setTransform(10.7,110.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h3_4, new cjs.Rectangle(0,0,275.8,186), null);


(lib.h3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHATgRAKQgQAKgYAAQgVAAgMgJQgMgLAAgRIAAAAQAAgWASgMQAPgJAggHIAmgHIAAgIQAAgXgcAAQgiAAACAfIgngCQgCgZATgOQASgOAlAAQBCAAAAAwIAABBQAAAHADADQADABALABIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAAKIAAABQAAAPAUAAQASAAALgLQANgLAAgQIAAgHg");
	this.shape.setTransform(266.525,80);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyBKIAAiOIAoAAQABAMgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmACgMAKQgLALAAAfIAAA8g");
	this.shape_1.setTransform(252.325,79.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHATgRAKQgQAKgYAAQgVAAgMgJQgMgLAAgRIAAAAQAAgWASgMQAPgJAggHIAmgHIAAgIQAAgXgcAAQgiAAACAfIgngCQgCgZATgOQASgOAlAAQBCAAAAAwIAABBQAAAHADADQADABALABIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAAKIAAABQAAAPAUAAQASAAALgLQANgLAAgQIAAgHg");
	this.shape_2.setTransform(237.625,80);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhOBhIAAi+IApAAQAAAMgHAXIACABQAPgnArAAQA/AAAABJIAAADQAABHg/AAQgqAAgQgmIgCABQAHAYAAAUIAAAngAglgYIAAAFQAAAuAmAAQAlABAAgvIAAgGQAAguglgBQgmABAAAvg");
	this.shape_3.setTransform(220.1,82.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag5A5QgVgSABgjIAAgHQgBgiAVgTQAVgSAmAAQAkAAAUASQAUARAAAhIgBARIhyAAQABAnAmAAQAgAAAFgcIAnAEQgJAxhEAAQgmAAgUgSgAglgNIBLAAIAAgCQgBgigjAAQgkAAgDAkg");
	this.shape_4.setTransform(196.2,79.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjBJIAAhZQAAgdgcAAQgTAAgKAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgIAWIAEABQARgoAsAAQAyAAAAAuIAABjg");
	this.shape_5.setTransform(178.7,79.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgTBeIAAiOIAnAAIAACOgAgUhBIAAgdIApAAIAAAdg");
	this.shape_6.setTransform(166.625,77.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgTBgIAAi/IAnAAIAAC/g");
	this.shape_7.setTransform(159.9,77.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiBJIAAhZQAAgdgbAAQgSAAgLAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgHAWIADABQASgoArAAQAyAAAAAuIAABjg");
	this.shape_8.setTransform(147.85,79.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag5A5QgVgTAAgkIAAgDQAAgkAVgTQAUgSAlAAQAlAAAVASQAVATAAAkIAAADQAAAkgVATQgVASglAAQglAAgUgSgAgmgDIAAAHQAAAuAmAAQAnAAAAguIAAgHQAAgugnAAQgmAAAAAug");
	this.shape_9.setTransform(130.25,79.975);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5A5QgVgTAAgkIAAgDQAAgkAVgTQAUgSAlAAQAlAAAVASQAVATAAAkIAAADQAAAkgVATQgVASglAAQglAAgUgSgAglgDIAAAHQAAAuAlAAQAmAAAAguIAAgHQAAgugmAAQglAAAAAug");
	this.shape_10.setTransform(106.6,79.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyBKIAAiOIAoAAQABAMgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmACgMAKQgLALAAAfIAAA8g");
	this.shape_11.setTransform(92.275,79.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTBeIAAiOIAnAAIAACOgAgUhBIAAgdIApAAIAAAdg");
	this.shape_12.setTransform(82.525,77.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5A5QgVgSABgjIAAgHQgBgiAVgTQAVgSAmAAQAkAAAUASQAUARAAAhIgCARIhxAAQABAnAmAAQAfAAAGgcIAnAEQgJAxhEAAQgmAAgUgSgAglgNIBLAAIAAgCQAAgigkAAQgkAAgDAkg");
	this.shape_13.setTransform(70.4,79.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiBgIAAhbQAAgbgbAAQgTAAgKAOQgLANAAAYIAABDIgoAAIAAi/IAoAAIAAAtQAAATgHAVIADABQARgoAsAAQAyAAAAAuIAABjg");
	this.shape_14.setTransform(52.9,77.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAiBJIAAhZQAAgdgcAAQgRAAgLAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgHAWIACABQASgoArAAQAzAAAAAuIAABjg");
	this.shape_15.setTransform(35.45,79.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTBeIAAiOIAnAAIAACOgAgUhBIAAgdIApAAIAAAdg");
	this.shape_16.setTransform(23.375,77.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhNAZIAAgEQAAhIA+AAQAqAAAQAnIADgBQgIgYABgUIAAgnIAnAAIAAC+IgoAAQAAgMAIgXIgEgBQgPAngqAAQg+AAAAhIgAgmAUIAAAGQAAAuAmABQAnAAAAgwIAAgFQAAgvgnABQgmAAAAAug");
	this.shape_17.setTransform(10.8,77.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h3_3, new cjs.Rectangle(0,0,277,96), null);


(lib.h3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag5A5QgVgSABgjIAAgHQgBgiAVgTQAVgSAmAAQAkAAAUASQAUARAAAhIgBARIhyAAQABAnAmAAQAgAAAFgcIAnAEQgJAxhEAAQgmAAgUgSgAglgNIBLAAIAAgCQgBgigjAAQgkAAgDAkg");
	this.shape.setTransform(226.35,49.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhNAYIAAgDQAAhHA+AAQAqAAAQAmIADgBQgIgXABgVIAAgnIAnAAIAAC/IgoAAQAAgMAIgYIgEAAQgPAmgqAAQg+AAAAhJgAgmAUIAAAFQAAAwAmAAQAngBAAgvIAAgFQAAgugngBQgmAAAAAvg");
	this.shape_1.setTransform(208.35,47.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHASgRALQgQAKgYAAQgVAAgMgKQgMgJAAgSIAAgBQAAgVASgMQAPgKAggFIAmgHIAAgJQAAgYgcAAQgiABACAgIgngDQgCgaATgOQASgNAlAAQBCAAAAAwIAABAQAAAJADABQADADALAAIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAALIAAAAQAAAOAUAAQASABALgLQANgLAAgRIAAgGg");
	this.shape_2.setTransform(185.325,50);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgTBfIAAiPIAnAAIAACPgAgUhBIAAgdIApAAIAAAdg");
	this.shape_3.setTransform(173.275,47.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhNAAIAAgBQAAhJBOAAQBHAAAFA6IgoAFQgDgmghAAQgmAAAAAuIAAAGQAAAvAmAAQAjAAACgjIAoAEQgGA4hHAAQhOAAAAhLg");
	this.shape_4.setTransform(161.2,49.975);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAjBJIAAhaQAAgcgdAAQgSAAgKAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgIAWIADACQATgpAqAAQAzAAAAAuIAABjg");
	this.shape_5.setTransform(143.75,49.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("Ag5BPQgUgSAAgjIAAgIQAAghAUgTQAVgSAlAAQAlAAAUASQAUASAAAfIgBASIhyAAQABAnAlAAQAhAAAFgbIAoADQgKAyhEAAQglAAgVgTgAglAIIBKAAIAAgCQAAghgkAAQgiAAgEAjgAAXg+IgWgRIgUARIgdAAIAfgjIAlAAIAgAjg");
	this.shape_6.setTransform(126.25,47.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgyBKIAAiOIAoAAQABAMgIAYIACACQALgXANgJQANgJAYgCIAFAhQgmABgMALQgLALAAAgIAAA7g");
	this.shape_7.setTransform(111.975,49.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ag5A5QgUgSgBgjIAAgHQABgiAUgTQAVgSAlAAQAlAAAUASQAUARAAAhIgBARIhyAAQABAnAlAAQAgAAAGgcIAoAEQgKAxhEAAQglAAgVgSgAglgNIBKAAIAAgCQABgiglAAQgiAAgEAkg");
	this.shape_8.setTransform(96.8,49.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgdBiIAAh1IgYAAIAAgaIAYAAIAAgHQAAgXARgJQAQgJAugEIADAaQgiACgFAEQgHAEABAQIAtAAIAAAaIgsAAIAAB1g");
	this.shape_9.setTransform(82.25,47.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIAaIAmgFQAAAeAkAAQAgAAAAgQQAAgIgJgFQgHgEgSgEIgXgGQgtgKAAgeQAAgqBDAAQBGAAAAAtIglAEQABgagiAAQgdAAAAAPQAAAHAIAEQAHAFARADIAWAGQAWAFALAGQAQAMAAATQAAAshHAAQhJAAgBgxg");
	this.shape_10.setTransform(68.375,50);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiBJIAAhaQAAgcgcAAQgRAAgLAOQgLAOAAAXIAABDIgoAAIAAiOIAoAAQAAAOgHAWIACACQASgpAsAAQAyAAAAAuIAABjg");
	this.shape_11.setTransform(51.65,49.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCgBQgHASgRALQgQAKgYAAQgVAAgMgKQgMgJAAgSIAAgBQAAgVASgMQAPgKAggFIAmgHIAAgJQAAgYgcAAQgiABACAgIgngDQgCgaATgOQASgNAlAAQBCAAAAAwIAABAQAAAJADABQADADALAAIgFAXIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAFAAALIAAAAQAAAOAUAAQASABALgLQANgLAAgRIAAgGg");
	this.shape_12.setTransform(34.625,50);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgyBKIAAiOIAoAAQABAMgIAYIACACQALgXANgJQANgJAYgCIAFAhQgmABgMALQgLALAAAgIAAA7g");
	this.shape_13.setTransform(20.425,49.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgfA0IAAhNIgYAAIAAgaIAYAAIAAggIAngKIAAAqIAwAAIAAAaIgwAAIAABGQAAAVAWAAQANAAANgFIgDAaQgQAHgXAAQgtAAAAgqg");
	this.shape_14.setTransform(8,48.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h3_2, new cjs.Rectangle(0,0,237.3,66), null);


(lib.h3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape.setTransform(262.525,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyBKIAAiPIAoAAQABANgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmABgMAMQgLAKAAAgIAAA7g");
	this.shape_1.setTransform(248.325,19.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTBfIAAiPIAnAAIAACPgAgUhBIAAgcIApAAIAAAcg");
	this.shape_2.setTransform(238.575,17.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag5A5QgVgSABgjIAAgHQgBgiAVgTQAVgSAmAAQAkAAAUASQAUARAAAhIgCARIhxAAQABAnAmAAQAfAAAGgcIAnAEQgJAxhEAAQgmAAgUgSgAglgNIBLAAIAAgCQgBgigjAAQgkAAgDAkg");
	this.shape_3.setTransform(226.45,19.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ABQBJIAAhdQAAgYgZAAQgQAAgKAOQgJANAAAWIAABEIgnAAIAAhcQAAgZgYAAQgQAAgKAOQgKAOAAAXIAABCIgnAAIAAiPIAnAAQABANgIAYIADABQATgoAmAAQArAAgEAoIACABQASgpApAAQAtAAAAArIAABmg");
	this.shape_4.setTransform(204.45,19.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgTBfIAAiPIAnAAIAACPgAgUhBIAAgcIApAAIAAAcg");
	this.shape_5.setTransform(187.825,17.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgyBKIAAiPIAoAAQABANgIAYIACABQALgWANgJQANgJAYgCIAFAhQgmABgMAMQgLAKAAAgIAAA7g");
	this.shape_6.setTransform(178.975,19.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhOBhIAAi/IApAAQgBAMgGAXIACABQAPgmArAAQA/AAAABJIAAADQAABHg/AAQgqABgQgnIgCABQAGAYABAUIAAAngAglgYIAAAFQAAAvAmAAQAlgBAAgtIAAgHQAAguglAAQgmAAAAAvg");
	this.shape_7.setTransform(163.75,22.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_8.setTransform(140.325,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhJAbIAAhjIAoAAIAABaQAAAcAcAAQASAAAKgOQALgOAAgYIAAhCIAoAAIAACPIgoAAQAAgPAHgWIgCgCQgTApgqAAQgzAAAAgug");
	this.shape_9.setTransform(122.85,20.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhIAaIAmgFQAAAeAkAAQAgAAAAgQQAAgIgJgFQgHgEgSgFIgXgFQgtgLAAgdQAAgqBDAAQBGAAAAAtIglAEQABgagiABQgdAAAAAOQAAAHAIAFQAHADARAFIAWAFQAWAFALAHQAQALAAATQAAAshHAAQhJAAgBgxg");
	this.shape_10.setTransform(106.075,20);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_11.setTransform(83.825,20);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_12.setTransform(60.875,20);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgUBdIADgRQAMAGALAAQAMAAAAgHQAAgIgdgBIABgPQhDgGAAhEIAAgCQAAhJBOAAQBHAAAFA6IgoAFQgCgmgjAAQgkAAgBAuIAAAHQAAAuAmAAQAiAAADgiIAoAEQgFAzg+AEIgCAHQAfADAAARQAAAVggAAQgOAAgOgGg");
	this.shape_13.setTransform(43.45,22.375);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAiBCQgGgIAEgVIgCAAQgHASgRAKQgQAKgYAAQgVAAgMgJQgMgKAAgSIAAAAQAAgWASgMQAPgJAggHIAmgGIAAgIQAAgYgcAAQgigBACAhIgngEQgCgZATgNQASgOAlAAQBCAAAAAwIAABBQAAAIADABQADACALAAIgFAYIgLABQgXAAgHgJgAgBAJQgUAEgIAFQgJAGAAAJIAAABQAAAOAUAAQASAAALgKQANgLAAgQIAAgHg");
	this.shape_14.setTransform(26.425,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDBgIAAi/ICGAAIAAAdIhdAAIAAAzIBWAAIAAAaIhWAAIAABVg");
	this.shape_15.setTransform(10.3,17.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h3_1, new cjs.Rectangle(0,0,273,36), null);


(lib.h2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkAeIAAg7IBIAAIAAA7g");
	this.shape.setTransform(137.05,122.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AglBnIAAjMIBLAAIAADMg");
	this.shape_1.setTransform(127.9,115.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBnIAAiZIBKAAIAACZgAgkg9IAAgoIBKAAIAAAog");
	this.shape_2.setTransform(118.65,115.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AheABIAAgCQAAhPBeAAQBbAAADBDIhLAFQgBgbgSAAQgSAAAAAcIAAAOQAAAdASAAQATAAAAgcIBMAEQgEBFhbAAQheAAAAhQg");
	this.shape_3.setTransform(103.875,118.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdBfQgJgJACgUIgDgBQgOAogxAAQgZAAgOgMQgNgMAAgUIAAAAQAAgZAVgNQAQgJAggFIAkgGIAAgFQAAgNgMAAQgOAAABARIhLgBQgCgbAXgPQAXgQAuAAQBVAAAAA4IAAA2QAAAGADACQACABAIAAIgGAoQgMADgOAAQgaAAgKgKgAgBAjQgUAEAAALIAAAAQAAAJAKAAQAIAAAGgHQAGgHAAgLIAAgBgAgahAIATgoIBAAAIgjAog");
	this.shape_4.setTransform(83.775,115.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgpBpIAAhrIgSAAIAAguIASAAIAAgFQAAgcAUgLQAVgLA3gBIAEArQgVABgEACQgFACAAAIIAeAAIAAAuIgaAAIAABrg");
	this.shape_5.setTransform(67.35,115.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhHA9QgYgVAAgmIAAgEQAAgmAYgUQAZgUAuAAQAvAAAZAUQAYAUAAAmIAAAEQAAAmgYAVQgZAUgvAAQguAAgZgUgAgTgGIAAANQAAAdATAAQATAAAAgdIAAgNQAAgdgTAAQgTAAAAAdg");
	this.shape_6.setTransform(45.625,118.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAdBlQgJgJACgVIgDAAQgOAogxAAQgZAAgOgNQgNgLAAgUIAAAAQAAgZAVgNQAQgKAggEIAkgGIAAgGQAAgMgMgBQgOABABAQIhLgBQgCgaAXgQQAXgPAuAAQBVAAAAA3IAAA3QAAAFADADQACABAIAAIgGAnQgMAEgOAAQgagBgKgJgAgBApQgUADAAAMIAAAAQAAAJAKAAQAIgBAGgGQAGgIAAgKIAAgBgAgChDQgRgFgDgBQgIABgBAJIgmAAQABguAngBQANABAQAFQARAGADgBQAHAAACgKIAlAAQgBAwgmgBQgNABgQgGg");
	this.shape_7.setTransform(25.425,115.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgsAzIAAg8IgSAAIAAguIASAAIAAgdIBLgQIAAAtIAfAAIAAAuIgfAAIAAAvQAAANAOAAQAJAAAJgDIgDAuQgUAIgbgBQg5ABAAgzg");
	this.shape_8.setTransform(8.725,115.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h2_4, new cjs.Rectangle(0,0,143.8,135), null);


(lib.h2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkBmIAAiZIBJAAIAACZgAgkg9IAAgoIBJAAIAAAog");
	this.shape.setTransform(146.2,83.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhHA9QgYgVAAgmIAAgEQAAgmAYgUQAZgUAuAAQAvAAAZAUQAYAUAAAmIAAAEQAAAmgYAVQgZAUgvAAQguAAgZgUgAgTgGIAAANQAAAdATAAQATAAAAgdIAAgNQAAgdgTAAQgTAAAAAdg");
	this.shape_1.setTransform(131.325,85.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgpBpIAAhrIgSAAIAAguIASAAIAAgFQAAgcAUgLQAVgLA3gBIAEArQgVABgEACQgFACAAAIIAfAAIAAAuIgbAAIAABrg");
	this.shape_2.setTransform(114.7,82.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAdBHQgJgIACgVIgDAAQgOAngxAAQgZAAgOgMQgNgLAAgUIAAgBQAAgYAVgNQAQgJAggFIAkgFIAAgHQAAgNgMAAQgOAAABASIhLgBQgCgbAXgQQAXgPAuAAQBVAAAAA4IAAA1QAAAGADACQACACAIAAIgGAnQgMADgOAAQgaAAgKgKgAgBALQgUAEAAALIAAABQAAAIAKAAQAIAAAGgHQAGgHAAgKIAAgCg");
	this.shape_3.setTransform(93.275,85.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AheABIAAgCQAAhPBeAAQBbAAADBDIhLAFQgBgbgSAAQgSAAAAAcIAAAOQAAAdASAAQATAAAAgcIBMAEQgEBFhbAAQheAAAAhQg");
	this.shape_4.setTransform(73.075,85.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASBOIAAhYQAAgSgPAAQgUAAAAAkIAABGIhLAAIAAiZIBKAAQAAAPgJATIADABQAXglAqAAQA0AAAAAvIAABsg");
	this.shape_5.setTransform(52.8,85.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhcAgIAAhtIBLAAIAABYQAAASAPAAQAUAAAAgjIAAhHIBLAAIAACZIhJAAQgBgPAJgTIgDgBQgXAlgpAAQg1AAAAgug");
	this.shape_6.setTransform(32.4,85.875);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AASBOIAAhYQAAgSgPAAQgUAAAAAkIAABGIhLAAIAAiZIBKAAQAAAPgJATIADABQAXglAqAAQA0AAAAAvIAABsg");
	this.shape_7.setTransform(12.2,85.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h2_3, new cjs.Rectangle(0,0,153,102.8), null);


(lib.h2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhHA9QgYgVAAgmIAAgEQAAgmAYgUQAZgUAuAAQAvAAAZAUQAYAUAAAmIAAAEQAAAmgYAVQgZAUgvAAQguAAgZgUgAgTgGIAAANQAAAdATAAQATAAAAgdIAAgNQAAgdgTAAQgTAAAAAdg");
	this.shape.setTransform(126.675,53.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhCBQIAAiZIBJAAQAAAPgHASIABACQAQgVANgJQAMgIAUgDIAFA9QgpADgJAIQgJAHAAAeIAAAyg");
	this.shape_1.setTransform(109.575,53.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBnIAAiZIBKAAIAACZgAgkg8IAAgqIBKAAIAAAqg");
	this.shape_2.setTransform(97.4,50.95);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhfACIAAgDQAAhPBgAAQBfAAAABMIgCATIhxAAQABAYATAAQARAAACgRIBKAFQgHA2hWAAQhgAAAAhPgAgSgSIAmAAIAAAAQAAgUgTAAQgRAAgCAUg");
	this.shape_3.setTransform(82.525,53.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASBnIAAhaQAAgRgPAAQgUAAAAAkIAABHIhLAAIAAjNIBLAAIAAArQAAAVgJAVIACACQAXgmApAAQA1AAAAAvIAABtg");
	this.shape_4.setTransform(62.2,50.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AASBOIAAhYQAAgSgPAAQgUAAAAAkIAABGIhLAAIAAiZIBKAAQAAAPgIATIACABQAXglAqAAQA0AAAAAvIAABsg");
	this.shape_5.setTransform(41.9,53.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AglBnIAAiZIBLAAIAACZgAglg8IAAgqIBLAAIAAAqg");
	this.shape_6.setTransform(27.1,50.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AheAcIAAgHQAAhLA9AAQAoAAASAlIADgCQgJgYAAgWIAAgmIBMAAIAADMIhLAAQAAgLAIgWIgDgCQgSAmgoAAQg9AAAAhMgAgTARIAAAOQAAAdATAAQATAAAAgfIAAgKQAAgegTAAQgTAAAAAcg");
	this.shape_7.setTransform(12.125,51.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h2_2, new cjs.Rectangle(0,0,139.1,70.5), null);


(lib.h2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhCBQIAAiZIBJAAQAAAOgHAUIABACQAQgXANgIQAMgIAUgDIAFA9QgpAEgJAGQgJAIAAAeIAAAyg");
	this.shape.setTransform(95.425,20.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAdBHQgJgIACgVIgDAAQgOAngxAAQgZAAgOgMQgNgLAAgUIAAgBQAAgYAVgNQAQgJAggFIAkgFIAAgHQAAgNgMAAQgOAAABASIhLgBQgCgbAXgQQAXgPAuAAQBVAAAAA4IAAA1QAAAGADACQACACAIAAIgGAnQgMADgOAAQgaAAgKgKgAgBALQgUAEAAALIAAABQAAAIAKAAQAIAAAGgHQAGgHAAgKIAAgCg");
	this.shape_1.setTransform(78.325,21.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgkBnIAAiZIBJAAIAACZgAgkg9IAAgoIBJAAIAAAog");
	this.shape_2.setTransform(64.05,18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgvBNIgyiZIBMAAIAOA1QAGAXABAVIADAAQADgVAGgXIAMg1IBKAAIgyCZg");
	this.shape_3.setTransform(49.975,21.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AASBOIAAhYQAAgSgPAAQgUAAAAAkIAABGIhLAAIAAiZIBKAAQgBAPgHATIACABQAXglApAAQA1AAAAAvIAABsg");
	this.shape_4.setTransform(30.45,21.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhVBnIAAjMICoAAIAAAzIhcAAIAAAcIBWAAIAAAsIhWAAIAAAdIBfAAIAAA0g");
	this.shape_5.setTransform(11.675,18.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h2_1, new cjs.Rectangle(0,0,104.1,38.3), null);


(lib.FX_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgDAEQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAgBQgBAAAAAAg");
	this.shape.setTransform(117.275,23.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgQAUQgHgHAAgNIAAAAQAAgHADgGQADgHAFgDQAGgEAGAAQAKAAAIAIQAGAHAAAMIAAAAQAAAJgDAFQgDAGgGAEQgFADgHAAQgKABgGgIgAgKgNQgEAFAAAIQAAAJAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_1.setTransform(113.15,21.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAABQAAgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_2.setTransform(109.125,20.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgNAfIAAAGIgIAAIAAhKIAJAAIAAAcQAFgHAJAAQAJAAAGAIQAFAGAAANIAAAAQAAANgFAGQgGAIgJAAQgJAAgGgHgAgMAAIAAAWQAEAIAIAAQAGAAAEgEQADgGAAgKQAAgJgDgEQgEgFgGAAQgIAAgEAIg");
	this.shape_3.setTransform(105.225,20);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAcAbIAAgiQAAgGgDgCQgDgDgFAAQgGAAgDADQgDADgBAFIAAAiIgIAAIAAgiQAAgLgLAAQgJAAgDAIIAAAlIgJAAIAAg0IAJAAIAAAGQAGgHAJAAQAMAAACAJQADgEAEgDQAFgCAFAAQASAAAAATIAAAig");
	this.shape_4.setTransform(97.95,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAhQgFgEAAgHQAAgIAGgEQAHgFAKAAIAJAAIAAgEQAAgEgDgCQgDgDgFAAQgEAAgDACQgEADAAADIgJAAQAAgEADgEQADgEAFgCQAEgCAFAAQAJAAAFAFQAGAEAAAIIAAAXQAAAIACAEIAAABIgKAAIgBgGQgGAHgIAAQgIAAgFgFgAgMAVQAAAFADACQADACAEAAQADAAAEgCQAEgDACgDIAAgLIgHAAQgQABAAAJgAAIgXIgHgJIgGAJIgIAAIAAAAIAMgOIAFAAIAMAOIAAAAg");
	this.shape_5.setTransform(90.875,20);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgPAVQgGgIAAgNIAAAAQAAgIADgFQACgHAGgDQAFgEAGAAQAJAAAGAGQAGAFAAAJIgIAAQgBgFgDgDQgEgEgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAEQgDAEgFADQgEACgGAAQgKAAgGgGg");
	this.shape_6.setTransform(85.625,21.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQADgHAGgDQAFgEAGAAQAKABAFAGQAHAIgBAMIAAADIgjAAQABAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAFAEQgGAKgNAAQgKAAgGgGgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_7.setTransform(77.95,21.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGAAQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_8.setTransform(72.325,20);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHAAQAKABAFAFQAGAEAAAHIgJAAQgBgEgDgCQgCgDgGAAQgEAAgCACQgDADAAADQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgGAAgFgCg");
	this.shape_9.setTransform(64.6,21.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgOAVQgIgIAAgLIAAgCQAAgHADgGQADgHAGgDQAFgEAGAAQAKABAFAGQAHAIgBAMIAAADIgjAAQABAHAEAFQAEAFAGAAQAFAAAEgCIAFgFIAGAEQgHAKgNAAQgKAAgGgGgAgHgPQgFAEAAAIIAZAAIAAgBQAAgIgDgDQgEgEgFAAQgFAAgDAEg");
	this.shape_10.setTransform(59.5,21.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgQAeQgHgHAAgNIAAgBQAAgHADgFQADgHAGgDQAFgEAGAAQAKAAAIAIQAGAHAAAMIAAAAQAAAJgDAFQgDAGgGAEQgFADgHAAQgJABgHgIgAgKgDQgEAEAAAJQAAAJAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgLQAAgIgEgEQgEgGgHAAQgGAAgEAGgAgQgXQgBgGADgDQAEgEAEAAIADABIADABIADADIADAAQAAAAABAAQAAAAABAAQAAgBABAAQAAAAABAAIABgFIAGABQAAAFgDADQgDAEgEAAIgEgBIgDgCIgEgBIgCgBQAAAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABg");
	this.shape_11.setTransform(53.95,20.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgFAhQAEAAABgCQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgFgCIABgGIAEAAIACAAIgBACQAIACAAAHQAAAEgEADQgEADgGAAgAADARIAAAAIgGAAIAGAAIAAAAIgCAAIgEAAQgHgBgFgGQgGgHAAgMIAAgBQAAgIADgGQACgGAGgDQAFgEAGAAQAJAAAGAGQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAACQAAAIAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAEgDAEQgDAEgFADQgEACgEAAg");
	this.shape_12.setTransform(48.575,22.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgFAKABIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDACQgEADAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAFQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAHgIgBQgIABgFgFgAgMALQAAAEADACQADADAEAAQADgBAEgCQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_13.setTransform(43.225,21.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAHQADgIAJAAIAEABIAAAJIgFgBQgIAAgDAIIAAAkg");
	this.shape_14.setTransform(39.125,21);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgPAVQgGgIgBgLIAAgCQABgHADgGQADgHAFgDQAGgEAFAAQAKABAGAGQAFAIAAAMIAAADIgjAAQABAHAEAFQAFAFAFAAQAFAAADgCIAGgFIAFAEQgGAKgNAAQgKAAgHgGgAgIgPQgDAEgBAIIAZAAIAAgBQAAgIgEgDQgDgEgFAAQgFAAgEAEg");
	this.shape_15.setTransform(34.6,21.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgVAlIAAhIIAIAAIAAAGQAGgHAJAAQAJAAAGAHQAFAHAAANIAAABQAAALgFAHQgGAIgJAAQgJAAgFgGIAAAZgAgMgVIAAAYQAEAHAIAAQAGAAADgFQAEgFAAgJQAAgJgEgFQgDgFgGAAQgIAAgEAHg");
	this.shape_16.setTransform(29.225,22.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgRAUQgGgHAAgNIAAAAQAAgHADgGQADgHAGgDQAFgEAGAAQAKAAAIAIQAGAHAAAMIAAAAQAAAJgDAFQgDAGgGAEQgFADgHAAQgJABgIgIgAgKgNQgEAFAAAIQAAAJAEAGQAEAFAGAAQAHAAAEgGQAEgEAAgKQAAgIgEgFQgEgGgHAAQgGAAgEAGg");
	this.shape_17.setTransform(23.45,21.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADACQADADAFAAQAFAAADgCQADgCAAgDQAAgEgDgCQgCgCgHgBIgKgEIgGgEQgCgDAAgEQAAgGAGgFQAFgFAHAAQAKABAFAFQAGAEAAAHIgJAAQgBgEgDgCQgCgDgGAAQgEAAgCACQgDADAAADQAAADACACIAJADIALADQAEABACAEQACADAAAEQAAAHgFAEQgGAFgJgBQgGAAgFgCg");
	this.shape_18.setTransform(15.55,21.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgQAXQgFgEAAgHQAAgIAGgEQAHgFAKABIAJAAIAAgFQAAgFgDgCQgDgDgFAAQgEAAgDACQgEADAAADIgJAAQAAgDADgFQADgDAFgCQAEgDAFAAQAJABAFAFQAGAEAAAIIAAAXQAAAIACADIAAABIgKAAIgBgFQgGAHgIgBQgIABgFgFgAgMALQAAAEADACQADADAEAAQADgBAEgCQAEgCACgDIAAgLIgHAAQgQAAAAAKg");
	this.shape_19.setTransform(10.325,21.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgPAeQgGgHAAgMIAAgBQAAgLAGgHQAFgIAKAAQAIAAAFAHIAAgcIAJAAIAABKIgIAAIAAgGQgGAHgIAAQgKAAgFgIgAgIgDQgEAEAAAKQAAAJAEAFQADAFAGAAQAIABAEgJIAAgWQgEgIgIAAQgGAAgDAFg");
	this.shape_20.setTransform(4.675,20);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgKAZQgEgCgDgEQgDgEAAgFIAJAAQABAFADADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgDgCQgCgCgHgCIgKgDIgGgEQgCgDAAgEQAAgGAGgFQAFgEAHAAQAKAAAFAEQAGAFAAAHIgJAAQgBgDgDgDQgCgDgGAAQgEAAgCADQgDACAAADQAAADACACIAJADIALADQAEABACADQACADAAAFQAAAHgFAEQgGAEgJABQgGgBgFgCg");
	this.shape_21.setTransform(136.6,9.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgOAfQgIgHAAgMIAAgCQAAgIADgEQADgHAGgDQAFgEAGAAQAKAAAFAHQAHAHgBALIAAAEIgjAAQABAIAEAFQAEAFAGAAQAFAAAEgDIAFgEIAGAEQgHAKgNAAQgKAAgGgHgAgHgEQgFAEAAAGIAZAAIAAgBQAAgGgDgDQgEgFgFAAQgFAAgDAFgAgEgWIAJgPIALAAIgNAPg");
	this.shape_22.setTransform(131.5,8.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgCAbIgUg0IAKAAIANAnIAMgnIAJAAIgTA0g");
	this.shape_23.setTransform(126.4,9.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgFAKAAIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADADAEgBQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_24.setTransform(121.325,9.85);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_25.setTransform(117.225,9.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_26.setTransform(113.475,9.275);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgFAKAAIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADADAEgBQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_27.setTransform(109.325,9.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgQAXQgFgFAAgGQAAgIAGgEQAHgFAKAAIAJAAIAAgDQAAgFgDgDQgDgDgFAAQgEAAgDADQgEACAAAEIgJAAQAAgFADgDQADgEAFgCQAEgDAFABQAJAAAFAEQAGAFAAAIIAAAXQAAAHACAFIAAABIgKAAIgBgGQgGAGgIABQgIgBgFgEgAgMAKQAAAFADACQADADAEgBQADAAAEgBQAEgDACgEIAAgKIgHAAQgQAAAAAJg");
	this.shape_28.setTransform(101.475,9.85);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_29.setTransform(97.375,9.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgPAUQgGgHAAgMIAAgBQAAgHADgHQACgFAGgEQAFgDAGAAQAJAAAGAFQAGAFAAAJIgIAAQgBgGgDgDQgEgDgFAAQgGAAgDAFQgEAFAAAJIAAABQAAAJAEAFQADAFAGAAQAFAAAEgDQADgDABgEIAIAAQAAAFgDADQgDAEgFADQgEACgGABQgKAAgGgIg");
	this.shape_30.setTransform(92.875,9.85);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgPAWQgFgFAAgKIAAghIAJAAIAAAhQAAANAKAAQAKgBADgHIAAgmIAJAAIAAA0IgJAAIAAgFQgFAGgJAAQgJAAgEgFg");
	this.shape_31.setTransform(87.425,9.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgDAmIAAhKIAIAAIAABKg");
	this.shape_32.setTransform(83.5,8.75);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_33.setTransform(77.125,9.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgRAUQgGgIAAgMIAAAAQAAgHADgHQADgFAGgEQAFgDAGAAQAKAAAIAHQAGAIAAALIAAABQAAAIgDAGQgDAGgGADQgFADgHABQgJgBgIgHgAgKgOQgEAGAAAJQAAAJAEAFQAEAFAGAAQAHAAAEgFQAEgGAAgJQAAgIgEgGQgEgFgHAAQgGAAgEAFg");
	this.shape_34.setTransform(71.5,9.85);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgEAkIAAg0IAIAAIAAA0gAgDgaQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAgBgBAAg");
	this.shape_35.setTransform(67.475,8.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_36.setTransform(63.525,9.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAkQgLAAgHgGQgHgHAAgKIAAgwIAJAAIAAAvQAAAIAFAEQAEAFAHAAQAIAAAEgFQAEgEAAgIIAAgvIAKAAIAAAvQAAAKgHAHQgGAGgLABg");
	this.shape_37.setTransform(57.575,9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AAMAbIAAgiQAAgFgDgDQgDgDgFAAQgDAAgEACQgDACgCAEIAAAlIgJAAIAAg0IAJAAIAAAHQAGgIAJAAQAQAAABATIAAAig");
	this.shape_38.setTransform(49.125,9.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgMAbIAAg0IAJAAIAAAGQADgHAJAAIAEABIAAAIIgFAAQgIAAgDAHIAAAlg");
	this.shape_39.setTransform(44.975,9.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgPAUQgGgGgBgNIAAgBQABgHADgGQADgHAFgDQAGgDAEAAQALgBAGAIQAFAGAAANIAAACIgjAAQABAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAFAFQgGAKgNAAQgKAAgHgIgAgHgPQgEAEgBAHIAZAAIAAgBQAAgGgDgEQgEgEgGAAQgEAAgDAEg");
	this.shape_40.setTransform(40.45,9.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgBAeQgDgEAAgHIAAggIgJAAIAAgHIAJAAIAAgMIAIAAIAAAMIAKAAIAAAHIgKAAIAAAgQAAABAAABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQAAAAABAAIAEgBIAAAHIgGABQgHAAgCgDg");
	this.shape_41.setTransform(35.975,9.275);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgJAZQgFgCgDgEQgDgEAAgFIAJAAQAAAFAEADQADACAFAAQAFAAADgCQADgCAAgEQAAgDgCgCQgEgCgGgCIgKgDIgGgEQgCgDAAgEQAAgGAFgFQAGgEAIAAQAJAAAFAEQAGAFgBAHIgJAAQAAgDgCgDQgEgDgEAAQgEAAgDADQgDACAAADQAAADACACIAJADIALADQAEABACADQACADAAAFQAAAHgFAEQgGAEgJABQgGgBgEgCg");
	this.shape_42.setTransform(31.9,9.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgOAUQgIgGABgNIAAgBQAAgHACgGQADgHAGgDQAGgDAEAAQALgBAFAIQAHAGAAANIAAACIgjAAQAAAIAEAGQAFAEAFAAQAFAAADgCIAGgFIAGAFQgHAKgNAAQgKAAgGgIgAgIgPQgEAEAAAHIAaAAIAAgBQgBgGgEgEQgCgEgHAAQgEAAgEAEg");
	this.shape_43.setTransform(26.8,9.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAQAkIgPg0IgBgEIAAAEIgPA0IgJAAIgRhGIAKAAIALAvIABAJIACgIIAOgwIAHAAIAOAwIACAIIABgJIALgvIAKAAIgRBGg");
	this.shape_44.setTransform(19.725,8.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAWAkIgHgTIgdAAIgHATIgJAAIAbhGIAHAAIAbBGgAAMAJIgMggIgLAgIAXAAg");
	this.shape_45.setTransform(9.575,8.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAGIgIAOIgGgEIAKgOIgPgDIACgIIAPAGIgBgRIAHAAIgBARIAPgFIACAHIgPAEIAKANIgGAFg");
	this.shape_46.setTransform(4.15,7.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.FX_2, new cjs.Rectangle(0,0,206.1,28.4), null);


(lib.CTA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// txt
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDD00").s().p("AgWAaQgJgKAAgQIAAAAQAAgKAEgIQAEgIAHgEQAHgFAJAAQAOAAAJAJQAIAJABAPIAAADQAAAKgEAIQgEAIgHAEQgIAFgJAAQgNAAgJgKgAgLgQQgFAGAAALQAAAKAFAGQAEAGAHAAQAIAAAEgGQAEgGABgLQgBgKgEgGQgEgGgIAAQgGAAgFAGg");
	this.shape.setTransform(59.1,0.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFDD00").s().p("AgVArQgIgGAAgIQAAgLAJgGQAIgGAOAAIAKAAIAAgFQAAgEgEgDQgCgDgGAAQgFAAgDACQgDADAAAEIgQAAQAAgGAEgFQADgFAHgCQAHgDAGAAQAMAAAIAGQAHAGAAAKIAAAfQAAAJADAGIAAABIgQAAIgCgHQgHAIgKAAQgKAAgGgGgAgJASQgEADAAAGQAAAEADADQADADAFAAQAEAAAEgDQAEgCACgEIAAgMIgIAAQgIAAgFACgAgVgfQAAgHAEgEQAEgFAGAAQADAAAEADQAGACADAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQACgCAAgDIAJABQAAAHgDAEQgFAFgGAAIgEgBIgGgCIgDgCIgDgBQgBAAAAAAQgBABAAAAQgBAAAAAAQgBABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAABg");
	this.shape_1.setTransform(52.1,-0.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFDD00").s().p("AgGApQAEAAACgCQAAAAABgBQAAAAAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQgBgBAAAAIgHgBIACgIQgJgCgGgHQgJgKAAgPIAAgCQAAgPAJgKQAIgJANAAQANAAAHAHQAIAHABAMIgPAAQAAgGgEgEQgEgEgGAAQgGAAgEAGQgEAFAAALIAAADQAAALAEAEQAEAGAGAAQAGAAAEgEQAEgDAAgEIAPAAQgBAFgDAGQgEAGgHADQgFACgEABIAAgBIgLAAIAAABIAHAAIAEAAIgBACQAJACAAAJQAAAHgFAEQgGADgIAAgAACAWIgHAAIAAgBIALAAIAAABIgEAAIAAAAgAAGAWgAgFAWIAAAAg");
	this.shape_2.setTransform(45.475,2.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFDD00").s().p("AgVAeQgIgGAAgJQAAgLAJgFQAIgGAOAAIAKAAIAAgEQAAgGgEgDQgCgDgGAAQgFAAgDADQgDACgBAEIgPAAQAAgFAEgFQAEgFAGgDQAHgDAHAAQALAAAIAGQAHAGAAALIAAAeQAAAKADAFIAAABIgQAAIgCgGQgHAIgKAAQgKAAgGgGgAgJAFQgEADAAAFQAAAFADADQADACAFAAQAEAAADgCQAEgCADgEIAAgNIgIAAQgIAAgFADg");
	this.shape_3.setTransform(38.7,0.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFDD00").s().p("AgUAaQgJgJAAgRIAAAAQAAgQAJgJQAIgKANAAQANAAAHAHQAIAIABALIgPAAQAAgGgEgEQgEgDgGAAQgGAAgEAFQgEAGAAALIAAABQAAALAEAGQAEAFAGAAQAGAAAEgDQAEgEAAgEIAPAAQgBAGgDAGQgEAFgHADQgGAEgHAAQgOAAgIgKg");
	this.shape_4.setTransform(32.075,0.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFDD00").s().p("AgHAwIAAhEIAPAAIAABEgAgGggQgCgCAAgEQAAgEACgCQADgCADgBQAEABACACQADACAAAEQAAAEgDACQgCACgEAAQgDAAgDgCg");
	this.shape_5.setTransform(27.175,-0.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFDD00").s().p("AgHAxIAAhhIAPAAIAABhg");
	this.shape_6.setTransform(24.075,-0.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFDD00").s().p("AgdAwIAAheIAOAAIABAHQAHgIAKAAQANAAAHAJQAHAKAAAQIAAABQAAAPgHAKQgIAJgMAAQgKAAgHgHIAAAggAgOgbIAAAeQAEAIAKAAQAHAAAEgGQADgFAAgMQAAgLgDgGQgEgGgHAAQgKAAgEAIg");
	this.shape_7.setTransform(19.1,1.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFDD00").s().p("AgWAeQgGgGAAgJQgBgLAJgFQAIgGAOAAIAJAAIAAgEQAAgGgCgDQgDgDgGAAQgEAAgEADQgEACAAAEIgPAAQAAgFAEgFQADgFAHgDQAGgDAIAAQALAAAIAGQAHAGAAALIAAAeQAAAKACAFIAAABIgPAAIgCgGQgHAIgKAAQgKAAgHgGgAgIAFQgFADAAAFQAAAFADADQADACAFAAQADAAAEgCQAFgCABgEIAAgNIgIAAQgHAAgEADg");
	this.shape_8.setTransform(12,0.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFDD00").s().p("AgRAjIAAhEIAPAAIAAAIQAFgJAKAAIAFABIAAAOIgHAAQgKAAgCAIIAAAug");
	this.shape_9.setTransform(3.75,0.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFDD00").s().p("AgWAeQgGgGgBgJQAAgLAJgFQAIgGAOAAIAKAAIAAgEQAAgGgDgDQgEgDgFAAQgFAAgDADQgDACgBAEIgPAAQAAgFAEgFQAEgFAGgDQAGgDAIAAQALAAAIAGQAHAGAAALIAAAeQAAAKADAFIAAABIgQAAIgCgGQgHAIgKAAQgKAAgHgGgAgIAFQgFADAAAFQAAAFADADQADACAFAAQADAAAEgCQAFgCACgEIAAgNIgJAAQgHAAgEADg");
	this.shape_10.setTransform(-2.15,0.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFDD00").s().p("AgPAtQgHgDgDgFIAHgJQAHAIALAAQAGABAFgFQAEgEAAgIIAAgEQgHAHgKAAQgMAAgIgKQgHgKgBgPQABgRAHgJQAIgJAMAAQALgBAGAJIACgHIANAAIAABBQAAAOgIAIQgJAHgNABQgHgBgIgDgAgJgdQgFAGAAAMQAAAKAFAGQAEAFAGAAQAKAAAEgIIAAgdQgEgIgKAAQgGAAgEAGg");
	this.shape_11.setTransform(-9.25,1.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFDD00").s().p("AgUAaQgJgJAAgPIAAgCQAAgKAEgIQAEgIAHgEQAHgFAIAAQAOAAAHAJQAIAJAAARIAAAFIgsAAQABAIAFAFQAFAFAGAAQALAAAHgIIAIAIQgEAGgHADQgHAEgIAAQgOAAgJgKgAgIgSQgFAFgBAHIAdAAIAAgBQAAgHgEgEQgEgEgGAAQgFAAgEAEg");
	this.shape_12.setTransform(-16,0.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFDD00").s().p("AgRAjIAAhEIAOAAIABAIQAEgJAKAAIAGABIAAAOIgHAAQgKAAgCAIIAAAug");
	this.shape_13.setTransform(-21.3,0.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFDD00").s().p("AgRAjIAAhEIAOAAIABAIQAEgJALAAIAFABIAAAOIgGAAQgLAAgDAIIAAAug");
	this.shape_14.setTransform(-25.65,0.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFDD00").s().p("AgWAeQgGgGAAgJQgBgLAJgFQAIgGAOAAIAJAAIAAgEQAAgGgCgDQgEgDgFAAQgEAAgEADQgDACAAAEIgQAAQAAgFAEgFQADgFAHgDQAGgDAIAAQAMAAAGAGQAIAGAAALIAAAeQAAAKACAFIAAABIgPAAIgCgGQgHAIgKAAQgKAAgHgGgAgIAFQgFADAAAFQAAAFADADQADACAFAAQADAAAFgCQADgCACgEIAAgNIgIAAQgHAAgEADg");
	this.shape_15.setTransform(-31.55,0.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFDD00").s().p("AgUAaQgJgJAAgRIAAAAQAAgQAJgJQAIgKANAAQANAAAHAHQAIAIABALIgPAAQAAgGgEgEQgEgDgGAAQgGAAgEAFQgEAGAAALIAAABQAAALAEAGQAEAFAGAAQAGAAAEgDQAEgEAAgEIAPAAQgBAGgDAGQgEAFgHADQgGAEgHAAQgOAAgIgKg");
	this.shape_16.setTransform(-38.175,0.675);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFDD00").s().p("AgOAgQgGgDgEgFQgDgFAAgGIAOAAQABAFAEADQADADAGAAQAGAAADgCQADgDAAgDQAAgFgDgCIgLgEQgHgBgGgDQgLgEAAgLQAAgJAHgGQAIgGAKAAQANAAAHAGQAIAGAAAKIgQAAQAAgEgDgDQgDgDgGAAQgEAAgDACQgDADAAADQAAAEADACIALAEQAJACAFADQAFABADAEQACAEAAAGQAAAJgHAGQgIAGgMAAQgIAAgHgEg");
	this.shape_17.setTransform(-44.825,0.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFDD00").s().p("AgUAaQgJgJAAgPIAAgCQAAgKAEgIQADgIAIgEQAHgFAIAAQAOAAAHAJQAIAJAAARIAAAFIgsAAQABAIAFAFQAFAFAGAAQALAAAHgIIAIAIQgEAGgHADQgHAEgJAAQgNAAgJgKgAgIgSQgEAFgCAHIAdAAIAAgBQgBgHgDgEQgEgEgGAAQgGAAgDAEg");
	this.shape_18.setTransform(-51.35,0.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFDD00").s().p("AghAuIAAhbIAbAAQALAAAJAFQAKAGAFAKQAGAKAAANIAAADQAAAOgGAJQgFAKgKAGQgKAFgLAAgAgRAhIAKAAQALAAAHgHQAHgIAAgPIAAgEQAAgPgHgIQgGgIgLAAIgLAAg");
	this.shape_19.setTransform(-58.75,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// bg
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("Ap1CgQhCAAgvgvQgvgvAAhCQAAhBAvgvQAvgvBCAAITrAAQBCAAAvAvQAvAvAABBQAABCgvAvQgvAvhCAAg");
	this.shape_20.setTransform(-0.6,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CTA, new cjs.Rectangle(-79.6,-16,158,32), null);


(lib.Headline_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// h3_1
	this.instance = new lib.h3_1();
	this.instance.setTransform(-138.7,49,1,1,0,0,0,101.3,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:101.3},11,cjs.Ease.cubicOut).wait(75).to({_off:true},1).wait(73));

	// h3_2
	this.instance_1 = new lib.h3_2();
	this.instance_1.setTransform(-138.7,49,1,1,0,0,0,101.3,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:101.3},11,cjs.Ease.cubicOut).wait(73).to({_off:true},1).wait(73));

	// h3_3
	this.instance_2 = new lib.h3_3();
	this.instance_2.setTransform(-138.7,49,1,1,0,0,0,101.3,49);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:101.3},11,cjs.Ease.cubicOut).wait(71).to({_off:true},1).wait(73));

	// h3_4
	this.instance_3 = new lib.h3_4();
	this.instance_3.setTransform(-138.7,49,1,1,0,0,0,101.3,49);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:101.3},11,cjs.Ease.cubicOut).wait(69).to({_off:true},1).wait(73));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,0,517,186);


(lib.Headline_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// h2_1
	this.instance = new lib.h2_1();
	this.instance.setTransform(-138.7,49,1,1,0,0,0,101.3,49);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:101.3},11,cjs.Ease.cubicOut).wait(75).to({_off:true},1).wait(73));

	// h2_2
	this.instance_1 = new lib.h2_2();
	this.instance_1.setTransform(-138.7,49,1,1,0,0,0,101.3,49);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({x:101.3},11,cjs.Ease.cubicOut).wait(73).to({_off:true},1).wait(73));

	// h2_3
	this.instance_2 = new lib.h2_3();
	this.instance_2.setTransform(-138.7,48.15,1,1,0,0,0,101.3,49);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({x:101.3},11,cjs.Ease.cubicOut).wait(71).to({_off:true},1).wait(73));

	// h2_4
	this.instance_3 = new lib.h2_4();
	this.instance_3.setTransform(-138.7,49,1,1,0,0,0,101.3,49);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(6).to({_off:false},0).to({x:101.3},11,cjs.Ease.cubicOut).wait(69).to({_off:true},1).wait(73));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-0.8,393,145.8);


// stage content:
(lib._300x250PT = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {start:38,loop:162};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [38,162,212];
	// timeline functions:
	this.frame_38 = function() {
		if(!this.loopsPlayed) {
			this.loopsPlayed = 0;
		}
	}
	this.frame_162 = function() {
		this.loopsPlayed++; console.log(this.loopsPlayed);
		
		if (this.loopsPlayed >= 6) {
			this.stop();
		} else {
			this.gotoAndPlay("loop");
		}
	}
	this.frame_212 = function() {
		this.gotoAndPlay("start");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(124).call(this.frame_162).wait(50).call(this.frame_212).wait(1));

	// Shape (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_2 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_3 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_4 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_5 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_6 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_7 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_8 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_9 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_10 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_11 = new cjs.Graphics().p("EgDoAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_12 = new cjs.Graphics().p("EgCeAkgI82wrQiHhOhPiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_13 = new cjs.Graphics().p("EgAsAkgI82wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_14 = new cjs.Graphics().p("EABbAkgI81wrQiHhOhPiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_15 = new cjs.Graphics().p("EADjAkgI81wrQiHhOhOiHQhPiHAAidMAAAgwfMBKGABKMgAjBH9g");
	var mask_graphics_16 = new cjs.Graphics().p("EAFVAkgI81wrQiHhOhPiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_17 = new cjs.Graphics().p("EAGyAkgI81wrQiHhOhPiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_18 = new cjs.Graphics().p("EAH9AkgI82wrQiHhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_19 = new cjs.Graphics().p("EAI3AkgI82wrQiHhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_20 = new cjs.Graphics().p("EAJiAkgI81wrQiHhOhPiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_21 = new cjs.Graphics().p("EAKBAkgI81wrQiHhOhOiHQhPiHAAidMAAAgwfMBKGABKMgAjBH9g");
	var mask_graphics_22 = new cjs.Graphics().p("EAKWAkgI81wrQiHhOhOiHQhPiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_23 = new cjs.Graphics().p("EAKjAkgI81wrQiHhOhPiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_24 = new cjs.Graphics().p("EAKqAkgI82wrQiHhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");
	var mask_graphics_25 = new cjs.Graphics().p("EAKsAkgI81wrQiIhOhOiHQhOiHAAidMAAAgwfMBKGABKMgAkBH9g");
	var mask_graphics_26 = new cjs.Graphics().p("EAKtAkgI81wrQiIhOhOiHQhOiHAAidMAAAgwfMBKFABKMgAjBH9g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:183.3743,y:111.0712}).wait(2).to({graphics:mask_graphics_2,x:183.3743,y:111.0712}).wait(1).to({graphics:mask_graphics_3,x:183.4429,y:111.0712}).wait(1).to({graphics:mask_graphics_4,x:183.9235,y:111.0712}).wait(1).to({graphics:mask_graphics_5,x:185.228,y:111.0712}).wait(1).to({graphics:mask_graphics_6,x:187.7682,y:111.0712}).wait(1).to({graphics:mask_graphics_7,x:191.9562,y:111.0712}).wait(1).to({graphics:mask_graphics_8,x:198.2038,y:111.0712}).wait(1).to({graphics:mask_graphics_9,x:206.9229,y:111.0712}).wait(1).to({graphics:mask_graphics_10,x:218.5257,y:111.0712}).wait(1).to({graphics:mask_graphics_11,x:233.4238,y:111.0712}).wait(1).to({graphics:mask_graphics_12,x:244.5796,y:111.0712}).wait(1).to({graphics:mask_graphics_13,x:255.942,y:111.0712}).wait(1).to({graphics:mask_graphics_14,x:269.57,y:111.0712}).wait(1).to({graphics:mask_graphics_15,x:283.1981,y:111.0712}).wait(1).to({graphics:mask_graphics_16,x:294.5605,y:111.0712}).wait(1).to({graphics:mask_graphics_17,x:303.8632,y:111.0712}).wait(1).to({graphics:mask_graphics_18,x:311.3123,y:111.0712}).wait(1).to({graphics:mask_graphics_19,x:317.1137,y:111.0712}).wait(1).to({graphics:mask_graphics_20,x:321.4733,y:111.0712}).wait(1).to({graphics:mask_graphics_21,x:324.5971,y:111.0712}).wait(1).to({graphics:mask_graphics_22,x:326.691,y:111.0712}).wait(1).to({graphics:mask_graphics_23,x:327.9611,y:111.0712}).wait(1).to({graphics:mask_graphics_24,x:328.6134,y:111.0712}).wait(1).to({graphics:mask_graphics_25,x:328.8537,y:111.0712}).wait(1).to({graphics:mask_graphics_26,x:328.9271,y:111.0712}).wait(187));

	// Photo
	this.instance = new lib.Photo_1();
	this.instance.setTransform(276.05,213.8,0.5882,0.5875,0,0,0,0.6,0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({regX:0.7,regY:0.5,scaleY:0.588,x:276.4,y:214.4},0).to({regX:1.5,regY:1.2,scaleX:0.4353,scaleY:0.4346,x:299.6,y:178.2},22,cjs.Ease.cubicInOut).wait(187));

	// Headline_2
	this.instance_1 = new lib.Headline_2("synched",0);
	this.instance_1.setTransform(91.65,104.05,0.7812,0.7812,0,0,0,101.4,49.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(12).to({_off:false},0).wait(77).to({startPosition:77},0).to({x:279.15},10,cjs.Ease.cubicIn).to({_off:true},1).wait(77).to({_off:false,x:91.65,startPosition:0},0).wait(36));

	// Headline_3
	this.instance_2 = new lib.Headline_3("synched",0);
	this.instance_2.setTransform(68.8,94.8,0.5574,0.5574,0,0,0,101.5,49.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(94).to({_off:false},0).wait(77).to({startPosition:77},0).to({regX:101.7,x:202.7},10,cjs.Ease.cubicIn).to({_off:true},1).wait(31));

	// FX_2
	this.instance_3 = new lib.FX_2();
	this.instance_3.setTransform(83.55,225.8,0.7812,0.7812,0,0,0,91,7.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({alpha:1},6).wait(70).to({alpha:0},6).wait(32));

	// CTA
	this.instance_4 = new lib.CTA();
	this.instance_4.setTransform(75.45,198.05,0.0488,0.0488,0,0,0,1,2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({regX:0.1,regY:0.2,scaleX:0.8055,scaleY:0.8056,y:198.1},8,cjs.Ease.cubicOut).to({regY:0.1,scaleX:0.7812,scaleY:0.7812,x:75.55},2,cjs.Ease.cubicInOut).wait(51).to({regY:0.2,scaleX:0.7031,scaleY:0.7031,x:75.45},6,cjs.Ease.cubicInOut).to({regY:0.1,scaleX:0.7812,scaleY:0.7812,x:75.55},4,cjs.Ease.cubicInOut).wait(72).to({regY:0.2,scaleX:0.7031,scaleY:0.7031,x:75.45},6,cjs.Ease.cubicInOut).to({regY:0.1,scaleX:0.7812,scaleY:0.7812,x:75.55},4,cjs.Ease.cubicInOut).wait(32));

	// WU_logo
	this.instance_5 = new lib.WUlogo();
	this.instance_5.setTransform(66.4,34.4,0.1048,0.1048,0,0,0,0.5,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(213));

	// Background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFDD00").s().p("A9STiMAAAgnDMA6lAAAMAAAAnDg");
	this.shape.setTransform(187.5,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(213));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-25,97.9,439.8,219.99999999999997);
// library properties:
lib.properties = {
	id: 'ADAAD8734D3F409DB1CC267C86549061',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/img_1.jpg", id:"img_1"}
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
an.compositions['ADAAD8734D3F409DB1CC267C86549061'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;