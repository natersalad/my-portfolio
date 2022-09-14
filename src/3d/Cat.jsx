import React, { Suspense, useRef} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import KITTYCAT from "./YOMAMA.gltf"
import {OrbitControls} from "@react-three/drei"

function angleToRadians(angle) {
    return (angle*Math.PI)/180
}

function CatFollow() {

    const orbitControlsRef = useRef(null);
    useFrame(( state ) => {
        if(!!orbitControlsRef.current) {
            const {x, y} = state.mouse;
            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45));
            orbitControlsRef.current.setPolarAngle((y+3) * angleToRadians(30));
            orbitControlsRef.current.enableZoom = false;
            orbitControlsRef.current.update()
        }
    });

    return(
        <OrbitControls ref={orbitControlsRef} />
    )
}

export default function Cat() {
    const glft = useLoader(GLTFLoader, KITTYCAT) 
    return(
        <div style= {{height: "45vh", position: 'relative', top: '-67%'}}>
            <Canvas>
                <Suspense fallback={null}>
                    <primitive object={glft.scene} scale={140.0} position={[0,0,0]}/>
                    <CatFollow/>
                    <ambientLight />
                </Suspense>
            </Canvas>
        </div>
    )
}

