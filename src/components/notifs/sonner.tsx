import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

const Toaster = (props: any) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as "green" | "pink" | "blue" | "yellow" | "system"}
      className="toaster group border-accent bg-accent text-text"
      {...props}
    />
  )
}

export { Toaster }