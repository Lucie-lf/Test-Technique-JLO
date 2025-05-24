import ThemeMenu from "../components/theme/ThemeMenu"
import { useEffect, useState } from "react";
import getCheckList from "../API/getChecklists";

type Task = {
    createdAt: string;
    description: string;
    isComplete: boolean;
    id: string;
};

type ToDoProps = {
    isDeployed: boolean;
    themeNames: string[];
    setTheme: (theme: string) => void;
    };

export default function ToDo({isDeployed, themeNames, setTheme}: ToDoProps) {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        async function fetchTasks() {
            const checklists = await getCheckList();
            if (checklists) {
                setTasks(checklists);
            }
        }
        fetchTasks();
    },[]);

    const tasksUndone = tasks.filter(task => !task.isComplete);

    return (
        <div className="flex flex-row justify-around items-start gap-15">
            <ThemeMenu 
            isDeployed={isDeployed} 
            themeNames={themeNames} 
            onSelect={setTheme}/>
        
        <div className="w-full flex flex-col gap-5">

            <div className="w-full flex flex-col p-10 mt-5 rounded-[40px] gap-1 border-accent border-2">
            {tasksUndone.length === 0 && <div className="text-center text-text">nothing yet!!</div>}
            {tasksUndone.map((task) => (
                <div className="card flex flex-row items-center px-10 hover:bg-text/20 hover:text-accent hover:font-bold p-3 rounded-2xl text-text">
            
                        <div 
                        className="mr-10 card h-5 w-5 border-1 rounded border-text hover:bg-accent hover:border-accent">
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div key={task.id} className="text-left">
                                {task.description}
                            </div>
                            <div className="text-right" >
                                {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'No date'}
                            </div>
                        </div>
                </div>
            ))}
            </div>

                {/*input*/}
            <div className="flex flex-row gap-5 items-center">
                <input className="border-2 border-accent  text-text rounded-full flex w-stretch px-5 py-2"></input>
                
                <button 
                className="bg-accent text-tertiary rounded-full w-10 h-10 hover:bg-text/20">
                </button>
            </div>
        </div>   
            
        </div>
      )
}