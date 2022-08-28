class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		textSize @ts
		if window.navigator.userAgent.indexOf('Windows' != -1)
			faktor=0.5
		else
			faktor=0.25
		@sz = Math.round textWidth @text
		if @sz <= @dw # scroll behövs ej
			@pg = createGraphics @dw,@dh
			@pg.background "green"
			@pg.textSize faktor * @ts
			@pg.fill "gray"
			@pg.textAlign LEFT,CENTER
			@pg.text @text,0,0.5*@dh
		else # scroll behövs
			@sz = Math.round textWidth @text + ' • '
			@pg = createGraphics @sz + @dw + 100, @dh
			@pg.background "green"
			@pg.textSize faktor * @ts
			@pg.fill "gray"
			@pg.textAlign LEFT,CENTER
			@pg.text @text + ' • ' + @text,0,0.5*@dh
			@p = 0

	draw : () ->
		if @p == null # scroll behövs ej
			image @pg,@dx,@dy
		else # scrolla
			sx = @p
			sy = 0
			sw = @dw
			sh = @dh

			image @pg,0,@dy+@dh

			#image @pg, @dx, @dy

			image @pg,@dx,@dy,@dw,@dh,sx,sy,sw,sh

			@p = (@p+1) % @sz
