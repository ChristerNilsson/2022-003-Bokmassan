class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@pg = createGraphics 10000, @dh # w
		@dx = Math.round @dx
		@dy = Math.round @dy
		@dh = Math.round @dh
		@ts = Math.round @ts

	update : (txt) ->
		@text = txt
		push()
		textSize @ts
		@visible = @text != ''
		@sz = Math.round textWidth @text
		@scroll = @sz > @dw
		if @scroll
			@sz = Math.round textWidth @text + ' • '
			@makeImage @text + ' • ' + @text
			@p = 0 
		else
			@makeImage @text
		pop() 

	makeImage : (txt) ->
		@pg.background "black"
		@pg.textSize @ts
		@pg.fill "gray"
		@pg.textAlign LEFT,CENTER
		@pg.text txt,0,@dh/2

	draw : () ->
		if @visible
			if @scroll
				image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
				@p = (@p+1) % @sz
			else
				image @pg,@dx,@dy
