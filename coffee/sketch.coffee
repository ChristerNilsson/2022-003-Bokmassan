TITLE = 'Svenska bok- och mediemässan 2022-08-20'
scenes = {}
XOFF = 15 # pixels
YOFF = 56 # pixels
LF = 30

minutes = (hhmm) ->
	h = Math.floor hhmm/100
	m = hhmm % 100
	60*h + m

pretty = (m) ->
	min = m % 60
	m = m - min
	h = m/60
	if h < 10 then h = '0' + h
	if min < 10 then min = '0' + min
	h + ':' + min

timestamp = minutes 1410

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
	textAlign CENTER
	textSize 20
	text TITLE,width/2,30
	pop()

drawGrid = (ts,left) ->
	push()
	for i in range 19
		x = XOFF + i * 10
		line x, YOFF, x, 295
	for i in range 9
		y = 55+LF*i
		line XOFF, y, XOFF+180, y
	textAlign CENTER
	text pretty(left),XOFF,50
	push()
	fill "yellow"
	text pretty(timestamp),XOFF+60+2*ts,50
	pop()
	text pretty(left+90),XOFF+180,50
	stroke "YELLOW"
	line XOFF+60+2*ts, 65-10+1, XOFF+60+2*ts, 294
	pop()

drawBox = (i,event,ts) ->
	hhmm = event[0]
	duration = event[1]
	x = XOFF + 60 + 2*(hhmm-timestamp+ts)
	rect x, LF+40-LF/2+LF*i+4, duration*2, 22
	d = duration+hhmm-timestamp
	if hhmm > timestamp then d = duration
	text d,x+2,LF+60-LF/2+LF*i

findIndex = (events, timestamp) ->
	for index in range events.length
		event = events[index]
		if timestamp <= event[0]+event[1] then return index
	-1

drawHeader = ->
	push()
	xoff = 190
	yoff = 310
	fill "red"
	text "Scen",xoff+10,yoff+7
	fill "yellow"
	text "Start",xoff+45,yoff
	fill "white"
	text "Längd",xoff+77,yoff
	fill "blue"
	text "Event",xoff+115,yoff
	fill "black"
	text "Deltagare",xoff+45,yoff+15
	textAlign CENTER
	text "En ruta = 5 minuter",XOFF+90,yoff+9
	pop()

drawInfo = (ts) ->
	keys = _.keys scenes
	for i in range keys.length
		key = keys[i]
		index = findIndex scenes[key],timestamp
		if index == -1 then return
		event = scenes[key][index]
		drawBox i,event,ts

		push()
		fill "gray"
		sc()
		rect 196,LF/2+41+LF*i,400,LF

		fill "red"
		text key,200,3*LF/4+53+LF*i
		fill "yellow"
		text pretty(event[0]), 215, LF/2+53+LF*i
		fill "white"
		text event[1], 255, LF/2+53+LF*i
		fill "blue"
		text event[2], 280, LF/2+53+LF*i
		fill "black"
		text event[3], 215, LF/2+68+LF*i
		pop()

draw = ->
	bg 0.5
	ts = timestamp % 5
	left = timestamp - ts - 30
	drawTitle()
	drawHeader()
	drawGrid ts,left
	drawInfo ts

mouseClicked = ->
	if mouseY < YOFF
		date = new Date()
		timestamp = minutes 100 * date.getHours() + date.getMinutes()
	else if XOFF < mouseX < XOFF + 180 and YOFF < mouseY < YOFF + 8*LF
		ts = timestamp % 5
		timestamp += Math.round((mouseX-XOFF)/2-ts)-30

setup = ->
	createCanvas 600,340
