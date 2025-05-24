import ThemeMenu from "../components/theme/ThemeMenu.tsx"

type DoneProps = {
  isDeployed: boolean;
  themeNames: string[];
  setTheme: (theme: string) => void;
  };

export default function Done({isDeployed, themeNames, setTheme}: DoneProps) {
    return (
      <div className="flex flex-row justify-around items-start gap-15">
            <ThemeMenu 
            isDeployed={isDeployed} 
            themeNames={themeNames} 
            onSelect={setTheme}/>

            <div className="w-full min-h-72 flex flex-col p-10 gap-5 mt-5 rounded-[40px] bg-secondary border-accent border-x-1 border-t-1 border-b-2">
                <div className="card flex flex-row items-center justify-between line-through">
                  <div className="card h-4 w-4 border-1 rounded text-tertiary border-b-tertiary bg-tertiary hover:bg-transparent">
                  </div>
                  <div className="card text-tertiary">
                    etendre linge
                  </div>
                  <div className="card">
                    Date
                  </div>
                </div>

                <div className="card flex flex-row items-center justify-between line-through">
                  <div className="card h-4 w-4 border-1 rounded text-tertiary border-b-tertiary bg-tertiary hover:bg-transparent">
                  </div>
                  <div className="card text-tertiary">
                    etendre linge
                  </div>
                  <div className="card">
                    Date
                  </div>
                </div>
            </div>
      </div>
    )
  }