/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./game.js":
/*!*****************!*\
  !*** ./game.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// import SimplexNoise from 'simplex-noise';\n// import * as THREE from 'three';\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     let scene;\n//     let camera;\n//     let renderer;\n//     let simplex;\n//     let plane;\n//     let geometry;\n//     let xZoom;\n//     let yZoom;\n//     let noiseStrength;\n//     function setup() {\n//         setupNoise();\n//         setupScene();\n//         setupCamera();\n//         setupRenderer();\n//         setupPlane();\n//         setupLights();\n//         setupEventListeners();\n//     }\n//     function setupNoise() {\n//         // By zooming y more than x, we get the\n//         // appearence of flying along a valley\n//         xZoom = 6;\n//         yZoom = 35;\n//         noiseStrength = 1.5;\n//         simplex = new SimplexNoise();\n//     }\n//     function setupScene() {\n//         scene = new THREE.Scene();\n//     }\n//     function setupCamera() {\n//         let res = window.innerWidth / window.innerHeight;\n//     camera = new THREE.PerspectiveCamera(75, res, 0.1, 1000);\n//     camera.position.x = 0;\n//     camera.position.y = -20;\n//     camera.position.z = 3;\n//     let controls = new THREE.OrbitControls(camera);\n//     }\n//     function setupRenderer() {\n//         renderer = new THREE.WebGLRenderer({\n//             antialias: true\n//         });\n//     renderer.setSize(window.innerWidth, window.innerHeight);\n//     document.body.appendChild(renderer.domElement);\n//     }\n//     function setupPlane() {\n//         let side = 120;\n//     geometry = new THREE.PlaneGeometry(40, 40, side, side);\n//     let material = new THREE.MeshStandardMaterial({\n//         roughness: 0.8,\n//     color: new THREE.Color(0x00c500),\n//     });\n//     plane = new THREE.Mesh(geometry, material);\n//     plane.castShadow = true;\n//     plane.receiveShadow = true;\n//     scene.add(plane);\n//     }\n//     function setupLights() {\n//         let ambientLight = new THREE.AmbientLight(0x0c0c0c);\n//     scene.add(ambientLight);\n//     let spotLight = new THREE.SpotLight(0xcccccc);\n//     spotLight.position.set(-30, 60, 60);\n//     spotLight.castShadow = true;\n//     scene.add(spotLight);\n//     }\n//     function setupEventListeners() {\n//         window.addEventListener(\"resize\", onWindowResize);\n//     }\n//     function onWindowResize() {\n//         camera.aspect = window.innerWidth / window.innerHeight;\n//     camera.updateProjectionMatrix();\n//     renderer.setSize(window.innerWidth, window.innerHeight);\n//     }\n//     function draw() {\n//         requestAnimationFrame(draw);\n//     let offset = Date.now() * 0.0004;\n//     adjustVertices(offset);\n//     adjustCameraPos(offset);\n//     renderer.render(scene, camera);\n//     }\n//     function adjustVertices(offset) {\n//     for (let i = 0; i < plane.geometry.vertices.length; i++) {let vertex=plane.geometry.vertices[i]; let x=vertex.x /\n//         xZoom; let y=vertex.y / yZoom; let noise=simplex.noise2D(x, y + offset) * noiseStrength; vertex.z=noise; }\n//         geometry.verticesNeedUpdate=true; geometry.computeVertexNormals(); } function adjustCameraPos(offset) {let\n//         x=camera.position.x / xZoom; let y=camera.position.y / yZoom; let noise=simplex.noise2D(x, y + offset) *\n//     noiseStrength + 1.5; camera.position.z=noise; } setup(); draw();\n// });\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var scene, camera, renderer, cube, floor, spotLight;\n  var cubeDY, cubeDX;\n  var frame;\n  var keyboard = {};\n  var cubes = [];\n  var counter = 0;\n\n  var init = function init() {\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(50, 1200 / 720, 0.1, 1000);\n    frame = 0;\n    camera.position.set(0, 5, 10); // camera.lookAt(new THREE.Vector3(0,-5, -5));\n    // camera.lookAt(new THREE.Vector3(0, -20, -100));\n\n    var shape = new THREE.BoxGeometry(0.5, 0.5, 0.5);\n    var material = new THREE.MeshStandardMaterial({\n      color: 0xffffff\n    });\n    cube = new THREE.Mesh(shape, material);\n    cube.position.set(0, -1.5, 0);\n    cube.castShadow = true;\n    cube.receiveShadow = true;\n    scene.add(cube);\n    var floor = new THREE.Mesh(new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({\n      color: 0xC8C8C8\n    }));\n    floor.rotation.x -= Math.PI / 2;\n    floor.position.set(0, -3.1, 0);\n    floor.receiveShadow = true;\n    floor.castShadow = true;\n    scene.add(floor);\n    var rightWall = new THREE.Mesh(new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({\n      color: 0xffffff,\n      wireframe: false\n    }));\n    rightWall.rotation.x -= Math.PI / 2;\n    rightWall.rotation.y -= Math.PI / 2;\n    rightWall.position.set(7, -2, 0);\n    rightWall.receiveShadow = true;\n    rightWall.castShadow = true;\n    scene.add(rightWall);\n    var leftWall = new THREE.Mesh(new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({\n      color: 0xC8C8C8,\n      wireframe: false\n    }));\n    leftWall.rotation.x -= Math.PI / 2;\n    leftWall.rotation.y += Math.PI / 2;\n    leftWall.position.set(-7, -2, 0);\n    leftWall.receiveShadow = true;\n    leftWall.castShadow = true;\n    scene.add(leftWall);\n    var ambientLight = new THREE.AmbientLight(0xffffff, 1, 0, 0.1, 0, 1);\n    scene.add(ambientLight);\n    spotLight = new THREE.SpotLight(0xffffff, 50, 0, 0.3, 0, 1);\n    spotLight.position.set(0, 5, 15);\n    spotLight.castShadow = true;\n    spotLight.shadow.mapSize.width = 1024;\n    spotLight.shadow.mapSize.height = 1024;\n    spotLight.shadow.camera.near = 0.0;\n    spotLight.shadow.camera.far = -4000;\n    spotLight.lookAt(new THREE.Vector3(0, 5, 0));\n    scene.add(spotLight);\n    cubeDY = 0;\n    cubeDX = 0;\n    renderer = new THREE.WebGLRenderer();\n    renderer.setSize(1200, 720);\n    renderer.physicallyCorrectLights = true;\n    document.body.appendChild(renderer.domElement);\n    animate();\n  };\n\n  var animate = function animate() {\n    requestAnimationFrame(animate);\n\n    if (cube.position.y < -3) {\n      cube.position.y = -2.3;\n    }\n\n    if (keyboard[37]) {\n      //LEFT\n      if (cube.position.x >= -6) {\n        cubeDX -= 0.025;\n      }\n    }\n\n    if (keyboard[39]) {\n      //RIGHT\n      if (cube.position.x <= 6) {\n        cubeDX += 0.025;\n      }\n    }\n\n    if (keyboard[38]) {\n      //UP\n      if (cube.position.y <= 1) {\n        cube.position.y += 0.3;\n        cubeDY = 0.1;\n      }\n    }\n\n    if (keyboard[40]) {\n      //DOWN\n      if (cube.position.y >= -2.5) {}\n    }\n\n    if (++frame % 10 == 0) {\n      renderNewCube();\n      renderNewCube2();\n      renderBar();\n    }\n\n    cubeDY -= 0.009;\n    cubeDX *= 0.9;\n\n    if (cube.position.y >= -2.5) {\n      cube.position.y += cubeDY;\n    }\n\n    cube.position.x += cubeDX;\n    camera.position.x = cube.position.x * 0.2;\n    camera.position.y = cube.position.y * 0.4;\n    var originPoint = cube.position.clone();\n\n    for (var vertexIndex = 0; vertexIndex < cube.geometry.vertices.length; vertexIndex++) {\n      var localVertex = cube.geometry.vertices[vertexIndex].clone();\n      var globalVertex = localVertex.applyMatrix4(cube.matrix);\n      var directionVector = globalVertex.sub(cube.position);\n      var ray = new THREE.Raycaster(originPoint, directionVector.clone().normalize());\n      var collisionResults = ray.intersectObjects(cubes);\n      if (collisionResults.length > 0 && collisionResults[0].distance < directionVector.length()) console.log(\"hit\");\n    }\n\n    cubes.forEach(function (cube) {\n      if (cube.position.z >= 5) {\n        scene.remove(cube);\n      } else {\n        cube.position.z += 0.5;\n      }\n    });\n    renderer.render(scene, camera);\n  };\n\n  var renderNewCube = function renderNewCube() {\n    var shape = new THREE.BoxGeometry(1, 1, 1);\n    var material = new THREE.MeshStandardMaterial({\n      color: 0xffffff\n    });\n    var box = new THREE.Mesh(shape, material);\n    cubes.push(box);\n    var xCord = Math.random() * 12 - 6;\n    box.position.set(xCord, -2.5, -50);\n    box.castShadow = true;\n    box.receiveShadow = true;\n    scene.add(box);\n  };\n\n  var renderNewCube2 = function renderNewCube2() {\n    var shape = new THREE.BoxGeometry(1, 1, 1);\n    var material = new THREE.MeshStandardMaterial({\n      color: 0xffffff\n    });\n    var box = new THREE.Mesh(shape, material);\n    cubes.push(box);\n    var xCord = Math.random() * 12 - 6;\n    box.position.set(xCord, 0, -50);\n    box.castShadow = true;\n    box.receiveShadow = true;\n    scene.add(box);\n  };\n\n  var renderBar = function renderBar() {\n    if (Math.random() >= 0.93) {\n      var shape = new THREE.BoxGeometry(10, 1, 1);\n      var material = new THREE.MeshStandardMaterial({\n        color: 0xffffff\n      });\n      var box = new THREE.Mesh(shape, material);\n      cubes.push(box);\n      var xCord = Math.random() * 12 - 6;\n      box.position.set(xCord, -1.5, -50);\n      box.castShadow = true;\n      box.receiveShadow = true;\n      scene.add(box);\n    }\n  };\n\n  var keyDown = function keyDown(e) {\n    keyboard[e.keyCode] = true;\n  };\n\n  var keyUp = function keyUp(e) {\n    keyboard[e.keyCode] = false;\n  };\n\n  window.addEventListener('keydown', keyDown);\n  window.addEventListener('keyup', keyUp);\n  init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nYW1lLmpzPzM2NTciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2NlbmUiLCJjYW1lcmEiLCJyZW5kZXJlciIsImN1YmUiLCJmbG9vciIsInNwb3RMaWdodCIsImN1YmVEWSIsImN1YmVEWCIsImZyYW1lIiwia2V5Ym9hcmQiLCJjdWJlcyIsImNvdW50ZXIiLCJpbml0IiwiVEhSRUUiLCJTY2VuZSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJzZXQiLCJzaGFwZSIsIkJveEdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoU3RhbmRhcmRNYXRlcmlhbCIsImNvbG9yIiwiTWVzaCIsImNhc3RTaGFkb3ciLCJyZWNlaXZlU2hhZG93IiwiYWRkIiwiUGxhbmVHZW9tZXRyeSIsInJvdGF0aW9uIiwieCIsIk1hdGgiLCJQSSIsInJpZ2h0V2FsbCIsIndpcmVmcmFtZSIsInkiLCJsZWZ0V2FsbCIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsIlNwb3RMaWdodCIsInNoYWRvdyIsIm1hcFNpemUiLCJ3aWR0aCIsImhlaWdodCIsIm5lYXIiLCJmYXIiLCJsb29rQXQiLCJWZWN0b3IzIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJwaHlzaWNhbGx5Q29ycmVjdExpZ2h0cyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyTmV3Q3ViZSIsInJlbmRlck5ld0N1YmUyIiwicmVuZGVyQmFyIiwib3JpZ2luUG9pbnQiLCJjbG9uZSIsInZlcnRleEluZGV4IiwiZ2VvbWV0cnkiLCJ2ZXJ0aWNlcyIsImxlbmd0aCIsImxvY2FsVmVydGV4IiwiZ2xvYmFsVmVydGV4IiwiYXBwbHlNYXRyaXg0IiwibWF0cml4IiwiZGlyZWN0aW9uVmVjdG9yIiwic3ViIiwicmF5IiwiUmF5Y2FzdGVyIiwibm9ybWFsaXplIiwiY29sbGlzaW9uUmVzdWx0cyIsImludGVyc2VjdE9iamVjdHMiLCJkaXN0YW5jZSIsImNvbnNvbGUiLCJsb2ciLCJmb3JFYWNoIiwieiIsInJlbW92ZSIsInJlbmRlciIsImJveCIsInB1c2giLCJ4Q29yZCIsInJhbmRvbSIsImtleURvd24iLCJlIiwia2V5Q29kZSIsImtleVVwIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0FBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDaEQsTUFBSUMsS0FBSixFQUFXQyxNQUFYLEVBQW1CQyxRQUFuQixFQUE2QkMsSUFBN0IsRUFBbUNDLEtBQW5DLEVBQTBDQyxTQUExQztBQUNBLE1BQUlDLE1BQUosRUFBWUMsTUFBWjtBQUNBLE1BQUlDLEtBQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLE1BQUlDLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLENBQWQ7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLFNBQVBB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QUcsU0FBVkEsT0FBVSxDQUFDQyxDQUFELEVBQU87QUFDbkI5RSxZQUFRLENBQUM4RSxDQUFDLENBQUNDLE9BQUgsQ0FBUixHQUFzQixJQUF0QjtBQUNILEdBRkQ7O0FBR0EsTUFBTUMsS0FBSyxHQUFFLFNBQVBBLEtBQU8sQ0FBQ0YsQ0FBRCxFQUFPO0FBQ2hCOUUsWUFBUSxDQUFDOEUsQ0FBQyxDQUFDQyxPQUFILENBQVIsR0FBc0IsS0FBdEI7QUFDSCxHQUZEOztBQUdBRSxRQUFNLENBQUMzRixnQkFBUCxDQUF3QixTQUF4QixFQUFtQ3VGLE9BQW5DO0FBQ0FJLFFBQU0sQ0FBQzNGLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDMEYsS0FBakM7QUFFQTdFLE1BQUk7QUFDUCxDQWhORCIsImZpbGUiOiIuL2dhbWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGltcG9ydCBTaW1wbGV4Tm9pc2UgZnJvbSAnc2ltcGxleC1ub2lzZSc7XG4vLyBpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBsZXQgc2NlbmU7XG4vLyAgICAgbGV0IGNhbWVyYTtcbi8vICAgICBsZXQgcmVuZGVyZXI7XG4vLyAgICAgbGV0IHNpbXBsZXg7XG4vLyAgICAgbGV0IHBsYW5lO1xuLy8gICAgIGxldCBnZW9tZXRyeTtcbi8vICAgICBsZXQgeFpvb207XG4vLyAgICAgbGV0IHlab29tO1xuLy8gICAgIGxldCBub2lzZVN0cmVuZ3RoO1xuXG4vLyAgICAgZnVuY3Rpb24gc2V0dXAoKSB7XG4vLyAgICAgICAgIHNldHVwTm9pc2UoKTtcbi8vICAgICAgICAgc2V0dXBTY2VuZSgpO1xuLy8gICAgICAgICBzZXR1cENhbWVyYSgpO1xuLy8gICAgICAgICBzZXR1cFJlbmRlcmVyKCk7XG4vLyAgICAgICAgIHNldHVwUGxhbmUoKTtcbi8vICAgICAgICAgc2V0dXBMaWdodHMoKTtcbi8vICAgICAgICAgc2V0dXBFdmVudExpc3RlbmVycygpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHNldHVwTm9pc2UoKSB7XG4vLyAgICAgICAgIC8vIEJ5IHpvb21pbmcgeSBtb3JlIHRoYW4geCwgd2UgZ2V0IHRoZVxuLy8gICAgICAgICAvLyBhcHBlYXJlbmNlIG9mIGZseWluZyBhbG9uZyBhIHZhbGxleVxuLy8gICAgICAgICB4Wm9vbSA9IDY7XG4vLyAgICAgICAgIHlab29tID0gMzU7XG4vLyAgICAgICAgIG5vaXNlU3RyZW5ndGggPSAxLjU7XG4vLyAgICAgICAgIHNpbXBsZXggPSBuZXcgU2ltcGxleE5vaXNlKCk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gc2V0dXBTY2VuZSgpIHtcbi8vICAgICAgICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBzZXR1cENhbWVyYSgpIHtcbi8vICAgICAgICAgbGV0IHJlcyA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuLy8gICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgcmVzLCAwLjEsIDEwMDApO1xuLy8gICAgIGNhbWVyYS5wb3NpdGlvbi54ID0gMDtcbi8vICAgICBjYW1lcmEucG9zaXRpb24ueSA9IC0yMDtcbi8vICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDM7XG5cbi8vICAgICBsZXQgY29udHJvbHMgPSBuZXcgVEhSRUUuT3JiaXRDb250cm9scyhjYW1lcmEpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHNldHVwUmVuZGVyZXIoKSB7XG4vLyAgICAgICAgIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuLy8gICAgICAgICAgICAgYW50aWFsaWFzOiB0cnVlXG4vLyAgICAgICAgIH0pO1xuLy8gICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4vLyAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBzZXR1cFBsYW5lKCkge1xuLy8gICAgICAgICBsZXQgc2lkZSA9IDEyMDtcbi8vICAgICBnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDQwLCA0MCwgc2lkZSwgc2lkZSk7XG4vLyAgICAgbGV0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbi8vICAgICAgICAgcm91Z2huZXNzOiAwLjgsXG4vLyAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcigweDAwYzUwMCksXG4vLyAgICAgfSk7XG4vLyAgICAgcGxhbmUgPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuLy8gICAgIHBsYW5lLmNhc3RTaGFkb3cgPSB0cnVlO1xuLy8gICAgIHBsYW5lLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuXG4vLyAgICAgc2NlbmUuYWRkKHBsYW5lKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBzZXR1cExpZ2h0cygpIHtcbi8vICAgICAgICAgbGV0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHgwYzBjMGMpO1xuLy8gICAgIHNjZW5lLmFkZChhbWJpZW50TGlnaHQpO1xuXG4vLyAgICAgbGV0IHNwb3RMaWdodCA9IG5ldyBUSFJFRS5TcG90TGlnaHQoMHhjY2NjY2MpO1xuLy8gICAgIHNwb3RMaWdodC5wb3NpdGlvbi5zZXQoLTMwLCA2MCwgNjApO1xuLy8gICAgIHNwb3RMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcbi8vICAgICBzY2VuZS5hZGQoc3BvdExpZ2h0KTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBzZXR1cEV2ZW50TGlzdGVuZXJzKCkge1xuLy8gICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4vLyAgICAgICAgIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbi8vICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuLy8gICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gZHJhdygpIHtcbi8vICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xuLy8gICAgIGxldCBvZmZzZXQgPSBEYXRlLm5vdygpICogMC4wMDA0O1xuLy8gICAgIGFkanVzdFZlcnRpY2VzKG9mZnNldCk7XG4vLyAgICAgYWRqdXN0Q2FtZXJhUG9zKG9mZnNldCk7XG4vLyAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIGFkanVzdFZlcnRpY2VzKG9mZnNldCkge1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxhbmUuZ2VvbWV0cnkudmVydGljZXMubGVuZ3RoOyBpKyspIHtsZXQgdmVydGV4PXBsYW5lLmdlb21ldHJ5LnZlcnRpY2VzW2ldOyBsZXQgeD12ZXJ0ZXgueCAvXG4vLyAgICAgICAgIHhab29tOyBsZXQgeT12ZXJ0ZXgueSAvIHlab29tOyBsZXQgbm9pc2U9c2ltcGxleC5ub2lzZTJEKHgsIHkgKyBvZmZzZXQpICogbm9pc2VTdHJlbmd0aDsgdmVydGV4Lno9bm9pc2U7IH1cbi8vICAgICAgICAgZ2VvbWV0cnkudmVydGljZXNOZWVkVXBkYXRlPXRydWU7IGdlb21ldHJ5LmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IH0gZnVuY3Rpb24gYWRqdXN0Q2FtZXJhUG9zKG9mZnNldCkge2xldFxuLy8gICAgICAgICB4PWNhbWVyYS5wb3NpdGlvbi54IC8geFpvb207IGxldCB5PWNhbWVyYS5wb3NpdGlvbi55IC8geVpvb207IGxldCBub2lzZT1zaW1wbGV4Lm5vaXNlMkQoeCwgeSArIG9mZnNldCkgKlxuLy8gICAgIG5vaXNlU3RyZW5ndGggKyAxLjU7IGNhbWVyYS5wb3NpdGlvbi56PW5vaXNlOyB9IHNldHVwKCk7IGRyYXcoKTtcblxuLy8gfSk7XG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIHZhciBzY2VuZSwgY2FtZXJhLCByZW5kZXJlciwgY3ViZSwgZmxvb3IsIHNwb3RMaWdodDtcbiAgICB2YXIgY3ViZURZLCBjdWJlRFg7XG4gICAgdmFyIGZyYW1lO1xuICAgIHZhciBrZXlib2FyZCA9IHt9O1xuICAgIHZhciBjdWJlcyA9IFtdO1xuICAgIHZhciBjb3VudGVyID0gMDtcbiAgICBjb25zdCBpbml0ID0gKCkgPT4ge1xuXG4gICAgICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG4gICAgICAgIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg1MCwgMTIwMC83MjAsIDAuMSwgMTAwMCk7XG4gICAgICAgIGZyYW1lID0gMDtcblxuICAgICAgICBjYW1lcmEucG9zaXRpb24uc2V0KDAsIDUsIDEwKTtcbiAgICAgICAgLy8gY2FtZXJhLmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLC01LCAtNSkpO1xuICAgICAgICAvLyBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIC0yMCwgLTEwMCkpO1xuXG4gICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuNSwgMC41LCAwLjUpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZn0pO1xuICAgICAgICBjdWJlID0gbmV3IFRIUkVFLk1lc2goc2hhcGUsIG1hdGVyaWFsKTtcblxuICAgICAgICBjdWJlLnBvc2l0aW9uLnNldCgwLCAtMS41LCAwKTtcbiAgICAgICAgY3ViZS5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgY3ViZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgXG4gICAgICAgIHNjZW5lLmFkZChjdWJlKTtcblxuICAgICAgIFxuXG4gICAgICAgIGNvbnN0IGZsb29yID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgICAgICBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxNSwgMjUwKSwgbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4QzhDOEM4IH0pXG4gICAgICAgICk7XG4gICAgICAgIGZsb29yLnJvdGF0aW9uLnggLT0gTWF0aC5QSSAvIDI7XG4gICAgICAgIGZsb29yLnBvc2l0aW9uLnNldCgwLCAtMy4xLCAwKTtcbiAgICAgICAgZmxvb3IucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIGZsb29yLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBzY2VuZS5hZGQoZmxvb3IpO1xuXG5cbiAgICAgICAgY29uc3QgcmlnaHRXYWxsID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgICAgICBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgxNSwgMjUwKSwgbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCB3aXJlZnJhbWU6IGZhbHNlfSlcbiAgICAgICAgKTtcbiAgICAgICAgcmlnaHRXYWxsLnJvdGF0aW9uLnggLT0gTWF0aC5QSSAvIDI7XG4gICAgICAgIHJpZ2h0V2FsbC5yb3RhdGlvbi55IC09IE1hdGguUEkgLyAyO1xuICAgICAgICByaWdodFdhbGwucG9zaXRpb24uc2V0KDcsIC0yLCAwKTtcbiAgICAgICAgcmlnaHRXYWxsLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICByaWdodFdhbGwuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZChyaWdodFdhbGwpO1xuXG5cbiAgICAgICAgY29uc3QgbGVmdFdhbGwgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgICAgIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDE1LCAyNTApLCBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhDOEM4QzgsIHdpcmVmcmFtZTogZmFsc2V9KVxuICAgICAgICApO1xuICAgICAgICBsZWZ0V2FsbC5yb3RhdGlvbi54IC09IE1hdGguUEkgLyAyO1xuICAgICAgICBsZWZ0V2FsbC5yb3RhdGlvbi55ICs9IE1hdGguUEkgLyAyO1xuICAgICAgICBsZWZ0V2FsbC5wb3NpdGlvbi5zZXQoLTcsIC0yLCAwKTtcbiAgICAgICAgbGVmdFdhbGwucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIGxlZnRXYWxsLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBzY2VuZS5hZGQobGVmdFdhbGwpO1xuXG5cblxuICAgICAgICBsZXQgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweGZmZmZmZiwgMSwgMCwgMC4xLCAwLCAxKTtcbiAgICAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbiAgICAgICAgc3BvdExpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGZmZmZmZiwgNTAsIDAsIDAuMywgMCwgMSk7XG4gICAgICAgIHNwb3RMaWdodC5wb3NpdGlvbi5zZXQoMCwgNSwgMTUpO1xuICAgICAgICBcbiAgICAgICAgc3BvdExpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBzcG90TGlnaHQuc2hhZG93Lm1hcFNpemUud2lkdGggPSAxMDI0O1xuICAgICAgICBzcG90TGlnaHQuc2hhZG93Lm1hcFNpemUuaGVpZ2h0ID0gMTAyNDtcblxuXG5cbiAgICAgICAgc3BvdExpZ2h0LnNoYWRvdy5jYW1lcmEubmVhciA9IDAuMDtcbiAgICAgICAgc3BvdExpZ2h0LnNoYWRvdy5jYW1lcmEuZmFyID0gLTQwMDA7XG5cbiAgICAgICAgc3BvdExpZ2h0Lmxvb2tBdChuZXcgVEhSRUUuVmVjdG9yMygwLCA1LCAwKSk7XG5cbiAgICAgICAgc2NlbmUuYWRkKHNwb3RMaWdodCk7XG5cbiAgICAgICAgY3ViZURZID0gMDtcbiAgICAgICAgY3ViZURYID0gMDtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKDEyMDAsIDcyMCk7XG4gICAgICAgIHJlbmRlcmVyLnBoeXNpY2FsbHlDb3JyZWN0TGlnaHRzID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgYW5pbWF0ZSgpO1xuXG4gICAgICAgIFxuXG4gICAgfSAgIFxuXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGN1YmUucG9zaXRpb24ueSA8IC0zKSB7XG4gICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnkgPSAtMi4zO1xuICAgICAgICB9XG4gICAgICAgIGlmKGtleWJvYXJkWzM3XSkgeyAvL0xFRlRcbiAgICAgICAgICAgIGlmKGN1YmUucG9zaXRpb24ueCA+PSAtNikge1xuICAgICAgICAgICAgICAgIGN1YmVEWCAtPSAwLjAyNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Ym9hcmRbMzldKSB7IC8vUklHSFRcbiAgICAgICAgICAgIGlmIChjdWJlLnBvc2l0aW9uLnggPD0gNikge1xuICAgICAgICAgICAgICAgIGN1YmVEWCArPSAwLjAyNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Ym9hcmRbMzhdKSB7IC8vVVBcbiAgICAgICAgICAgIGlmIChjdWJlLnBvc2l0aW9uLnkgPD0gMSkge1xuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueSArPSAwLjM7XG4gICAgICAgICAgICAgICAgY3ViZURZID0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlib2FyZFs0MF0pIHsgLy9ET1dOXG4gICAgICAgICAgICBpZiAoY3ViZS5wb3NpdGlvbi55ID49IC0yLjUpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoKytmcmFtZSAlIDEwID09IDApIHtcbiAgICAgICAgICAgIHJlbmRlck5ld0N1YmUoKTtcbiAgICAgICAgICAgIHJlbmRlck5ld0N1YmUyKCk7XG4gICAgICAgICAgICByZW5kZXJCYXIoKTtcbiAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgY3ViZURZIC09IDAuMDA5O1xuICAgICAgICBjdWJlRFggKj0gMC45O1xuICAgICAgICBpZiAoY3ViZS5wb3NpdGlvbi55ID49IC0yLjUpIHtcbiAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueSArPSBjdWJlRFk7XG4gICAgICAgIH1cbiAgICAgICAgY3ViZS5wb3NpdGlvbi54ICs9IGN1YmVEWDtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSBjdWJlLnBvc2l0aW9uLnggKiAwLjI7XG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gY3ViZS5wb3NpdGlvbi55ICogMC40IDtcbiAgICAgICAgdmFyIG9yaWdpblBvaW50ID0gY3ViZS5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBmb3IgKHZhciB2ZXJ0ZXhJbmRleCA9IDA7IHZlcnRleEluZGV4IDwgY3ViZS5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7IHZlcnRleEluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBsb2NhbFZlcnRleCA9IGN1YmUuZ2VvbWV0cnkudmVydGljZXNbdmVydGV4SW5kZXhdLmNsb25lKCk7XG4gICAgICAgICAgICB2YXIgZ2xvYmFsVmVydGV4ID0gbG9jYWxWZXJ0ZXguYXBwbHlNYXRyaXg0KGN1YmUubWF0cml4KTtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb25WZWN0b3IgPSBnbG9iYWxWZXJ0ZXguc3ViKGN1YmUucG9zaXRpb24pO1xuXG4gICAgICAgICAgICB2YXIgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcihvcmlnaW5Qb2ludCwgZGlyZWN0aW9uVmVjdG9yLmNsb25lKCkubm9ybWFsaXplKCkpO1xuICAgICAgICAgICAgdmFyIGNvbGxpc2lvblJlc3VsdHMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhjdWJlcyk7XG4gICAgICAgICAgICBpZiAoY29sbGlzaW9uUmVzdWx0cy5sZW5ndGggPiAwICYmIGNvbGxpc2lvblJlc3VsdHNbMF0uZGlzdGFuY2UgPCBkaXJlY3Rpb25WZWN0b3IubGVuZ3RoKCkpXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaXRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjdWJlcy5mb3JFYWNoKCBjdWJlID0+IHtcbiAgICAgICAgICAgIGlmKGN1YmUucG9zaXRpb24ueiA+PSA1KSB7XG4gICAgICAgICAgICAgICAgc2NlbmUucmVtb3ZlKGN1YmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueiArPSAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck5ld0N1YmUgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgICAgICBjb25zdCBib3ggPSBuZXcgVEhSRUUuTWVzaChzaGFwZSwgbWF0ZXJpYWwpO1xuICAgICAgICBjdWJlcy5wdXNoKGJveCk7XG4gICAgICAgIGNvbnN0IHhDb3JkID0gKE1hdGgucmFuZG9tKCkgKiAxMikgLSA2O1xuICAgICAgICBib3gucG9zaXRpb24uc2V0KHhDb3JkLCAtMi41LCAtNTApO1xuICAgICAgICBib3guY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIGJveC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUuYWRkKGJveCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlck5ld0N1YmUyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgY29uc3QgYm94ID0gbmV3IFRIUkVFLk1lc2goc2hhcGUsIG1hdGVyaWFsKTtcbiAgICAgICAgY3ViZXMucHVzaChib3gpO1xuICAgICAgICBjb25zdCB4Q29yZCA9IChNYXRoLnJhbmRvbSgpICogMTIpIC0gNjtcbiAgICAgICAgYm94LnBvc2l0aW9uLnNldCh4Q29yZCwgMCwgLTUwKTtcbiAgICAgICAgYm94LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBib3gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZChib3gpO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXJCYXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID49IDAuOTMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gbmV3IFRIUkVFLk1lc2goc2hhcGUsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIGN1YmVzLnB1c2goYm94KTtcbiAgICAgICAgICAgIGNvbnN0IHhDb3JkID0gKE1hdGgucmFuZG9tKCkgKiAxMikgLSA2O1xuICAgICAgICAgICAgYm94LnBvc2l0aW9uLnNldCh4Q29yZCwgLTEuNSwgLTUwKTtcbiAgICAgICAgICAgIGJveC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJveC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjZW5lLmFkZChib3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qga2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgIGtleWJvYXJkW2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBrZXlVcD0gKGUpID0+IHtcbiAgICAgICAga2V5Ym9hcmRbZS5rZXlDb2RlXSA9IGZhbHNlO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwKTtcblxuICAgIGluaXQoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./game.js\n");

/***/ })

/******/ });