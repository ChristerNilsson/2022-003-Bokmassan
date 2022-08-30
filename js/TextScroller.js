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
    this.dx = Math.round(this.dx);
    this.dy = Math.round(this.dy);
    this.dw = Math.round(this.dw);
    this.dh = Math.round(this.dh);
    this.ts = Math.round(this.ts);
  }

  update(txt) {
    this.text = txt;
    push();
    textSize(this.ts);
    this.visible = this.text !== '';
    this.sz = Math.round(textWidth(this.text));
    this.scroll = this.sz > this.dw;
    if (this.scroll) {
      this.sz = Math.round(textWidth(this.text + ' • '));
      this.makeImage(this.text + ' • ' + this.text);
      this.p = 0;
    } else {
      this.makeImage(this.text);
    }
    return pop();
  }

  makeImage(txt) {
    this.pg.background("black");
    this.pg.textSize(this.ts);
    this.pg.fill("gray");
    this.pg.textAlign(LEFT, CENTER);
    return this.pg.text(txt, 0, Math.round(this.dh / 2));
  }

  draw() {
    if (this.visible) {
      if (this.scroll) {
        image(this.pg, this.dx, this.dy, this.dw, this.dh, this.p, 0, this.dw, this.dh);
        return this.p = (this.p + 1) % this.sz;
      } else {
        return image(this.pg, this.dx, this.dy);
      }
    }
  }

};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU0sZUFBTixNQUFBLGFBQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxDQUFBO0lBQUMsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQUcsSUFBQyxDQUFBO0lBQy9CLElBQUMsQ0FBQSxFQUFELEdBQU0sY0FBQSxDQUFlLEtBQWYsRUFBc0IsSUFBQyxDQUFBLEVBQXZCLEVBQVI7SUFDRSxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLEVBQVo7SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLEVBQVo7SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLEVBQVo7SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLEVBQVo7SUFDTixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsSUFBQyxDQUFBLEVBQVo7RUFOTzs7RUFRZCxNQUFTLENBQUMsR0FBRCxDQUFBO0lBQ1IsSUFBQyxDQUFBLElBQUQsR0FBUTtJQUNSLElBQUEsQ0FBQTtJQUNBLFFBQUEsQ0FBUyxJQUFDLENBQUEsRUFBVjtJQUNBLElBQUMsQ0FBQSxPQUFELEdBQVcsSUFBQyxDQUFBLElBQUQsS0FBUztJQUNwQixJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBQSxDQUFVLElBQUMsQ0FBQSxJQUFYLENBQVg7SUFDTixJQUFDLENBQUEsTUFBRCxHQUFVLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBQyxDQUFBO0lBQ2pCLElBQUcsSUFBQyxDQUFBLE1BQUo7TUFDQyxJQUFDLENBQUEsRUFBRCxHQUFNLElBQUksQ0FBQyxLQUFMLENBQVcsU0FBQSxDQUFVLElBQUMsQ0FBQSxJQUFELEdBQVEsS0FBbEIsQ0FBWDtNQUNOLElBQUMsQ0FBQSxTQUFELENBQVcsSUFBQyxDQUFBLElBQUQsR0FBUSxLQUFSLEdBQWdCLElBQUMsQ0FBQSxJQUE1QjtNQUNBLElBQUMsQ0FBQSxDQUFELEdBQUssRUFITjtLQUFBLE1BQUE7TUFLQyxJQUFDLENBQUEsU0FBRCxDQUFXLElBQUMsQ0FBQSxJQUFaLEVBTEQ7O1dBTUEsR0FBQSxDQUFBO0VBYlE7O0VBZVQsU0FBWSxDQUFDLEdBQUQsQ0FBQTtJQUNYLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBSixDQUFlLE9BQWY7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFFBQUosQ0FBYSxJQUFDLENBQUEsRUFBZDtJQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLE1BQVQ7SUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFNBQUosQ0FBYyxJQUFkLEVBQW1CLE1BQW5CO1dBQ0EsSUFBQyxDQUFBLEVBQUUsQ0FBQyxJQUFKLENBQVMsR0FBVCxFQUFhLENBQWIsRUFBZSxJQUFJLENBQUMsS0FBTCxDQUFXLElBQUMsQ0FBQSxFQUFELEdBQUksQ0FBZixDQUFmO0VBTFc7O0VBT1osSUFBTyxDQUFBLENBQUE7SUFDTixJQUFHLElBQUMsQ0FBQSxPQUFKO01BQ0MsSUFBRyxJQUFDLENBQUEsTUFBSjtRQUNDLEtBQUEsQ0FBTSxJQUFDLENBQUEsRUFBUCxFQUFVLElBQUMsQ0FBQSxFQUFYLEVBQWMsSUFBQyxDQUFBLEVBQWYsRUFBa0IsSUFBQyxDQUFBLEVBQW5CLEVBQXNCLElBQUMsQ0FBQSxFQUF2QixFQUEwQixJQUFDLENBQUEsQ0FBM0IsRUFBNkIsQ0FBN0IsRUFBK0IsSUFBQyxDQUFBLEVBQWhDLEVBQW1DLElBQUMsQ0FBQSxFQUFwQztlQUNBLElBQUMsQ0FBQSxDQUFELEdBQUssQ0FBQyxJQUFDLENBQUEsQ0FBRCxHQUFHLENBQUosQ0FBQSxHQUFTLElBQUMsQ0FBQSxHQUZoQjtPQUFBLE1BQUE7ZUFJQyxLQUFBLENBQU0sSUFBQyxDQUFBLEVBQVAsRUFBVSxJQUFDLENBQUEsRUFBWCxFQUFjLElBQUMsQ0FBQSxFQUFmLEVBSkQ7T0FERDs7RUFETTs7QUEvQlIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUZXh0U2Nyb2xsZXJcclxuXHRjb25zdHJ1Y3RvciA6IChAZHgsQGR5LEBkdyxAZGgsQHRzKSAtPlxyXG5cdFx0QHBnID0gY3JlYXRlR3JhcGhpY3MgMTAwMDAsIEBkaCAjIHdcclxuXHRcdEBkeCA9IE1hdGgucm91bmQgQGR4XHJcblx0XHRAZHkgPSBNYXRoLnJvdW5kIEBkeVxyXG5cdFx0QGR3ID0gTWF0aC5yb3VuZCBAZHdcclxuXHRcdEBkaCA9IE1hdGgucm91bmQgQGRoXHJcblx0XHRAdHMgPSBNYXRoLnJvdW5kIEB0c1xyXG5cclxuXHR1cGRhdGUgOiAodHh0KSAtPlxyXG5cdFx0QHRleHQgPSB0eHRcclxuXHRcdHB1c2goKVxyXG5cdFx0dGV4dFNpemUgQHRzXHJcblx0XHRAdmlzaWJsZSA9IEB0ZXh0ICE9ICcnXHJcblx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG5cdFx0QHNjcm9sbCA9IEBzeiA+IEBkd1xyXG5cdFx0aWYgQHNjcm9sbFxyXG5cdFx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dCArICcg4oCiICdcclxuXHRcdFx0QG1ha2VJbWFnZSBAdGV4dCArICcg4oCiICcgKyBAdGV4dFxyXG5cdFx0XHRAcCA9IDAgXHJcblx0XHRlbHNlXHJcblx0XHRcdEBtYWtlSW1hZ2UgQHRleHRcclxuXHRcdHBvcCgpIFxyXG5cclxuXHRtYWtlSW1hZ2UgOiAodHh0KSAtPlxyXG5cdFx0QHBnLmJhY2tncm91bmQgXCJibGFja1wiXHJcblx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRAcGcuZmlsbCBcImdyYXlcIlxyXG5cdFx0QHBnLnRleHRBbGlnbiBMRUZULENFTlRFUlxyXG5cdFx0QHBnLnRleHQgdHh0LDAsTWF0aC5yb3VuZCBAZGgvMlxyXG5cclxuXHRkcmF3IDogKCkgLT5cclxuXHRcdGlmIEB2aXNpYmxlXHJcblx0XHRcdGlmIEBzY3JvbGxcclxuXHRcdFx0XHRpbWFnZSBAcGcsQGR4LEBkeSxAZHcsQGRoLEBwLDAsQGR3LEBkaFxyXG5cdFx0XHRcdEBwID0gKEBwKzEpICUgQHN6XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRpbWFnZSBAcGcsQGR4LEBkeVxyXG4iXX0=
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScroller.coffee