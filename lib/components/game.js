import { setupCamera, setupPlayer, setupLight, setupMap } from './game_setup';

class Game {

    constructor(diffSetting, windowWidth) {
        this.frame = 0;
        this.keyboard = {};
        this.cubes = [];
        this.yLevels = [0, -1, -1.5, -2, -2.5];
        this.diffSetting = diffSetting;
        this.score = 0;
        this.uiScore = document.getElementById("score");
        this.scene = new THREE.Scene();
        this.camera = setupCamera();
        this.player = setupPlayer(this.scene);
        setupMap(this.scene);
        this.spotLight = setupLight(this.scene, false);
        this.playerDY = 0;
        this.playerDX = 0;
        this.renderer = new THREE.WebGLRenderer();
        // this.renderer.setSize(windowWidth*0.7, (windowWidth*0.40));
        this.renderer.setSize(window.innerWidth * 0.5, window.innerWidth * 0.278);
        this.renderer.physicallyCorrectLights = true;
        document.body.appendChild(this.renderer.domElement);
        window.addEventListener('keydown', this.keyDown.bind(this));
        window.addEventListener('keyup', this.keyUp.bind(this));

        this.animate = this.animate.bind(this);
        this.detectCollision =  this.detectCollision.bind(this);
    }
    animate() {
        // PLAYER MOVEMENT
        if (this.keyboard[37] === true 
            ||
            this.keyboard[65] === true
            ) { //LEFT
            if (this.player.position.x >= -3) {
                this.playerDX -= 0.020 + (this.diffSetting * 0.005);
            }
        }
        if (this.keyboard[39] === true
            ||
            this.keyboard[68] === true
            ) { //RIGHT
            if (this.player.position.x <= 3) {
                this.playerDX += 0.020 + (this.diffSetting * 0.005);
            }
        }
        if (this.keyboard[38] === true 
            ||
            this.keyboard[87] === true
            ) { //UP
            if (this.player.position.y <= 0) {
                this.player.position.y += 0.3;
                this.playerDY = 0.09 + (this.diffSetting * 0.005);
            }
        }
        if (this.keyboard[40] === true 
            ||
            this.keyboard[83] === true
            ) { //DOWN
            if (this.player.position.y >= -2.5) {
                this.player.position.y -= 0.2 + (this.diffSetting * 0.005);
            }
        }
        // PLAYER MOVEMENT

        // CUBE MOVEMENT
        this.cubes.forEach(cube => {
            if (cube.position.z >= 5) {
                this.scene.remove(cube);
            } else {
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
                    cube.position.z += 0.3;
                }
                if (this.frame > 5400) {
                    cube.position.z += 0.3;
                }
            }
        });
        //SCORE
        if (this.frame % 60 === 0) {
            this.uiScore.innerHTML = `Score: ${this.score++}`
        }
        //SCORE

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
        this.playerDX *= 0.9 + (this.diffSetting * 0.005);

        // GRAVITY
        this.playerDY -= 0.009 + (this.diffSetting * 0.005);
        
        if (this.player.position.y >= -2.5) {
            this.player.position.y += this.playerDY;
        }

        // CAMERA FOLLOWS PLAYER
        this.player.position.x += this.playerDX;
        this.camera.position.x = this.player.position.x * 0.4;
        this.camera.position.y = this.player.position.y * 0.4;

        // collision detection
        const game = requestAnimationFrame(this.animate);
        this.detectCollision(this.player, game);
        this.renderer.render(this.scene, this.camera);
    }
    detectCollision(player, game) {
        const originPoint = player.position.clone();
        let collisionDetected = true;
        for (let vertexIndex = 0; vertexIndex < player.geometry.vertices.length; vertexIndex++) {
            const localVertex = player.geometry.vertices[vertexIndex].clone();
            const globalVertex = localVertex.applyMatrix4(player.matrix);
            const directionVector = globalVertex.sub(player.position);
            const ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());
            const collisionResults = ray.intersectObjects(this.cubes);
            if (collisionResults.length === 1
                &&
                collisionResults[0].distance < directionVector.length()
                &&
                collisionResults[0].object.position.z > -0.25
                &&
                collisionDetected
            ) {
                collisionResults[0].object.material.transparent = true;
                collisionResults[0].object.material.opacity = 0.4;
                collisionResults[0].object.material.color.setHex(0xFF0000);
                cancelAnimationFrame(game);
                const name = prompt("What is your name?");
                database.ref().push({
                    name: name,
                    score: this.score
                })
                const scores = [];
                const list = document.createElement('ul');
                const highscores = document.getElementById("highscores");
                const oldList = highscores.childNodes[1];

                const compare = (b, a) => {
                    if (a.score < b.score) {
                        return -1;
                    }
                    if (a.score > b.score) {
                        return 1;
                    }
                    return 0;
                }

                database.ref().orderByChild("score").limitToLast(3).on("value", function (snapshot) {
                    snapshot.forEach(function (childSnapshot) {
                        const name = childSnapshot.val().name;
                        const score = childSnapshot.val().score;
                        scores.push({ name, score });
                    });
                    scores.sort(compare);
                    for (let i = 0; i <= scores.length - 1; i++) {
                        const listItem = document.createElement("li");
                        listItem.innerHTML = `${i + 1}. ` + " " + scores[i].name + " - " + scores[i].score;

                        list.appendChild(listItem);
                    }
                })
                highscores.replaceChild(list, oldList);
                collisionDetected = false;
            }
        }
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