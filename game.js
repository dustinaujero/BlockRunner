

document.addEventListener("DOMContentLoaded", () => {
    var scene, camera, renderer, cube, spotLight;
    var cubeDY, cubeDX;
    var frame;
    var keyboard = {};
    var cubes = [];
    var yLevels = [0, -1, -1.5, -2, -2.5];
    var game;
    
    const init = () => {
        scene = new THREE.Scene();

        //CAMERA
        camera = new THREE.PerspectiveCamera(50, 1200/720, 0.1, 1000);
        camera.position.set(0, 5, 7);
        frame = 0;
        //CAMERA

        //PLAYER
        const shape = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ color: 0xFF0000});
        cube = new THREE.Mesh(shape, material);
        cube.position.set(0, -1.5, 0);
        cube.castShadow = true;
        cube.receiveShadow = true;
        scene.add(cube);
        //PLAYER
       

        const floor = new THREE.Mesh(
            new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({ color: 0xC8C8C8 })
        );
        floor.rotation.x -= Math.PI / 2;
        floor.position.set(0, -3.1, 0);
        floor.receiveShadow = true;
        floor.castShadow = true;
        scene.add(floor);


        const rightWall = new THREE.Mesh(
            new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false})
        );
        rightWall.rotation.x -= Math.PI / 2;
        rightWall.rotation.y -= Math.PI / 2;
        rightWall.position.set(7, -2, 0);
        rightWall.receiveShadow = true;
        rightWall.castShadow = true;
        scene.add(rightWall);


        const leftWall = new THREE.Mesh(
            new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({ color: 0xC8C8C8, wireframe: false})
        );
        leftWall.rotation.x -= Math.PI / 2;
        leftWall.rotation.y += Math.PI / 2;
        leftWall.position.set(-7, -2, 0);
        leftWall.receiveShadow = true;
        leftWall.castShadow = true;
        scene.add(leftWall);



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
        game = requestAnimationFrame(animate);
        
        if (cube.position.y < -3) {
            cube.position.y = -2.3;
        }
        if(keyboard[37]) { //LEFT
            if(cube.position.x >= -6) {
                cubeDX -= 0.025;
            }
        }
        if (keyboard[39]) { //RIGHT
            if (cube.position.x <= 6) {
                cubeDX += 0.025;
            }
        }
        if (keyboard[38]) { //UP
            if (cube.position.y <= 1) {
                cube.position.y += 0.3;
                cubeDY = 0.1;
            }
        }
        if (keyboard[40]) { //DOWN
            if (cube.position.y >= -2.5) {
            }
        }
        if (++frame % 10 == 0) {
            renderNewCube();
            renderNewCube();
            renderBar();
        }





        cubeDY -= 0.009;
        cubeDX *= 0.9;
        if (cube.position.y >= -2.5) {
            cube.position.y += cubeDY;
        }
        cube.position.x += cubeDX;
        camera.position.x = cube.position.x * 0.2;
        camera.position.y = cube.position.y * 0.4 ;        
        cubes.forEach( cube => {
            if(cube.position.z >= 5) {
                scene.remove(cube)
            } else {
                cube.position.z += 0.5;
            }
        });
        var originPoint = cube.position.clone();
        for (var vertexIndex = 0; vertexIndex < cube.geometry.vertices.length; vertexIndex++) {
            var localVertex = cube.geometry.vertices[vertexIndex].clone();
            var globalVertex = localVertex.applyMatrix4(cube.matrix);
            var directionVector = globalVertex.sub(cube.position);

            var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
            var collisionResults = ray.intersectObjects(cubes);
            if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length())
                cancelAnimationFrame(game);
        }


        
        renderer.render(scene, camera);
    }

    const renderNewCube = () => {

        const shape = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const box = new THREE.Mesh(shape, material);
        cubes.push(box);
        const xCord = (Math.random() * 12) - 6;
        const ySample = yLevels[Math.floor(Math.random() * yLevels.length)];
        box.position.set(xCord, ySample, -50);
        box.castShadow = true;
        box.receiveShadow = true;
        scene.add(box);
    }
    const renderBar = () => {
        if (Math.random() >= 0.95) {
            const shape = new THREE.BoxGeometry(10, 1, 1);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const box = new THREE.Mesh(shape, material);
            cubes.push(box);
            const ySample = yLevels[Math.floor(Math.random() * yLevels.length)];
            const xCord = (Math.random() * 12) - 6;
            box.position.set(xCord, ySample, -50);
            box.castShadow = true;
            box.receiveShadow = true;
            scene.add(box);
        }
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