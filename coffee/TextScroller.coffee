class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@pg = createGraphics 2000, @dh

	update : (txt) ->
		@text = txt
		@visible = @text != ''
		push()
		textSize @ts
		@sz = Math.round textWidth @text
		@scroll = @sz > @dw
		if not @scroll
			@makeImage @text
			@p = null
		else 
			@sz = Math.round textWidth @text + ' • '
			@makeImage @text + ' • ' + @text
			@p = 0
		pop()

	makeImage : (txt) ->
		@pg.background "green"
		@pg.textSize @ts
		@pg.fill "white"
		@pg.textAlign LEFT,CENTER
		@pg.text txt,0,@dh/2

	draw : () ->
		if not @visible then return
		image @pg, 0,@dy-@dh
		if not @scroll
			image @pg, @dx,@dy
		else 
			image @pg, @dx,@dy,@dw,@dh, @p,0,@dw,@dh
			@p = (@p+1) % @sz
