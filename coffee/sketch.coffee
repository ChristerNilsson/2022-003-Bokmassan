TITLE0 = 'Svenska bok- och mediemässan'
TITLE1 = '2022-08-20 A'
scenes = {}
SCENES = 0
XOFF = 0 # pixels
YOFF = 0 # pixels
DX = 0
DY = 0
FIRST = 0 # första musklickets x-koordinat
N = 24 # antal fem minuters perioder
img = null
scrollers = []

lastTouchEnded = 0
released = true
startX = 0
startY = 0
prevTimestamp = 0 
lastTimestamp = 0

avslutade = 0
pågående = 0
kommande = 0
p = 0

minutes = (hhmm) ->
	h = Math.floor hhmm/100
	m = hhmm % 100
	60*h + m

pretty = (m) -> # pretty(67) = "01:07"
	m = m %% (24*60)
	min = m % 60
	m = m - min
	h = m/60
	if h < 10 then h = '0' + h
	if min < 10 then min = '0' + min
	h + ':' + min

autonomous = true 
timestamp = minutes 1512

event = (scen,lst) ->
	lst[0] = minutes lst[0]
	scenes[scen] ||= []
	scenes[scen].push lst

event 'S1',[1100,15,"Tal","Carl Lundström"] 
event 'S1',[1120,45,"P1. Migrationspolitik","Lennart Matikainen, Arne Weinz, Hans Jensevik, Stefan Torssell, Evelina Hahne"] 
event 'S1',[1215,40,"P6. Kriminalitet","Axel W Karlsson, Alexander Söderberg, Nils Littorin, Conny Andersson, Nick Alinia"] 
event 'S1',[1300,20,"Tal","Mikael Willgert"] 
event 'S1',[1330,35,"P2. Energipolitik/Kärnkraft","Peder Bokenhielm, Li Sam Björk, Jan Berger, Alexander Pohl"] 
event 'S1',[1410,10,"Tal","Tobbe Larsson"] 
event 'S1',[1425,45,"P3. Nato","Roger Richthoff, Johan Lindblad, Oscar Overgaard, Ulf Sandmark, Jeff Ahl"] 
event 'S1',[1545,10,"Tal","Arne Weinz"]
event 'S1',[1600,40,"P5. Klimatfrågan","Gösta Wallin, Staffan Mörner, Sture Åström, Alfred Westh"]
event 'S1',[1650,10,"P4. Ekonomi","Henrik Sundin"]

event 'S2',[1130,40,"P1. Demonstrationer","Max Winter, Håkan Bergmark, Johan Widén, Pierre Tinderfjäll, Emilia Ögell"]
event 'S2',[1220,10,"Tal","Eva Donell"]
event 'S2',[1235,35,"P3. Intresseorganisationer","Ingrid Carlqvist, Peder Bokenhielm, René Malmgren, Andreas Hultén"]
event 'S2',[1320,10,"Tal","Alfred Westh"]
event 'S2',[1335,50,"P4. Rörelser","Marianne Liljeholt, Miranda Törnqvist, Glenn Dormer, Mikael Cromsjö, Alfred Westh, Maneka Helleberg"]
event 'S2',[1510,10,"HMF-Medalj utdelning","Rasmus Paludan"]
event 'S2',[1525,10,"Tal","Robert Mathiasson"]
event 'S2',[1540,35,"P2. Nätverk","David Bergqvist, Tobbe Larsson, Eva Donell, Andreas Jansson"]
event 'S2',[1625,10,"Tal","Jonas Nilsson"]
event 'S2',[1650,10,"P4. Alternativmedier","Carl Lundström"]

