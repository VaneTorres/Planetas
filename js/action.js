//variable de la esena basica
var renderer, scene,camera,luz;
//Variables de los objetos
var geometry,material,mesh,texture,loader;
function init() {
	createRenderer();
	createScene();
	createCamera();
	createlight();
	createMercury();
	createPluto();
	createEarth();
	createJupiter();
	createNeptune();
	Renderer(); 
}

function createRenderer(){
	renderer= new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);
	renderer.shadowMap.enabled=true; //Sombras
	document.body.appendChild(renderer.domElement);
}

function createScene(){
	scene= new THREE.Scene();
	scene.background = new THREE.Color( 0xffffff );
}

function createCamera(){
	camera=new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight,0.1,1000);
	camera.position.z=70;
}

function createlight(){
	var luzDireccional = new THREE.DirectionalLight(0xffffff,1);
	luzDireccional.position.set(0,0,10);
	scene.add(luzDireccional);
	var luzAmbiental = new THREE.AmbientLight(0x111111);
	scene.add(luzAmbiental);
}

function createMercury(){
	geometry = new THREE.SphereGeometry( 5, 20, 20);
	material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../img/mercury/mercurymap.jpg') } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(-60,0,-50);
	scene.add( mesh );
}

function createPluto(){
	geometry = new THREE.SphereGeometry( 3, 32, 32);
	material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../img/pluto/plutomap1k.jpg') } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(60,0,-50);
	scene.add( mesh );
}

function createEarth(){
	geometry = new THREE.SphereGeometry(8, 32, 32);
	material = materialEarth();
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(-35,0,-50);
	mesh.castShadow = true;
	scene.add( mesh );
}

function materialEarth(){

	texture= new THREE.Texture();
	loader= new THREE.ImageLoader();
	loader.load('../img/earth/earthmap1k.jpg',function(image){
		texture.image=image;
		texture.needsUpdate=true;
	});
	var specularTexture= new THREE.Texture( );
	loader= new THREE.ImageLoader();
	loader.load('../img/earth/earthspec1k.jpg',function(image){
		specularTexture.image=image;
		specularTexture.needsUpdate=true;
	});
	var earthMaterial= new THREE.MeshPhongMaterial( );
	earthMaterial.map= texture;
	earthMaterial.specularMap=specularTexture;
	earthMaterial.specular= new THREE.Color( 0x262626 );
	return earthMaterial;
}

function createJupiter(){
	geometry = new THREE.SphereGeometry( 15, 50, 50);
	material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../img/jupiter/jupitermap.jpg') } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set(0,0,-50);
	scene.add( mesh );
}

function createNeptune(){
	geometry = new THREE.SphereGeometry( 10, 32, 32);
	material = new THREE.MeshPhongMaterial( { map: THREE.ImageUtils.loadTexture('../img/neptune/neptunemap.jpg') } );
	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set (35,0,-50);
	scene.add( mesh );
}

function Renderer(){
	renderer.render(scene,camera);
	requestAnimationFrame(Renderer);
}

init();
