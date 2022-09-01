SEPARATOR = ' • '
twSEP = 0

class TextDisplay
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@dw = Math.round @dw
		@dh = Math.round @dh
		@ts = Math.round @ts

	update : (text) ->
		@text = text
		if text.length==0 
			@names = []
		else
			@names = @text.split ', '
		if @names.length == 0 then @groups = []
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
		@groups = @gruppera widths,@dw
		@groups = @groups.map (group) -> group.sort()
		@groups.sort()

		# skapa image med grupperna A, ABA, ABCA...
		n = @groups.length
		if n > 1 then n++ 
		@pg = createGraphics @dw, @dh * n
		@pg.textSize @ts
		@pg.background "black"
		@p = 0
		for i in range n
			group = @groups[i % @groups.length]
			wx = 0
			wy = (i + 0.8) * @dh
			for j in range group.length 
				index = group[j]
				name = @names[index]
				if j < group.length-1 then name += SEPARATOR
				if index == 0 then @pg.fill 'white' else @pg.fill 'gray'
				@pg.text name, wx,wy
				wx += @pg.textWidth name

	draw : () ->
		n = @groups.length
		if n == 0 then return
		if n <= 2
			image @pg, @dx,@dy,@dw,n*@dh, 0,0,@dw,n*@dh
		else
			image @pg, @dx,@dy,@dw,@dh, 0,Math.round(@p),@dw,@dh
			@p = (@p+0.5) % (@pg.height-@dh)

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
