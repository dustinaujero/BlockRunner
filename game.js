
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
    var scene, camera, renderer, cube, floor, spotLight;
    var cubeDY, cubeDX;
    var frame;
    var keyboard = {};
    var cubes = [];
    var counter = 0;
    const init = () => {

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(50, 1200/720, 0.1, 1000);
        frame = 0;

        camera.position.set(0, 5, 10);
        // camera.lookAt(new THREE.Vector3(0,-5, -5));
        camera.lookAt(new THREE.Vector3(0, -20, -100));

        const shape = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff});
        cube = new THREE.Mesh(shape, material);

        cube.position.set(0, -1.5, 0);
        cube.castShadow = true;
        cube.receiveShadow = true;
        
        scene.add(cube);

       

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(15, 150), new THREE.MeshStandardMaterial({ color: 0xC8C8C8 })
        );
        floor.rotation.x -= Math.PI / 2;
        floor.position.set(0, -3.1, 0);
        floor.receiveShadow = true;
        floor.castShadow = true;
        scene.add(floor);

        let ambientLight = new THREE.AmbientLight(0xffffff, 1, 0, 0.1, 0, 1);
        scene.add(ambientLight);

        spotLight = new THREE.SpotLight(0xffffff, 50, 0, 0.3, 0, 1);
        spotLight.position.set(0, 5, 15);
        
        spotLight.castShadow = true;
        spotLight.shadow.mapSize.width = 1024;
        spotLight.shadow.mapSize.height = 1024;



        spotLight.shadow.camera.near = 0.0;
        spotLight.shadow.camera.far = -4000;

        spotLight.lookAt(new THREE.Vector3(0, 5, 0));

        scene.add(spotLight);

        cubeDY = 0;
        cubeDX = 0;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(1200, 720);
        renderer.physicallyCorrectLights = true;
        document.body.appendChild(renderer.domElement);
        animate();

        

    }   

    const animate = () => {
        requestAnimationFrame(animate);
        
        if (cube.position.y < -3) {
            cube.position.y = -2.3;
        }
        if(keyboard[37]) { //LEFT
            if(cube.position.x >= -6) {
                // cube.position.x -= 0.3;
                cubeDX -= 0.025;
            }
        }
        if (keyboard[39]) { //RIGHT
            if (cube.position.x <= 6) {
                // cube.position.x += 0.3;
                cubeDX += 0.025;
            }
        }
        if (keyboard[38]) { //UP
            if (cube.position.y <= 1) {
                cube.position.y += 0.3;
                cubeDY = 0.1;
            }
            // cube.position.y +=
            // keyboard[38] = false;
        }
        if (keyboard[40]) { //DOWN
            if (cube.position.y >= -2.5) {
                // cube.position.y -= 0.3;
                // cubeDY = 1;
            }
        }
        // if (counter % 5 === 0) {
        //     renderNewCube();
        // }
        if (++frame % 10 == 0) {
            renderNewCube();
            renderNewCube2();
        }





        cubeDY -= 0.009;
        cubeDX *= 0.9;
        if (cube.position.y >= -2.5) {
            cube.position.y += cubeDY;
        }
        cube.position.x += cubeDX;
        camera.position.x = cube.position.x * 0.2;
        camera.position.y = cube.position.y * 0.4 + 5;
        cubes.forEach( cube => {
            if(cube.position.z >= 10) {
                scene.remove(cube)
            } else {
                cube.position.z += 0.5;
            }
        });
        
        renderer.render(scene, camera);
    }

    const renderNewCube = () => {

        const shape = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const box = new THREE.Mesh(shape, material);
        cubes.push(box);
        const xCord = (Math.random() * 12) - 6;
        box.position.set(xCord, -1.5, -50);
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add(box);
    }
    const renderNewCube2 = () => {

        const shape = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const box = new THREE.Mesh(shape, material);
        cubes.push(box);
        const xCord = (Math.random() * 12) - 6;
        box.position.set(xCord, 0, -50);
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add(box);
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