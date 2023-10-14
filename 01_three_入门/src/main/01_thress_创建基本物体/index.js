import * as Three from 'three'


// 1，创建场景
const scene = new Three.Scene()

// 2，创建相机
// 参数。 1，角度 75。 2，宽高比。 3，近端。4，远端
const camera = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000)

// 相机设置位置
camera.position.set(0, 0, 10)

// // 相机添加到场景中
scene.add(camera)

// // 添加物体 创建几何体
const cubeGeometry = new Three.BoxGeometry(1, 1, 1)
// // 物体材质
const cbueMaterial = new Three.MeshBasicMaterial({ color: 0xffff00 });
// // 根据几何体和材质创建物体
const cube = new Three.Mesh(cubeGeometry, cbueMaterial)

// // 将几何体添加到场景中
scene.add(cube)

// // 初筛话渲染器
const renderer = new Three.WebGLRenderer()
// // 设置渲染的尺寸大小
renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

// // 使用渲染器，通过相机将场景渲染出来
renderer.render(scene, camera)