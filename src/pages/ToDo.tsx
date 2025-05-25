import ThemeMenu from "../components/theme/ThemeMenu"
import { useEffect, useState } from "react";
import getCheckList from "../API/getChecklist";
import createCheckList from "../API/createChecklist";
import deleteCheckList from "../API/deleteChecklist";

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
    const [newTask, setNewTask] = useState("");
    const handleCreateChecklist = async () => {
        if (newTask.trim() === "") {
            return;
        }
        const task: Task = {
            createdAt: new Date().toISOString(),
            description: newTask,
            isComplete: false,
        };
        const createdTask = await createCheckList(task);
        if (createdTask) {
            setTasks([...tasks, createdTask]);
            setNewTask("");
        }
    }

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

    const handleDeleteChecklist = async (id: string) => {
        const success = await deleteCheckList(id);
        if (success) {
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        }
    };

    return (
        <div className="flex flex-row justify-around items-start gap-15">
            <ThemeMenu 
            isDeployed={isDeployed} 
            themeNames={themeNames} 
            onSelect={setTheme}
            />
        <div className="w-full flex flex-col gap-5">

            <div className="w-full flex flex-col p-10 mt-5 rounded-[40px] gap-1 border-accent border-2">
            {tasksUndone.length === 0 && <div className="text-center text-text">nothing yet!!</div>}
            {tasksUndone.map((task) => (
                <div className="group flex flex-row items-center px-10 hover:bg-text/20 hover:text-accent hover:font-bold p-3 rounded-2xl text-text">
            
                        <div 
                        className="mr-10 h-5 w-5 border-1 rounded border-text hover:bg-accent hover:border-accent">
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                            <div key={task.id} className="text-left">
                                {task.description}
                            </div>
                            <div className="text-right" >
                                {task.createdAt ? new Date(task.createdAt).toLocaleDateString() : 'No date'}
                            </div>
                        </div>
                        <button 
                        className="hidden group-hover:flex ml-10 h-5 w-6 justify-center items-center border border-text text-text rounded-full hover:bg-red-700"
                        onClick={() => handleDeleteChecklist(task.id)}>
                            ×
                        </button>
                </div>
            ))}
            </div>

                {/*input*/}
            <div className="flex flex-row gap-5 items-center">
                <input 
                    className="border-2 border-accent  text-text rounded-full flex w-stretch px-5 py-2"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                
                <button 
                onClick={handleCreateChecklist}
                className="cursor-pointer bg-accent text-primary font-extrabold rounded-full w-10 h-10 hover:bg-text/20">
                    +
                </button>

            </div>
        </div>   
            
        </div>
      )
}