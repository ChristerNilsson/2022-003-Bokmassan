// Generated by CoffeeScript 2.5.1
var TextScroller;

TextScroller = class TextScroller {
  constructor(dx, dy, dw, dh, ts) {
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ts = ts;
    this.pg = createGraphics(2000, this.dh);
  }

  update(txt) {
    this.text = txt;
    push();
    textSize(this.ts);
    this.sz = Math.round(textWidth(this.text));
    if (this.sz <= this.dw) { // scroll behövs ej
      this.makeImage(this.text);
      this.p = null; // scrolla
    } else {
      this.sz = Math.round(textWidth(this.text + ' • '));
      this.makeImage(this.text + ' • ' + this.text);
      this.p = 0;
    }
    return pop();
  }

  makeImage(txt) {
    this.pg.background("black");
    this.pg.textSize(this.ts);
    this.pg.fill("lightgray");
    this.pg.textAlign(LEFT, CENTER);
    return this.pg.text(txt, 0, this.dh / 2);
  }

  draw() {
    if (this.p === null) { // scroll behövs ej
      return image(this.pg, this.dx, this.dy); // scrolla
    } else {
      image(this.pg, this.dx, this.dy, this.dw, this.dh, this.p, 0, this.dw, this.dh);
      return this.p = (this.p + 1) % this.sz;
    }
  }

};

// class TextScroller
// 	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
// 		push()
// 		textSize @ts
// 		faktor = 0.5
// 		# if window.navigator.userAgent.indexOf('Windows' != -1)
// 		# 	faktor=0.5
// 		# else
// 		# 	faktor=0.25
// 		@sz = Math.round textWidth @text
// 		if @sz <= @dw # scroll behövs ej
// 			@pg = createGraphics @dw,@dh
// 			#@pg.pixelDensity 1
// 			@pg.background "green"
// 			@pg.textSize @ts
// 			@pg.fill "gray"
// 			@pg.textAlign LEFT,CENTER
// 			@pg.text @text,0,faktor*@dh
// 		else # scroll behövs
// 			@sz = Math.round textWidth @text + ' • '
// 			@pg = createGraphics @sz + @dw + 100, @dh
// 			#@pg.pixelDensity 1
// 			@pg.background "green"
// 			@pg.textSize @ts
// 			@pg.fill "gray"
// 			@pg.textAlign LEFT,CENTER
// 			@pg.text @text + ' • ' + @text,0,faktor*@dh
// 			@p = 0 
// 		pop()

// 	draw : () ->
// 		if @p == null # scroll behövs ej
// 			image @pg,@dx,@dy
// 		else # scrolla
// 			sx = @p
// 			sy = 0
// 			sw = @dw
// 			sh = @dh

// 			image @pg,0,@dy+@dh

// 			#image @pg, @dx, @dy

// 			image @pg,@dx,@dy,@dw,@dh,sx,sy,sw,sh

