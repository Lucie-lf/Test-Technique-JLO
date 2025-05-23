import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {useState} from 'react'
import ToDo from './pages/ToDo.tsx'
import Done from './pages/Done.tsx'
import ParamLogo from './assets/paramLogo.tsx'
import Title1 from './assets/Title1.tsx'
import Title2 from './assets/Title2.tsx'
import getCheckList from './API/getChecklists.tsx'
import ThemeButton from './components/theme/ThemeButton.tsx'

function App() {
  const [isDeployed, setIsDeployed] = useState(false)

  const themeOptions = [
    ['#3138CA', '#00ff2b'],
    ['#36151e', '#FF00CE'],
  ]

  return (
      <Router>
        <div className="header mx-auto justify-between flex flex-row items-center">
        <button 
          onClick={() => setIsDeployed(prev => !prev)}
          className="paraButton">
            <ParamLogo className="fill-[#D9D9D9] w-10 hover:animate-spin hover:opacity-60"/>
        </button>


          <Title2 className="fill-[#00ff2b] w-100"/>
            <a href="/done" className="text-[#00ff2b] border-[#00ff2b] border-1 rounded-xl px-5 hover:bg-[#D9D9D920]"> 
                Finished Tasks
            </a>
      </div>

      <div className="body">
          <div className="listsArea">
              <div className="cardList">
              </div>
          </div>
      </div>
        
        <Routes>
          <Route path="/" element={
            <ToDo isDeployed={isDeployed} options={themeOptions} />
          } />
          <Route path="/Done" element={
            <Done isDeployed={isDeployed} options={themeOptions} />
          } />
        </Routes>
      </Router>
  )
}

export default App
