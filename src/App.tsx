import { HashRouter, Route, Routes } from 'react-router-dom'

import './App.css'

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
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
