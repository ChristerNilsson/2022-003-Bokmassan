// Generated by CoffeeScript 2.5.1
var TextScroller;

TextScroller = class TextScroller {
  constructor(dx, dy, dw, dh, ts, text) {
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.ts = ts;
    this.text = text;
    textSize(this.ts);
    this.sz = Math.round(textWidth(this.text));
    if (this.sz <= this.dw) { // scroll behövs ej
      this.pg = createGraphics(this.dw, this.dh);
      this.pg.background("green");
      this.pg.textSize(this.ts);
      this.pg.fill("gray");
      this.pg.text(this.text, 0, 0.8 * this.dh); // scroll behövs
    } else {
      this.sz = Math.round(textWidth(this.text + ' • '));
      this.pg = createGraphics(this.sz + this.dw + 100, this.dh);
      this.pg.background("green");
      this.pg.textSize(this.ts);
      this.pg.fill("gray");
      this.pg.text(this.text + ' • ' + this.text, 0, 0.8 * this.dh);
      this.p = 0;
    }
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGV4dFNjcm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii4uIiwic291cmNlcyI6WyJjb2ZmZWVcXFRleHRTY3JvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLElBQUE7O0FBQU0sZUFBTixNQUFBLGFBQUE7RUFDQyxXQUFjLEdBQUEsSUFBQSxJQUFBLElBQUEsSUFBQSxNQUFBLENBQUE7SUFBQyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFBRyxJQUFDLENBQUE7SUFDbkMsUUFBQSxDQUFTLElBQUMsQ0FBQSxFQUFWO0lBQ0EsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFJLENBQUMsS0FBTCxDQUFXLFNBQUEsQ0FBVSxJQUFDLENBQUEsSUFBWCxDQUFYO0lBQ04sSUFBRyxJQUFDLENBQUEsRUFBRCxJQUFPLElBQUMsQ0FBQSxFQUFYO01BQ0MsSUFBQyxDQUFBLEVBQUQsR0FBTSxjQUFBLENBQWUsSUFBQyxDQUFBLEVBQWhCLEVBQW1CLElBQUMsQ0FBQSxFQUFwQjtNQUNOLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBSixDQUFlLE9BQWY7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFFBQUosQ0FBYSxJQUFDLENBQUEsRUFBZDtNQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLE1BQVQ7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxJQUFDLENBQUEsSUFBVixFQUFlLENBQWYsRUFBaUIsR0FBQSxHQUFJLElBQUMsQ0FBQSxFQUF0QixFQUxEO0tBQUEsTUFBQTtNQU9DLElBQUMsQ0FBQSxFQUFELEdBQU0sSUFBSSxDQUFDLEtBQUwsQ0FBVyxTQUFBLENBQVUsSUFBQyxDQUFBLElBQUQsR0FBUSxLQUFsQixDQUFYO01BQ04sSUFBQyxDQUFBLEVBQUQsR0FBTSxjQUFBLENBQWUsSUFBQyxDQUFBLEVBQUQsR0FBTSxJQUFDLENBQUEsRUFBUCxHQUFZLEdBQTNCLEVBQWdDLElBQUMsQ0FBQSxFQUFqQztNQUNOLElBQUMsQ0FBQSxFQUFFLENBQUMsVUFBSixDQUFlLE9BQWY7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLFFBQUosQ0FBYSxJQUFDLENBQUEsRUFBZDtNQUNBLElBQUMsQ0FBQSxFQUFFLENBQUMsSUFBSixDQUFTLE1BQVQ7TUFDQSxJQUFDLENBQUEsRUFBRSxDQUFDLElBQUosQ0FBUyxJQUFDLENBQUEsSUFBRCxHQUFRLEtBQVIsR0FBZ0IsSUFBQyxDQUFBLElBQTFCLEVBQStCLENBQS9CLEVBQWlDLEdBQUEsR0FBSSxJQUFDLENBQUEsRUFBdEM7TUFDQSxJQUFDLENBQUEsQ0FBRCxHQUFLLEVBYk47O0VBSGE7O0VBa0JkLElBQU8sQ0FBQSxDQUFBO0FBQ1IsUUFBQSxFQUFBLEVBQUEsRUFBQSxFQUFBLEVBQUEsRUFBQTtJQUFFLElBQUcsSUFBQyxDQUFBLENBQUQsS0FBTSxJQUFUO2FBQ0MsS0FBQSxDQUFNLElBQUMsQ0FBQSxFQUFQLEVBQVUsSUFBQyxDQUFBLEVBQVgsRUFBYyxJQUFDLENBQUEsRUFBZixFQUREO0tBQUEsTUFBQTtNQUdDLEVBQUEsR0FBSyxJQUFDLENBQUE7TUFDTixFQUFBLEdBQUs7TUFDTCxFQUFBLEdBQUssSUFBQyxDQUFBO01BQ04sRUFBQSxHQUFLLElBQUMsQ0FBQTtNQUVOLEtBQUEsQ0FBTSxJQUFDLENBQUEsRUFBUCxFQUFVLENBQVYsRUFBWSxJQUFDLENBQUEsRUFBRCxHQUFJLElBQUMsQ0FBQSxFQUFqQixFQUxIOztNQVNHLEtBQUEsQ0FBTSxJQUFDLENBQUEsRUFBUCxFQUFVLElBQUMsQ0FBQSxFQUFYLEVBQWMsSUFBQyxDQUFBLEVBQWYsRUFBa0IsSUFBQyxDQUFBLEVBQW5CLEVBQXNCLElBQUMsQ0FBQSxFQUF2QixFQUEwQixFQUExQixFQUE2QixFQUE3QixFQUFnQyxFQUFoQyxFQUFtQyxFQUFuQzthQUVBLElBQUMsQ0FBQSxDQUFELEdBQUssQ0FBQyxJQUFDLENBQUEsQ0FBRCxHQUFHLENBQUosQ0FBQSxHQUFTLElBQUMsQ0FBQSxHQWRoQjs7RUFETTs7QUFuQlIiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUZXh0U2Nyb2xsZXJcclxuXHRjb25zdHJ1Y3RvciA6IChAZHgsQGR5LEBkdyxAZGgsQHRzLEB0ZXh0KSAtPlxyXG5cdFx0dGV4dFNpemUgQHRzXHJcblx0XHRAc3ogPSBNYXRoLnJvdW5kIHRleHRXaWR0aCBAdGV4dFxyXG5cdFx0aWYgQHN6IDw9IEBkdyAjIHNjcm9sbCBiZWjDtnZzIGVqXHJcblx0XHRcdEBwZyA9IGNyZWF0ZUdyYXBoaWNzIEBkdyxAZGhcclxuXHRcdFx0QHBnLmJhY2tncm91bmQgXCJncmVlblwiXHJcblx0XHRcdEBwZy50ZXh0U2l6ZSBAdHNcclxuXHRcdFx0QHBnLmZpbGwgXCJncmF5XCJcclxuXHRcdFx0QHBnLnRleHQgQHRleHQsMCwwLjgqQGRoXHJcblx0XHRlbHNlICMgc2Nyb2xsIGJlaMO2dnNcclxuXHRcdFx0QHN6ID0gTWF0aC5yb3VuZCB0ZXh0V2lkdGggQHRleHQgKyAnIOKAoiAnXHJcblx0XHRcdEBwZyA9IGNyZWF0ZUdyYXBoaWNzIEBzeiArIEBkdyArIDEwMCwgQGRoXHJcblx0XHRcdEBwZy5iYWNrZ3JvdW5kIFwiZ3JlZW5cIlxyXG5cdFx0XHRAcGcudGV4dFNpemUgQHRzXHJcblx0XHRcdEBwZy5maWxsIFwiZ3JheVwiXHJcblx0XHRcdEBwZy50ZXh0IEB0ZXh0ICsgJyDigKIgJyArIEB0ZXh0LDAsMC44KkBkaFxyXG5cdFx0XHRAcCA9IDBcclxuXHJcblx0ZHJhdyA6ICgpIC0+XHJcblx0XHRpZiBAcCA9PSBudWxsICMgc2Nyb2xsIGJlaMO2dnMgZWpcclxuXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHlcclxuXHRcdGVsc2UgIyBzY3JvbGxhXHJcblx0XHRcdHN4ID0gQHBcclxuXHRcdFx0c3kgPSAwXHJcblx0XHRcdHN3ID0gQGR3XHJcblx0XHRcdHNoID0gQGRoXHJcblxyXG5cdFx0XHRpbWFnZSBAcGcsMCxAZHkrQGRoXHJcblxyXG5cdFx0XHQjaW1hZ2UgQHBnLCBAZHgsIEBkeVxyXG5cclxuXHRcdFx0aW1hZ2UgQHBnLEBkeCxAZHksQGR3LEBkaCxzeCxzeSxzdyxzaFxyXG5cclxuXHRcdFx0QHAgPSAoQHArMSkgJSBAc3pcclxuIl19
//# sourceURL=c:\github\2022-003-Bokmassan\coffee\TextScroller.coffee