event 'S3',[1140,40,"P2. Organisationer","Johan Lindblad, Mikael Fjällid, Jesper Johansson, Aida Reva, Love Romert"]
event 'S3',[1230,45,"P5. Agenda 2030 och","Carl Lundström, Hans Erixon, Torbjörn Holkner, Sture Åström, Gustav Kasselstrand"]
event 'S3',[1335,50,"P3. Metoder","Alexander, Helen Osieja, Felicia Eriksson, Johannes Haddad, Robert Rosenkvist, Fabian Fjälling"]
event 'S3',[1435,25,"Livepodd","Jonas Nilsson, Anton Stigermark"]
event 'S3',[1505,10,"Tal","Nils Littorin"]
event 'S3',[1520,35,"P4. Övervakningsmetoder","Rikard Högberg, Åke blomdahl, Lena Ohlson, Ingemar Ljungqvist"]
event 'S3',[1615,35,"P1. Personer","Johan Lindblad, Stefan Torsell, Tommy Ulmnäs, Christian Peterson, Mattias Dahlgren"]

event 'S4',[1225,30,"D3. Ryssland eller Ukraina?","Arne Weinz, Izabella Jarvandi, Gösta Wallin, Erik Almqvist"]
event 'S4',[1305,20,"D1. Abortfrågan","Nick Alinia, Johanna Carsbrant, Miranda Törnqvist"]
event 'S4',[1335,25,"D6. Mångkultur för/emot?","Izabella Jarvandi, Karl-Olov Arnstberg, Andreas Sidkvist"]
event 'S4',[1410,25,"D10. Uthängningar eller inte?","Izabella Jarvandi, Christian Peterson, Robert Mathiason"]
event 'S4',[1445,20,"D8. AI Hot eller möjlighet?","Izabella Jarvandi, Tobbe Larsson, Mikael Cromsjö"]
event 'S4',[1515,30,"D9. Klimatbluff eller reellt hot?","Izabella Jarvandi, Lars Bern, Alfred Westh"]
event 'S4',[1555,20,"D7. Bränna koranen","Christian Peterson, Rasmus Paludan, Tobbe Larsson"]
event 'S4',[1625,30,"D5. NATO för/emot?","Izabella Jarvandi, Roger Richthoff, Tage Perntz"]

event 'S5',[1140,45,"Personporträtt 2","Zoia Zakariasdotter, Ylva Franzén"]
event 'S5',[1235,40,"Personporträtt 4","Jan Tullberg"]
event 'S5',[1325,40,"Personporträtt 5","Lars Bern"]
event 'S5',[1415,40,"Personporträtt 3","Selma Gamaleldin"]
event 'S5',[1505,40,"Personporträtt 6","Patrik Engellau"]
event 'S5',[1555,40,"Personporträtt 1","Carl Lundström"]
event 'S5',[1645,15,"Inblick med Nick","Nick Alinia, Rasmus Paludan"]

event 'S6',[1235,35,"Ek4. Elpriserna","Magnus Stenlund, Jan Blomgren"]
event 'S6',[1320,30,"Ek3. Räntorna","Peter Albelin"]
event 'S6',[1400,30,"Ek2. Investeringar","Henrik Sundin"]
event 'S6',[1455,30,"Ek5. Matpriserna","Olle Felten"]
event 'S6',[1535,30,"Ek1. Inflationen","Jan Tullberg"]
event 'S6',[1615,30,"Ek6. Skatterna","Micael Hamberg"]

event 'S7',[1220,30,"Parti8. Nix to the Six","Emilia Ögell, Hans Jensevik"]
event 'S7',[1300,15,"Parti6. Nyttiga Svenne","Emilia Ögell, Ylva Franzén & Johan Lindblad"]
event 'S7',[1325,30,"Parti1. AfS","Erik Almqvist, Gustav Kasselstrand, Andreas Feymark"]
event 'S7',[1400,25,"Parti10. Europeiska Arbetarpartiet","Erik Almqvist, Kjell Sundqvist"]
event 'S7',[1435,15,"Parti9. Partiet Frihet","Emilia Ögell, Max Winter & Natalie Jonsson"]
event 'S7',[1500,30,"Parti4. MOD","Erik Almqvist, Andreas Sidqvist"]
event 'S7',[1535,30,"Parti7. Malmölistan","Erik Almqvist, Nils Littorin"]
event 'S7',[1615,25,"Parti11. Direktdemokraterna","Erik Almqvist, Lotte Johansson"]
event 'S7',[1650,10,"Parti5. Kristna Värdepartiet","Emilia Ögell"]

