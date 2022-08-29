class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		push()
		textSize @ts
		@sz = Math.round textWidth @text
		if @sz <= @dw # scroll behövs ej
			@doit @dw, @text
		else # scrolla
			@sz = Math.round textWidth @text + ' • '
			@doit @sz+@dw+100, @text + ' • ' + @text
			@p = 0 
		pop()

	doit : (w,txt) ->
		@pg = createGraphics w, @dh
		@pg.background "black"
		@pg.textSize @ts
		@pg.fill "lightgray"
		@pg.textAlign LEFT,CENTER
		@pg.text txt,0,@dh/2

	draw : () ->
		if @p == null # scroll behövs ej
			image @pg,@dx,@dy
		else # scrolla
			image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
			@p = (@p+1) % @sz


# class TextScroller
# 	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
# 		push()
# 		textSize @ts
# 		faktor = 0.5
# 		# if window.navigator.userAgent.indexOf('Windows' != -1)
# 		# 	faktor=0.5
# 		# else
# 		# 	faktor=0.25
# 		@sz = Math.round textWidth @text
# 		if @sz <= @dw # scroll behövs ej
# 			@pg = createGraphics @dw,@dh
# 			#@pg.pixelDensity 1
# 			@pg.background "green"
# 			@pg.textSize @ts
# 			@pg.fill "gray"
# 			@pg.textAlign LEFT,CENTER
# 			@pg.text @text,0,faktor*@dh
# 		else # scroll behövs
# 			@sz = Math.round textWidth @text + ' • '
# 			@pg = createGraphics @sz + @dw + 100, @dh
# 			#@pg.pixelDensity 1
# 			@pg.background "green"
# 			@pg.textSize @ts
# 			@pg.fill "gray"
# 			@pg.textAlign LEFT,CENTER
# 			@pg.text @text + ' • ' + @text,0,faktor*@dh
# 			@p = 0 
# 		pop()

# 	draw : () ->
# 		if @p == null # scroll behövs ej
# 			image @pg,@dx,@dy
# 		else # scrolla
# 			sx = @p
# 			sy = 0
# 			sw = @dw
# 			sh = @dh

# 			image @pg,0,@dy+@dh

# 			#image @pg, @dx, @dy

# 			image @pg,@dx,@dy,@dw,@dh,sx,sy,sw,sh

# 			@p = (@p+1) % @sz
