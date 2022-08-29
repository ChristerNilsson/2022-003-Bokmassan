# Bokstavsbaserat, ryckigt!

# class TextScrollerText
# 	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
# 		textSize @ts
# 		@sz = Math.round textWidth @text
# 		if @sz > @dw
# 			@p = 0 
# 			@text = @text + ' • '

# 	draw : () ->
# 		textSize @ts
# 		fill "gray"
# 		textAlign LEFT,CENTER
# 		if @p != null # scroll behövs
# 			if @p==0 then @text = @text.slice(1) + @text.slice 0,1
# 			@p = (@p+1) % 5
# 		text @text,@dx,@dy+0.6*@dh


class TextScrollerText
	constructor : (@dx,@dy,@dw,@dh,@ts,@text) ->
		@arr = @text.split ', '
		textSize @ts
		@sz = Math.round textWidth @text
		if @sz > @dw then @p = 0 # scroll behövs

	draw : () ->
		textSize @ts
		fill "gray"
		textAlign LEFT,CENTER
		if @p != null # scroll behövs
			if @p==0 then @arr.push @arr.shift()
			@p = (@p+1) % 100
		text @arr.join(', '),@dx,@dy+0.6*@dh