event 'S8',[1145,20,"Film","Ingrid Carlqvist"]
event 'S8',[1210,10,"Fotograf","Lotte Johansson"]
event 'S8',[1225,20,"TV-spel","William Hahne"]
event 'S8',[1250,20,"Film","Jonas Nilsson"]
event 'S8',[1320,25,"Musik","Ulf Bejerstrand"]
event 'S8',[1355,20,"Musik","Martina Edoff"]
event 'S8',[1415,5,"Sång","David Berg"]
event 'S8',[1425,20,"Film","Jon Rekdahl"]
event 'S8',[1450,10,"Konst","Åke Blomdahl"]
event 'S8',[1505,10,"Konst","Dan Park"]
event 'S8',[1525,30,"Musik","Fredrik Larsson, Joakim"]
event 'S8',[1605,25,"Musik","Miqael Hicks"]
event 'S8',[1635,25,"Författare","Einar Askestad"]

drawTitle = ->
	push()
	fill 'darkgray'
	textAlign RIGHT
	textSize 0.04 * height
	text TITLE1,width,0.25*YOFF
	text TITLE0,width,0.75*YOFF
	pop()

rutnät = ->
	push()
	stroke 'darkgray'
	textSize 0.02*height
	for i in range N+1
		x = XOFF + i * DX
		line x, YOFF, x, YOFF+SCENES*DY
	for i in range SCENES+1
		y = YOFF + DY*i
		line XOFF, y, XOFF+N*DX, y
	pop()

tider = (ts,left) ->
	push()
	textSize 0.04 * height
	fill "darkgray"
	text pretty(left),XOFF,0.6*DY
	push()
	x = XOFF+N/2*DX+DX/5*ts
	fill "yellow"
	textAlign CENTER
	date = new Date()
	if autonomous
		fill "yellow"
		s = date.getSeconds()
		if s<10 then s = '0' + s
		text pretty(timestamp)+':'+s,x,0.6*DY
	else
		fill "darkgray"
		text pretty(timestamp),x,0.6*DY
	pop()
	textAlign RIGHT
	fill "darkgray"
	text pretty(left+120),XOFF+N*DX,0.6*DY
	stroke "YELLOW"
	line x, YOFF, XOFF+N/2*DX+DX/5*ts, YOFF+SCENES*DY
	pop()

drawGrid = (ts,left) ->
	rutnät()
	tider ts,left

drawBox = (i,event,ts,j) ->
	hhmm = event[0]
	duration = event[1]
	push()
	x = XOFF + N/2*DX + DX * (hhmm-timestamp+ts)/5

	if event[0] > timestamp 
		fill "lightgreen"
		kommande++
	else if event[0]+event[1] <= timestamp 
		fill "red"
		avslutade++
	else
		fill "yellow"
		pågående++

	rect x, YOFF + 0.15*DY + DY*i, duration/5*DX, 0.7*DY, 6
	d = duration + hhmm - timestamp
	if hhmm > timestamp then d = duration
	if d > 0 
		textSize 0.04*height
		textAlign CENTER,CENTER
		fill "black"
		text d,x+duration/5*DX/2, YOFF + 0.55*DY + DY*i
	pop()

findIndex = (events, timestamp) ->
	for index in range events.length
		event = events[index]
		if timestamp < event[0]+event[1] then return index
	-1

drawHeader = ->
	push()
	textSize 0.04 * height
	xoff = XOFF + N*DX
	yoff = 0

	fill "red"
	text avslutade + " avslutade", XOFF, 0.3*DY

	textAlign CENTER
	fill "darkgray"
	textStyle ITALIC
	#text "En ruta = 5 min",XOFF+N/4*DX, 0.4*DY
	#text "Svep för att byta tid",XOFF+3*N/4*DX, 0.4*DY
	textStyle NORMAL

	fill 'yellow'
	text pågående + " pågående", XOFF+N/2*DX, 0.3*DY
	
	textAlign RIGHT
	fill "lightgreen"
	text kommande + " kommande", xoff, 0.3*DY

	x0 = XOFF + N*DX + 0.4*DX
	x1 = x0 + textWidth '  Scen'
	x2 = x1 + textWidth '  Start'
	x3 = x2 + textWidth '  Längd'
	x4 = x3 + textWidth '  Event'

	y = yoff + 0.2*DY

	textAlign LEFT
	fill "red"
	text "Scen", x0, y
	fill "yellow"
	text "Start",x1, y
	fill "white"
	text "Längd",x2, y
	fill "lightblue"
	text "Event",x3, y

	fill "darkgray"
	text "Deltagare",x0, yoff + 0.6*DY

	text 

	pop()

