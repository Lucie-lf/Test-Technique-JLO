import { Routes, Route, useLocation, Link} from 'react-router-dom'
import {useState} from 'react'
import ToDo from './pages/ToDo.tsx'
import Done from './pages/Done.tsx'
import ParamLogo from './assets/paramLogo.tsx'
import Title2 from './assets/Title2.tsx'

function App() {
  const [isDeployed, setIsDeployed] = useState(false)
  const location = useLocation()

  const currentlyOnDonePage = location.pathname === '/done'
  const navTarget = currentlyOnDonePage ? '/' : '/done'
  //const navText = currentlyOnDonePage ? 'Back to tasks' : 'Finished Tasks'

  return (
      <>
        <div className="header pt-3 px-5 md:pt-10 md:px-15 lg:pt-10 lg:px-20 mx-auto justify-between flex flex-row items-center">
        <button 
          onClick={() => setIsDeployed(prev => !prev)}
          className="paraButton">
            <ParamLogo className="fill-text lg:w-10 md:w-8 w-7 hover:animate-spin hover:opacity-60"/>
        </button>

          <Title2 className="fill-accent lg:w-100 md:w-75 w-50 -mr-5"/>

            <Link to={navTarget} > 
                <div className="bg-text rounded-full lg:w-10 lg:h-10 md:w-8 md:h-8 h-7 w-7 hover:bg-text/20">
                </div>
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
              />
          } />
          <Route path="/done" element={
            <Done 
            isDeployed={isDeployed} />
          } />
        </Routes>
    </>
  )
}

export default App;
