import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ToDo from './pages/ToDo.tsx'
import Done from './pages/Done.tsx'
import ParamLogo from './assets/paramLogo.tsx'
import Title1 from './assets/Title1.tsx'
import Title2 from './assets/Title2.tsx'
import getCheckList from './API/getChecklists.tsx'
import ThemeParameter from './components/ThemeParameter.tsx'

function App() {

  return (
      <Router>
        
              <div className="header mx-auto justify-between flex flex-row items-center">
                  <ThemeParameter/>
                  <Title2 className="fill-[#A3FE50] w-100"/>
                  <a href="/done" className="text-[#A3FE50] border-[#A3FE50] border-1 rounded-xl px-5 hover:opacity-75"> 
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
          <Route path="/" element={<ToDo />} />
          <Route path="/Done" element={<Done />} />
        </Routes>
      </Router>
  )
}

export default App
