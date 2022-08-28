class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		textSize @ts
		@sz = Math.round textWidth @text
		if @sz <= @dw # scroll behövs ej
			@pg = createGraphics @dw,@dh
			@pg.background "black"
			@pg.textSize @ts
			@pg.fill "gray"
			@pg.text @text,0,0.8*@dh
		else # scroll behövs
			@sz = Math.round textWidth @text + ' • '
			@pg = createGraphics @sz + @dw + 100, @dh
			@pg.background "black"
			@pg.textSize @ts
			@pg.fill "gray"
			@pg.text @text + ' • ' + @text,0,0.8*@dh
			@p = 0

	draw : () ->
		if @p == null # scroll behövs ej
			image @pg,@dx,@dy
		else # scrolla
			sx = @p
			sy = 0
			sw = @dw
			sh = @dh

			image @pg,@dx,@dy,@dw,@dh,sx,sy,sw,sh

			@p = (@p+1) % @sz
