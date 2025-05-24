import {useTheme} from './ThemeProvider.tsx';
import { useEffect, useState } from 'react';

type ThemeMenuProps = {
    isDeployed: boolean
    themeNames: string[]
    onSelect: (theme: string) => void
}

const ThemeMenu = ({ isDeployed, themeNames, onSelect }: ThemeMenuProps) => {
    const {theme, setTheme} = useTheme();
    const [colors, setColors] = useState<Record<string, [string, string]>>({});

    useEffect(() => {
        const getColors = async () => {
            const result: Record<string, [string, string]> = {}
            const root = document.documentElement
            const originalTheme = root.getAttribute('data-theme') || 'green'

            for (const themeName of themeNames) {
                root.setAttribute('data-theme', themeName)
                await new Promise(requestAnimationFrame)

                const style = getComputedStyle(root)
                const primary = style.getPropertyValue('--primary').trim()
                const accent = style.getPropertyValue('--accent').trim()

                result[themeName] = [primary, accent]
            }

            root.setAttribute('data-theme', originalTheme)
            setColors(result)
        }

        getColors()
    }, [themeNames, theme])

    if (!isDeployed) return null;

    return (
        <div className="flex flex-col gap-3 -mt-10">
            {themeNames.map((name, index) => {
                const [primary, accent] = colors[name]  || ['#000', '#fff'];
            
            return (
                <div 
                    key={index}
                    onClick={() => {
                        console.log(`Selected theme: ${name}`);
                        setTheme(name);
                        onSelect(name);
                    }}
                    className="cursor-pointer flex flex-row justify-start gap-3 bg-text rounded-full  p-3 hover:opacity-80"
                >
                    <div className="w-6 h-6 rounded-full shadow" style={{backgroundColor: primary }}>
                    </div>
                    <div className="w-6 h-6 rounded-full shadow"style={{backgroundColor: accent}}>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ThemeMenu