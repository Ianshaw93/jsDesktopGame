import './App.css'
import { Canvas } from '@react-three/fiber'
import { Box, KeyboardControls, OrbitControls, Sky } from '@react-three/drei'


function App() {

  return (
    <>
        <KeyboardControls
            map={ [
                { name: 'forward', keys: [ 'ArrowUp', 'KeyW'] },
                { name: 'backward', keys: [ 'ArrowDown', 'KeyS'] },
                { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA'] },
                { name: 'rightward', keys: [ 'ArrowRight', 'KeyD'] },
                { name: 'jump', keys: [ 'Space'] }
            ] }
            >

          <Canvas>
            <Box />
            {/* <AmbientLight /> */}
            <Sky 
                distance={450000}
                sunPosition={[5, 1, 8]}
                inclination={0}
                azimuth={0.25}
                />
            <OrbitControls />
          </Canvas>
        </KeyboardControls>
    </>
  )
}

export default App
