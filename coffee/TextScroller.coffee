SEPARATOR = ' • '
twSEP = 0

class TextDisplay
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@dw = Math.round @dw
		@dh = Math.round @dh
		@ts = Math.round @ts
		@pg = createGraphics @dw, @dh * 5 # Klarar ABCAB med scroll

	update : (text) ->
		@text = text
		@names = if text.length==0 then [] else @text.split ', '
		if @names.length == 0 then @groups = []
		if @names.length == 1 then @groups = [[0]]
		textSize @ts
		twSEP = textWidth SEPARATOR
		widths = @names.map (name) -> Math.round(textWidth(name))
		#widths.sort (a,b) -> parseInt(a[0]) - parseInt(b[0])
		#widths.reverse()
		summa = 0
		for w in widths
			summa += w
		if summa == 0 then return []
		@groups = @gruppera widths,@dw
		@groups = @groups.map (group) -> group.sort()
		@groups.sort()

		# skapa image med grupperna A, AB, ABCAB, ABCDAB
		n = @groups.length
		if n < 2 then n+=1 else n+=2
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
				@pg.fill if index == 0 then 'white' else 'gray'
				@pg.text name, wx,wy
				wx += @pg.textWidth name

	draw : () ->
		n = @groups.length
		if n == 0 then return
		if n <= 2
			image @pg, @dx,@dy,@dw,n*@dh, 0,0,@dw,n*@dh
		else
			image @pg, @dx,@dy,@dw,2*@dh, 0,Math.round(@p),@dw,2*@dh
			@p = (@p+0.25) % (@pg.height-2*@dh)

	gruppera : (widths,dw) ->
		# prova att få in alla i först EN, därefter TVÅ grupper
		# Går inte det, öka antal grupper
		n = if widths.length == 1 then 1 else 2
		while true
			[bestGroups,bestSums] = @grupperaRandom widths,n
			lastSum = _.last bestSums # bredaste gruppen
			lastGroup = _.last bestGroups
			if lastSum + (lastGroup.length-1) * twSEP <= dw
				return bestGroups
			n++

	grupperaRandom : (widths,n,m=1000) ->
		# widths = bredderna
		# n = antal grupper
		# m = antal försök
		best = 999999
		for k in range m
			groups = range(n).map -> []
			sums = range(n).map -> 0
			for i in range widths.length
				j = Math.floor(Math.random() * n)
				groups[j].push i
				sums[j] += widths[i]
			sums.sort (a,b) -> parseInt(a) - parseInt(b)
			diff = sums[n-1] - sums[0]
			if diff < best
				best = diff
				bestGroups = groups
				bestSums = sums
		# console.log @names
		# console.log widths
		# console.log bestGroups
		# console.log bestSums
		return [bestGroups,bestSums]
