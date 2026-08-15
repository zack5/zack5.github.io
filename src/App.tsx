import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Fortnite from './components/Fortnite'
// import Gradient from './components/Gradient'
import Layout from './components/Layout'
import Main from './components/Main'
import MTAStationBoardDesign from './components/MTAStationBoardDesign'
import XDefiant from './components/XDefiant'

function App() {

  return (
    <>
      <div className="background">
        {/* <Gradient
          color1="#52106B"
          color2="#801ea7"
          color3="#06133C"
          timeSpeed={0.25}
          colorBalance={0}
          warpStrength={1}
          warpFrequency={5}
          warpSpeed={2}
          warpAmplitude={40}
          blendAngle={0}
          blendSoftness={0.05}
          rotationAmount={500}
          noiseScale={2}
          grainAmount={0}
          grainScale={4}
          grainAnimated={true}
          contrast={1.5}
          gamma={1}
          saturation={1}
          centerX={0}
          centerY={0}
          zoom={1.4}
        /> */}
      </div>

      <HashRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/xdefiant" element={<XDefiant />} />
            <Route path="/fortnite" element={<Fortnite />} />
            <Route path="/mta-station-board-design" element={<MTAStationBoardDesign />} />
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
