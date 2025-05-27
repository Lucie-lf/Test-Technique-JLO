import { Toaster as Sonner } from "sonner"

const Toaster = (props: any) => {

  return (
    <Sonner
      className="toaster group border-accent bg-accent text-text"
      {...props}
    />
  )
}

export { Toaster }