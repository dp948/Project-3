let poem=['T', 'u','r','n','i','n','g','space','a','n','d','space' ,'t','u','r','n','i','n','g', 'space','i','n','space' ,'t','h','e','space' ,'w','i','d','e','n','i','n','g', 'space','g','y','r','e', 'T','h','e','space', 'f','a','l','c','o','n', 'space','c','a','n','n','o','t', 'space','h','e','a','r','space' ,'t','h','e', 'space','f','a','l','c','o','n','e','r', 'space','T','h','i','n','g','s','space' ,'f','a','l','l', 'space','a','p','a','r','t', 'space','t','h','e','space' ,'c','e','n','t','r','e', 'space','c','a','n','n','o','t', 'space','h','o','l','d','space','M','e','r','e', 'space','a','n','a','r','c','h','y', 'space','i','s','space' ,'l','o','o','s','e','d','space' ,'u','p','o','n','space' ,'t','h','e','space' ,'w','o','r','l','d', 'space','T','h','e', 'space','b','l','o','o','d','d','i','m','m','e','d','space' ,'t','i','d','e','space' ,'i','s', 'space','l','o','o','s','e','d','space' ,'a','n','d','space' ,'e','v','e','r','y','w','h','e','r','e','space' ,'T','h','e','space' ,'c','e','r','e','m','o','n','y', 'space','o','f', 'space','i','n','n','o','c','e','n','c','e', 'space','i','s','space' ,'d','r','o','w','n','e','d','space' ,'T','h','e', 'space','b','e','s','t', 'space','l','a','c','k', 'space','a','l','l', 'space','c','o','n','v','i','c','t','i','o','n','space' ,'w','h','i','l','e','space' ,'t','h','e','space' ,'w','o','r','s','t','space' ,'A','r','e','space' ,'f','u','l','l', 'space','o','f', 'space','p','a','s','s','i','o','n','a','t','e', 'space','i','n','t','e','n','s','i','t','y', 'space', 'space']
let thefont

function preload(){
thefont=	loadFont('CourierPrime-Bold.ttf')
}

function setup() {
	let m = min(windowWidth, windowHeight)
	createCanvas(m , m);
	
	textFont(thefont)
	
}
function draw(){
background("#FBF6EE");
let alphabetP=0	
let fspeed= frameCount/20
let flaming
let spacing= width/40
let hSpacing= width/80
let bigT= width/18
let littleT= width/36
for(let y=10; y<height-10; y+=12){
	flaming= map(y, height, 0, 0.2, 0.8)
