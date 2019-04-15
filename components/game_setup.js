export const setupCamera = () => {
    const camera = new THREE.PerspectiveCamera(50, 1200 / 720, 0.1, 1000);
    camera.position.set(0, 5, 5);
    return camera;
};

export const setupPlayer = (scene) => {
    const shape = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0xFF0000 });
    const player = new THREE.Mesh(shape, material);
    player.position.set(0, -1.5, 0);
    player.castShadow = true;
    player.receiveShadow = true;
    scene.add(player);
    return player;
};

export const setupLight = (scene, ambientLight) => {
    if (ambientLight) {
        const amb = new THREE.AmbientLight(0xffffff, 1, 0, 0.1, 0, 1);
        scene.add(amb);
    }
    const spotLight = new THREE.SpotLight(0xffffff, 50, 0, 0.3, 0, 1);
    spotLight.position.set(0, 5, 15);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 1024;
    spotLight.shadow.mapSize.height = 1024;
    spotLight.shadow.camera.near = 0.0;
    spotLight.shadow.camera.far = -4000;
    spotLight.lookAt(new THREE.Vector3(0, 5, 0));
    scene.add(spotLight);    
    return spotLight;
};

export const setupMap = (scene) => {
    const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({ color: 0xC8C8C8 })
    );
    floor.rotation.x -= Math.PI / 2;
    floor.position.set(0, -3.1, 0);
    floor.receiveShadow = true;
    floor.castShadow = true;
    scene.add(floor);


    const rightWall = new THREE.Mesh(
        new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({ color: 0xffffff, wireframe: false })
    );
    rightWall.rotation.x -= Math.PI / 2;
    rightWall.rotation.y -= Math.PI / 2;
    rightWall.position.set(7, -2, 0);
    rightWall.receiveShadow = true;
    rightWall.castShadow = true;
    scene.add(rightWall);


    const leftWall = new THREE.Mesh(
        new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({ color: 0xC8C8C8, wireframe: false })
    );
    leftWall.rotation.x -= Math.PI / 2;
    leftWall.rotation.y += Math.PI / 2;
    leftWall.position.set(-7, -2, 0);
    leftWall.receiveShadow = true;
    leftWall.castShadow = true;
    scene.add(leftWall);
}