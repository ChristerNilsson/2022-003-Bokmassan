class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@pg = createGraphics 2000, @dh

	update : (txt) ->
		@text = txt
		push()
		textSize @ts
		@sz = Math.round textWidth @text
		if @sz <= @dw # scroll behövs ej
			@makeImage @text
			@p = null
		else # scrolla
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
		if @p == null # scroll behövs ej
			image @pg, @dx,@dy
		else # scrolla
			image @pg, @dx,@dy,@dw,@dh, @p,0,@dw,@dh
			@p = (@p+1) % @sz
