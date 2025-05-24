import ThemeMenu from "../components/theme/ThemeMenu"

type ToDoProps = {
    isDeployed: boolean;
    themeNames: string[];
    setTheme: (theme: string) => void;
    };

export default function ToDo({isDeployed, themeNames, setTheme}: ToDoProps) {
    return (
        <div className="flex flex-row justify-around items-start gap-15">
            <ThemeMenu 
            isDeployed={isDeployed} 
            themeNames={themeNames} 
            onSelect={setTheme}/>

            <div className="w-full flex flex-col p-10 justify-center  mt-5 rounded-[40px] border-accent border-x-1 border-t-1 border-b-2">
            
                <div className="card flex flex-row items-center justify-between hover:line-through hover:bg-text hover:opacity-20 p-3 rounded-xl text-text">
                    <div className="card h-4 w-4 border-1 rounded  border-b-text hover:bg-text hover:opacity-80">
                    </div>
                    <div className="card">
                        finir vaisselle linge
                    </div>
                    <div className="card">
                        Date
                    </div>
                </div>
                    
            </div>
        </div>
      )
}