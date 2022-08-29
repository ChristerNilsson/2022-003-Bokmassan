// Generated by CoffeeScript 2.5.1
var TextScroller;

TextScroller = class TextScroller {
  constructor(dx, dy, dw, dh, ts, text) {
    var faktor;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ts = ts;
    this.text = text;
    push();
    textSize(this.ts);
    faktor = 0.5;
    // if window.navigator.userAgent.indexOf('Windows' != -1)
    // 	faktor=0.5
    // else
    // 	faktor=0.25
    this.sz = Math.round(textWidth(this.text));
    if (this.sz <= this.dw) { // scroll behövs ej
      this.pg = createGraphics(this.dw, this.dh);
      //@pg.pixelDensity 1
      this.pg.background("green");
      this.pg.textSize(this.ts);
      this.pg.fill("gray");
      this.pg.textAlign(LEFT, CENTER);
      this.pg.text(this.text, 0, faktor * this.dh); // scroll behövs
    } else {
      this.sz = Math.round(textWidth(this.text + ' • '));
      this.pg = createGraphics(this.sz + this.dw + 100, this.dh);
      //@pg.pixelDensity 1
      this.pg.background("green");
      this.pg.textSize(this.ts);
      this.pg.fill("gray");
      this.pg.textAlign(LEFT, CENTER);
      this.pg.text(this.text + ' • ' + this.text, 0, faktor * this.dh);
      this.p = 0;
    }
    pop();
  }

  draw() {
    var sh, sw, sx, sy;
    if (this.p === null) { // scroll behövs ej
      return image(this.pg, this.dx, this.dy); // scrolla
    } else {
      sx = this.p;
      sy = 0;
      sw = this.dw;
      sh = this.dh;
      image(this.pg, 0, this.dy + this.dh);
      //image @pg, @dx, @dy
      image(this.pg, this.dx, this.dy, this.dw, this.dh, sx, sy, sw, sh);
      return this.p = (this.p + 1) % this.sz;
    }
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU0sZUFBTixNQUFBLGFBQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxNQUFBLENBQUE7QUFDZixRQUFBO0lBRGdCLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUFHLElBQUMsQ0FBQTtJQUNuQyxJQUFBLENBQUE7SUFDQSxRQUFBLENBQVMsSUFBQyxDQUFBLEVBQVY7SUFDQSxNQUFBLEdBQVMsSUFGWDs7Ozs7SUFPRSxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBQSxDQUFVLElBQUMsQ0FBQSxJQUFYLENBQVg7SUFDTixJQUFHLElBQUMsQ0FBQSxFQUFELElBQU8sSUFBQyxDQUFBLEVBQVg7TUFDQyxJQUFDLENBQUEsRUFBRCxHQUFNLGNBQUEsQ0FBZSxJQUFDLENBQUEsRUFBaEIsRUFBbUIsSUFBQyxDQUFBLEVBQXBCLEVBQVQ7O01BRUcsSUFBQyxDQUFBLEVBQUUsQ0FBQyxVQUFKLENBQWUsT0FBZjtNQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsUUFBSixDQUFhLElBQUMsQ0FBQSxFQUFkO01BQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsTUFBVDtNQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsU0FBSixDQUFjLElBQWQsRUFBbUIsTUFBbkI7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxJQUFDLENBQUEsSUFBVixFQUFlLENBQWYsRUFBaUIsTUFBQSxHQUFPLElBQUMsQ0FBQSxFQUF6QixFQVBEO0tBQUEsTUFBQTtNQVNDLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBSSxDQUFDLEtBQUwsQ0FBVyxTQUFBLENBQVUsSUFBQyxDQUFBLElBQUQsR0FBUSxLQUFsQixDQUFYO01BQ04sSUFBQyxDQUFBLEVBQUQsR0FBTSxjQUFBLENBQWUsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFDLENBQUEsRUFBUCxHQUFZLEdBQTNCLEVBQWdDLElBQUMsQ0FBQSxFQUFqQyxFQURUOztNQUdHLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBSixDQUFlLE9BQWY7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFFBQUosQ0FBYSxJQUFDLENBQUEsRUFBZDtNQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLE1BQVQ7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFNBQUosQ0FBYyxJQUFkLEVBQW1CLE1BQW5CO01BQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsSUFBQyxDQUFBLElBQUQsR0FBUSxLQUFSLEdBQWdCLElBQUMsQ0FBQSxJQUExQixFQUErQixDQUEvQixFQUFpQyxNQUFBLEdBQU8sSUFBQyxDQUFBLEVBQXpDO01BQ0EsSUFBQyxDQUFBLENBQUQsR0FBSyxFQWpCTjs7SUFrQkEsR0FBQSxDQUFBO0VBM0JhOztFQTZCZCxJQUFPLENBQUEsQ0FBQTtBQUNSLFFBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUE7SUFBRSxJQUFHLElBQUMsQ0FBQSxDQUFELEtBQU0sSUFBVDthQUNDLEtBQUEsQ0FBTSxJQUFDLENBQUEsRUFBUCxFQUFVLElBQUMsQ0FBQSxFQUFYLEVBQWMsSUFBQyxDQUFBLEVBQWYsRUFERDtLQUFBLE1BQUE7TUFHQyxFQUFBLEdBQUssSUFBQyxDQUFBO01BQ04sRUFBQSxHQUFLO01BQ0wsRUFBQSxHQUFLLElBQUMsQ0FBQTtNQUNOLEVBQUEsR0FBSyxJQUFDLENBQUE7TUFFTixLQUFBLENBQU0sSUFBQyxDQUFBLEVBQVAsRUFBVSxDQUFWLEVBQVksSUFBQyxDQUFBLEVBQUQsR0FBSSxJQUFDLENBQUEsRUFBakIsRUFMSDs7TUFTRyxLQUFBLENBQU0sSUFBQyxDQUFBLEVBQVAsRUFBVSxJQUFDLENBQUEsRUFBWCxFQUFjLElBQUMsQ0FBQSxFQUFmLEVBQWtCLElBQUMsQ0FBQSxFQUFuQixFQUFzQixJQUFDLENBQUEsRUFBdkIsRUFBMEIsRUFBMUIsRUFBNkIsRUFBN0IsRUFBZ0MsRUFBaEMsRUFBbUMsRUFBbkM7YUFFQSxJQUFDLENBQUEsQ0FBRCxHQUFLLENBQUMsSUFBQyxDQUFBLENBQUQsR0FBRyxDQUFKLENBQUEsR0FBUyxJQUFDLENBQUEsR0FkaEI7O0VBRE07O0FBOUJSIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGV4dFNjcm9sbGVyXHJcblx0Y29uc3RydWN0b3IgOiAoQGR4LEBkeSxAZHcsQGRoLEB0cyxAdGV4dCkgLT5cclxuXHRcdHB1c2goKVxyXG5cdFx0dGV4dFNpemUgQHRzXHJcblx0XHRmYWt0b3IgPSAwLjVcclxuXHRcdCMgaWYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignV2luZG93cycgIT0gLTEpXHJcblx0XHQjIFx0ZmFrdG9yPTAuNVxyXG5cdFx0IyBlbHNlXHJcblx0XHQjIFx0ZmFrdG9yPTAuMjVcclxuXHRcdEBzeiA9IE1hdGgucm91bmQgdGV4dFdpZHRoIEB0ZXh0XHJcblx0XHRpZiBAc3ogPD0gQGR3ICMgc2Nyb2xsIGJlaMO2dnMgZWpcclxuXHRcdFx0QHBnID0gY3JlYXRlR3JhcGhpY3MgQGR3LEBkaFxyXG5cdFx0XHQjQHBnLnBpeGVsRGVuc2l0eSAxXHJcblx0XHRcdEBwZy5iYWNrZ3JvdW5kIFwiZ3JlZW5cIlxyXG5cdFx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRcdEBwZy5maWxsIFwiZ3JheVwiXHJcblx0XHRcdEBwZy50ZXh0QWxpZ24gTEVGVCxDRU5URVJcclxuXHRcdFx0QHBnLnRleHQgQHRleHQsMCxmYWt0b3IqQGRoXHJcblx0XHRlbHNlICMgc2Nyb2xsIGJlaMO2dnNcclxuXHRcdFx0QHN6ID0gTWF0aC5yb3VuZCB0ZXh0V2lkdGggQHRleHQgKyAnIOKAoiAnXHJcblx0XHRcdEBwZyA9IGNyZWF0ZUdyYXBoaWNzIEBzeiArIEBkdyArIDEwMCwgQGRoXHJcblx0XHRcdCNAcGcucGl4ZWxEZW5zaXR5IDFcclxuXHRcdFx0QHBnLmJhY2tncm91bmQgXCJncmVlblwiXHJcblx0XHRcdEBwZy50ZXh0U2l6ZSBAdHNcclxuXHRcdFx0QHBnLmZpbGwgXCJncmF5XCJcclxuXHRcdFx0QHBnLnRleHRBbGlnbiBMRUZULENFTlRFUlxyXG5cdFx0XHRAcGcudGV4dCBAdGV4dCArICcg4oCiICcgKyBAdGV4dCwwLGZha3RvcipAZGhcclxuXHRcdFx0QHAgPSAwIFxyXG5cdFx0cG9wKClcclxuXHJcblx0ZHJhdyA6ICgpIC0+XHJcblx0XHRpZiBAcCA9PSBudWxsICMgc2Nyb2xsIGJlaMO2dnMgZWpcclxuXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHlcclxuXHRcdGVsc2UgIyBzY3JvbGxhXHJcblx0XHRcdHN4ID0gQHBcclxuXHRcdFx0c3kgPSAwXHJcblx0XHRcdHN3ID0gQGR3XHJcblx0XHRcdHNoID0gQGRoXHJcblxyXG5cdFx0XHRpbWFnZSBAcGcsMCxAZHkrQGRoXHJcblxyXG5cdFx0XHQjaW1hZ2UgQHBnLCBAZHgsIEBkeVxyXG5cclxuXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHksQGR3LEBkaCxzeCxzeSxzdyxzaFxyXG5cclxuXHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuIl19
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScroller.coffee