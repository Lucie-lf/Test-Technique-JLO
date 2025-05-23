type ThemeMenuProps = {
    isDeployed: boolean
    options: string[][]
}

const ThemeMenu = ({ isDeployed, options }: ThemeMenuProps) => {
    if (!isDeployed) return null;

    return (
        <div className="flex flex-col gap-3 -mt-10">
            {options.map(([mainColor, accentColor], index) => (
                <div 
                key={index}
                className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-full  p-3 hover:opacity-80">
                    <div className="w-6 h-6 rounded-full shadow" style={{backgroundColor: mainColor}}>
                    </div>
                    <div className="w-6 h-6 rounded-full shadow"style={{backgroundColor: accentColor}}>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ThemeMenu