createScrollers = () ->
	scrollers = []
	keys = _.keys scenes
	for i in range keys.length
		key = keys[i]
		index = findIndex scenes[key],timestamp
		event = scenes[key][index]

		if index != -1
			xoff = XOFF + N*DX
			textsize = 0.04 * height
			x0 = xoff + 0.4 * DX
			y0 = YOFF + 0.4 * DY + DY*i
			y1 = y0 + 0.07 * DY
			scrollers.push new TextScroller x0, y1, width/2, 1.3 * textsize, textsize, event[3]

drawInfo = (ts) ->
	avslutade = 0
	pågående = 0
	kommande = 0 

	keys = _.keys scenes
	for i in range keys.length
		key = keys[i]
		index = findIndex scenes[key],timestamp

		event = scenes[key][index]
		for j in range _.size scenes[key]
			drawBox i,scenes[key][j],ts

		if index != -1
			xoff = XOFF + N*DX
			push()
			textSize 0.04*height
			fill "black"
			sc()
			rect xoff+2, YOFF+DY*i,width,DY
			y0 = YOFF + 0.35 * DY + DY*i
			y1 = y0 + 0.35 * DY
			#y2 = y1 + 0.3 * DY

			x0 = xoff + 0.4 * DX
			x1 = x0 + textWidth '  ' + key
			x2 = x1 + textWidth '  ' + pretty event[0]
			x3 = x2 + textWidth '  ' + event[1]

			textAlign LEFT,CENTER
			fill "red"
			text key, x0, y0
			fill "yellow"
			text pretty(event[0]), x1, y0
			fill "white"
			text event[1], x2, y0
			fill "lightblue"
			text event[2], x3, y0

			pop()

	for scroller in scrollers
		scroller.draw()

newdraw = ->
	background "black"
	for scroller in scrollers
		scroller.draw()

draw = ->
	bg 0
	if autonomous
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
	ts = timestamp % 5
	left = timestamp - ts - 60
	if lastTimestamp != timestamp 
		lastTimestamp = timestamp
		createScrollers()
	drawTitle()
	drawGrid ts,left
	drawInfo ts
	drawHeader()
	size = 0.1*width
	image img,10,height-1.1*size,size,size

touchStarted = (event) ->
	event.preventDefault()
	lastTouchStarted = new Date()
	if not released then return 

	if XOFF < mouseX < XOFF + N*DX and YOFF < mouseY < YOFF + SCENES*DY
	else
		autonomous = true
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
		released = true
		return

	released = false
	startX = mouseX
	startY = mouseY
	prevTimestamp = timestamp
	false

touchMoved = (event) ->
	event.preventDefault()
	if released then return
	autonomous = false 
	ts = 0 #timestamp % 5
	timestamp = prevTimestamp - Math.round((mouseX-startX)*5/DX-ts) # - 60
	timestamp = timestamp %% (24*60)
	timestamp = timestamp - timestamp % 5
	false

touchEnded = (event) ->
	event.preventDefault()
	if (new Date()) - lastTouchEnded < 500
		lastTouchEnded = new Date()
		return # to prevent double bounce
	if released then return
	released = true
	false

preload = ->
	img = loadImage 'qr-code.png'

setup = ->
	displaywidth = 150
	textsize = 20
	scrollers = []
	#pixelDensity 1
	createCanvas innerWidth,innerHeight
	# frameRate 10
	SCENES = _.size scenes
	DX = Math.round 0.02 * width
	DY = 0.9 * height/SCENES
	XOFF = 0.0 * DX # pixels
	YOFF = 0.8 * DY # pixels
