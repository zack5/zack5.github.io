import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Fortnite from './components/Fortnite'
import Layout from './components/Layout'
import Main from './components/Main'
import XDefiant from './components/XDefiant'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/xdefiant" element={<XDefiant />} />
          <Route path="/fortnite" element={<Fortnite />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
