//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToDo from './pages/ToDo.tsx'
import Done from './pages/Done.tsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/done" element={<Done />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
