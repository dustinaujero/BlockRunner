import {setupCamera, setupPlayer, setupLight, setupMap } from './components/setup_game';

document.addEventListener("DOMContentLoaded", () => {
    var scene, camera, renderer, player, spotLight;
    var playerDY, playerDX;
    var frame;
    var keyboard = {};
    var cubes = [];
    var yLevels = [0, -1, -1.5, -2, -2.5];
    var game;
    
    const init = () => {
        frame = 0;
        scene = new THREE.Scene();
        camera = setupCamera();
        player = setupPlayer(scene);
        setupMap(scene);
        spotLight = setupLight(scene, false);

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
            if (player.position.y <= 0) {
                player.position.y += 0.3;
                playerDY = 0.09;
            }
        }
        if (keyboard[40]) { //DOWN
            if (player.position.y >= -2.5) {
            }
        }
        cubes.forEach(cube => {
            if (cube.position.z >= 5) {
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

                if (frame > 3000) {
                    cube.position.z += 0.65;
                }
                else {
                    cube.position.z += 0.5;
                }
            }
        });
        // PHASE 1
        if (++frame % 10 == 0) renderNewCube();

        // PHASE 2
        if (frame > 600 && frame % 10 == 0) renderNewCube();

        // PHASE 3
        if (frame > 1200 && frame % 10 == 0) renderBar();

        // PHASE 4
        if (frame > 1800 && frame % 10 == 0) renderNewSphere();

        // after 50 sec, more chaos
        if (frame > 3000) {
            camera.rotation.z = -player.position.x * 0.07;
            spotLight.position.x = player.position.x;
        };

        // remove cubes from array after 6 sec
        if (frame > 360 && frame % 10 == 0) {
            cubes.shift();
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

        // collision detection
        game = requestAnimationFrame(animate);
        const originPoint = player.position.clone();

        for (let vertexIndex = 0; vertexIndex < player.geometry.vertices.length; vertexIndex++) {
            const localVertex = player.geometry.vertices[vertexIndex].clone();
            const globalVertex = localVertex.applyMatrix4(player.matrix);
            const directionVector = globalVertex.sub(player.position);
            const ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
            const collisionResults = ray.intersectObjects(cubes);
            
            if (collisionResults.length === 1 
                && 
                collisionResults[0].distance < directionVector.length()
                && 
                collisionResults[0].object.position.z > -0.25
                ) {
                debugger
                collisionResults[0].object.material.transparent = true;
                collisionResults[0].object.material.opacity = 0.4;
                collisionResults[0].object.material.color.setHex(0xFF0000);
                
                cancelAnimationFrame(game);

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
    const renderNewSphere = () => {
        if (Math.random() >= 0.7) {
            const shape = new THREE.SphereGeometry(0.5);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const sphere = new THREE.Mesh(shape, material);
            cubes.push(sphere);
            const xCord = (Math.random() * 12) - 6;
            const ySample = yLevels[Math.floor(Math.random() * yLevels.length)];
            sphere.position.set(xCord, ySample, -50);
            sphere.castShadow = true;
            sphere.receiveShadow = true;
            scene.add(sphere);
        }
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