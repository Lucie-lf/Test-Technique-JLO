import ParamLogo from '../assets/paramLogo.tsx'
import { useState } from 'react'

type ThemeParameterProps = {
    options: string[][]
}

const ThemeParameter = ({ options }: ThemeParameterProps) => {
    const [isDeployed, setIsDeployed] = useState(false)

    return (
        <div>
            <button 
                onClick={() => setIsDeployed(true)}
                className="paraButton">
                    <ParamLogo className="fill-[#D9D9D9] w-10 hover:animate-spin hover:opacity-60"/>
            </button>

            {isDeployed && (
            <div className="flex flex-col gap-3 mt-3">
                {options.map(([color1, color2], index) => (
                    <div 
                    key={index}
                    className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-[30px]  p-3 hover:opacity-80">
                        <div className="w-6 h-6 rounded-[30px] shadow" style={{backgroundColor: color1}}>
                        </div>
                        <div className="w-6 h-6 rounded-[30px] shadow"style={{backgroundColor: color2}}>
                        </div>
                    </div>
                ))}
            </div>
        )}
        </div>
    )
}

export default ThemeParameter