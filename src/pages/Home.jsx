import React, { useState , useEffect, useRef } from 'react'
import { Suspense } from 'react'
import { Canvas } from "@react-three/fiber"
import Loader from '../components/Loader'
import Island from '../models/island'
import Bird from '../models/Bird'
import Plane from '../models/Plane'
import HomeInfo from '../components/HomeInfo'

import sakura from '../assets/sakura.mp3'
import theme from '../assets/theme.mp3'
import { soundoff, soundon } from '../assets/icons'
import Sky from '../models/sky.jsx'



const Home = () => {
  const audioRef = useRef(new Audio(theme));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true; 
  const [ isRotating, setIsRotating] = useState(false);
  const [ currentStage, setCurrentStage] = useState(1);
  const [ isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if(isPlayingMusic) {
      audioRef.current.play();
    } 
    return () => {
      audioRef.current.pause();
    }
  }, [isPlayingMusic])
   
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(Window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [ 1, 1, 1]
    }
    
    return [screenPosition, screenScale,rotation];
  }

  const adjustPlaneForScreenSize = () => {
    let screenScale ,screenPosition ;

    if(Window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0,-1.5,0];
    } else {
      screenScale = [ 3, 3, 3];
      screenPosition = [0,-4,-4];
    }
    
    return [screenPosition, screenScale];
  }

  const [islandPosition, islandScale, islandRotation] = adjustIslandForScreenSize();
  const [planePosition, planeScale ] = adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>

      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div> 

      <Canvas 
      className={`w-full h-screen bg-transparent ${ isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
      camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={2}/>
          <ambientLight intensity={0.5}/>
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>

          <Sky 
           isRotating = {isRotating}
          />
          <Bird/>

          <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage = {setCurrentStage}

          />
          <Plane
          isRotating = {isRotating}
          scale = {planeScale}
          position = {planePosition}
          rotation={[0,20,0]}
          />

        </Suspense>


      </Canvas>

    <div className='absolute bottom-2 left-2'>
      <img src={!isPlayingMusic ? soundoff : soundon} alt='sound' className='w-10 h-10 cursor-pointer' onClick={() => setIsPlayingMusic(!isPlayingMusic)}/>
      
    </div>

    </section>
  )
}

export default Home