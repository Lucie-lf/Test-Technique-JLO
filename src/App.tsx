import { BrowserRouter as Router, Routes, Route, useLocation, Link} from 'react-router-dom'
import {useState} from 'react'
import ToDo from './pages/ToDo.tsx'
import Done from './pages/Done.tsx'
import ParamLogo from './assets/paramLogo.tsx'
import Title1 from './assets/Title1.tsx'
import Title2 from './assets/Title2.tsx'
import getCheckList from './API/getChecklist.tsx'
import ThemeMenu from './components/theme/ThemeMenu.tsx'

function App() {
  const [isDeployed, setIsDeployed] = useState(false)
  const [theme, setTheme] = useState('')
  const location = useLocation()
  const themeOptions = [
    {
      name: 'green',
      colors: ['primary', 'accent'],
    }
    , {
      name: 'pink',
      colors: ['primary', 'accent'],
    }
    , {
      name: 'blue',
      colors: ['primary', 'accent'],
    }
    , {
      name: 'yellow',
      colors: ['primary', 'accent'],
    }
  ]

  const currentlyOnDonePage = location.pathname === '/done'
  const navTarget = currentlyOnDonePage ? '/' : '/done'
  const navText = currentlyOnDonePage ? 'Back to tasks' : 'Finished Tasks'

  return (
      <>
        <div className="header mx-auto justify-between flex flex-row items-center">
        <button 
          onClick={() => setIsDeployed(prev => !prev)}
          className="paraButton">
            <ParamLogo className="fill-text w-10 hover:animate-spin hover:opacity-60"/>
        </button>


          <Title2 className="fill-accent w-100"/>
            <Link to={navTarget} className="text-text border-text border-1 rounded-full px-5 hover:bg-text/20"> 
                {navText}
            </Link>
      </div>

      <div className="body">
          <div className="listsArea">
              <div className="cardList">
              </div>
          </div>
      </div>
        
        <Routes>
          <Route path="/" element={
            <ToDo 
              isDeployed={isDeployed} 
              themeNames={['green', 'pink', 'blue', 'yellow']} 
              setTheme={setTheme}/>
          } />
          <Route path="/done" element={
            <Done 
            isDeployed={isDeployed} 
            themeNames={['green', 'pink', 'blue', 'yellow']} 
            setTheme={setTheme}/>
          } />
        </Routes>
    </>
  )
}


export default App;
