import './App.css'

import About from './components/About'
import Projects from './components/Projects'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <main>
      <Sidebar />
      <div className="content">
        <About />
        <Projects />
      </div>
    </main>
  )
}

export default App
