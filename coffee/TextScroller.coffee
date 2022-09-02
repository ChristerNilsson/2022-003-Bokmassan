SEPARATOR = ' • '
twSEP = 0

class TextDisplay
	constructor : (@dx,@dy,@dw,@dh,@ts) ->
		@dw = Math.round @dw
		@dh = Math.round @dh
		@ts = Math.round @ts
		@pg = createGraphics @dw, @dh * 5 # Klarar ABCAB

	update : (text) ->
		@text = text
		@names = if text.length==0 then [] else @text.split ', '
		if @names.length == 0 then @groups = []
		if @names.length == 1 then @groups = [[0]]
		textSize @ts
		twSEP = textWidth SEPARATOR
		widths = @names.map (name,index) -> [Math.round(textWidth(name)),index]
		widths.sort (a,b) -> parseInt(a[0]) - parseInt(b[0])
		widths.reverse()
		summa = 0
		for [w,index] in widths
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
		# prova att få in alla i TVÅ grupper.
		# Går inte det, öka antal grupper
		n = 2
		widths.sort (a,b) -> parseInt(a[0]) - parseInt(b[0]) # annars sorteras strängar
		widths.reverse()
		#console.log @names
		#console.log "widths #{widths}"
		while true
			groups = []
			for i in range n 
				groups.push [0,[]] # total bredd, indexes
			#console.log "groups #{groups}"
			for i in range widths.length 
				[w,index] = widths[i]
				groups[0][0] += w # bredderna
				groups[0][1].push index # indexen
				groups.sort (a,b) -> parseInt(a[0]) - parseInt(b[0])  # sortera på bredd
				#console.log "groups #{groups}"
			last = groups[groups.length-1] # bredaste gruppen
			if last[0] + (last[1].length-1) * twSEP <= dw
				groups = groups.map (group) -> group[1] # skippa bredderna
				#for group in groups
					#console.log "group",group
				return groups
			n++
