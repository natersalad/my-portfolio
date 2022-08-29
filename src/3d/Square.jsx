
import React, {useEffect} from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Stats from 'three/examples/jsm/libs/stats.module'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import KITTYCAT from "./YOMAMA.gltf"

function Square() {
    useEffect(() => {
        //camera
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.25, 20 );
		camera.position.set( - 1.8, 0.6, 2.7 ); 
        

        //renderer
        const renderer = new THREE.WebGL1Renderer({
            antialias: true,
        });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        renderer.outputEncoding = THREE.sRGBEncoding;

        //container
        const container = document.getElementById("myThreeJsCanvas");
        container.appendChild( renderer.domElement );
        //document.body.appendChild(renderer.domElement);
       

        //scene
        const scene = new THREE.Scene();
        scene.background = new THREE.Color( 0xbfe3dd );
        
        

        // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
        // ambientLight.castShadow = true;
        // //scene.add(ambientLight);
        // const spotLight = new THREE.SpotLight(0xffffff, 1);
        // spotLight.castShadow = true;
        // spotLight.position.set(0,64,32);
        // //scene.add(spotLight);

        // const boxGeomentry = new THREE.BoxGeometry(16, 16, 16);
        // const boxMaterial = new THREE.MeshNormalMaterial();
        // const boxMesh = new THREE.Mesh(boxGeomentry, boxMaterial);

        const loader = new GLTFLoader();
        loader.load(KITTYCAT,
            (gltf) => {   
                const cat = gltf.scene;
                cat.scale.set(2,2,2);
                scene.add(cat);
            },
        );

        const controls = new OrbitControls(camera, renderer.domElement);

        const stats = Stats();
        document.body.appendChild(stats.dom);

        const animate = () => {
            //window.requestAnimationFrame(animate);
            stats.update();
            controls.update()
            renderer.render(scene, camera);
        };
        animate();
        
    }, []);
  
    return(
      <div>
          <canvas id="myThreeJsCanvas"/>
      </div>
    ) 
  
}

export default Square

