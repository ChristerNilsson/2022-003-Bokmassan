// Generated by CoffeeScript 2.5.1
var SEPARATOR, TextDisplay, twSEP;

SEPARATOR = ' • ';

twSEP = 0;

TextDisplay = class TextDisplay {
  constructor(dx, dy, dw1, dh, ts) {
    this.dx = dx;
    this.dy = dy;
    this.dw = dw1;
    this.dh = dh;
    this.ts = ts;
    this.dw = Math.round(this.dw);
  }

  update(text) {
    var group, i, index, j, k, l, len, len1, n, name, ref, results, summa, w, widths, wx, wy;
    this.text = text;
    this.names = this.text.split(', ');
    if (this.text.length === 0) {
      this.groups = [];
    }
    if (this.names.length === 1) {
      this.groups = [[0]];
    }
    textSize(this.ts);
    twSEP = textWidth(SEPARATOR);
    widths = this.names.map(function(name, index) {
      return [Math.round(textWidth(name)), index];
    });
    widths.sort();
    widths.reverse();
    summa = 0;
    for (k = 0, len = widths.length; k < len; k++) {
      [w, index] = widths[k];
      summa += w;
    }
    if (summa === 0) {
      return [];
    }
    //if widths.length == 1 then return [[0]]
    this.groups = this.gruppera(widths, this.dw);
    this.groups = this.groups.map(function(group) {
      return group.sort();
    });
    // skapa image med grupperna A, ABA, ABCA...
    n = this.groups.length;
    if (n > 1) {
      n++;
    }
    this.pg = createGraphics(this.dw, this.dh * n);
    this.pg.textSize(this.ts);
    this.pg.background("black");
    this.p = 0;
    ref = range(n);
    results = [];
    for (l = 0, len1 = ref.length; l < len1; l++) {
      i = ref[l];
      group = this.groups[i % this.groups.length];
      wx = 0;
      wy = (i + 0.8) * this.dh;
      results.push((function() {
        var len2, m, ref1, results1;
        ref1 = range(group.length);
        results1 = [];
        for (m = 0, len2 = ref1.length; m < len2; m++) {
          j = ref1[m];
          index = group[j];
          name = this.names[index];
          if (j < group.length - 1) {
            name += SEPARATOR;
          }
          if (index === 0) {
            this.pg.fill('white');
          } else {
            this.pg.fill('gray');
          }
          this.pg.text(name, wx, wy);
          results1.push(wx += this.pg.textWidth(name));
        }
        return results1;
      }).call(this));
    }
    return results;
  }

  draw() {
    var date, i, n;
    if (this.groups.length === 0) {
      return;
    }
    n = this.groups.length;
    if (n === 1) {
      i = 0;
      image(this.pg, this.dx, this.dy, this.dw, this.dh, 0, i * this.dh + this.p, this.dw, this.dh);
      return;
    }
    date = new Date();
    //i = date.getSeconds() % (@groups.length+1)
    image(this.pg, this.dx, this.dy, this.dw, this.dh, 0, this.p, this.dw, this.dh);
    return this.p = (this.p + 0.5) % (this.pg.height - this.dh);
  }

  gruppera(widths, dw) {
    var groups, i, index, k, l, last, len, len1, n, ref, ref1, w;
    // prova att få in alla i EN grupp.
    // Går inte det, öka antal grupper
    n = 1;
    while (true) {
      groups = [];
      ref = range(n);
      for (k = 0, len = ref.length; k < len; k++) {
        i = ref[k];
        groups.push([0, []]); // total bredd, indexes
      }
      ref1 = range(widths.length);
      for (l = 0, len1 = ref1.length; l < len1; l++) {
        i = ref1[l];
        [w, index] = widths[i];
        groups[0][0] += w; // bredderna
        groups[0][1].push(index); // indexen
        groups.sort(); // sortera på bredd
      }
      last = groups[groups.length - 1];
      if (last[0] + (last[1].length - 1) * twSEP <= dw) {
        return groups.map(function(group) {
          return group[1];
        });
      }
      n++;
    }
  }

};

// class TextScroller
// 	constructor : (@dx,@dy,@dw,@dh,@ts) ->
// 		# Observera: iOS + image kräver heltal för parametrarna
// 		@dx = Math.round @dx
// 		@dy = Math.round @dy
// 		@dw = Math.round @dw
// 		@dh = Math.round @dh
// 		@ts = Math.round @ts
// 		@pg = createGraphics 10000, @dh # w

// 	update : (txt) ->
// 		@text = txt
// 		push()
// 		textSize @ts
// 		@visible = @text != ''
// 		@sz = Math.round textWidth @text
// 		@scroll = @sz > @dw
// 		if @scroll
// 			@sz = Math.round textWidth @text + ' • '
// 			@makeImage @text + ' • ' + @text
// 			@p = 0 
// 		else
// 			@makeImage @text
// 		pop() 

