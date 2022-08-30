// Generated by CoffeeScript 2.5.1
var TextScroller;

TextScroller = class TextScroller {
  constructor(dx, dy, dw, dh, ts) {
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ts = ts;
    this.pg = createGraphics(10000, this.dh); // w
  }

  update(txt) {
    this.text = txt;
    push();
    textSize(this.ts);
    this.visible = this.text !== '';
    this.sz = Math.round(textWidth(this.text));
    this.scroll = this.sz > this.dw;
    if (!this.scroll) { // scroll behövs ej
      this.makeImage(this.dw, this.text); // scrolla
    } else {
      this.sz = Math.round(textWidth(this.text + ' • '));
      this.makeImage(this.sz + this.dw + 100, this.text + ' • ' + this.text);
      this.p = 0;
    }
    return pop();
  }

  makeImage(w, txt) {
    //if not @draw then return
    this.pg.background("green");
    this.pg.textSize(this.ts);
    this.pg.fill("black");
    this.pg.textAlign(LEFT, CENTER);
    return this.pg.text(txt, 0, this.dh / 2);
  }

  draw() {
    if (!this.visible) {
      return;
    }
    if (!this.scroll) { // scroll behövs ej
      return image(this.pg, this.dx, this.dy); // scrolla
    } else {
      image(this.pg, this.dx, this.dy, this.dw, this.dh, this.p, 0, this.dw, this.dh);
      return this.p = (this.p + 1) % this.sz;
    }
  }

};

// class TextScroller
// 	constructor : (@dx,@dy,@dw,@dh,@ts) ->
// 		@pg = createGraphics 10000, @dh  # 2000

// 	update : (txt) ->
// 		@text = txt
// 		@visible = @text != ''
// 		push()
// 		textSize @ts
// 		@sz = Math.round textWidth @text
// 		@scroll = @sz > @dw
// 		if @scroll
// 			@sz = Math.round textWidth @text + ' • '
// 			@makeImage @text + ' • ' + @text
// 			@p = 0
// 		else
// 			@makeImage @text
// 			@p = null
// 		pop()

// 	makeImage : (txt) ->
// 		@pg.background "green"
// 		@pg.textSize @ts
// 		@pg.fill "white"
// 		@pg.textAlign LEFT,CENTER
// 		@pg.text txt,0,@dh/2

// 	draw : () ->
// 		# push()
// 		# textSize @ts
// 		# rect @dx,@dy,@dw,@dh
// 		# textAlign LEFT,CENTER
// 		# text "#{@visible} #{@scroll} #{@text}",@dx,@dy+@dh/2
// 		# pop()

