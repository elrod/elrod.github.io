import React, {useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, PerspectiveCamera } from '@react-three/drei'

const DEGTORAD = Math.PI / 180;

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

function ArcadeCabinet({ url }) {
    const group = useRef();
    const { scene } = useGLTF(url);
  
    return (
      <group ref={group}>
        <primitive object={scene} />
      </group>
    );
  }

function Portfolio3D() {

return (
    <div id="canvas-container" 
         style={{ 
            width: "100vw",
            height: "100vh",
            backgroundColor: "#0D0D0D"
         }}>
        <Canvas>
        {/* <RotatingBox rotationSpeed={1}/> */}
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={5}
          position={[0, 2, 0]}
          angle={90 * DEGTORAD}
          penumbra={.2}
          color="white"
        />
        <PerspectiveCamera
          makeDefault
          position={[0, 1.4 , 2]}
          rotation={[-10 * DEGTORAD,0,0]}
          fov={40}
          near={0.1}
          far={10}
        />
        <ArcadeCabinet url="/models/Arcade.glb" />
        </Canvas>
    </div>
    )
}

export default Portfolio3D;