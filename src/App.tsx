import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 
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
                  <ThemeParameter options={[
                    ['#3138CA', '#00ff2b'],
                    ['#36151e', '#FF00CE'],
                  ]}/>

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
          <Route path="/" element={<ToDo />} />
          <Route path="/Done" element={<Done />} />
        </Routes>
      </Router>
  )
}

export default App