// 			@p = (@p+1) % @sz

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU0sZUFBTixNQUFBLGFBQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxDQUFBO0lBQUMsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQy9CLElBQUMsQ0FBQSxFQUFELEdBQU0sY0FBQSxDQUFlLElBQWYsRUFBcUIsSUFBQyxDQUFBLEVBQXRCO0VBRE87O0VBR2QsTUFBUyxDQUFDLEdBQUQsQ0FBQTtJQUNSLElBQUMsQ0FBQSxJQUFELEdBQVE7SUFDUixJQUFBLENBQUE7SUFDQSxRQUFBLENBQVMsSUFBQyxDQUFBLEVBQVY7SUFDQSxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBQSxDQUFVLElBQUMsQ0FBQSxJQUFYLENBQVg7SUFDTixJQUFHLElBQUMsQ0FBQSxFQUFELElBQU8sSUFBQyxDQUFBLEVBQVg7TUFDQyxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxJQUFaO01BQ0EsSUFBQyxDQUFBLENBQUQsR0FBSyxLQUZOO0tBQUEsTUFBQTtNQUlDLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBSSxDQUFDLEtBQUwsQ0FBVyxTQUFBLENBQVUsSUFBQyxDQUFBLElBQUQsR0FBUSxLQUFsQixDQUFYO01BQ04sSUFBQyxDQUFBLFNBQUQsQ0FBVyxJQUFDLENBQUEsSUFBRCxHQUFRLEtBQVIsR0FBZ0IsSUFBQyxDQUFBLElBQTVCO01BQ0EsSUFBQyxDQUFBLENBQUQsR0FBSyxFQU5OOztXQU9BLEdBQUEsQ0FBQTtFQVpROztFQWNULFNBQVksQ0FBQyxHQUFELENBQUE7SUFDWCxJQUFDLENBQUEsRUFBRSxDQUFDLFVBQUosQ0FBZSxPQUFmO0lBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxRQUFKLENBQWEsSUFBQyxDQUFBLEVBQWQ7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxXQUFUO0lBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxTQUFKLENBQWMsSUFBZCxFQUFtQixNQUFuQjtXQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLEdBQVQsRUFBYSxDQUFiLEVBQWUsSUFBQyxDQUFBLEVBQUQsR0FBSSxDQUFuQjtFQUxXOztFQU9aLElBQU8sQ0FBQSxDQUFBO0lBQ04sSUFBRyxJQUFDLENBQUEsQ0FBRCxLQUFNLElBQVQ7YUFDQyxLQUFBLENBQU0sSUFBQyxDQUFBLEVBQVAsRUFBVSxJQUFDLENBQUEsRUFBWCxFQUFjLElBQUMsQ0FBQSxFQUFmLEVBREQ7S0FBQSxNQUFBO01BR0MsS0FBQSxDQUFNLElBQUMsQ0FBQSxFQUFQLEVBQVUsSUFBQyxDQUFBLEVBQVgsRUFBYyxJQUFDLENBQUEsRUFBZixFQUFrQixJQUFDLENBQUEsRUFBbkIsRUFBc0IsSUFBQyxDQUFBLEVBQXZCLEVBQTBCLElBQUMsQ0FBQSxDQUEzQixFQUE2QixDQUE3QixFQUErQixJQUFDLENBQUEsRUFBaEMsRUFBbUMsSUFBQyxDQUFBLEVBQXBDO2FBQ0EsSUFBQyxDQUFBLENBQUQsR0FBSyxDQUFDLElBQUMsQ0FBQSxDQUFELEdBQUcsQ0FBSixDQUFBLEdBQVMsSUFBQyxDQUFBLEdBSmhCOztFQURNOztBQXpCUjs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRleHRTY3JvbGxlclxyXG5cdGNvbnN0cnVjdG9yIDogKEBkeCxAZHksQGR3LEBkaCxAdHMpIC0+XHJcblx0XHRAcGcgPSBjcmVhdGVHcmFwaGljcyAyMDAwLCBAZGhcclxuXHJcblx0dXBkYXRlIDogKHR4dCkgLT5cclxuXHRcdEB0ZXh0ID0gdHh0XHJcblx0XHRwdXNoKClcclxuXHRcdHRleHRTaXplIEB0c1xyXG5cdFx0QHN6ID0gTWF0aC5yb3VuZCB0ZXh0V2lkdGggQHRleHRcclxuXHRcdGlmIEBzeiA8PSBAZHcgIyBzY3JvbGwgYmVow7Z2cyBlalxyXG5cdFx0XHRAbWFrZUltYWdlIEB0ZXh0XHJcblx0XHRcdEBwID0gbnVsbFxyXG5cdFx0ZWxzZSAjIHNjcm9sbGFcclxuXHRcdFx0QHN6ID0gTWF0aC5yb3VuZCB0ZXh0V2lkdGggQHRleHQgKyAnIOKAoiAnXHJcblx0XHRcdEBtYWtlSW1hZ2UgQHRleHQgKyAnIOKAoiAnICsgQHRleHRcclxuXHRcdFx0QHAgPSAwXHJcblx0XHRwb3AoKVxyXG5cclxuXHRtYWtlSW1hZ2UgOiAodHh0KSAtPlxyXG5cdFx0QHBnLmJhY2tncm91bmQgXCJibGFja1wiXHJcblx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRAcGcuZmlsbCBcImxpZ2h0Z3JheVwiXHJcblx0XHRAcGcudGV4dEFsaWduIExFRlQsQ0VOVEVSXHJcblx0XHRAcGcudGV4dCB0eHQsMCxAZGgvMlxyXG5cclxuXHRkcmF3IDogKCkgLT5cclxuXHRcdGlmIEBwID09IG51bGwgIyBzY3JvbGwgYmVow7Z2cyBlalxyXG5cdFx0XHRpbWFnZSBAcGcsQGR4LEBkeVxyXG5cdFx0ZWxzZSAjIHNjcm9sbGFcclxuXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHksQGR3LEBkaCxAcCwwLEBkdyxAZGhcclxuXHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuXHJcblxyXG4jIGNsYXNzIFRleHRTY3JvbGxlclxyXG4jIFx0Y29uc3RydWN0b3IgOiAoQGR4LEBkeSxAZHcsQGRoLEB0cyxAdGV4dCkgLT5cclxuIyBcdFx0cHVzaCgpXHJcbiMgXHRcdHRleHRTaXplIEB0c1xyXG4jIFx0XHRmYWt0b3IgPSAwLjVcclxuIyBcdFx0IyBpZiB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdXaW5kb3dzJyAhPSAtMSlcclxuIyBcdFx0IyBcdGZha3Rvcj0wLjVcclxuIyBcdFx0IyBlbHNlXHJcbiMgXHRcdCMgXHRmYWt0b3I9MC4yNVxyXG4jIFx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG4jIFx0XHRpZiBAc3ogPD0gQGR3ICMgc2Nyb2xsIGJlaMO2dnMgZWpcclxuIyBcdFx0XHRAcGcgPSBjcmVhdGVHcmFwaGljcyBAZHcsQGRoXHJcbiMgXHRcdFx0I0BwZy5waXhlbERlbnNpdHkgMVxyXG4jIFx0XHRcdEBwZy5iYWNrZ3JvdW5kIFwiZ3JlZW5cIlxyXG4jIFx0XHRcdEBwZy50ZXh0U2l6ZSBAdHNcclxuIyBcdFx0XHRAcGcuZmlsbCBcImdyYXlcIlxyXG4jIFx0XHRcdEBwZy50ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuIyBcdFx0XHRAcGcudGV4dCBAdGV4dCwwLGZha3RvcipAZGhcclxuIyBcdFx0ZWxzZSAjIHNjcm9sbCBiZWjDtnZzXHJcbiMgXHRcdFx0QHN6ID0gTWF0aC5yb3VuZCB0ZXh0V2lkdGggQHRleHQgKyAnIOKAoiAnXHJcbiMgXHRcdFx0QHBnID0gY3JlYXRlR3JhcGhpY3MgQHN6ICsgQGR3ICsgMTAwLCBAZGhcclxuIyBcdFx0XHQjQHBnLnBpeGVsRGVuc2l0eSAxXHJcbiMgXHRcdFx0QHBnLmJhY2tncm91bmQgXCJncmVlblwiXHJcbiMgXHRcdFx0QHBnLnRleHRTaXplIEB0c1xyXG4jIFx0XHRcdEBwZy5maWxsIFwiZ3JheVwiXHJcbiMgXHRcdFx0QHBnLnRleHRBbGlnbiBMRUZULENFTlRFUlxyXG4jIFx0XHRcdEBwZy50ZXh0IEB0ZXh0ICsgJyDigKIgJyArIEB0ZXh0LDAsZmFrdG9yKkBkaFxyXG4jIFx0XHRcdEBwID0gMCBcclxuIyBcdFx0cG9wKClcclxuXHJcbiMgXHRkcmF3IDogKCkgLT5cclxuIyBcdFx0aWYgQHAgPT0gbnVsbCAjIHNjcm9sbCBiZWjDtnZzIGVqXHJcbiMgXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHlcclxuIyBcdFx0ZWxzZSAjIHNjcm9sbGFcclxuIyBcdFx0XHRzeCA9IEBwXHJcbiMgXHRcdFx0c3kgPSAwXHJcbiMgXHRcdFx0c3cgPSBAZHdcclxuIyBcdFx0XHRzaCA9IEBkaFxyXG5cclxuIyBcdFx0XHRpbWFnZSBAcGcsMCxAZHkrQGRoXHJcblxyXG4jIFx0XHRcdCNpbWFnZSBAcGcsIEBkeCwgQGR5XHJcblxyXG4jIFx0XHRcdGltYWdlIEBwZyxAZHgsQGR5LEBkdyxAZGgsc3gsc3ksc3csc2hcclxuXHJcbiMgXHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuIl19
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScroller.coffee