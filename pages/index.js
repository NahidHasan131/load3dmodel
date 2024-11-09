import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Shiba } from '../components/shiba'

const index = () => {
  return (
    <div className='h-[100vh] w-[100vh]'>
      <Canvas>
        <Environment preset='studio'/>
        <OrbitControls/>
        <Shiba/>
      </Canvas>
    </div>
  )
}

export default index