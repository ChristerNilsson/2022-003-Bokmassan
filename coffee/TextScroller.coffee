SEPARATOR = ' • '
twSEP = 0

class TextDisplay
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@dw = Math.round @dw

	update : (text) ->
		@text = text
		@names = @text.split ', '
		textSize @ts
		twSEP = textWidth SEPARATOR
		widths = @names.map (name,index) -> [Math.round(textWidth(name)),index]
		widths.sort()
		widths.reverse()
		console.log "widths #{widths}, #{@dw}"
		@groups = @gruppera widths,@dw
		console.log "groups #{@groups}"

	draw : () ->
		textAlign LEFT,CENTER
		textSize @ts
		date = new Date()
		if @groups.length == 0 then return
		group = @groups[date.getSeconds() % @groups.length]
		w = @dx
		for i in range group.length 
			index = group[i]
			name = @names[index]
			if i<group.length-1 then name += SEPARATOR
			if index == 0 then fill 'white' else fill 'gray'
			text name, w,@dy+@dh/2
			w += textWidth name 

	moveZeroFirst = (groups) ->
		groups.map (group) -> 
			group.sort()
			group

	gruppera : (widths,dw) ->
		groups = []
		for i in range widths.length 
			[w,index] = widths[i]
			if w == 999999 then continue 
			cw = w
			temp = [index]
			for j in range i+1,widths.length
				[wj,indexj] = widths[j]
				if wj == 999999 then continue
				console.log cw + wj + temp.length * twSEP, dw 
				if cw + wj + temp.length * twSEP <= dw 
					cw += wj
					temp.push indexj
					widths[j] = [999999,indexj]
			if temp.length > 0 then groups.push temp
		groups = moveZeroFirst groups
		groups

# class TextScroller
# 	constructor : (@dx,@dy,@dw,@dh,@ts) ->
# 		# Observera: iOS + image kräver heltal för parametrarna
# 		@dx = Math.round @dx
# 		@dy = Math.round @dy
# 		@dw = Math.round @dw
# 		@dh = Math.round @dh
# 		@ts = Math.round @ts
# 		@pg = createGraphics 10000, @dh # w

# 	update : (txt) ->
# 		@text = txt
# 		push()
# 		textSize @ts
# 		@visible = @text != ''
# 		@sz = Math.round textWidth @text
# 		@scroll = @sz > @dw
# 		if @scroll
# 			@sz = Math.round textWidth @text + ' • '
# 			@makeImage @text + ' • ' + @text
# 			@p = 0 
# 		else
# 			@makeImage @text
# 		pop() 

# 	makeImage : (txt) ->
# 		@pg.background "black"
# 		@pg.textSize @ts
# 		@pg.fill "gray"
# 		@pg.textAlign LEFT,CENTER
# 		@pg.text txt,0,Math.round @dh/2

# 	draw : () ->
# 		if @visible
# 			if @scroll
# 				image @pg,@dx,@dy,@dw,@dh,@p,0,@dw,@dh
# 				@p = (@p+1) % @sz
# 			else
# 				image @pg,@dx,@dy
