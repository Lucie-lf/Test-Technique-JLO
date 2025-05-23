type ThemeButtonProps = {
    options: string[][]
}

const ThemeButton = ({ options }: ThemeButtonProps) => {
    return (
        <div className="flex flex-col gap-3 -mt-10">
            {options.map(([mainColor, accentColor], index) => (
                <div 
                key={index}
                className="flex flex-row justify-start gap-3 bg-[#D9D9D9] rounded-[30px] p-3 hover:opacity-80">
                    <div className="w-6 h-6 rounded-[30px] shadow" style={{backgroundColor: mainColor}}>
                    </div>
                    <div className="w-6 h-6 rounded-[30px] shadow"style={{backgroundColor: accentColor}}>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ThemeButton