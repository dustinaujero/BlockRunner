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

eval("// import SimplexNoise from 'simplex-noise';\n// import * as THREE from 'three';\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     let scene;\n//     let camera;\n//     let renderer;\n//     let simplex;\n//     let plane;\n//     let geometry;\n//     let xZoom;\n//     let yZoom;\n//     let noiseStrength;\n//     function setup() {\n//         setupNoise();\n//         setupScene();\n//         setupCamera();\n//         setupRenderer();\n//         setupPlane();\n//         setupLights();\n//         setupEventListeners();\n//     }\n//     function setupNoise() {\n//         // By zooming y more than x, we get the\n//         // appearence of flying along a valley\n//         xZoom = 6;\n//         yZoom = 35;\n//         noiseStrength = 1.5;\n//         simplex = new SimplexNoise();\n//     }\n//     function setupScene() {\n//         scene = new THREE.Scene();\n//     }\n//     function setupCamera() {\n//         let res = window.innerWidth / window.innerHeight;\n//     camera = new THREE.PerspectiveCamera(75, res, 0.1, 1000);\n//     camera.position.x = 0;\n//     camera.position.y = -20;\n//     camera.position.z = 3;\n//     let controls = new THREE.OrbitControls(camera);\n//     }\n//     function setupRenderer() {\n//         renderer = new THREE.WebGLRenderer({\n//             antialias: true\n//         });\n//     renderer.setSize(window.innerWidth, window.innerHeight);\n//     document.body.appendChild(renderer.domElement);\n//     }\n//     function setupPlane() {\n//         let side = 120;\n//     geometry = new THREE.PlaneGeometry(40, 40, side, side);\n//     let material = new THREE.MeshStandardMaterial({\n//         roughness: 0.8,\n//     color: new THREE.Color(0x00c500),\n//     });\n//     plane = new THREE.Mesh(geometry, material);\n//     plane.castShadow = true;\n//     plane.receiveShadow = true;\n//     scene.add(plane);\n//     }\n//     function setupLights() {\n//         let ambientLight = new THREE.AmbientLight(0x0c0c0c);\n//     scene.add(ambientLight);\n//     let spotLight = new THREE.SpotLight(0xcccccc);\n//     spotLight.position.set(-30, 60, 60);\n//     spotLight.castShadow = true;\n//     scene.add(spotLight);\n//     }\n//     function setupEventListeners() {\n//         window.addEventListener(\"resize\", onWindowResize);\n//     }\n//     function onWindowResize() {\n//         camera.aspect = window.innerWidth / window.innerHeight;\n//     camera.updateProjectionMatrix();\n//     renderer.setSize(window.innerWidth, window.innerHeight);\n//     }\n//     function draw() {\n//         requestAnimationFrame(draw);\n//     let offset = Date.now() * 0.0004;\n//     adjustVertices(offset);\n//     adjustCameraPos(offset);\n//     renderer.render(scene, camera);\n//     }\n//     function adjustVertices(offset) {\n//     for (let i = 0; i < plane.geometry.vertices.length; i++) {let vertex=plane.geometry.vertices[i]; let x=vertex.x /\n//         xZoom; let y=vertex.y / yZoom; let noise=simplex.noise2D(x, y + offset) * noiseStrength; vertex.z=noise; }\n//         geometry.verticesNeedUpdate=true; geometry.computeVertexNormals(); } function adjustCameraPos(offset) {let\n//         x=camera.position.x / xZoom; let y=camera.position.y / yZoom; let noise=simplex.noise2D(x, y + offset) *\n//     noiseStrength + 1.5; camera.position.z=noise; } setup(); draw();\n// });\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var scene, camera, renderer, cube, floor, spotLight;\n  var cubeDY, cubeDX;\n  var frame;\n  var keyboard = {};\n  var cubes = [];\n  var counter = 0;\n\n  var init = function init() {\n    scene = new THREE.Scene();\n    camera = new THREE.PerspectiveCamera(50, 1200 / 720, 0.1, 1000);\n    frame = 0;\n    camera.position.set(0, 5, 10); // camera.lookAt(new THREE.Vector3(0,-5, -5));\n\n    camera.lookAt(new THREE.Vector3(0, -20, -100));\n    var shape = new THREE.BoxGeometry(0.5, 0.5, 0.5);\n    var material = new THREE.MeshStandardMaterial({\n      color: 0xffffff\n    });\n    cube = new THREE.Mesh(shape, material);\n    cube.position.set(0, -1.5, 0);\n    cube.castShadow = true;\n    cube.receiveShadow = true;\n    scene.add(cube);\n    var floor = new THREE.Mesh(new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({\n      color: 0xC8C8C8\n    }));\n    floor.rotation.x -= Math.PI / 2;\n    floor.position.set(0, -3.1, 0);\n    floor.receiveShadow = true;\n    floor.castShadow = true;\n    scene.add(floor);\n    var rightWall = new THREE.Mesh(new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({\n      color: 0xffffff,\n      wireframe: false\n    }));\n    rightWall.rotation.x -= Math.PI / 2;\n    rightWall.rotation.y -= Math.PI / 2;\n    rightWall.position.set(7, -2, 0);\n    rightWall.receiveShadow = true;\n    rightWall.castShadow = true;\n    scene.add(rightWall);\n    var leftWall = new THREE.Mesh(new THREE.PlaneGeometry(15, 250), new THREE.MeshStandardMaterial({\n      color: 0xC8C8C8,\n      wireframe: false\n    }));\n    leftWall.rotation.x -= Math.PI / 2;\n    leftWall.rotation.y += Math.PI / 2;\n    leftWall.position.set(-7, -2, 0);\n    leftWall.receiveShadow = true;\n    leftWall.castShadow = true;\n    scene.add(leftWall);\n    var ambientLight = new THREE.AmbientLight(0xffffff, 1, 0, 0.1, 0, 1);\n    scene.add(ambientLight);\n    spotLight = new THREE.SpotLight(0xffffff, 50, 0, 0.3, 0, 1);\n    spotLight.position.set(0, 5, 15);\n    spotLight.castShadow = true;\n    spotLight.shadow.mapSize.width = 1024;\n    spotLight.shadow.mapSize.height = 1024;\n    spotLight.shadow.camera.near = 0.0;\n    spotLight.shadow.camera.far = -4000;\n    spotLight.lookAt(new THREE.Vector3(0, 5, 0));\n    scene.add(spotLight);\n    cubeDY = 0;\n    cubeDX = 0;\n    renderer = new THREE.WebGLRenderer();\n    renderer.setSize(1200, 720);\n    renderer.physicallyCorrectLights = true;\n    document.body.appendChild(renderer.domElement);\n    animate();\n  };\n\n  var animate = function animate() {\n    requestAnimationFrame(animate);\n\n    if (cube.position.y < -3) {\n      cube.position.y = -2.3;\n    }\n\n    if (keyboard[37]) {\n      //LEFT\n      if (cube.position.x >= -6) {\n        // cube.position.x -= 0.3;\n        cubeDX -= 0.025;\n      }\n    }\n\n    if (keyboard[39]) {\n      //RIGHT\n      if (cube.position.x <= 6) {\n        // cube.position.x += 0.3;\n        cubeDX += 0.025;\n      }\n    }\n\n    if (keyboard[38]) {\n      //UP\n      if (cube.position.y <= 1) {\n        cube.position.y += 0.3;\n        cubeDY = 0.1;\n      } // cube.position.y +=\n      // keyboard[38] = false;\n\n    }\n\n    if (keyboard[40]) {\n      //DOWN\n      if (cube.position.y >= -2.5) {// cube.position.y -= 0.3;\n        // cubeDY = 1;\n      }\n    } // if (counter % 5 === 0) {\n    //     renderNewCube();\n    // }\n\n\n    if (++frame % 10 == 0) {\n      renderNewCube();\n      renderNewCube2();\n      renderBar();\n    }\n\n    cubeDY -= 0.009;\n    cubeDX *= 0.9;\n\n    if (cube.position.y >= -2.5) {\n      cube.position.y += cubeDY;\n    }\n\n    cube.position.x += cubeDX;\n    camera.position.x = cube.position.x * 0.2;\n    camera.position.y = cube.position.y * 0.4;\n    cubes.forEach(function (cube) {\n      if (cube.position.z >= 5) {\n        scene.remove(cube);\n      } else {\n        cube.position.z += 0.5;\n      }\n    });\n    renderer.render(scene, camera);\n  };\n\n  var renderNewCube = function renderNewCube() {\n    var shape = new THREE.BoxGeometry(1, 1, 1);\n    var material = new THREE.MeshStandardMaterial({\n      color: 0xffffff\n    });\n    var box = new THREE.Mesh(shape, material);\n    cubes.push(box);\n    var xCord = Math.random() * 12 - 6;\n    box.position.set(xCord, -2.5, -50);\n    box.castShadow = true;\n    box.receiveShadow = true;\n    scene.add(box);\n  };\n\n  var renderNewCube2 = function renderNewCube2() {\n    var shape = new THREE.BoxGeometry(1, 1, 1);\n    var material = new THREE.MeshStandardMaterial({\n      color: 0xffffff\n    });\n    var box = new THREE.Mesh(shape, material);\n    cubes.push(box);\n    var xCord = Math.random() * 12 - 6;\n    box.position.set(xCord, 0, -50);\n    box.castShadow = true;\n    box.receiveShadow = true;\n    scene.add(box);\n  };\n\n  var renderBar = function renderBar() {\n    if (Math.random() >= 0.93) {\n      var shape = new THREE.BoxGeometry(10, 1, 1);\n      var material = new THREE.MeshStandardMaterial({\n        color: 0xffffff\n      });\n      var box = new THREE.Mesh(shape, material);\n      cubes.push(box);\n      var xCord = Math.random() * 12 - 6;\n      box.position.set(xCord, -1.5, -50);\n      box.castShadow = true;\n      box.receiveShadow = true;\n      scene.add(box);\n    }\n  };\n\n  var keyDown = function keyDown(e) {\n    keyboard[e.keyCode] = true;\n  };\n\n  var keyUp = function keyUp(e) {\n    keyboard[e.keyCode] = false;\n  };\n\n  window.addEventListener('keydown', keyDown);\n  window.addEventListener('keyup', keyUp);\n  init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9nYW1lLmpzPzM2NTciXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2NlbmUiLCJjYW1lcmEiLCJyZW5kZXJlciIsImN1YmUiLCJmbG9vciIsInNwb3RMaWdodCIsImN1YmVEWSIsImN1YmVEWCIsImZyYW1lIiwia2V5Ym9hcmQiLCJjdWJlcyIsImNvdW50ZXIiLCJpbml0IiwiVEhSRUUiLCJTY2VuZSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwicG9zaXRpb24iLCJzZXQiLCJsb29rQXQiLCJWZWN0b3IzIiwic2hhcGUiLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJjb2xvciIsIk1lc2giLCJjYXN0U2hhZG93IiwicmVjZWl2ZVNoYWRvdyIsImFkZCIsIlBsYW5lR2VvbWV0cnkiLCJyb3RhdGlvbiIsIngiLCJNYXRoIiwiUEkiLCJyaWdodFdhbGwiLCJ3aXJlZnJhbWUiLCJ5IiwibGVmdFdhbGwiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJTcG90TGlnaHQiLCJzaGFkb3ciLCJtYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJuZWFyIiwiZmFyIiwiV2ViR0xSZW5kZXJlciIsInNldFNpemUiLCJwaHlzaWNhbGx5Q29ycmVjdExpZ2h0cyIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJhbmltYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVuZGVyTmV3Q3ViZSIsInJlbmRlck5ld0N1YmUyIiwicmVuZGVyQmFyIiwiZm9yRWFjaCIsInoiLCJyZW1vdmUiLCJyZW5kZXIiLCJib3giLCJwdXNoIiwieENvcmQiLCJyYW5kb20iLCJrZXlEb3duIiwiZSIsImtleUNvZGUiLCJrZXlVcCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQUlDLEtBQUosRUFBV0MsTUFBWCxFQUFtQkMsUUFBbkIsRUFBNkJDLElBQTdCLEVBQW1DQyxLQUFuQyxFQUEwQ0MsU0FBMUM7QUFDQSxNQUFJQyxNQUFKLEVBQVlDLE1BQVo7QUFDQSxNQUFJQyxLQUFKO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUNBLE1BQUlDLE9BQU8sR0FBRyxDQUFkOztBQUNBLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFFZlosU0FBSyxHQUFHLElBQUlhLEtBQUssQ0FBQ0MsS0FBVixFQUFSO0FBQ0FiLFVBQU0sR0FBRyxJQUFJWSxLQUFLLENBQUNFLGlCQUFWLENBQTRCLEVBQTVCLEVBQWdDLE9BQUssR0FBckMsRUFBMEMsR0FBMUMsRUFBK0MsSUFBL0MsQ0FBVDtBQUNBUCxTQUFLLEdBQUcsQ0FBUjtBQUVBUCxVQUFNLENBQUNlLFFBQVAsQ0FBZ0JDLEdBQWhCLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLEVBQTBCLEVBQTFCLEVBTmUsQ0FPZjs7QUFDQWhCLFVBQU0sQ0FBQ2lCLE1BQVAsQ0FBYyxJQUFJTCxLQUFLLENBQUNNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBQyxFQUF0QixFQUEwQixDQUFDLEdBQTNCLENBQWQ7QUFFQSxRQUFNQyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDUSxXQUFWLENBQXNCLEdBQXRCLEVBQTJCLEdBQTNCLEVBQWdDLEdBQWhDLENBQWQ7QUFDQSxRQUFNQyxRQUFRLEdBQUcsSUFBSVQsS0FBSyxDQUFDVSxvQkFBVixDQUErQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUEvQixDQUFqQjtBQUNBckIsUUFBSSxHQUFHLElBQUlVLEtBQUssQ0FBQ1ksSUFBVixDQUFlTCxLQUFmLEVBQXNCRSxRQUF0QixDQUFQO0FBRUFuQixRQUFJLENBQUNhLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQixDQUFsQixFQUFxQixDQUFDLEdBQXRCLEVBQTJCLENBQTNCO0FBQ0FkLFFBQUksQ0FBQ3VCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQXZCLFFBQUksQ0FBQ3dCLGFBQUwsR0FBcUIsSUFBckI7QUFFQTNCLFNBQUssQ0FBQzRCLEdBQU4sQ0FBVXpCLElBQVY7QUFJQSxRQUFNQyxLQUFLLEdBQUcsSUFBSVMsS0FBSyxDQUFDWSxJQUFWLENBQ1YsSUFBSVosS0FBSyxDQUFDZ0IsYUFBVixDQUF3QixFQUF4QixFQUE0QixHQUE1QixDQURVLEVBQ3dCLElBQUloQixLQUFLLENBQUNVLG9CQUFWLENBQStCO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBQS9CLENBRHhCLENBQWQ7QUFHQXBCLFNBQUssQ0FBQzBCLFFBQU4sQ0FBZUMsQ0FBZixJQUFvQkMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBOUI7QUFDQTdCLFNBQUssQ0FBQ1ksUUFBTixDQUFlQyxHQUFmLENBQW1CLENBQW5CLEVBQXNCLENBQUMsR0FBdkIsRUFBNEIsQ0FBNUI7QUFDQWIsU0FBSyxDQUFDdUIsYUFBTixHQUFzQixJQUF0QjtBQUNBdkIsU0FBSyxDQUFDc0IsVUFBTixHQUFtQixJQUFuQjtBQUNBMUIsU0FBSyxDQUFDNEIsR0FBTixDQUFVeEIsS0FBVjtBQUdBLFFBQU04QixTQUFTLEdBQUcsSUFBSXJCLEtBQUssQ0FBQ1ksSUFBVixDQUNkLElBQUlaLEtBQUssQ0FBQ2dCLGFBQVYsQ0FBd0IsRUFBeEIsRUFBNEIsR0FBNUIsQ0FEYyxFQUNvQixJQUFJaEIsS0FBSyxDQUFDVSxvQkFBVixDQUErQjtBQUFFQyxXQUFLLEVBQUUsUUFBVDtBQUFtQlcsZUFBUyxFQUFFO0FBQTlCLEtBQS9CLENBRHBCLENBQWxCO0FBR0FELGFBQVMsQ0FBQ0osUUFBVixDQUFtQkMsQ0FBbkIsSUFBd0JDLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQWxDO0FBQ0FDLGFBQVMsQ0FBQ0osUUFBVixDQUFtQk0sQ0FBbkIsSUFBd0JKLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQWxDO0FBQ0FDLGFBQVMsQ0FBQ2xCLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCLENBQXZCLEVBQTBCLENBQUMsQ0FBM0IsRUFBOEIsQ0FBOUI7QUFDQWlCLGFBQVMsQ0FBQ1AsYUFBVixHQUEwQixJQUExQjtBQUNBTyxhQUFTLENBQUNSLFVBQVYsR0FBdUIsSUFBdkI7QUFDQTFCLFNBQUssQ0FBQzRCLEdBQU4sQ0FBVU0sU0FBVjtBQUdBLFFBQU1HLFFBQVEsR0FBRyxJQUFJeEIsS0FBSyxDQUFDWSxJQUFWLENBQ2IsSUFBSVosS0FBSyxDQUFDZ0IsYUFBVixDQUF3QixFQUF4QixFQUE0QixHQUE1QixDQURhLEVBQ3FCLElBQUloQixLQUFLLENBQUNVLG9CQUFWLENBQStCO0FBQUVDLFdBQUssRUFBRSxRQUFUO0FBQW1CVyxlQUFTLEVBQUU7QUFBOUIsS0FBL0IsQ0FEckIsQ0FBakI7QUFHQUUsWUFBUSxDQUFDUCxRQUFULENBQWtCQyxDQUFsQixJQUF1QkMsSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBakM7QUFDQUksWUFBUSxDQUFDUCxRQUFULENBQWtCTSxDQUFsQixJQUF1QkosSUFBSSxDQUFDQyxFQUFMLEdBQVUsQ0FBakM7QUFDQUksWUFBUSxDQUFDckIsUUFBVCxDQUFrQkMsR0FBbEIsQ0FBc0IsQ0FBQyxDQUF2QixFQUEwQixDQUFDLENBQTNCLEVBQThCLENBQTlCO0FBQ0FvQixZQUFRLENBQUNWLGFBQVQsR0FBeUIsSUFBekI7QUFDQVUsWUFBUSxDQUFDWCxVQUFULEdBQXNCLElBQXRCO0FBQ0ExQixTQUFLLENBQUM0QixHQUFOLENBQVVTLFFBQVY7QUFJQSxRQUFJQyxZQUFZLEdBQUcsSUFBSXpCLEtBQUssQ0FBQzBCLFlBQVYsQ0FBdUIsUUFBdkIsRUFBaUMsQ0FBakMsRUFBb0MsQ0FBcEMsRUFBdUMsR0FBdkMsRUFBNEMsQ0FBNUMsRUFBK0MsQ0FBL0MsQ0FBbkI7QUFDQXZDLFNBQUssQ0FBQzRCLEdBQU4sQ0FBVVUsWUFBVjtBQUVBakMsYUFBUyxHQUFHLElBQUlRLEtBQUssQ0FBQzJCLFNBQVYsQ0FBb0IsUUFBcEIsRUFBOEIsRUFBOUIsRUFBa0MsQ0FBbEMsRUFBcUMsR0FBckMsRUFBMEMsQ0FBMUMsRUFBNkMsQ0FBN0MsQ0FBWjtBQUNBbkMsYUFBUyxDQUFDVyxRQUFWLENBQW1CQyxHQUFuQixDQUF1QixDQUF2QixFQUEwQixDQUExQixFQUE2QixFQUE3QjtBQUVBWixhQUFTLENBQUNxQixVQUFWLEdBQXVCLElBQXZCO0FBQ0FyQixhQUFTLENBQUNvQyxNQUFWLENBQWlCQyxPQUFqQixDQUF5QkMsS0FBekIsR0FBaUMsSUFBakM7QUFDQXRDLGFBQVMsQ0FBQ29DLE1BQVYsQ0FBaUJDLE9BQWpCLENBQXlCRSxNQUF6QixHQUFrQyxJQUFsQztBQUlBdkMsYUFBUyxDQUFDb0MsTUFBVixDQUFpQnhDLE1BQWpCLENBQXdCNEMsSUFBeEIsR0FBK0IsR0FBL0I7QUFDQXhDLGFBQVMsQ0FBQ29DLE1BQVYsQ0FBaUJ4QyxNQUFqQixDQUF3QjZDLEdBQXhCLEdBQThCLENBQUMsSUFBL0I7QUFFQXpDLGFBQVMsQ0FBQ2EsTUFBVixDQUFpQixJQUFJTCxLQUFLLENBQUNNLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsQ0FBakI7QUFFQW5CLFNBQUssQ0FBQzRCLEdBQU4sQ0FBVXZCLFNBQVY7QUFFQUMsVUFBTSxHQUFHLENBQVQ7QUFDQUMsVUFBTSxHQUFHLENBQVQ7QUFDQUwsWUFBUSxHQUFHLElBQUlXLEtBQUssQ0FBQ2tDLGFBQVYsRUFBWDtBQUNBN0MsWUFBUSxDQUFDOEMsT0FBVCxDQUFpQixJQUFqQixFQUF1QixHQUF2QjtBQUNBOUMsWUFBUSxDQUFDK0MsdUJBQVQsR0FBbUMsSUFBbkM7QUFDQW5ELFlBQVEsQ0FBQ29ELElBQVQsQ0FBY0MsV0FBZCxDQUEwQmpELFFBQVEsQ0FBQ2tELFVBQW5DO0FBQ0FDLFdBQU87QUFJVixHQXBGRDs7QUFzRkEsTUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNsQkMseUJBQXFCLENBQUNELE9BQUQsQ0FBckI7O0FBRUEsUUFBSWxELElBQUksQ0FBQ2EsUUFBTCxDQUFjb0IsQ0FBZCxHQUFrQixDQUFDLENBQXZCLEVBQTBCO0FBQ3RCakMsVUFBSSxDQUFDYSxRQUFMLENBQWNvQixDQUFkLEdBQWtCLENBQUMsR0FBbkI7QUFDSDs7QUFDRCxRQUFHM0IsUUFBUSxDQUFDLEVBQUQsQ0FBWCxFQUFpQjtBQUFFO0FBQ2YsVUFBR04sSUFBSSxDQUFDYSxRQUFMLENBQWNlLENBQWQsSUFBbUIsQ0FBQyxDQUF2QixFQUEwQjtBQUN0QjtBQUNBeEIsY0FBTSxJQUFJLEtBQVY7QUFDSDtBQUNKOztBQUNELFFBQUlFLFFBQVEsQ0FBQyxFQUFELENBQVosRUFBa0I7QUFBRTtBQUNoQixVQUFJTixJQUFJLENBQUNhLFFBQUwsQ0FBY2UsQ0FBZCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QjtBQUNBeEIsY0FBTSxJQUFJLEtBQVY7QUFDSDtBQUNKOztBQUNELFFBQUlFLFFBQVEsQ0FBQyxFQUFELENBQVosRUFBa0I7QUFBRTtBQUNoQixVQUFJTixJQUFJLENBQUNhLFFBQUwsQ0FBY29CLENBQWQsSUFBbUIsQ0FBdkIsRUFBMEI7QUFDdEJqQyxZQUFJLENBQUNhLFFBQUwsQ0FBY29CLENBQWQsSUFBbUIsR0FBbkI7QUFDQTlCLGNBQU0sR0FBRyxHQUFUO0FBQ0gsT0FKYSxDQUtkO0FBQ0E7O0FBQ0g7O0FBQ0QsUUFBSUcsUUFBUSxDQUFDLEVBQUQsQ0FBWixFQUFrQjtBQUFFO0FBQ2hCLFVBQUlOLElBQUksQ0FBQ2EsUUFBTCxDQUFjb0IsQ0FBZCxJQUFtQixDQUFDLEdBQXhCLEVBQTZCLENBQ3pCO0FBQ0E7QUFDSDtBQUNKLEtBL0JpQixDQWdDbEI7QUFDQTtBQUNBOzs7QUFDQSxRQUFJLEVBQUU1QixLQUFGLEdBQVUsRUFBVixJQUFnQixDQUFwQixFQUF1QjtBQUNuQitDLG1CQUFhO0FBQ2JDLG9CQUFjO0FBQ2RDLGVBQVM7QUFDWjs7QUFNRG5ELFVBQU0sSUFBSSxLQUFWO0FBQ0FDLFVBQU0sSUFBSSxHQUFWOztBQUNBLFFBQUlKLElBQUksQ0FBQ2EsUUFBTCxDQUFjb0IsQ0FBZCxJQUFtQixDQUFDLEdBQXhCLEVBQTZCO0FBQ3pCakMsVUFBSSxDQUFDYSxRQUFMLENBQWNvQixDQUFkLElBQW1COUIsTUFBbkI7QUFDSDs7QUFDREgsUUFBSSxDQUFDYSxRQUFMLENBQWNlLENBQWQsSUFBbUJ4QixNQUFuQjtBQUNBTixVQUFNLENBQUNlLFFBQVAsQ0FBZ0JlLENBQWhCLEdBQW9CNUIsSUFBSSxDQUFDYSxRQUFMLENBQWNlLENBQWQsR0FBa0IsR0FBdEM7QUFDQTlCLFVBQU0sQ0FBQ2UsUUFBUCxDQUFnQm9CLENBQWhCLEdBQW9CakMsSUFBSSxDQUFDYSxRQUFMLENBQWNvQixDQUFkLEdBQWtCLEdBQXRDO0FBQ0ExQixTQUFLLENBQUNnRCxPQUFOLENBQWUsVUFBQXZELElBQUksRUFBSTtBQUNuQixVQUFHQSxJQUFJLENBQUNhLFFBQUwsQ0FBYzJDLENBQWQsSUFBbUIsQ0FBdEIsRUFBeUI7QUFDckIzRCxhQUFLLENBQUM0RCxNQUFOLENBQWF6RCxJQUFiO0FBQ0gsT0FGRCxNQUVPO0FBQ0hBLFlBQUksQ0FBQ2EsUUFBTCxDQUFjMkMsQ0FBZCxJQUFtQixHQUFuQjtBQUNIO0FBQ0osS0FORDtBQVFBekQsWUFBUSxDQUFDMkQsTUFBVCxDQUFnQjdELEtBQWhCLEVBQXVCQyxNQUF2QjtBQUNILEdBOUREOztBQWdFQSxNQUFNc0QsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBRXhCLFFBQU1uQyxLQUFLLEdBQUcsSUFBSVAsS0FBSyxDQUFDUSxXQUFWLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQWQ7QUFDQSxRQUFNQyxRQUFRLEdBQUcsSUFBSVQsS0FBSyxDQUFDVSxvQkFBVixDQUErQjtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUEvQixDQUFqQjtBQUNBLFFBQU1zQyxHQUFHLEdBQUcsSUFBSWpELEtBQUssQ0FBQ1ksSUFBVixDQUFlTCxLQUFmLEVBQXNCRSxRQUF0QixDQUFaO0FBQ0FaLFNBQUssQ0FBQ3FELElBQU4sQ0FBV0QsR0FBWDtBQUNBLFFBQU1FLEtBQUssR0FBSWhDLElBQUksQ0FBQ2lDLE1BQUwsS0FBZ0IsRUFBakIsR0FBdUIsQ0FBckM7QUFDQUgsT0FBRyxDQUFDOUMsUUFBSixDQUFhQyxHQUFiLENBQWlCK0MsS0FBakIsRUFBd0IsQ0FBQyxHQUF6QixFQUE4QixDQUFDLEVBQS9CO0FBQ0FGLE9BQUcsQ0FBQ3BDLFVBQUosR0FBaUIsSUFBakI7QUFDQW9DLE9BQUcsQ0FBQ25DLGFBQUosR0FBb0IsSUFBcEI7QUFDQTNCLFNBQUssQ0FBQzRCLEdBQU4sQ0FBVWtDLEdBQVY7QUFDSCxHQVhEOztBQVlBLE1BQU1OLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUV6QixRQUFNcEMsS0FBSyxHQUFHLElBQUlQLEtBQUssQ0FBQ1EsV0FBVixDQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixDQUFkO0FBQ0EsUUFBTUMsUUFBUSxHQUFHLElBQUlULEtBQUssQ0FBQ1Usb0JBQVYsQ0FBK0I7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBL0IsQ0FBakI7QUFDQSxRQUFNc0MsR0FBRyxHQUFHLElBQUlqRCxLQUFLLENBQUNZLElBQVYsQ0FBZUwsS0FBZixFQUFzQkUsUUFBdEIsQ0FBWjtBQUNBWixTQUFLLENBQUNxRCxJQUFOLENBQVdELEdBQVg7QUFDQSxRQUFNRSxLQUFLLEdBQUloQyxJQUFJLENBQUNpQyxNQUFMLEtBQWdCLEVBQWpCLEdBQXVCLENBQXJDO0FBQ0FILE9BQUcsQ0FBQzlDLFFBQUosQ0FBYUMsR0FBYixDQUFpQitDLEtBQWpCLEVBQXdCLENBQXhCLEVBQTJCLENBQUMsRUFBNUI7QUFDQUYsT0FBRyxDQUFDcEMsVUFBSixHQUFpQixJQUFqQjtBQUNBb0MsT0FBRyxDQUFDbkMsYUFBSixHQUFvQixJQUFwQjtBQUNBM0IsU0FBSyxDQUFDNEIsR0FBTixDQUFVa0MsR0FBVjtBQUNILEdBWEQ7O0FBWUEsTUFBTUwsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixRQUFJekIsSUFBSSxDQUFDaUMsTUFBTCxNQUFpQixJQUFyQixFQUEyQjtBQUN2QixVQUFNN0MsS0FBSyxHQUFHLElBQUlQLEtBQUssQ0FBQ1EsV0FBVixDQUFzQixFQUF0QixFQUEwQixDQUExQixFQUE2QixDQUE3QixDQUFkO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLElBQUlULEtBQUssQ0FBQ1Usb0JBQVYsQ0FBK0I7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBL0IsQ0FBakI7QUFDQSxVQUFNc0MsR0FBRyxHQUFHLElBQUlqRCxLQUFLLENBQUNZLElBQVYsQ0FBZUwsS0FBZixFQUFzQkUsUUFBdEIsQ0FBWjtBQUNBWixXQUFLLENBQUNxRCxJQUFOLENBQVdELEdBQVg7QUFDQSxVQUFNRSxLQUFLLEdBQUloQyxJQUFJLENBQUNpQyxNQUFMLEtBQWdCLEVBQWpCLEdBQXVCLENBQXJDO0FBQ0FILFNBQUcsQ0FBQzlDLFFBQUosQ0FBYUMsR0FBYixDQUFpQitDLEtBQWpCLEVBQXdCLENBQUMsR0FBekIsRUFBOEIsQ0FBQyxFQUEvQjtBQUNBRixTQUFHLENBQUNwQyxVQUFKLEdBQWlCLElBQWpCO0FBQ0FvQyxTQUFHLENBQUNuQyxhQUFKLEdBQW9CLElBQXBCO0FBQ0EzQixXQUFLLENBQUM0QixHQUFOLENBQVVrQyxHQUFWO0FBQ0g7QUFDSixHQVpEOztBQWNBLE1BQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLENBQUQsRUFBTztBQUNuQjFELFlBQVEsQ0FBQzBELENBQUMsQ0FBQ0MsT0FBSCxDQUFSLEdBQXNCLElBQXRCO0FBQ0gsR0FGRDs7QUFHQSxNQUFNQyxLQUFLLEdBQUUsU0FBUEEsS0FBTyxDQUFDRixDQUFELEVBQU87QUFDaEIxRCxZQUFRLENBQUMwRCxDQUFDLENBQUNDLE9BQUgsQ0FBUixHQUFzQixLQUF0QjtBQUNILEdBRkQ7O0FBR0FFLFFBQU0sQ0FBQ3ZFLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DbUUsT0FBbkM7QUFDQUksUUFBTSxDQUFDdkUsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUNzRSxLQUFqQztBQUVBekQsTUFBSTtBQUNQLENBN01EIiwiZmlsZSI6Ii4vZ2FtZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLy8gaW1wb3J0IFNpbXBsZXhOb2lzZSBmcm9tICdzaW1wbGV4LW5vaXNlJztcbi8vIGltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGxldCBzY2VuZTtcbi8vICAgICBsZXQgY2FtZXJhO1xuLy8gICAgIGxldCByZW5kZXJlcjtcbi8vICAgICBsZXQgc2ltcGxleDtcbi8vICAgICBsZXQgcGxhbmU7XG4vLyAgICAgbGV0IGdlb21ldHJ5O1xuLy8gICAgIGxldCB4Wm9vbTtcbi8vICAgICBsZXQgeVpvb207XG4vLyAgICAgbGV0IG5vaXNlU3RyZW5ndGg7XG5cbi8vICAgICBmdW5jdGlvbiBzZXR1cCgpIHtcbi8vICAgICAgICAgc2V0dXBOb2lzZSgpO1xuLy8gICAgICAgICBzZXR1cFNjZW5lKCk7XG4vLyAgICAgICAgIHNldHVwQ2FtZXJhKCk7XG4vLyAgICAgICAgIHNldHVwUmVuZGVyZXIoKTtcbi8vICAgICAgICAgc2V0dXBQbGFuZSgpO1xuLy8gICAgICAgICBzZXR1cExpZ2h0cygpO1xuLy8gICAgICAgICBzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gc2V0dXBOb2lzZSgpIHtcbi8vICAgICAgICAgLy8gQnkgem9vbWluZyB5IG1vcmUgdGhhbiB4LCB3ZSBnZXQgdGhlXG4vLyAgICAgICAgIC8vIGFwcGVhcmVuY2Ugb2YgZmx5aW5nIGFsb25nIGEgdmFsbGV5XG4vLyAgICAgICAgIHhab29tID0gNjtcbi8vICAgICAgICAgeVpvb20gPSAzNTtcbi8vICAgICAgICAgbm9pc2VTdHJlbmd0aCA9IDEuNTtcbi8vICAgICAgICAgc2ltcGxleCA9IG5ldyBTaW1wbGV4Tm9pc2UoKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBzZXR1cFNjZW5lKCkge1xuLy8gICAgICAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHNldHVwQ2FtZXJhKCkge1xuLy8gICAgICAgICBsZXQgcmVzID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4vLyAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCByZXMsIDAuMSwgMTAwMCk7XG4vLyAgICAgY2FtZXJhLnBvc2l0aW9uLnggPSAwO1xuLy8gICAgIGNhbWVyYS5wb3NpdGlvbi55ID0gLTIwO1xuLy8gICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gMztcblxuLy8gICAgIGxldCBjb250cm9scyA9IG5ldyBUSFJFRS5PcmJpdENvbnRyb2xzKGNhbWVyYSk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gc2V0dXBSZW5kZXJlcigpIHtcbi8vICAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XG4vLyAgICAgICAgICAgICBhbnRpYWxpYXM6IHRydWVcbi8vICAgICAgICAgfSk7XG4vLyAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbi8vICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHNldHVwUGxhbmUoKSB7XG4vLyAgICAgICAgIGxldCBzaWRlID0gMTIwO1xuLy8gICAgIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoNDAsIDQwLCBzaWRlLCBzaWRlKTtcbi8vICAgICBsZXQgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuLy8gICAgICAgICByb3VnaG5lc3M6IDAuOCxcbi8vICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKDB4MDBjNTAwKSxcbi8vICAgICB9KTtcbi8vICAgICBwbGFuZSA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4vLyAgICAgcGxhbmUuY2FzdFNoYWRvdyA9IHRydWU7XG4vLyAgICAgcGxhbmUucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG5cbi8vICAgICBzY2VuZS5hZGQocGxhbmUpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHNldHVwTGlnaHRzKCkge1xuLy8gICAgICAgICBsZXQgYW1iaWVudExpZ2h0ID0gbmV3IFRIUkVFLkFtYmllbnRMaWdodCgweDBjMGMwYyk7XG4vLyAgICAgc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbi8vICAgICBsZXQgc3BvdExpZ2h0ID0gbmV3IFRIUkVFLlNwb3RMaWdodCgweGNjY2NjYyk7XG4vLyAgICAgc3BvdExpZ2h0LnBvc2l0aW9uLnNldCgtMzAsIDYwLCA2MCk7XG4vLyAgICAgc3BvdExpZ2h0LmNhc3RTaGFkb3cgPSB0cnVlO1xuLy8gICAgIHNjZW5lLmFkZChzcG90TGlnaHQpO1xuLy8gICAgIH1cblxuLy8gICAgIGZ1bmN0aW9uIHNldHVwRXZlbnRMaXN0ZW5lcnMoKSB7XG4vLyAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIG9uV2luZG93UmVzaXplKTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBvbldpbmRvd1Jlc2l6ZSgpIHtcbi8vICAgICAgICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuLy8gICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4vLyAgICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbi8vICAgICB9XG5cbi8vICAgICBmdW5jdGlvbiBkcmF3KCkge1xuLy8gICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XG4vLyAgICAgbGV0IG9mZnNldCA9IERhdGUubm93KCkgKiAwLjAwMDQ7XG4vLyAgICAgYWRqdXN0VmVydGljZXMob2Zmc2V0KTtcbi8vICAgICBhZGp1c3RDYW1lcmFQb3Mob2Zmc2V0KTtcbi8vICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4vLyAgICAgfVxuXG4vLyAgICAgZnVuY3Rpb24gYWRqdXN0VmVydGljZXMob2Zmc2V0KSB7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGFuZS5nZW9tZXRyeS52ZXJ0aWNlcy5sZW5ndGg7IGkrKykge2xldCB2ZXJ0ZXg9cGxhbmUuZ2VvbWV0cnkudmVydGljZXNbaV07IGxldCB4PXZlcnRleC54IC9cbi8vICAgICAgICAgeFpvb207IGxldCB5PXZlcnRleC55IC8geVpvb207IGxldCBub2lzZT1zaW1wbGV4Lm5vaXNlMkQoeCwgeSArIG9mZnNldCkgKiBub2lzZVN0cmVuZ3RoOyB2ZXJ0ZXguej1ub2lzZTsgfVxuLy8gICAgICAgICBnZW9tZXRyeS52ZXJ0aWNlc05lZWRVcGRhdGU9dHJ1ZTsgZ2VvbWV0cnkuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgfSBmdW5jdGlvbiBhZGp1c3RDYW1lcmFQb3Mob2Zmc2V0KSB7bGV0XG4vLyAgICAgICAgIHg9Y2FtZXJhLnBvc2l0aW9uLnggLyB4Wm9vbTsgbGV0IHk9Y2FtZXJhLnBvc2l0aW9uLnkgLyB5Wm9vbTsgbGV0IG5vaXNlPXNpbXBsZXgubm9pc2UyRCh4LCB5ICsgb2Zmc2V0KSAqXG4vLyAgICAgbm9pc2VTdHJlbmd0aCArIDEuNTsgY2FtZXJhLnBvc2l0aW9uLno9bm9pc2U7IH0gc2V0dXAoKTsgZHJhdygpO1xuXG4vLyB9KTtcblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgdmFyIHNjZW5lLCBjYW1lcmEsIHJlbmRlcmVyLCBjdWJlLCBmbG9vciwgc3BvdExpZ2h0O1xuICAgIHZhciBjdWJlRFksIGN1YmVEWDtcbiAgICB2YXIgZnJhbWU7XG4gICAgdmFyIGtleWJvYXJkID0ge307XG4gICAgdmFyIGN1YmVzID0gW107XG4gICAgdmFyIGNvdW50ZXIgPSAwO1xuICAgIGNvbnN0IGluaXQgPSAoKSA9PiB7XG5cbiAgICAgICAgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDUwLCAxMjAwLzcyMCwgMC4xLCAxMDAwKTtcbiAgICAgICAgZnJhbWUgPSAwO1xuXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi5zZXQoMCwgNSwgMTApO1xuICAgICAgICAvLyBjYW1lcmEubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsLTUsIC01KSk7XG4gICAgICAgIGNhbWVyYS5sb29rQXQobmV3IFRIUkVFLlZlY3RvcjMoMCwgLTIwLCAtMTAwKSk7XG5cbiAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC41LCAwLjUsIDAuNSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmfSk7XG4gICAgICAgIGN1YmUgPSBuZXcgVEhSRUUuTWVzaChzaGFwZSwgbWF0ZXJpYWwpO1xuXG4gICAgICAgIGN1YmUucG9zaXRpb24uc2V0KDAsIC0xLjUsIDApO1xuICAgICAgICBjdWJlLmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBjdWJlLnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgc2NlbmUuYWRkKGN1YmUpO1xuXG4gICAgICAgXG5cbiAgICAgICAgY29uc3QgZmxvb3IgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgICAgIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDE1LCAyNTApLCBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhDOEM4QzggfSlcbiAgICAgICAgKTtcbiAgICAgICAgZmxvb3Iucm90YXRpb24ueCAtPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgZmxvb3IucG9zaXRpb24uc2V0KDAsIC0zLjEsIDApO1xuICAgICAgICBmbG9vci5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgZmxvb3IuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZChmbG9vcik7XG5cblxuICAgICAgICBjb25zdCByaWdodFdhbGwgPSBuZXcgVEhSRUUuTWVzaChcbiAgICAgICAgICAgIG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDE1LCAyNTApLCBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIHdpcmVmcmFtZTogZmFsc2V9KVxuICAgICAgICApO1xuICAgICAgICByaWdodFdhbGwucm90YXRpb24ueCAtPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgcmlnaHRXYWxsLnJvdGF0aW9uLnkgLT0gTWF0aC5QSSAvIDI7XG4gICAgICAgIHJpZ2h0V2FsbC5wb3NpdGlvbi5zZXQoNywgLTIsIDApO1xuICAgICAgICByaWdodFdhbGwucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIHJpZ2h0V2FsbC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUuYWRkKHJpZ2h0V2FsbCk7XG5cblxuICAgICAgICBjb25zdCBsZWZ0V2FsbCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICAgICAgbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkoMTUsIDI1MCksIG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweEM4QzhDOCwgd2lyZWZyYW1lOiBmYWxzZX0pXG4gICAgICAgICk7XG4gICAgICAgIGxlZnRXYWxsLnJvdGF0aW9uLnggLT0gTWF0aC5QSSAvIDI7XG4gICAgICAgIGxlZnRXYWxsLnJvdGF0aW9uLnkgKz0gTWF0aC5QSSAvIDI7XG4gICAgICAgIGxlZnRXYWxsLnBvc2l0aW9uLnNldCgtNywgLTIsIDApO1xuICAgICAgICBsZWZ0V2FsbC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgbGVmdFdhbGwuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZChsZWZ0V2FsbCk7XG5cblxuXG4gICAgICAgIGxldCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAxLCAwLCAwLjEsIDAsIDEpO1xuICAgICAgICBzY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuICAgICAgICBzcG90TGlnaHQgPSBuZXcgVEhSRUUuU3BvdExpZ2h0KDB4ZmZmZmZmLCA1MCwgMCwgMC4zLCAwLCAxKTtcbiAgICAgICAgc3BvdExpZ2h0LnBvc2l0aW9uLnNldCgwLCA1LCAxNSk7XG4gICAgICAgIFxuICAgICAgICBzcG90TGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNwb3RMaWdodC5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IDEwMjQ7XG4gICAgICAgIHNwb3RMaWdodC5zaGFkb3cubWFwU2l6ZS5oZWlnaHQgPSAxMDI0O1xuXG5cblxuICAgICAgICBzcG90TGlnaHQuc2hhZG93LmNhbWVyYS5uZWFyID0gMC4wO1xuICAgICAgICBzcG90TGlnaHQuc2hhZG93LmNhbWVyYS5mYXIgPSAtNDAwMDtcblxuICAgICAgICBzcG90TGlnaHQubG9va0F0KG5ldyBUSFJFRS5WZWN0b3IzKDAsIDUsIDApKTtcblxuICAgICAgICBzY2VuZS5hZGQoc3BvdExpZ2h0KTtcblxuICAgICAgICBjdWJlRFkgPSAwO1xuICAgICAgICBjdWJlRFggPSAwO1xuICAgICAgICByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCk7XG4gICAgICAgIHJlbmRlcmVyLnNldFNpemUoMTIwMCwgNzIwKTtcbiAgICAgICAgcmVuZGVyZXIucGh5c2ljYWxseUNvcnJlY3RMaWdodHMgPSB0cnVlO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICBhbmltYXRlKCk7XG5cbiAgICAgICAgXG5cbiAgICB9ICAgXG5cbiAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgICAgIFxuICAgICAgICBpZiAoY3ViZS5wb3NpdGlvbi55IDwgLTMpIHtcbiAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueSA9IC0yLjM7XG4gICAgICAgIH1cbiAgICAgICAgaWYoa2V5Ym9hcmRbMzddKSB7IC8vTEVGVFxuICAgICAgICAgICAgaWYoY3ViZS5wb3NpdGlvbi54ID49IC02KSB7XG4gICAgICAgICAgICAgICAgLy8gY3ViZS5wb3NpdGlvbi54IC09IDAuMztcbiAgICAgICAgICAgICAgICBjdWJlRFggLT0gMC4wMjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleWJvYXJkWzM5XSkgeyAvL1JJR0hUXG4gICAgICAgICAgICBpZiAoY3ViZS5wb3NpdGlvbi54IDw9IDYpIHtcbiAgICAgICAgICAgICAgICAvLyBjdWJlLnBvc2l0aW9uLnggKz0gMC4zO1xuICAgICAgICAgICAgICAgIGN1YmVEWCArPSAwLjAyNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Ym9hcmRbMzhdKSB7IC8vVVBcbiAgICAgICAgICAgIGlmIChjdWJlLnBvc2l0aW9uLnkgPD0gMSkge1xuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueSArPSAwLjM7XG4gICAgICAgICAgICAgICAgY3ViZURZID0gMC4xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY3ViZS5wb3NpdGlvbi55ICs9XG4gICAgICAgICAgICAvLyBrZXlib2FyZFszOF0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5Ym9hcmRbNDBdKSB7IC8vRE9XTlxuICAgICAgICAgICAgaWYgKGN1YmUucG9zaXRpb24ueSA+PSAtMi41KSB7XG4gICAgICAgICAgICAgICAgLy8gY3ViZS5wb3NpdGlvbi55IC09IDAuMztcbiAgICAgICAgICAgICAgICAvLyBjdWJlRFkgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChjb3VudGVyICUgNSA9PT0gMCkge1xuICAgICAgICAvLyAgICAgcmVuZGVyTmV3Q3ViZSgpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICgrK2ZyYW1lICUgMTAgPT0gMCkge1xuICAgICAgICAgICAgcmVuZGVyTmV3Q3ViZSgpO1xuICAgICAgICAgICAgcmVuZGVyTmV3Q3ViZTIoKTtcbiAgICAgICAgICAgIHJlbmRlckJhcigpO1xuICAgICAgICB9XG5cblxuXG5cblxuICAgICAgICBjdWJlRFkgLT0gMC4wMDk7XG4gICAgICAgIGN1YmVEWCAqPSAwLjk7XG4gICAgICAgIGlmIChjdWJlLnBvc2l0aW9uLnkgPj0gLTIuNSkge1xuICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi55ICs9IGN1YmVEWTtcbiAgICAgICAgfVxuICAgICAgICBjdWJlLnBvc2l0aW9uLnggKz0gY3ViZURYO1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueCA9IGN1YmUucG9zaXRpb24ueCAqIDAuMjtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgPSBjdWJlLnBvc2l0aW9uLnkgKiAwLjQgO1xuICAgICAgICBjdWJlcy5mb3JFYWNoKCBjdWJlID0+IHtcbiAgICAgICAgICAgIGlmKGN1YmUucG9zaXRpb24ueiA+PSA1KSB7XG4gICAgICAgICAgICAgICAgc2NlbmUucmVtb3ZlKGN1YmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueiArPSAwLjU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlck5ld0N1YmUgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMSwgMSwgMSk7XG4gICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgICAgICBjb25zdCBib3ggPSBuZXcgVEhSRUUuTWVzaChzaGFwZSwgbWF0ZXJpYWwpO1xuICAgICAgICBjdWJlcy5wdXNoKGJveCk7XG4gICAgICAgIGNvbnN0IHhDb3JkID0gKE1hdGgucmFuZG9tKCkgKiAxMikgLSA2O1xuICAgICAgICBib3gucG9zaXRpb24uc2V0KHhDb3JkLCAtMi41LCAtNTApO1xuICAgICAgICBib3guY2FzdFNoYWRvdyA9IHRydWU7XG4gICAgICAgIGJveC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgc2NlbmUuYWRkKGJveCk7XG4gICAgfVxuICAgIGNvbnN0IHJlbmRlck5ld0N1YmUyID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xuICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiB9KTtcbiAgICAgICAgY29uc3QgYm94ID0gbmV3IFRIUkVFLk1lc2goc2hhcGUsIG1hdGVyaWFsKTtcbiAgICAgICAgY3ViZXMucHVzaChib3gpO1xuICAgICAgICBjb25zdCB4Q29yZCA9IChNYXRoLnJhbmRvbSgpICogMTIpIC0gNjtcbiAgICAgICAgYm94LnBvc2l0aW9uLnNldCh4Q29yZCwgMCwgLTUwKTtcbiAgICAgICAgYm94LmNhc3RTaGFkb3cgPSB0cnVlO1xuICAgICAgICBib3gucmVjZWl2ZVNoYWRvdyA9IHRydWU7XG4gICAgICAgIHNjZW5lLmFkZChib3gpO1xuICAgIH1cbiAgICBjb25zdCByZW5kZXJCYXIgPSAoKSA9PiB7XG4gICAgICAgIGlmIChNYXRoLnJhbmRvbSgpID49IDAuOTMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEwLCAxLCAxKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmIH0pO1xuICAgICAgICAgICAgY29uc3QgYm94ID0gbmV3IFRIUkVFLk1lc2goc2hhcGUsIG1hdGVyaWFsKTtcbiAgICAgICAgICAgIGN1YmVzLnB1c2goYm94KTtcbiAgICAgICAgICAgIGNvbnN0IHhDb3JkID0gKE1hdGgucmFuZG9tKCkgKiAxMikgLSA2O1xuICAgICAgICAgICAgYm94LnBvc2l0aW9uLnNldCh4Q29yZCwgLTEuNSwgLTUwKTtcbiAgICAgICAgICAgIGJveC5jYXN0U2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJveC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcbiAgICAgICAgICAgIHNjZW5lLmFkZChib3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qga2V5RG93biA9IChlKSA9PiB7XG4gICAgICAgIGtleWJvYXJkW2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBrZXlVcD0gKGUpID0+IHtcbiAgICAgICAga2V5Ym9hcmRbZS5rZXlDb2RlXSA9IGZhbHNlO1xuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd24pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwKTtcblxuICAgIGluaXQoKTtcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./game.js\n");

/***/ })

/******/ });