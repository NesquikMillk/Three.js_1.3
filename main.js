import * as THREE from 'three'; 
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Создаем сцену, камеру и рендерер
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Добавление OrbitControls для управления камерой
const controls = new OrbitControls(camera, renderer.domElement);

// Настройка загрузчика GLTF
const loader = new GLTFLoader();
loader.load('path/to/your/model.glb', function (gltf) {
  scene.add(gltf.scene);
}, undefined, function (error) {
  console.error(error);
});

// Настройка камеры
camera.position.z = 5;

// Анимация
const animate = function () {
  requestAnimationFrame(animate);
  
  controls.update(); // Обновляем управление камерой

  renderer.render(scene, camera);
};
animate();

// Обработка изменения размера окна
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
