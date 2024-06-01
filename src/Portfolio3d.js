import React, {useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber'

function RotatingBox({ rotationSpeed = 1 })
{
    const meshRef = useRef();

    useFrame((state, delta) => {
        if(meshRef.current) {
            meshRef.current.rotation.x += rotationSpeed * delta;
            meshRef.current.rotation.y += rotationSpeed * delta;
        }
    });
    return(
    <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial />
    </mesh>
    );
}

function Portfolio3D() {

return (
    <div id="canvas-container" 
         style={{ 
            width: "100vw",
            height: "100vh"
         }}>
        <Canvas>
        <RotatingBox rotationSpeed={1}/>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 5]} />
        </Canvas>
    </div>
    )
}

export default Portfolio3D;