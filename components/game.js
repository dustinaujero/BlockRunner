import { setupCamera, setupPlayer, setupLight, setupMap } from './game_setup';

class Game {
    // let scene, camera, renderer, player, spotLight;-
    // let playerDY, playerDX;-------------------------
    // let frame;--------------------------------------
    // let keyboard = {};------------------------------
    // let cubes = [];---------------------------------
    // let yLevels = [0, -1, -1.5, -2, -2.5];----------
    // let game;

    constructor(diffSetting) {
        this.frame = 0;
        this.keyboard = {};
        this.cubes = [];
        this.yLevels = [0, -1, -1.5, -2, -2.5];
        this.diffSetting = diffSetting;


        this.scene = new THREE.Scene();
        this.camera = setupCamera();
        this.player = setupPlayer(this.scene);
        setupMap(this.scene);
        this.spotLight = setupLight(this.scene, false);
        this.playerDY = 0;
        this.playerDX = 0;
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(1200, 720);
        this.renderer.physicallyCorrectLights = true;
        document.body.appendChild(this.renderer.domElement);

        window.addEventListener('keydown', this.keyDown.bind(this));
        window.addEventListener('keyup', this.keyUp.bind(this));

        this.animate = this.animate.bind(this);
    }
    animate() {
        // PLAYER MOVEMENT
        if (this.player.position.y < -3) {
            this.player.position.y = -2.3;
        }
        if (this.keyboard[37] === true 
            || 
            this.keyboard[65] === true
            ) { //LEFT
            if (this.player.position.x >= -3) {
                this.playerDX -= 0.020;
            }
        }
        if (this.keyboard[39] === true
            || 
            this.keyboard[68] === true
            ) { //RIGHT
            if (this.player.position.x <= 3) {
                this.playerDX += 0.020;
            }
        }
        if (this.keyboard[38] === true 
            || 
            this.keyboard[87] === true
            ) { //UP
            if (this.player.position.y <= 0) {
                this.player.position.y += 0.3;
                this.playerDY = 0.09;
            }
        }
        if (this.keyboard[40] === true 
            || 
            this.keyboard[83] === true
            ) { //DOWN
            if (this.player.position.y >= -2.5) {
                this.player.position.y -= 0.2;
            }
        }
        // PLAYER MOVEMENT

        // CUBE MOVEMENT
        this.cubes.forEach(cube => {
            if (cube.position.z >= 5) {
                this.scene.remove(cube);
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
                switch (this.diffSetting) {
                    case 1: {
                        cube.position.z += 0.5;
                        break;
                    }
                    case 2: {
                        cube.position.z += 0.8;
                        break;
                    }
                    case 3: {
                        cube.position.z += 1;
                        break;
                    }
                    case 4: {
                        cube.position.z += 1.3;
                        break;
                    }
                    case 5: {
                        cube.position.z += 1.7;
                        break;
                    }
                }
                if (this.frame > 3000) {
                    cube.position.z += 0.65;
                }
                if (this.frame > 5400) {
                    cube.position.z += 0.3;
                }
            }
        });
        // CUBE MOVEMENT

        // PHASE 1
        if (++this.frame % 10 == 0) this.renderNewCube();

        // PHASE 2
        if (this.rame > 600 && this.frame % 10 == 0) this.renderNewCube();

        // PHASE 3
        if (this.frame > 1200 && this.frame % 10 == 0) this.renderBar();

        // PHASE 4
        if (this.frame > 1800 && this.frame % 10 == 0) this.renderNewSphere();

        // after 50 sec, more chaos
        if (this.frame > 3000) {
            this.camera.rotation.z = -this.player.position.x * 0.07;
            this.spotLight.position.x = this.player.position.x;
        };

        // remove cubes from array after 6 sec
        if (this.frame > 360 && this.frame % 10 == 0) {
            this.cubes.shift();
        }

        // X FRICTION
        this.playerDX *= 0.9;


        // GRAVITY
        this.playerDY -= 0.009;
        
        if (this.player.position.y >= -2.5) {
            this.player.position.y += this.playerDY;
        }

        // CAMERA FOLLOWS PLAYER
        this.player.position.x += this.playerDX;
        this.camera.position.x = this.player.position.x * 0.4;
        this.camera.position.y = this.player.position.y * 0.4;



        // const playerPos = player.position.clone();
        // const playerXRange = [(player.geometry.vertices[0].x + playerPos.x), (player.geometry.vertices[4].x + playerPos.x)];
        // const playerYRange = [(player.geometry.vertices[0].y + playerPos.y), (player.geometry.vertices[2].y + playerPos.y)];
        // const playerZRange = [(player.geometry.vertices[0].z + playerPos.z), (player.geometry.vertices[1].z + playerPos.z)];

        // collision detection
        const game = requestAnimationFrame(this.animate);
        const originPoint = this.player.position.clone();
        for (let vertexIndex = 0; vertexIndex < this.player.geometry.vertices.length; vertexIndex++) {
            const localVertex = this.player.geometry.vertices[vertexIndex].clone();
            const globalVertex = localVertex.applyMatrix4(this.player.matrix);
            const directionVector = globalVertex.sub(this.player.position);
            const ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
            const collisionResults = ray.intersectObjects(this.cubes);
            if (collisionResults.length === 1
                &&
                collisionResults[0].distance < directionVector.length()
                &&
                collisionResults[0].object.position.z > -0.25
            ) {
                collisionResults[0].object.material.transparent = true;
                collisionResults[0].object.material.opacity = 0.4;
                collisionResults[0].object.material.color.setHex(0xFF0000);
                cancelAnimationFrame(game);
            }
        }
        this.renderer.render(this.scene, this.camera);
    }
    renderNewCube() {

        const shape = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const box = new THREE.Mesh(shape, material);
        this.cubes.push(box);
        const xCord = (Math.random() * 12) - 6;
        const ySample = this.yLevels[Math.floor(Math.random() * this.yLevels.length)];
        box.position.set(xCord, ySample, -50);
        box.castShadow = true;
        box.receiveShadow = true;
        this.scene.add(box);
    }
    renderNewSphere() {
        if (Math.random() >= 0.8) {
            const shape = new THREE.SphereGeometry(0.5);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const sphere = new THREE.Mesh(shape, material);
            this.cubes.push(sphere);
            const xCord = (Math.random() * 12) - 6;
            const ySample = this.yLevels[Math.floor(Math.random() * this.yLevels.length)];
            sphere.position.set(xCord, ySample, -50);
            sphere.castShadow = true;
            sphere.receiveShadow = true;
            this.scene.add(sphere);
        }
    }
    renderBar() {
        if (Math.random() >= 0.95) {
            const shape = new THREE.BoxGeometry(10, 1, 1);
            const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
            const box = new THREE.Mesh(shape, material);
            this.cubes.push(box);
            const ySample = this.yLevels[Math.floor(Math.random() * this.yLevels.length)];
            const xCord = (Math.random() * 12) - 6;
            box.position.set(xCord, ySample, -50);
            box.castShadow = true;
            box.receiveShadow = true;
            this.scene.add(box);
        }
    }

    keyDown(e) {
        this.keyboard[e.keyCode] = true;
    }
    keyUp(e) {
        this.keyboard[e.keyCode] = false;
    }
};
export default Game;