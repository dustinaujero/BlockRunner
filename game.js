

document.addEventListener("DOMContentLoaded", () => {
    var scene, camera, renderer, player, spotLight;
    var playerDY, playerDX;
    var frame;
    var keyboard = {};
    var cubes = [];
    var yLevels = [0, -1, -1.5, -2, -2.5];
    var game;
    
    const init = () => {
        scene = new THREE.Scene();

        //CAMERA
        camera = new THREE.PerspectiveCamera(50, 1200/720, 0.1, 1000);
        camera.position.set(0, 5, 5);
        frame = 0;
        //CAMERA

        //PLAYER
        const shape = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ color: 0xFF0000});
        player = new THREE.Mesh(shape, material);
        player.position.set(0, -1.5, 0);
        player.castShadow = true;
        player.receiveShadow = true;
        scene.add(player);
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

        playerDY = 0;
        playerDX = 0;
        renderer = new THREE.WebGLRenderer();
        renderer.setSize(1200, 720);
        renderer.physicallyCorrectLights = true;
        document.body.appendChild(renderer.domElement);
        animate();

        

    }   

    const animate = () => {
        
        
        if (player.position.y < -3) {
            player.position.y = -2.3;
        }
        if(keyboard[37]) { //LEFT
            if(player.position.x >= -6) {
                playerDX -= 0.025;
            }
        }
        if (keyboard[39]) { //RIGHT
            if (player.position.x <= 6) {
                playerDX += 0.025;
            }
        }
        if (keyboard[38]) { //UP
            if (player.position.y <= 1) {
                player.position.y += 0.3;
                playerDY = 0.1;
            }
        }
        if (keyboard[40]) { //DOWN
            if (player.position.y >= -2.5) {
            }
        }
        if (++frame % 10 == 0) {
            renderNewCube();
            renderNewCube();
            renderBar();
        }






        playerDY -= 0.009;
        playerDX *= 0.9;
        if (player.position.y >= -2.5) {
            player.position.y += playerDY;
        }
        player.position.x += playerDX;
        camera.position.x = player.position.x * 0.4;
        camera.position.y = player.position.y * 0.4 ;        


        // const playerPos = player.position.clone();
        // const playerXRange = [(player.geometry.vertices[0].x + playerPos.x), (player.geometry.vertices[4].x + playerPos.x)];
        // const playerYRange = [(player.geometry.vertices[0].y + playerPos.y), (player.geometry.vertices[2].y + playerPos.y)];
        // const playerZRange = [(player.geometry.vertices[0].z + playerPos.z), (player.geometry.vertices[1].z + playerPos.z)];

        game = requestAnimationFrame(animate);


        cubes.forEach( cube => {
            if(cube.position.z >= 5) {
                scene.remove(cube);


            } else {
                // const cubePos = cube.position.clone();
                // const cubeVertPos = cube.geometry.vertices.map( vertex => {
                //     vertex.x += cubePos.x;
                //     vertex.y += cubePos.y;
                //     vertex.z += cubePos.z;
                // });
                // debugger
                // cubeVertPos.forEach(vertex => {
                //     if (
                //         vertex.x > playerXRange[0] && vertex.x < playerXRange[1] 
                //         &&
                //         vertex.y > playerYRange[0] && vertex.y < playerYRange[1]
                //         &&
                //         vertex.z > playerZRange[0] && vertex.z < plyaerZRange[1]
                //         ) {
                //             alert("game over");
                //         }
                // });


                cube.position.z += 0.5;
            }
        });

        
        const originPoint = player.position.clone();

        for (let vertexIndex = 0; vertexIndex < player.geometry.vertices.length; vertexIndex++) {
            const localVertex = player.geometry.vertices[vertexIndex].clone();
            const globalVertex = localVertex.applyMatrix4(player.matrix);
            const directionVector = globalVertex.sub(player.position);
            const ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
            const collisionResults = ray.intersectObjects(cubes);
            
            if (collisionResults.length === 1 && collisionResults[0].distance < directionVector.length()) {
                debugger
                cancelAnimationFrame(game);
                collisionResults[0].object.material.transparent = true;
                collisionResults[0].object.material.opacity = 0.4;
                collisionResults[0].object.material.color.setHex(0xFF0000);
            }
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