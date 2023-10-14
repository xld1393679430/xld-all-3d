import * as Three from "three";
// 轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// 1，创建场景
const scene = new Three.Scene();

// 2，创建相机
// 参数。 1，角度 75。 2，宽高比。 3，近端。4，远端
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// 相机设置位置
camera.position.set(0, 0, 10);

// 相机添加到场景中
scene.add(camera);

// 添加物体 创建几何体
const cubeGeometry = new Three.BoxGeometry(1, 1, 1);
// 物体材质
const cbueMaterial = new Three.MeshBasicMaterial({ color: 0xffff00 });
// 根据几何体和材质创建物体
const cube = new Three.Mesh(cubeGeometry, cbueMaterial);

// 修改物体位置
// cube.position.x = 3
// cube.position.set(3, 0, 0)

// 修改物体缩放
// cube.scale.set(1, 2, 3)
// cube.scale.x = 5

// 修改物体旋转
// cube.rotation.set(Math.PI / 4, 0, 0)

// 将几何体添加到场景中
scene.add(cube);

console.log(cube);

// 初筛话渲染器
const renderer = new Three.WebGLRenderer();
// 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 创建轨道控制器
const controls = new OrbitControls(camera, renderer.domElement);

// 添加坐标轴辅助器
const axesHelper = new Three.AxesHelper(5)
scene.add(axesHelper)

function render() {
  cube.position.x += 0.01
  if(cube.position.x > 5) {
    cube.position.x = 0
  }

  cube.rotation.x += 0.01

  // 使用渲染器，通过相机将场景渲染出来
  renderer.render(scene, camera);

  requestAnimationFrame(render)
}

render()
