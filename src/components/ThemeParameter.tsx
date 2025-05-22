import ParamLogo from '../assets/paramLogo.tsx'
import { useState } from 'react'

const ThemeParameter = () => {
    const [isDeployed, setIsDeployed] = useState(false)

    return (
        <div>
            <button 
                onClick={() => setIsDeployed(true)}
                className="paraButton">

                    <ParamLogo className="fill-[#D9D9D9] w-10 hover:animate-spin hover:opacity-60"/>
            </button>
        </div>
    )

export default ThemeParameter