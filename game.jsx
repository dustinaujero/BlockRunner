
// document.addEventListener("DOMContentLoaded", () => {

//     var keyboard = {};

//     var scene = new THREE.Scene();
//     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//     var renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);



//     var geometry = new THREE.BoxGeometry(1, 1, 1);
//     var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
//     var cube = new THREE.Mesh(geometry, material);
//     scene.add(cube);

//     camera.position.z = 5;

//     function animate() {
//         requestAnimationFrame(animate);

//         cube.rotation.x += 0.01;
//         cube.rotation.y += 0.01;
//         if(keyboard[37]) {
//             console.log("LEFT")
//             cube.rotation.y -= Math.PI * 0.6;
//         }
//         if(keyboard[39]) {
//             console.log("RIGHT")
//             cube.rotation.y += Math.PI * 0.6;
//         }
//         renderer.render(scene, camera);
//     }
//     function onWindowResize() {
//         camera.aspect = window.innerWidth / window.innerHeight;
//         camera.updateProjectionMatrix();
//         renderer.setSize(window.innerWidth, window.innerHeight);
//     }
//     function keydown(e) {
//         keyboard[event.keycode] = true;
//     }
//     function keyup(e) {
//         keyboard[event.keycode] = false;
//     }

//     window.addEventListener('keydown', keydown);
//     window.addEventListener('keyup', keyup);
//     animate();

// });

// import SimplexNoise from 'simplex-noise';
// import * as THREE from 'three';

// document.addEventListener("DOMContentLoaded", () => {
//     let scene;
//     let camera;
//     let renderer;
//     let simplex;
//     let plane;
//     let geometry;
//     let xZoom;
//     let yZoom;
//     let noiseStrength;

//     function setup() {
//         setupNoise();
//         setupScene();
//         setupCamera();
//         setupRenderer();
//         setupPlane();
//         setupLights();
//         setupEventListeners();
//     }

//     function setupNoise() {
//         // By zooming y more than x, we get the
//         // appearence of flying along a valley
//         xZoom = 6;
//         yZoom = 35;
//         noiseStrength = 1.5;
//         simplex = new SimplexNoise();
//     }

//     function setupScene() {
//         scene = new THREE.Scene();
//     }

//     function setupCamera() {
//         let res = window.innerWidth / window.innerHeight;
//     camera = new THREE.PerspectiveCamera(75, res, 0.1, 1000);
//     camera.position.x = 0;
//     camera.position.y = -20;
//     camera.position.z = 3;

//     let controls = new THREE.OrbitControls(camera);
//     }

//     function setupRenderer() {
//         renderer = new THREE.WebGLRenderer({
//             antialias: true
//         });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     }

//     function setupPlane() {
//         let side = 120;
//     geometry = new THREE.PlaneGeometry(40, 40, side, side);
//     let material = new THREE.MeshStandardMaterial({
//         roughness: 0.8,
//     color: new THREE.Color(0x00c500),
//     });
//     plane = new THREE.Mesh(geometry, material);
//     plane.castShadow = true;
//     plane.receiveShadow = true;

//     scene.add(plane);
//     }

//     function setupLights() {
//         let ambientLight = new THREE.AmbientLight(0x0c0c0c);
//     scene.add(ambientLight);

//     let spotLight = new THREE.SpotLight(0xcccccc);
//     spotLight.position.set(-30, 60, 60);
//     spotLight.castShadow = true;
//     scene.add(spotLight);
//     }

//     function setupEventListeners() {
//         window.addEventListener("resize", onWindowResize);
//     }

//     function onWindowResize() {
//         camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     function draw() {
//         requestAnimationFrame(draw);
//     let offset = Date.now() * 0.0004;
//     adjustVertices(offset);
//     adjustCameraPos(offset);
//     renderer.render(scene, camera);
//     }

//     function adjustVertices(offset) {
//     for (let i = 0; i < plane.geometry.vertices.length; i++) {let vertex=plane.geometry.vertices[i]; let x=vertex.x /
//         xZoom; let y=vertex.y / yZoom; let noise=simplex.noise2D(x, y + offset) * noiseStrength; vertex.z=noise; }
//         geometry.verticesNeedUpdate=true; geometry.computeVertexNormals(); } function adjustCameraPos(offset) {let
//         x=camera.position.x / xZoom; let y=camera.position.y / yZoom; let noise=simplex.noise2D(x, y + offset) *
//     noiseStrength + 1.5; camera.position.z=noise; } setup(); draw();

// });


document.addEventListener("DOMContentLoaded", () => {
    var scene, camera, renderer, cube, floor;
    var keyboard = {};

    const init = () => {

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(90, 1200/720, 0.1, 1000)

        const shape = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
        cube = new THREE.Mesh(shape, material);
        scene.add(cube);

        camera.position.set(0,0, 5);
        camera.lookAt(new THREE.Vector3(0,0,0))

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10, 10, 10), new THREE.MeshBasicMaterial({ color: 0xFFFFFF, wireframe: true })
        );
        floor.rotation.x -= Math.PI / 2;
        scene.add(floor)



        renderer = new THREE.WebGLRenderer();
        renderer.setSize(1200, 720);
        document.body.appendChild(renderer.domElement)

        animate();
    }

    const animate = () => {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        if(keyboard[37]) {
            cube.position.x += 0.5;
        }
        if (keyboard[39]) {
            cube.position.x -= 0.5;
        }

        renderer.render(scene, camera)
    }

    const keyDown = (e) => {
        keyboard[e.keyCode] = true;
    }
    const keyUp= (e) => {
        keyboard[e.keyCode] = false;
    }
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    init();
})