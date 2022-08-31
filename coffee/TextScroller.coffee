SEPARATOR = ' • '
twSEP = 0

class TextDisplay
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@dw = Math.round @dw

	update : (text) ->
		@text = text
		@names = @text.split ', '
		if @text.length == 0 then @groups = []
		if @names.length == 1 then @groups = [[0]]
		textSize @ts
		twSEP = textWidth SEPARATOR
		widths = @names.map (name,index) -> [Math.round(textWidth(name)),index]
		widths.sort()
		widths.reverse()
		summa = 0
		for [w,index] in widths
			summa += w
		if summa == 0 then return []
		#if widths.length == 1 then return [[0]]
		@groups = @gruppera widths,@dw
		@groups = @groups.map (group) -> group.sort()

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

	gruppera : (widths,dw) ->
		# prova att få in alla i EN grupp.
		# Går inte det, öka antal grupper
		n = 1
		while true
			groups = []
			for i in range n 
				groups.push [0,[]] # total bredd, indexes
			for i in range widths.length 
				[w,index] = widths[i]
				groups[0][0] += w # bredderna
				groups[0][1].push index # indexen
				groups.sort() # sortera på bredd
			last = groups[groups.length-1] # bredaste gruppen
			if last[0] + (last[1].length-1) * twSEP <= dw
				return groups.map (group) -> group[1] # skippa bredderna
			n++


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
