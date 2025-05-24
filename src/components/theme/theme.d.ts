export type TheseColors = 'green' | 'pink' | 'blue' | 'yellow';

export type ThemeProviderProps = {
    children: React.ReactNode
    defaultTheme?: TheseColors
}

export type ThemeProviderState = {
    theme: TheseColors
    setTheme: (theme: TheseColors) => void
}