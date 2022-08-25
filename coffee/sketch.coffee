TITLE = 'Svenska bok- och mediemässan 2022-08-20'
scenes = {}
SCENES = 0
XOFF = 0 # pixels
YOFF = 0 # pixels
DX = 0
DY = 0
N = 24
img = null

minutes = (hhmm) ->
	h = Math.floor hhmm/100
	m = hhmm % 100
	60*h + m

pretty = (m) -> # pretty(67) = "01:07"
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

event 'S1',[1425,45,"P3. Nato","Roger Richthoff, Johan Lindblad, Oscar Overgaard, Ulf Sandmark, Jeff Ahl"] 
event 'S1',[1545,10,"Tal","Arne Weinz"]
event 'S1',[1600,40,"P5. Klimatfrågan","Gösta Wallin"]
event 'S1',[1650,10,"P4. Ekonomi","Henrik Sundin"]

event 'S2',[1510,10,"HMF-Medalj utdelning","Rasmus Paludan"]
event 'S2',[1525,10,"Tal","Robert Mathiasson"]
event 'S2',[1540,35,"P2. Nätverk","David Bergqvist"]
event 'S2',[1625,10,"Tal","Jonas Nilsson"]
event 'S2',[1650,10,"P4. Alternativmedier","Carl Lundström"]

event 'S3',[1505,10,"Tal","Nils Littorin"]
event 'S3',[1520,35,"P4. Övervakningsmetoder","Rikard Högberg"]
event 'S3',[1615,35,"P1. Personer","Johan Lindblad"]

event 'S4',[1515,30,"D9. Klimatbluff eller reellt hot?","Izabella Jarvandi"]
event 'S4',[1555,20,"D7. Bränna koranen","Christian Peterson"]
event 'S4',[1625,30,"D5. NATO för/emot?","Izabella Jarvandi"]

event 'S5',[1505,40,"Personporträtt 6","Patrik Engellau"]
event 'S5',[1555,40,"Personporträtt 1","Carl Lundström"]
event 'S5',[1645,15,"Inblick med Nick","Nick Alinia"]

event 'S6',[1455,30,"Ek5. Matpriserna","Olle Felten"]
event 'S6',[1535,30,"Ek1. Inflationen","Jan Tullberg"]
event 'S6',[1615,30,"Ek6. Skatterna","Micael Hamberg"]

event 'S7',[1500,30,"Parti4. MOD","Erik Almqvist"]
event 'S7',[1535,30,"Parti7. Malmölistan","Erik Almqvist, Nils Littorin"]
event 'S7',[1615,25,"Parti11. Direktdemokraterna","Erik Almqvist, Lotte Johansson"]
event 'S7',[1650,10,"Parti5. Kristna Värdepartiet","Emilia Ögell"]

event 'S8',[1505,10,"Konst","Dan Park"]
event 'S8',[1525,30,"Musik","Fredrik Larsson, Joakim"]
event 'S8',[1605,25,"Musik","Miqael Hicks"]
event 'S8',[1635,25,"Författare","Einar Askestad"]

drawTitle = ->
	push()
	textAlign RIGHT
	textSize 0.02*width
	text TITLE,0.995*width,0.8*YOFF
	pop()

drawGrid = (ts,left) ->
	push()
	textSize 0.02*height
	for i in range N+1
		x = XOFF + i * DX
		line x, YOFF, x, YOFF+SCENES*DY
	for i in range SCENES+1
		y = YOFF + DY*i
		line XOFF, y, XOFF+N*DX, y
	text pretty(left),XOFF,0.4*DY
	push()
	x = XOFF+N/2*DX+DX/5*ts
	fill "yellow"
	textAlign CENTER
	text pretty(timestamp),x,0.4*DY
	pop()
	textAlign RIGHT
	text pretty(left+120),XOFF+N*DX,0.4*DY
	stroke "YELLOW"
	line x, YOFF, XOFF+N/2*DX+DX/5*ts, YOFF+SCENES*DY
	pop()

drawBox = (i,event,ts) ->
	hhmm = event[0]
	duration = event[1]
	push()
	x = XOFF + N/2*DX + DX * (hhmm-timestamp+ts)/5
	rect x, YOFF + 0.25*DY + DY*i, duration/5*DX, 0.5*DY
	d = duration + hhmm - timestamp
	if hhmm > timestamp then d = duration
	textSize 0.02*height
	textAlign CENTER
	text d,x+duration/5*DX/2, YOFF + 0.6*DY + DY*i
	pop()

findIndex = (events, timestamp) ->
	for index in range events.length
		event = events[index]
		if timestamp <= event[0]+event[1] then return index
	-1

drawHeader = ->
	push()
	textSize 0.02 * height
	xoff = XOFF + N*DX
	yoff = 0

	text "En ruta motsvarar fem minuter",XOFF, 0.2*DY

	fill "red"
	text "Scen",xoff + 0.4*DX, yoff + 0.2*DY
	fill "yellow"
	text "Start",xoff + 3.4*DX, yoff + 0.2*DY
	fill "white"
	text "Längd",xoff + 6.2*DX, yoff + 0.2*DY
	fill "blue"
	text "Event",xoff + 10*DX, yoff + 0.2*DY

	fill "black"
	text "Deltagare",xoff + 0.4*DX, yoff + 0.4*DY

	pop()

drawInfo = (ts) ->
	keys = _.keys scenes
	for i in range keys.length
		key = keys[i]
		index = findIndex scenes[key],timestamp
		if index == -1 then return
		event = scenes[key][index]
		drawBox i,event,ts
		xoff = XOFF + N*DX

		push()
		textSize 0.03*height
		fill "gray"
		sc()
		rect xoff+2, YOFF+DY*i,width,DY
		y = YOFF + 0.45*DY + DY*i

		fill "red"
		text key, xoff+0.4*DX, y
		fill "yellow"
		text pretty(event[0]), xoff+3.4*DX, y
		fill "white"
		text event[1], xoff+8*DX, y
		fill "blue"
		text event[2], xoff+10.5*DX, y

		fill "black"
		text event[3], xoff+0.4*DX, YOFF + 0.75*DY + DY*i
		pop()

draw = ->
	bg 0.5
	if autonomous # autonomous
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
	ts = timestamp % 5
	left = timestamp - ts - 60
	drawTitle()
	drawHeader()
	drawGrid ts,left
	drawInfo ts
	w = 0.1 * width
	h = 0.2 * height
	image img,width-w-5,height-h-5,w,h

mouseClicked = ->
	if mouseY < YOFF and autonomous == false
		autonomous = true
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
	else if XOFF < mouseX < XOFF + N*DX and YOFF < mouseY < YOFF + SCENES*DY
		autonomous = false 
		ts = timestamp % 5
		timestamp += Math.round((mouseX-XOFF)*5/DX-ts) - 60

preload = ->
	img = loadImage 'qr-code.png'

setup = ->
	createCanvas window.innerWidth,window.innerHeight
	SCENES = _.size scenes
	DX = Math.round 0.01 * width
	DY = 0.93 * height/SCENES
	XOFF = 0.5 * DX # pixels
	YOFF = 0.45 * DY # pixels
	console.log SCENES
