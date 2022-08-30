class TextScroller
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@pg = createGraphics 10000, @dh # w

	update : (txt) ->
		@text = txt
		push()
		textSize @ts
		@visible = @text != ''
		@sz = Math.round textWidth @text
		@scroll = @sz > @dw
		if @scroll
			@sz = Math.round textWidth @text + ' • '
			@makeImage @text + ' • ' + @text # @sz+@dw+100
			@p = 0 
		else
			@makeImage @text
		pop() 

	makeImage : (txt) ->
		#if not @draw then return
		@pg.background "green"
		@pg.textSize @ts
		@pg.fill "black"
		@pg.textAlign LEFT,CENTER
		@pg.text txt,0,@dh/2

	draw : () ->
		if @visible
			if @scroll
				image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
				@p = (@p+1) % @sz
			else
				image @pg,@dx,@dy





# class TextScroller
# 	constructor : (@dx,@dy,@dw,@dh,@ts) ->
# 		@pg = createGraphics 10000, @dh  # 2000

# 	update : (txt) ->
# 		@text = txt
# 		@visible = @text != ''
# 		push()
# 		textSize @ts
# 		@sz = Math.round textWidth @text
# 		@scroll = @sz > @dw
# 		if @scroll
# 			@sz = Math.round textWidth @text + ' • '
# 			@makeImage @text + ' • ' + @text
# 			@p = 0
# 		else
# 			@makeImage @text
# 			@p = null
# 		pop()

# 	makeImage : (txt) ->
# 		@pg.background "green"
# 		@pg.textSize @ts
# 		@pg.fill "white"
# 		@pg.textAlign LEFT,CENTER
# 		@pg.text txt,0,@dh/2

# 	draw : () ->
# 		# push()
# 		# textSize @ts
# 		# rect @dx,@dy,@dw,@dh
# 		# textAlign LEFT,CENTER
# 		# text "#{@visible} #{@scroll} #{@text}",@dx,@dy+@dh/2
# 		# pop()

# 		push()
# 		if @visible
# 			image @pg, 0,@dy-@dh
# 			if @scroll
# 				image @pg, @dx,@dy,@dw,@dh, @p,0,@dw,@dh
# 				@p = (@p+1) % @sz
# 			else
# 				image @pg, @dx,@dy
# 		pop()