// 		push()
// 		if @visible
// 			image @pg, 0,@dy-@dh
// 			if @scroll
// 				image @pg, @dx,@dy,@dw,@dh, @p,0,@dw,@dh
// 				@p = (@p+1) % @sz
// 			else
// 				image @pg, @dx,@dy
// 		pop()

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU0sZUFBTixNQUFBLGFBQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxDQUFBO0lBQUMsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQy9CLElBQUMsQ0FBQSxFQUFELEdBQU0sY0FBQSxDQUFlLEtBQWYsRUFBc0IsSUFBQyxDQUFBLEVBQXZCLEVBRE87RUFBQTs7RUFHZCxNQUFTLENBQUMsR0FBRCxDQUFBO0lBQ1IsSUFBQyxDQUFBLElBQUQsR0FBUTtJQUNSLElBQUEsQ0FBQTtJQUNBLFFBQUEsQ0FBUyxJQUFDLENBQUEsRUFBVjtJQUNBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLElBQUQsS0FBUztJQUNwQixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBQSxDQUFVLElBQUMsQ0FBQSxJQUFYLENBQVg7SUFDTixJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBQyxDQUFBO0lBQ2pCLElBQUcsQ0FBSSxJQUFDLENBQUEsTUFBUjtNQUNDLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLEVBQVosRUFBZ0IsSUFBQyxDQUFBLElBQWpCLEVBREQ7S0FBQSxNQUFBO01BR0MsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFJLENBQUMsS0FBTCxDQUFXLFNBQUEsQ0FBVSxJQUFDLENBQUEsSUFBRCxHQUFRLEtBQWxCLENBQVg7TUFDTixJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxFQUFELEdBQUksSUFBQyxDQUFBLEVBQUwsR0FBUSxHQUFuQixFQUF3QixJQUFDLENBQUEsSUFBRCxHQUFRLEtBQVIsR0FBZ0IsSUFBQyxDQUFBLElBQXpDO01BQ0EsSUFBQyxDQUFBLENBQUQsR0FBSyxFQUxOOztXQU1BLEdBQUEsQ0FBQTtFQWJROztFQWVULFNBQVksQ0FBQyxDQUFELEVBQUcsR0FBSCxDQUFBLEVBQUE7O0lBRVgsSUFBQyxDQUFBLEVBQUUsQ0FBQyxVQUFKLENBQWUsT0FBZjtJQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsUUFBSixDQUFhLElBQUMsQ0FBQSxFQUFkO0lBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsT0FBVDtJQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsU0FBSixDQUFjLElBQWQsRUFBbUIsTUFBbkI7V0FDQSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxHQUFULEVBQWEsQ0FBYixFQUFlLElBQUMsQ0FBQSxFQUFELEdBQUksQ0FBbkI7RUFOVzs7RUFRWixJQUFPLENBQUEsQ0FBQTtJQUNOLElBQUcsQ0FBSSxJQUFDLENBQUEsT0FBUjtBQUFxQixhQUFyQjs7SUFDQSxJQUFHLENBQUksSUFBQyxDQUFBLE1BQVI7YUFDQyxLQUFBLENBQU0sSUFBQyxDQUFBLEVBQVAsRUFBVSxJQUFDLENBQUEsRUFBWCxFQUFjLElBQUMsQ0FBQSxFQUFmLEVBREQ7S0FBQSxNQUFBO01BR0MsS0FBQSxDQUFNLElBQUMsQ0FBQSxFQUFQLEVBQVUsSUFBQyxDQUFBLEVBQVgsRUFBYyxJQUFDLENBQUEsRUFBZixFQUFrQixJQUFDLENBQUEsRUFBbkIsRUFBc0IsSUFBQyxDQUFBLEVBQXZCLEVBQTBCLElBQUMsQ0FBQSxDQUEzQixFQUE2QixDQUE3QixFQUErQixJQUFDLENBQUEsRUFBaEMsRUFBbUMsSUFBQyxDQUFBLEVBQXBDO2FBQ0EsSUFBQyxDQUFBLENBQUQsR0FBSyxDQUFDLElBQUMsQ0FBQSxDQUFELEdBQUcsQ0FBSixDQUFBLEdBQVMsSUFBQyxDQUFBLEdBSmhCOztFQUZNOztBQTNCUjs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRleHRTY3JvbGxlclxyXG5cdGNvbnN0cnVjdG9yIDogKEBkeCxAZHksQGR3LEBkaCxAdHMpIC0+XHJcblx0XHRAcGcgPSBjcmVhdGVHcmFwaGljcyAxMDAwMCwgQGRoICMgd1xyXG5cclxuXHR1cGRhdGUgOiAodHh0KSAtPlxyXG5cdFx0QHRleHQgPSB0eHRcclxuXHRcdHB1c2goKVxyXG5cdFx0dGV4dFNpemUgQHRzXHJcblx0XHRAdmlzaWJsZSA9IEB0ZXh0ICE9ICcnXHJcblx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG5cdFx0QHNjcm9sbCA9IEBzeiA+IEBkd1xyXG5cdFx0aWYgbm90IEBzY3JvbGwgIyBzY3JvbGwgYmVow7Z2cyBlalxyXG5cdFx0XHRAbWFrZUltYWdlIEBkdywgQHRleHRcclxuXHRcdGVsc2UgIyBzY3JvbGxhXHJcblx0XHRcdEBzeiA9IE1hdGgucm91bmQgdGV4dFdpZHRoIEB0ZXh0ICsgJyDigKIgJ1xyXG5cdFx0XHRAbWFrZUltYWdlIEBzeitAZHcrMTAwLCBAdGV4dCArICcg4oCiICcgKyBAdGV4dFxyXG5cdFx0XHRAcCA9IDAgXHJcblx0XHRwb3AoKSBcclxuXHJcblx0bWFrZUltYWdlIDogKHcsdHh0KSAtPlxyXG5cdFx0I2lmIG5vdCBAZHJhdyB0aGVuIHJldHVyblxyXG5cdFx0QHBnLmJhY2tncm91bmQgXCJncmVlblwiXHJcblx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRAcGcuZmlsbCBcImJsYWNrXCJcclxuXHRcdEBwZy50ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuXHRcdEBwZy50ZXh0IHR4dCwwLEBkaC8yXHJcblxyXG5cdGRyYXcgOiAoKSAtPlxyXG5cdFx0aWYgbm90IEB2aXNpYmxlIHRoZW4gcmV0dXJuIFxyXG5cdFx0aWYgbm90IEBzY3JvbGwgIyBzY3JvbGwgYmVow7Z2cyBlalxyXG5cdFx0XHRpbWFnZSBAcGcsQGR4LEBkeVxyXG5cdFx0ZWxzZSAjIHNjcm9sbGFcclxuXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHksQGR3LEBkaCxAcCwwLEBkdyxAZGhcclxuXHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuXHJcblxyXG5cclxuXHJcblxyXG4jIGNsYXNzIFRleHRTY3JvbGxlclxyXG4jIFx0Y29uc3RydWN0b3IgOiAoQGR4LEBkeSxAZHcsQGRoLEB0cykgLT5cclxuIyBcdFx0QHBnID0gY3JlYXRlR3JhcGhpY3MgMTAwMDAsIEBkaCAgIyAyMDAwXHJcblxyXG4jIFx0dXBkYXRlIDogKHR4dCkgLT5cclxuIyBcdFx0QHRleHQgPSB0eHRcclxuIyBcdFx0QHZpc2libGUgPSBAdGV4dCAhPSAnJ1xyXG4jIFx0XHRwdXNoKClcclxuIyBcdFx0dGV4dFNpemUgQHRzXHJcbiMgXHRcdEBzeiA9IE1hdGgucm91bmQgdGV4dFdpZHRoIEB0ZXh0XHJcbiMgXHRcdEBzY3JvbGwgPSBAc3ogPiBAZHdcclxuIyBcdFx0aWYgQHNjcm9sbFxyXG4jIFx0XHRcdEBzeiA9IE1hdGgucm91bmQgdGV4dFdpZHRoIEB0ZXh0ICsgJyDigKIgJ1xyXG4jIFx0XHRcdEBtYWtlSW1hZ2UgQHRleHQgKyAnIOKAoiAnICsgQHRleHRcclxuIyBcdFx0XHRAcCA9IDBcclxuIyBcdFx0ZWxzZVxyXG4jIFx0XHRcdEBtYWtlSW1hZ2UgQHRleHRcclxuIyBcdFx0XHRAcCA9IG51bGxcclxuIyBcdFx0cG9wKClcclxuXHJcbiMgXHRtYWtlSW1hZ2UgOiAodHh0KSAtPlxyXG4jIFx0XHRAcGcuYmFja2dyb3VuZCBcImdyZWVuXCJcclxuIyBcdFx0QHBnLnRleHRTaXplIEB0c1xyXG4jIFx0XHRAcGcuZmlsbCBcIndoaXRlXCJcclxuIyBcdFx0QHBnLnRleHRBbGlnbiBMRUZULENFTlRFUlxyXG4jIFx0XHRAcGcudGV4dCB0eHQsMCxAZGgvMlxyXG5cclxuIyBcdGRyYXcgOiAoKSAtPlxyXG4jIFx0XHQjIHB1c2goKVxyXG4jIFx0XHQjIHRleHRTaXplIEB0c1xyXG4jIFx0XHQjIHJlY3QgQGR4LEBkeSxAZHcsQGRoXHJcbiMgXHRcdCMgdGV4dEFsaWduIExFRlQsQ0VOVEVSXHJcbiMgXHRcdCMgdGV4dCBcIiN7QHZpc2libGV9ICN7QHNjcm9sbH0gI3tAdGV4dH1cIixAZHgsQGR5K0BkaC8yXHJcbiMgXHRcdCMgcG9wKClcclxuXHJcbiMgXHRcdHB1c2goKVxyXG4jIFx0XHRpZiBAdmlzaWJsZVxyXG4jIFx0XHRcdGltYWdlIEBwZywgMCxAZHktQGRoXHJcbiMgXHRcdFx0aWYgQHNjcm9sbFxyXG4jIFx0XHRcdFx0aW1hZ2UgQHBnLCBAZHgsQGR5LEBkdyxAZGgsIEBwLDAsQGR3LEBkaFxyXG4jIFx0XHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuIyBcdFx0XHRlbHNlXHJcbiMgXHRcdFx0XHRpbWFnZSBAcGcsIEBkeCxAZHlcclxuIyBcdFx0cG9wKCkiXX0=
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScroller.coffee