// 	makeImage : (txt) ->
// 		@pg.background "black"
// 		@pg.textSize @ts
// 		@pg.fill "gray"
// 		@pg.textAlign LEFT,CENTER
// 		@pg.text txt,0,Math.round @dh/2

// 	draw : () ->
// 		if @visible
// 			if @scroll
// 				image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
// 				@p = (@p+1) % @sz
// 			else
// 				image @pg,@dx,@dy

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUEsU0FBQSxFQUFBLFdBQUEsRUFBQTs7QUFBQSxTQUFBLEdBQVk7O0FBQ1osS0FBQSxHQUFROztBQUVGLGNBQU4sTUFBQSxZQUFBO0VBQ0MsV0FBYyxHQUFBLElBQUEsS0FBQSxJQUFBLElBQUEsQ0FBQTtJQUFDLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUMvQixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLEVBQVo7RUFETzs7RUFHZCxNQUFTLENBQUMsSUFBRCxDQUFBO0FBQ1YsUUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLEtBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxHQUFBLEVBQUEsSUFBQSxFQUFBLENBQUEsRUFBQSxJQUFBLEVBQUEsR0FBQSxFQUFBLE9BQUEsRUFBQSxLQUFBLEVBQUEsQ0FBQSxFQUFBLE1BQUEsRUFBQSxFQUFBLEVBQUE7SUFBRSxJQUFDLENBQUEsSUFBRCxHQUFRO0lBQ1IsSUFBQyxDQUFBLEtBQUQsR0FBUyxJQUFDLENBQUEsSUFBSSxDQUFDLEtBQU4sQ0FBWSxJQUFaO0lBQ1QsSUFBRyxJQUFDLENBQUEsSUFBSSxDQUFDLE1BQU4sS0FBZ0IsQ0FBbkI7TUFBMEIsSUFBQyxDQUFBLE1BQUQsR0FBVSxHQUFwQzs7SUFDQSxJQUFHLElBQUMsQ0FBQSxLQUFLLENBQUMsTUFBUCxLQUFpQixDQUFwQjtNQUEyQixJQUFDLENBQUEsTUFBRCxHQUFVLENBQUMsQ0FBQyxDQUFELENBQUQsRUFBckM7O0lBQ0EsUUFBQSxDQUFTLElBQUMsQ0FBQSxFQUFWO0lBQ0EsS0FBQSxHQUFRLFNBQUEsQ0FB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QUEsR0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQVAsR0FBYyxDQUFmO01BQ2IsSUFBRyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBRCxDQUFHLENBQUMsTUFBUixHQUFlLENBQWhCLENBQUEsR0FBcUIsS0FBL0IsSUFBd0MsRUFBM0M7QUFDQyxlQUFPLE1BQU0sQ0FBQyxHQUFQLENBQVcsUUFBQSxDQUFDLEtBQUQsQ0FBQTtpQkFBVyxLQUFLLENBQUMsQ0FBRDtRQUFoQixDQUFYLEVBRFI7O01BRUEsQ0FBQTtJQVpEO0VBSlU7O0FBckRaOztBQUhBIiwic291cmNlc0NvbnRlbnQiOlsiU0VQQVJBVE9SID0gJyDigKIgJ1xyXG50d1NFUCA9IDBcclxuXHJcbmNsYXNzIFRleHREaXNwbGF5XHJcblx0Y29uc3RydWN0b3IgOiAoQGR4LEBkeSxAZHcsQGRoLEB0cykgLT5cclxuXHRcdEBkdyA9IE1hdGgucm91bmQgQGR3XHJcblxyXG5cdHVwZGF0ZSA6ICh0ZXh0KSAtPlxyXG5cdFx0QHRleHQgPSB0ZXh0XHJcblx0XHRAbmFtZXMgPSBAdGV4dC5zcGxpdCAnLCAnXHJcblx0XHRpZiBAdGV4dC5sZW5ndGggPT0gMCB0aGVuIEBncm91cHMgPSBbXVxyXG5cdFx0aWYgQG5hbWVzLmxlbmd0aCA9PSAxIHRoZW4gQGdyb3VwcyA9IFtbMF1dXHJcblx0XHR0ZXh0U2l6ZSBAdHNcclxuXHRcdHR3U0VQID0gdGV4dFdpZHRoIFNFUEFSQVRPUlxyXG5cdFx0d2lkdGhzID0gQG5hbWVzLm1hcCAobmFtZSxpbmRleCkgLT4gW01hdGgucm91bmQodGV4dFdpZHRoKG5hbWUpKSxpbmRleF1cclxuXHRcdHdpZHRocy5zb3J0KClcclxuXHRcdHdpZHRocy5yZXZlcnNlKClcclxuXHRcdHN1bW1hID0gMFxyXG5cdFx0Zm9yIFt3LGluZGV4XSBpbiB3aWR0aHNcclxuXHRcdFx0c3VtbWEgKz0gd1xyXG5cdFx0aWYgc3VtbWEgPT0gMCB0aGVuIHJldHVybiBbXVxyXG5cdFx0I2lmIHdpZHRocy5sZW5ndGggPT0gMSB0aGVuIHJldHVybiBbWzBdXVxyXG5cdFx0QGdyb3VwcyA9IEBncnVwcGVyYSB3aWR0aHMsQGR3XHJcblx0XHRAZ3JvdXBzID0gQGdyb3Vwcy5tYXAgKGdyb3VwKSAtPiBncm91cC5zb3J0KClcclxuXHJcblx0XHQjIHNrYXBhIGltYWdlIG1lZCBncnVwcGVybmEgQSwgQUJBLCBBQkNBLi4uXHJcblx0XHRuID0gQGdyb3Vwcy5sZW5ndGhcclxuXHRcdGlmIG4gPiAxIHRoZW4gbisrIFxyXG5cdFx0QHBnID0gY3JlYXRlR3JhcGhpY3MgQGR3LCBAZGggKiBuXHJcblx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRAcGcuYmFja2dyb3VuZCBcImJsYWNrXCJcclxuXHRcdEBwID0gMFxyXG5cdFx0Zm9yIGkgaW4gcmFuZ2UgblxyXG5cdFx0XHRncm91cCA9IEBncm91cHNbaSAlIEBncm91cHMubGVuZ3RoXVxyXG5cdFx0XHR3eCA9IDBcclxuXHRcdFx0d3kgPSAoaSArIDAuOCkgKiBAZGhcclxuXHRcdFx0Zm9yIGogaW4gcmFuZ2UgZ3JvdXAubGVuZ3RoIFxyXG5cdFx0XHRcdGluZGV4ID0gZ3JvdXBbal1cclxuXHRcdFx0XHRuYW1lID0gQG5hbWVzW2luZGV4XVxyXG5cdFx0XHRcdGlmIGogPCBncm91cC5sZW5ndGgtMSB0aGVuIG5hbWUgKz0gU0VQQVJBVE9SXHJcblx0XHRcdFx0aWYgaW5kZXggPT0gMCB0aGVuIEBwZy5maWxsICd3aGl0ZScgZWxzZSBAcGcuZmlsbCAnZ3JheSdcclxuXHRcdFx0XHRAcGcudGV4dCBuYW1lLCB3eCx3eVxyXG5cdFx0XHRcdHd4ICs9IEBwZy50ZXh0V2lkdGggbmFtZVxyXG5cclxuXHRkcmF3IDogKCkgLT5cclxuXHRcdGlmIEBncm91cHMubGVuZ3RoID09IDAgdGhlbiByZXR1cm5cclxuXHRcdG4gPSBAZ3JvdXBzLmxlbmd0aFxyXG5cdFx0aWYgbj09MVxyXG5cdFx0XHRpID0gMFxyXG5cdFx0XHRpbWFnZSBAcGcsIEBkeCxAZHksQGR3LEBkaCwgMCxpKkBkaCtAcCxAZHcsQGRoXHJcblx0XHRcdHJldHVyblxyXG5cdFx0ZGF0ZSA9IG5ldyBEYXRlKClcclxuXHRcdCNpID0gZGF0ZS5nZXRTZWNvbmRzKCkgJSAoQGdyb3Vwcy5sZW5ndGgrMSlcclxuXHRcdGltYWdlIEBwZywgQGR4LEBkeSxAZHcsQGRoLCAwLEBwLEBkdyxAZGhcclxuXHRcdEBwID0gKEBwKzAuNSkgJSAoQHBnLmhlaWdodC1AZGgpXHJcblxyXG5cdGdydXBwZXJhIDogKHdpZHRocyxkdykgLT5cclxuXHRcdCMgcHJvdmEgYXR0IGbDpSBpbiBhbGxhIGkgRU4gZ3J1cHAuXHJcblx0XHQjIEfDpXIgaW50ZSBkZXQsIMO2a2EgYW50YWwgZ3J1cHBlclxyXG5cdFx0biA9IDFcclxuXHRcdHdoaWxlIHRydWVcclxuXHRcdFx0Z3JvdXBzID0gW11cclxuXHRcdFx0Zm9yIGkgaW4gcmFuZ2UgbiBcclxuXHRcdFx0XHRncm91cHMucHVzaCBbMCxbXV0gIyB0b3RhbCBicmVkZCwgaW5kZXhlc1xyXG5cdFx0XHRmb3IgaSBpbiByYW5nZSB3aWR0aHMubGVuZ3RoIFxyXG5cdFx0XHRcdFt3LGluZGV4XSA9IHdpZHRoc1tpXVxyXG5cdFx0XHRcdGdyb3Vwc1swXVswXSArPSB3ICMgYnJlZGRlcm5hXHJcblx0XHRcdFx0Z3JvdXBzWzBdWzFdLnB1c2ggaW5kZXggIyBpbmRleGVuXHJcblx0XHRcdFx0Z3JvdXBzLnNvcnQoKSAjIHNvcnRlcmEgcMOlIGJyZWRkXHJcblx0XHRcdGxhc3QgPSBncm91cHNbZ3JvdXBzLmxlbmd0aC0xXSAjIGJyZWRhc3RlIGdydXBwZW5cclxuXHRcdFx0aWYgbGFzdFswXSArIChsYXN0WzFdLmxlbmd0aC0xKSAqIHR3U0VQIDw9IGR3XHJcblx0XHRcdFx0cmV0dXJuIGdyb3Vwcy5tYXAgKGdyb3VwKSAtPiBncm91cFsxXSAjIHNraXBwYSBicmVkZGVybmFcclxuXHRcdFx0bisrXHJcblxyXG5cclxuIyBjbGFzcyBUZXh0U2Nyb2xsZXJcclxuIyBcdGNvbnN0cnVjdG9yIDogKEBkeCxAZHksQGR3LEBkaCxAdHMpIC0+XHJcbiMgXHRcdCMgT2JzZXJ2ZXJhOiBpT1MgKyBpbWFnZSBrcsOkdmVyIGhlbHRhbCBmw7ZyIHBhcmFtZXRyYXJuYVxyXG4jIFx0XHRAZHggPSBNYXRoLnJvdW5kIEBkeFxyXG4jIFx0XHRAZHkgPSBNYXRoLnJvdW5kIEBkeVxyXG4jIFx0XHRAZHcgPSBNYXRoLnJvdW5kIEBkd1xyXG4jIFx0XHRAZGggPSBNYXRoLnJvdW5kIEBkaFxyXG4jIFx0XHRAdHMgPSBNYXRoLnJvdW5kIEB0c1xyXG4jIFx0XHRAcGcgPSBjcmVhdGVHcmFwaGljcyAxMDAwMCwgQGRoICMgd1xyXG5cclxuIyBcdHVwZGF0ZSA6ICh0eHQpIC0+XHJcbiMgXHRcdEB0ZXh0ID0gdHh0XHJcbiMgXHRcdHB1c2goKVxyXG4jIFx0XHR0ZXh0U2l6ZSBAdHNcclxuIyBcdFx0QHZpc2libGUgPSBAdGV4dCAhPSAnJ1xyXG4jIFx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG4jIFx0XHRAc2Nyb2xsID0gQHN6ID4gQGR3XHJcbiMgXHRcdGlmIEBzY3JvbGxcclxuIyBcdFx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dCArICcg4oCiICdcclxuIyBcdFx0XHRAbWFrZUltYWdlIEB0ZXh0ICsgJyDigKIgJyArIEB0ZXh0XHJcbiMgXHRcdFx0QHAgPSAwIFxyXG4jIFx0XHRlbHNlXHJcbiMgXHRcdFx0QG1ha2VJbWFnZSBAdGV4dFxyXG4jIFx0XHRwb3AoKSBcclxuXHJcbiMgXHRtYWtlSW1hZ2UgOiAodHh0KSAtPlxyXG4jIFx0XHRAcGcuYmFja2dyb3VuZCBcImJsYWNrXCJcclxuIyBcdFx0QHBnLnRleHRTaXplIEB0c1xyXG4jIFx0XHRAcGcuZmlsbCBcImdyYXlcIlxyXG4jIFx0XHRAcGcudGV4dEFsaWduIExFRlQsQ0VOVEVSXHJcbiMgXHRcdEBwZy50ZXh0IHR4dCwwLE1hdGgucm91bmQgQGRoLzJcclxuXHJcbiMgXHRkcmF3IDogKCkgLT5cclxuIyBcdFx0aWYgQHZpc2libGVcclxuIyBcdFx0XHRpZiBAc2Nyb2xsXHJcbiMgXHRcdFx0XHRpbWFnZSBAcGcsQGR4LEBkeSxAZHcsQGRoLEBwLDAsQGR3LEBkaFxyXG4jIFx0XHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuIyBcdFx0XHRlbHNlXHJcbiMgXHRcdFx0XHRpbWFnZSBAcGcsQGR4LEBkeVxyXG4iXX0=
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScroller.coffee