import {createContext, useContext, useState, useEffect, ReactNode, } from 'react';
import type {TheseColors, ThemeProviderProps, ThemeProviderState} from './theme.d';

const initialState: ThemeProviderState = {
    theme: 'green',
    setTheme: () => null,
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({children, defaultTheme = 'green', ...props}: ThemeProviderProps) {
    const [storedTheme, setStoredTheme] = useState<TheseColors>(() => {
        return (localStorage.getItem('theme') as TheseColors) || defaultTheme;
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', storedTheme)
        localStorage.setItem('theme', storedTheme)
    }, [storedTheme]);

    const value = {
        theme: storedTheme,
        setTheme: (theme: TheseColors) => {
            setStoredTheme(theme);
        },
    };

    return (
        <ThemeProviderContext.Provider value={value} {...props}>
            {children}
        </ThemeProviderContext.Provider>
    );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}